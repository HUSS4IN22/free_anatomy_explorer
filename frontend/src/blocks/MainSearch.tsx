import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group"

export default function MainSearch() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center gap-4 px-6 py-12">
      <div className="my-auto mx-auto">
        <h1>What are we studying today?</h1>
        <p>Look up a bone, muscle, or structure you want to explore</p>
        <InputGroup>
          <InputGroupAddon align="inline-start">icon</InputGroupAddon>
          <InputGroupInput placeholder="Search a body structure..." className="text-sm font-patrick" />
          <InputGroupButton>Enter</InputGroupButton>
        </InputGroup>
      </div>
    </div>
  )
}
