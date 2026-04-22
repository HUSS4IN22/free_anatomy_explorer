import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group"

export default function MainSearch() {
  return <div>
    <h1>What are we studying today?</h1>
    <p>Look up a bone, muscle, or structure you want to explore</p>
    <InputGroup>
      <InputGroupAddon align="inline-start">icon</InputGroupAddon>
      <InputGroupInput placeholder="Search a body structure..." className="text-sm font-patrick" />
      <InputGroupButton>Enter</InputGroupButton>
    </InputGroup>
  </div>
}
