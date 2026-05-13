package main

import (
	"math"
	"net/http"
	"sort"
	"strings"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

type Structure struct {
	ID          string `json:"id"`
	Name        string `json:"name"`
	Category    string `json:"category"`
	Description string `json:"description"`
	Symbol      string `json:"symbol"`
}

var structures = []Structure{
	{ID: "femur", Name: "Femur", Category: "Bone", Description: "The longest and strongest bone in the human body, located in the thigh.", Symbol: "B"},
	{ID: "tibia", Name: "Tibia", Category: "Bone", Description: "The larger, stronger, and anterior of the two bones in the leg below the knee.", Symbol: "B"},
	{ID: "fibula", Name: "Fibula", Category: "Bone", Description: "The outer and smaller of the two bones between the knee and the ankle.", Symbol: "B"},
	{ID: "radius", Name: "Radius", Category: "Bone", Description: "The lateral bone of the forearm.", Symbol: "B"},
	{ID: "ulna", Name: "Ulna", Category: "Bone", Description: "The medial bone of the forearm, on the side opposite to the thumb.", Symbol: "B"},
	{ID: "biceps-brachii", Name: "Biceps Brachii", Category: "Muscle", Description: "A two-headed muscle that lies on the upper arm between the shoulder and the elbow.", Symbol: "M"},
	{ID: "pectoralis-major", Name: "Pectoralis Major", Category: "Muscle", Description: "A thick, fan-shaped muscle, situated at the chest of the human body.", Symbol: "M"},
	{ID: "latissimus-dorsi", Name: "Latissimus Dorsi", Category: "Muscle", Description: "The largest muscle in the upper body, responsible for extension, adduction, and internal rotation of the shoulder.", Symbol: "M"},
	{ID: "quadriceps-femoris", Name: "Quadriceps Femoris", Category: "Muscle", Description: "A large muscle group that includes the four prevailing muscles on the front of the thigh.", Symbol: "M"},
	{ID: "brachial-artery", Name: "Brachial Artery", Category: "Artery", Description: "The major blood vessel of the (upper) arm.", Symbol: "A"},
	{ID: "cephalic-vein", Name: "Cephalic Vein", Category: "Vein", Description: "A superficial vein in the arm.", Symbol: "V"},
	{ID: "sciatic-nerve", Name: "Sciatic Nerve", Category: "Nerve", Description: "The largest and longest nerve in the human body.", Symbol: "N"},
	{ID: "heart", Name: "Heart", Category: "Organ", Description: "A muscular organ which pumps blood through the blood vessels of the circulatory system.", Symbol: "O"},
	{ID: "liver", Name: "Liver", Category: "Organ", Description: "A large, meaty organ that sits on the right side of the belly.", Symbol: "O"},
}

// Levenshtein calculates the Levenshtein distance between two strings.
func Levenshtein(s1, s2 string) int {
	s1 = strings.ToLower(s1)
	s2 = strings.ToLower(s2)
	r1 := []rune(s1)
	r2 := []rune(s2)
	n, m := len(r1), len(r2)
	if n == 0 {
		return m
	}
	if m == 0 {
		return n
	}

	matrix := make([][]int, n+1)
	for i := range matrix {
		matrix[i] = make([]int, m+1)
	}

	for i := 0; i <= n; i++ {
		matrix[i][0] = i
	}
	for j := 0; j <= m; j++ {
		matrix[0][j] = j
	}

	for i := 1; i <= n; i++ {
		for j := 1; j <= m; j++ {
			cost := 0
			if r1[i-1] != r2[j-1] {
				cost = 1
			}
			matrix[i][j] = int(math.Min(math.Min(float64(matrix[i-1][j]+1), float64(matrix[i][j-1]+1)), float64(matrix[i-1][j-1]+cost)))
		}
	}
	return matrix[n][m]
}

type SearchResult struct {
	Structure
	Distance int `json:"distance"`
}

type ViewConfig struct {
	I string `json:"i"`
	X int    `json:"x"`
	Y int    `json:"y"`
	W int    `json:"w"`
	H int    `json:"h"`
}

type LayoutResponse struct {
	StructureID string       `json:"structureId"`
	Layout      []ViewConfig `json:"layout"`
	Source      string       `json:"source"` // "user-structure", "user-category", or "global-default"
}

// Mock database for configs
var globalDefaultLayout = []ViewConfig{
	{I: "anterior", X: 0, Y: 0, W: 20, H: 16},
	{I: "lateral", X: 20, Y: 0, W: 12, H: 8},
	{I: "detail", X: 20, Y: 8, W: 12, H: 8},
}

var userCategoryConfigs = map[string][]ViewConfig{
	"Bone": {
		{I: "anterior", X: 0, Y: 0, W: 16, H: 16},
		{I: "lateral", X: 16, Y: 0, W: 16, H: 8},
		{I: "detail", X: 16, Y: 8, W: 16, H: 8},
	},
}

var userStructureConfigs = map[string][]ViewConfig{
	"femur": {
		{I: "anterior", X: 0, Y: 0, W: 32, H: 12},
		{I: "lateral", X: 0, Y: 12, W: 16, H: 4},
		{I: "detail", X: 16, Y: 12, W: 16, H: 4},
	},
}

func main() {
	e := echo.New()
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())
	e.Use(middleware.CORS())

	e.GET("/api/search", func(c echo.Context) error {
		query := c.QueryParam("q")
		if query == "" {
			return c.JSON(http.StatusOK, structures)
		}

		results := []SearchResult{}
		for _, s := range structures {
			dist := Levenshtein(query, s.Name)
			if dist <= 3 || strings.Contains(strings.ToLower(s.Name), strings.ToLower(query)) {
				results = append(results, SearchResult{Structure: s, Distance: dist})
			}
		}

		sort.Slice(results, func(i, j int) bool {
			return results[i].Distance < results[j].Distance
		})

		return c.JSON(http.StatusOK, results)
	})

	e.GET("/api/layout/:id", func(c echo.Context) error {
		id := c.Param("id")
		
		// 1. Resolve structure
		var targetStructure *Structure
		for _, s := range structures {
			if s.ID == id {
				targetStructure = &s
				break
			}
		}

		if targetStructure == nil {
			return c.JSON(http.StatusNotFound, map[string]string{"error": "Structure not found"})
		}

		// 2. Resolve hierarchy
		// Priority 1: User-specific structure config
		if layout, ok := userStructureConfigs[id]; ok {
			return c.JSON(http.StatusOK, LayoutResponse{
				StructureID: id,
				Layout:      layout,
				Source:      "user-structure",
			})
		}

		// Priority 2: User-specific category config
		if layout, ok := userCategoryConfigs[targetStructure.Category]; ok {
			return c.JSON(http.StatusOK, LayoutResponse{
				StructureID: id,
				Layout:      layout,
				Source:      "user-category",
			})
		}

		// Priority 3: Global System Default
		return c.JSON(http.StatusOK, LayoutResponse{
			StructureID: id,
			Layout:      globalDefaultLayout,
			Source:      "global-default",
		})
	})

	e.Logger.Fatal(e.Start(":1323"))
}
