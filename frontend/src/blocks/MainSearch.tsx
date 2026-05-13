import { HugeiconsIcon } from "@hugeicons/react"
import { SearchCircleIcon, ArrowMoveDownRightIcon } from "@hugeicons/core-free-icons"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { InputGroupAddon, InputGroupButton } from "@/components/ui/input-group"

import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { searchStructures } from "@/lib/api"
import { useNavigate } from "react-router"
import { anatomicalStructures, StructureCategory } from "@/lib/anatomy-data"

import { saveToHistory } from "@/lib/history"

export default function MainSearch() {
  const navigate = useNavigate()
  const [query, setQuery] = useState("")
  const categories: StructureCategory[] = ["Bone", "Muscle", "Artery", "Vein", "Nerve", "Organ"];

  const { data: searchResults = [] } = useQuery({
    queryKey: ["search", query],
    queryFn: () => searchStructures(query),
    enabled: query.length > 0,
  });

  const displayStructures = query.length > 0 ? searchResults : anatomicalStructures;

  return (
    <div className="flex flex-col items-center justify-center gap-12 w-full max-w-4xl">
      <div className="font-patrick text-center flex flex-col gap-2">
        <h1 className="text-6xl font-bold">What are we studying today?</h1>
        <p className="text-2xl text-muted-foreground">Look up a bone, muscle, or structure you want to explore</p>
      </div>
      <div className="w-full">
        <Command className="overflow-visible bg-transparent p-0" shouldFilter={query.length === 0}>
          <CommandInput
            size="lg"
            placeholder="Search a body structure..."
            className="text-2xl md:text-2xl font-patrick"
            value={query}
            onValueChange={setQuery}
            startAddon={
              <InputGroupAddon align="inline-start" className="pl-4">
                <HugeiconsIcon icon={SearchCircleIcon} size={28} className="text-muted-foreground" />
              </InputGroupAddon>
            }
            endAddon={
              <InputGroupAddon align="inline-end">
                <InputGroupButton size="lg" variant="ghost" className="mr-1 rounded-3xl px-1.5 py-0.5 font-medium text-muted-foreground select-none hover:cursor-pointer hover:bg-transparent hover:text-foreground">
                  <span>ENTER</span>
                  <HugeiconsIcon icon={ArrowMoveDownRightIcon} size={14} />
                </InputGroupButton>
              </InputGroupAddon>
            }
          />
          <CommandList className="mt-4 shadow-2xl border-2">
            <CommandEmpty>No results found.</CommandEmpty>
            {categories.map((category) => {
              const structures = displayStructures.filter(s => s.category === category);
              if (structures.length === 0) return null;
              return (
                <React.Fragment key={category}>
                  <CommandGroup heading={category + "s"}>
                    {structures.map((structure) => (
                      <CommandItem 
                        key={structure.id}
                        onSelect={() => {
                          saveToHistory(structure.id);
                          navigate(`/structure/${structure.id}`);
                        }}
                      >
                        {structure.name}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                  <CommandSeparator />
                </React.Fragment>
              );
            })}
          </CommandList>
        </Command>
      </div>
    </div>
  )
}

