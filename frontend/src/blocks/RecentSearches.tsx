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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Bone - White/Stone */}
        <Item className="bg-stone-50/50">
          <ItemMedia>
            <div className="size-10 bg-white rounded-xl border border-foreground flex items-center justify-center font-patrick font-bold shadow-[2px_2px_0px_0px_var(--color-foreground)]">B</div>
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Femur</ItemTitle>
            <ItemDescription>Bone • The strongest bone in the body.</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant="outline" size="sm" className="font-patrick border-foreground shadow-[2px_2px_0px_0px_var(--color-foreground)] hover:shadow-none transition-all bg-white">View</Button>
          </ItemActions>
        </Item>

        {/* Muscle - Pinkish */}
        <Item className="bg-rose-50/50">
          <ItemMedia>
            <div className="size-10 bg-rose-100 rounded-xl border border-foreground flex items-center justify-center font-patrick font-bold shadow-[2px_2px_0px_0px_var(--color-foreground)]">M</div>
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Biceps Brachii</ItemTitle>
            <ItemDescription>Muscle • Facilitates elbow flexion.</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant="outline" size="sm" className="font-patrick border-foreground shadow-[2px_2px_0px_0px_var(--color-foreground)] hover:shadow-none transition-all bg-white">View</Button>
          </ItemActions>
        </Item>

        {/* Artery - Reddish */}
        <Item className="bg-red-50/50">
          <ItemMedia>
            <div className="size-10 bg-red-100 rounded-xl border border-foreground flex items-center justify-center font-patrick font-bold shadow-[2px_2px_0px_0px_var(--color-foreground)]">A</div>
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Brachial Artery</ItemTitle>
            <ItemDescription>Artery • Major blood vessel of the arm.</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant="outline" size="sm" className="font-patrick border-foreground shadow-[2px_2px_0px_0px_var(--color-foreground)] hover:shadow-none transition-all bg-white">View</Button>
          </ItemActions>
        </Item>

        {/* Vein - Bluish */}
        <Item className="bg-blue-50/50">
          <ItemMedia>
            <div className="size-10 bg-blue-100 rounded-xl border border-foreground flex items-center justify-center font-patrick font-bold shadow-[2px_2px_0px_0px_var(--color-foreground)]">V</div>
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Cephalic Vein</ItemTitle>
            <ItemDescription>Vein • Superficial vein of the upper limb.</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant="outline" size="sm" className="font-patrick border-foreground shadow-[2px_2px_0px_0px_var(--color-foreground)] hover:shadow-none transition-all bg-white">View</Button>
          </ItemActions>
        </Item>

        {/* Nerve - Yellowish */}
        <Item className="bg-amber-50/50">
          <ItemMedia>
            <div className="size-10 bg-amber-100 rounded-xl border border-foreground flex items-center justify-center font-patrick font-bold shadow-[2px_2px_0px_0px_var(--color-foreground)]">N</div>
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Sciatic Nerve</ItemTitle>
            <ItemDescription>Nerve • Largest nerve in the human body.</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant="outline" size="sm" className="font-patrick border-foreground shadow-[2px_2px_0px_0px_var(--color-foreground)] hover:shadow-none transition-all bg-white">View</Button>
          </ItemActions>
        </Item>
      </div>
    </div>
  )
}
