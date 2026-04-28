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
    <div>
      <Item>
        <ItemMedia>
          Something
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Title</ItemTitle>
          <ItemDescription>Description</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button>Press</Button>
        </ItemActions>
      </Item>
    </div>
  )
}
