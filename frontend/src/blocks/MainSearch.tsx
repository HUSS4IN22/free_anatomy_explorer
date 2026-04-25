import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group"
// import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import { HugeiconsIcon } from "@hugeicons/react"
import { SearchCircleIcon, ArrowMoveDownRightIcon } from "@hugeicons/core-free-icons"

export default function MainSearch() {
  return (
    <div className="flex flex-col min-h-[80vh] items-center justify-center gap-16 px-6 py-12">
      <div className="font-patrick text-center flex flex-col gap-4">
        <h1 className="text-6xl font-bold">What are we studying today?</h1>
        <p className="text-2xl text-muted-foreground">Look up a bone, muscle, or structure you want to explore</p>
      </div>
      <div className="w-full max-w-4xl">
        <InputGroup size="lg" className="border-dashed border-2 bg-input/50">
          <InputGroupAddon align="inline-start" className="pl-4">
            <HugeiconsIcon icon={SearchCircleIcon} size={28} className="text-muted-foreground" />
          </InputGroupAddon>
          <InputGroupInput
            placeholder="Search a body structure..."
            className="text-2xl md:text-2xl font-patrick"
          />
          <InputGroupAddon align="inline-end">
            <InputGroupButton size="lg" variant="ghost" className="mr-1 rounded-3xl px-1.5 py-0.5 font-medium text-muted-foreground select-none hover:cursor-pointer hover:bg-transparent hover:text-foreground">
              <span>ENTER</span>
              <HugeiconsIcon icon={ArrowMoveDownRightIcon} size={10} />
              <Spinner className="size-6 hidden" />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  )
}

