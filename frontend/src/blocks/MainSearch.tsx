import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group"

export default function MainSearch() {
  return <div>
    <InputGroup>
      <InputGroupAddon align="inline-start">icon</InputGroupAddon>
      <InputGroupInput placeholder="Search a body structure..." className="text-sm font-patrick" />
      <InputGroupButton>Enter</InputGroupButton>
    </InputGroup>
  </div >
}
