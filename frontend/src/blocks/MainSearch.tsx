import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group"

export default function MainSearch() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center gap-16 px-6 py-12">
      <div className="text-2xl font-patrick text-center flex flex-col gap-4">
        <h1>What are we studying today?</h1>
        <p>Look up a bone, muscle, or structure you want to explore</p>
      </div>
      <div className="w-full max-w-4xl">
        <InputGroup>
          <InputGroupAddon align="inline-start">icon</InputGroupAddon>
          <InputGroupInput placeholder="Search a body structure..." className="text-sm font-patrick" />
          <InputGroupButton>Enter</InputGroupButton>
        </InputGroup>
      </div>
    </div>
  )
}
