import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { anatomicalStructures, StructureCategory } from "@/lib/anatomy-data"
import { cn } from "@/lib/utils"
import { getHistory } from "@/lib/history"

const categoryStyles: Record<StructureCategory, { bg: string; iconBg: string }> = {
  Bone: { bg: "bg-stone-50/50", iconBg: "bg-white" },
  Muscle: { bg: "bg-rose-50/50", iconBg: "bg-rose-100" },
  Artery: { bg: "bg-red-50/50", iconBg: "bg-red-100" },
  Vein: { bg: "bg-blue-50/50", iconBg: "bg-blue-100" },
  Nerve: { bg: "bg-amber-50/50", iconBg: "bg-amber-100" },
  Organ: { bg: "bg-emerald-50/50", iconBg: "bg-emerald-100" },
}

export default function RecentSearches() {
  const navigate = useNavigate()
  const [recentItems, setRecentItems] = useState<typeof anatomicalStructures>([])

  const updateHistory = () => {
    const historyIds = getHistory()
    if (historyIds.length > 0) {
      const items = historyIds
        .map(id => anatomicalStructures.find(s => s.id === id))
        .filter((s): s is typeof anatomicalStructures[0] => !!s)
      setRecentItems(items)
    } else {
      // Fallback to defaults if no history
      setRecentItems(anatomicalStructures.slice(0, 3))
    }
  }

  useEffect(() => {
    updateHistory()
    window.addEventListener('history-updated', updateHistory)
    return () => window.removeEventListener('history-updated', updateHistory)
  }, [])

  return (
    <div className="flex flex-col gap-4 w-full max-w-4xl">
      <h2 className="font-patrick text-2xl font-semibold text-muted-foreground px-2">
        {getHistory().length > 0 ? "Recent Searches" : "Suggested for You"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recentItems.map((item) => {
          const style = categoryStyles[item.category]
          return (
            <Item key={item.id} className={style.bg}>
              <ItemMedia>
                <div className={cn(
                  "size-10 rounded-xl border border-foreground flex items-center justify-center font-patrick font-bold shadow-[2px_2px_0px_0px_var(--color-foreground)]",
                  style.iconBg
                )}>
                  {item.symbol}
                </div>
              </ItemMedia>
              <ItemContent>
                <ItemTitle>{item.name}</ItemTitle>
                <ItemDescription>{item.category} • {item.description.split('.')[0]}.</ItemDescription>
              </ItemContent>
              <ItemActions>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="font-patrick border-foreground shadow-[2px_2px_0px_0px_var(--color-foreground)] hover:shadow-none transition-all bg-white"
                  onClick={() => navigate(`/structure/${item.id}`)}
                >
                  View
                </Button>
              </ItemActions>
            </Item>
          )
        })}
      </div>
    </div>
  )
}
