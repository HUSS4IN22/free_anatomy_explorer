import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

export default function RecentSearches() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-4xl">
      <h2 className="font-patrick text-2xl font-semibold text-muted-foreground px-2">Recent Searches</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Item>
          <ItemMedia>
            <div className="size-10 bg-blue-100 rounded-xl border border-foreground flex items-center justify-center font-patrick font-bold">F</div>
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Femur</ItemTitle>
            <ItemDescription>The longest and strongest bone in the human body.</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant="outline" size="sm" className="font-patrick border-foreground shadow-[2px_2px_0px_0px_var(--color-foreground)] hover:shadow-none transition-all">View</Button>
          </ItemActions>
        </Item>
        <Item>
          <ItemMedia>
            <div className="size-10 bg-red-100 rounded-xl border border-foreground flex items-center justify-center font-patrick font-bold">B</div>
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Biceps Brachii</ItemTitle>
            <ItemDescription>A large muscle that lies on the front of the upper arm.</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant="outline" size="sm" className="font-patrick border-foreground shadow-[2px_2px_0px_0px_var(--color-foreground)] hover:shadow-none transition-all">View</Button>
          </ItemActions>
        </Item>
      </div>
    </div>
  )
}
