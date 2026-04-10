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
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText, InputGroupTextarea } from "@/components/ui/input-group"

export default function Navbar() {
  return <nav>
    <NavigationMenu>
      <div className="logo">
        <Link to="/">
          <HugeiconsIcon icon={Bone01Icon} />
        </Link>
      </div>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Search</NavigationMenuTrigger>
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
