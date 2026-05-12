package main

import (
	"net/http"

	"github.com/labstack/echo/v5"
	"github.com/labstack/echo/v5/middleware"
)

func main() {
	e := echo.New()
	e.Use(middleware.RequestLogger())

	e.GET("/", func(c *echo.Context) error {
		return c.String(http.StatusOK, "Hello, World!")
	})

	e.GET("/greet", func(c *echo.Context) error {
		return c.String(http.StatusOK, "I'm Saying Hi")
	})

	e.POST("/list", func(c *echo.Context) error {
		return c.String(http.StatusOK, "1. hi 2. hello 3. yes")
	})
	if err := e.Start(":1323"); err != nil {
		e.Logger.Error("failed to start server", "error", err)
	}
}
