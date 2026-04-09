//restart Nav
import { HugeiconsIcon } from "@hugeicons/react"
import { Bone01Icon } from "@hugeicons/core-free-icons";
import { Link } from "react-router";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export default function Navbar() {
  return <nav>
    <NavigationMenu>
      <div>
        <HugeiconsIcon icon={Bone01Icon} />
      </div>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger></NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>
              <Link to="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Compare</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>
              <Link to="/">Structures</Link>
            </NavigationMenuLink>
            <NavigationMenuLink>
              <Link to="/">Names</Link>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </nav>
}
