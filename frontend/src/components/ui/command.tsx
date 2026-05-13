import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"

import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
} from "@/components/ui/input-group"
import { HugeiconsIcon } from "@hugeicons/react"
import { SearchIcon, Tick02Icon, ArrowMoveDownRightIcon } from "@hugeicons/core-free-icons"

function Command({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive>) {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        "flex size-full flex-col overflow-hidden rounded-4xl bg-transparent p-1 text-popover-foreground font-patrick",
        className
      )}
      {...props}
    />
  )
}

function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  className,
  showCloseButton = false,
  ...props
}: Omit<React.ComponentProps<typeof Dialog>, "children"> & {
  title?: string
  description?: string
  className?: string
  showCloseButton?: boolean
  children: React.ReactNode
}) {
  return (
    <Dialog {...props}>
      <DialogHeader className="sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent
        className={cn(
          "top-1/3 translate-y-0 overflow-hidden rounded-4xl! p-0",
          className
        )}
        showCloseButton={showCloseButton}
      >
        {children}
      </DialogContent>
    </Dialog>
  )
}

function CommandInput({
  className,
  wrapperClassName,
  size = "lg",
  startAddon,
  endAddon,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Input> & {
  size?: "default" | "lg"
  wrapperClassName?: string
  startAddon?: React.ReactNode
  endAddon?: React.ReactNode
}) {
  return (
    <div data-slot="command-input-wrapper">
      <InputGroup
        size={size}
        className={cn(
          size === "lg" && "bg-input/50 rounded-4xl outline-dashed outline-2 outline-secondary-foreground/20 transition-all",
          size === "lg" && "has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-[3px] has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50",
          wrapperClassName
        )}
      >
        {startAddon || (
          size === "lg" && (
            <InputGroupAddon>
              <HugeiconsIcon icon={SearchIcon} strokeWidth={2} className="size-4 shrink-0 opacity-50" />
            </InputGroupAddon>
          )
        )}
        <CommandPrimitive.Input
          /* This tag triggers the parent's 'has' selector */
          data-slot="input-group-control"
          className={cn(
            "w-full outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50 bg-transparent",
            size === "lg" && "text-2xl",
            className
          )}
          {...props}
        />
        {endAddon || (
          size === "lg" && (
            <InputGroupAddon align="inline-end">
              <InputGroupButton>
                <span className="text-lg">ENTER</span>
                <HugeiconsIcon icon={ArrowMoveDownRightIcon} />
              </InputGroupButton>
            </InputGroupAddon>
          )
        )}
      </InputGroup>
    </div>
  )
}

// function CommandInput({
//   className,
//   ...props
// }: React.ComponentProps<typeof CommandPrimitive.Input>) {
//   return (
//     <div data-slot="command-input-wrapper" className="">
//       <InputGroup className="h-16 bg-input/50 rounded-4xl outline-dashed outline-2 outline-secondary-foreground/20 focus-within:outline-solid focus-within:outline-primary/30 focus-within:bg-input/60">
//         <CommandPrimitive.Input
//           data-slot="command-input"
//           className={cn(
//             "w-full disabled:cursor-not-allowed disabled:opacity-50 text-2xl outline-none focus:ring-0",
//             className
//           )}
//           {...props}
//         />
//         <InputGroupAddon>
//           <HugeiconsIcon icon={SearchIcon} strokeWidth={2} className="size-4 shrink-0 opacity-50" />
//         </InputGroupAddon>
//         <InputGroupAddon align="inline-end">
//           <InputGroupButton><span className="text-lg">ENTER</span><HugeiconsIcon icon={ArrowMoveDownRightIcon} /></InputGroupButton>
//         </InputGroupAddon>
//       </InputGroup>
//     </div>
//   )
// }

function CommandList({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.List>) {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn(
        "no-scrollbar max-h-72 scroll-py-1 overflow-x-hidden overflow-y-auto outline-dashed outline-2",
        "mt-2 rounded-2xl border border-slate-200 bg-input/50 hover:bg-input/80 transition-all shadow-xl",
        className
      )}
      {...props}
    />
  )
}

function CommandEmpty({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Empty>) {
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className={cn("py-6 text-center text-sm", className)}
      {...props}
    />
  )
}

function CommandGroup({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(
        "overflow-hidden p-1 text-foreground **:[[cmdk-group-heading]]:px-3 **:[[cmdk-group-heading]]:py-2 **:[[cmdk-group-heading]]:text-xs **:[[cmdk-group-heading]]:font-medium **:[[cmdk-group-heading]]:text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function CommandSeparator({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cn("my-1 h-px bg-border/50", className)}
      {...props}
    />
  )
}

function CommandItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(
        "group/command-item relative flex cursor-default items-center gap-2 rounded-lg px-3 py-2 text-sm outline-hidden select-none in-data-[slot=dialog-content]:rounded-2xl data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-selected:bg-muted data-selected:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-selected:*:[svg]:text-foreground",
        className
      )}
      {...props}
    >
      {children}
      <HugeiconsIcon icon={Tick02Icon} strokeWidth={2} className="ml-auto opacity-0 group-has-data-[slot=command-shortcut]/command-item:hidden group-data-[checked=true]/command-item:opacity-100" />
    </CommandPrimitive.Item>
  )
}

function CommandShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="command-shortcut"
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground group-data-selected/command-item:text-foreground",
        className
      )}
      {...props}
    />
  )
}

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}
