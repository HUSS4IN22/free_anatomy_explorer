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
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="fixed top-4 z-50 left-1/2 -translate-x-1/2 w-full max-w-[95%]">
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

        <div className="hidden flex-2 max-w-xl md:flex justify-center">
          <InputGroup className="w-full">
            <InputGroupAddon align="inline-start">
              <InputGroupButton variant="ghost" className="size-8 p-0 hover:bg-transparent">
                <HugeiconsIcon icon={SearchCircleIcon} size={18} className="text-muted-foreground" />
              </InputGroupButton>
            </InputGroupAddon>
            <InputGroupInput
              placeholder="Search a body structure..."
              className="text-sm font-patrick"
            />
            <InputGroupAddon align="inline-end">
              <Button variant="ghost" className="flex items-center gap-1 rounded-md bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground select-none hover:cursor-pointer hover:bg-transparent hover:text-foreground">
                <span>ENTER</span>
                <HugeiconsIcon icon={ArrowMoveDownRightIcon} size={10} />
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </div>

        <div className="flex flex-1 items-center justify-end gap-2">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent font-patrick">Explore</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-1 p-2 font-patrick">
                    <li>
                      <NavigationMenuLink render={<Link to="/" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" />}>
                        <div className="text-sm font-medium leading-none">Home</div>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent font-patrick"> <HugeiconsIcon icon={GitCompareIcon} size={20} />Compare</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="font-patrick grid gap-1 p-2">
                    <li>
                      <NavigationMenuLink render={<Link to="/" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" />}>
                        <div className="text-sm font-medium leading-none">Structures</div>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink render={<Link to="/" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" />}>
                        <div className="text-sm font-medium leading-none">Names</div>
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

