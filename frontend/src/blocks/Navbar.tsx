//restart Nav
import { HugeiconsIcon } from "@hugeicons/react"
import { Bone01Icon, SearchCircleIcon, ArrowMoveDownRightIcon, GitCompareIcon } from "@hugeicons/core-free-icons";
import { Link } from "react-router";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group"

export default function Navbar() {
  return (
    <header className="sticky top-4 z-50 mx-auto max-w-[95%] rounded-2xl border border-border/40 bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between gap-4 px-6">
        <div className="flex flex-1 items-center justify-start">
          <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <HugeiconsIcon icon={Bone01Icon} size={20} strokeWidth={2} />
            </div>
            <span className="hidden font-patrick text-xl font-bold tracking-tight sm:inline-block">
              AnatomyExplorer
            </span>
          </Link>
        </div>

        <div className="hidden flex-[2] max-w-lg md:flex justify-center">
          <InputGroup className="w-full">
            <InputGroupAddon align="inline-start">
              <InputGroupButton variant="ghost" className="size-8 p-0 hover:bg-transparent">
                <HugeiconsIcon icon={SearchCircleIcon} size={18} className="text-muted-foreground" />
              </InputGroupButton>
            </InputGroupAddon>
            <InputGroupInput
              placeholder="Search a body structure..."
              className="text-sm"
            />
            <InputGroupAddon align="inline-end">
              <div className="flex items-center gap-1 rounded-md bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground select-none">
                <HugeiconsIcon icon={ArrowMoveDownRightIcon} size={10} />
                <span>ENTER</span>
              </div>
            </InputGroupAddon>
          </InputGroup>
        </div>

        <div className="flex flex-1 items-center justify-end gap-2">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">Explore</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-1 p-2">
                    <li>
                      <NavigationMenuLink render={<Link to="/" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" />}>
                        <div className="text-sm font-medium leading-none">Home</div>
                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                          Go back to the dashboard.
                        </p>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent"> <HugeiconsIcon icon={GitCompareIcon} size={20} />Compare</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-1 p-2">
                    <li>
                      <NavigationMenuLink render={<Link to="/" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" />}>
                        <div className="text-sm font-medium leading-none">Structures</div>
                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                          Compare two anatomical structures.
                        </p>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink render={<Link to="/" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" />}>
                        <div className="text-sm font-medium leading-none">Names</div>
                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                          Compare nomenclature systems.
                        </p>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  )
}

