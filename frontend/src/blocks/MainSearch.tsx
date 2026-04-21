import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group"

export default function MainSearch() {
  return <div className="flex flex-1 items-center justify-center max-w-2xl">
    <InputGroup>
      <InputGroupAddon align="inline-start">icon</InputGroupAddon>
      <InputGroupInput placeholder="Search a body structure..." className="text-sm font-patrick" />
      <InputGroupButton>Enter</InputGroupButton>
    </InputGroup>
  </div >
}
