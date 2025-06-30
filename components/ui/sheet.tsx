"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

const Sheet = DialogPrimitive.Root
const SheetTrigger = DialogPrimitive.Trigger
const SheetClose = DialogPrimitive.Close
const SheetPortal = DialogPrimitive.Portal

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm",
      className
    )}
    {...props}
  />
))
SheetOverlay.displayName = DialogPrimitive.Overlay.displayName

const SheetContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    side?: "top" | "bottom" | "left" | "right"
  }
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed z-50 bg-white text-black shadow-lg transition-all animate-in data-[state=closed]:animate-out",
        side === "top" && "inset-x-0 top-0 h-[30%] animate-slide-in-from-top",
        side === "bottom" && "inset-x-0 bottom-0 h-[30%] animate-slide-in-from-bottom",
        side === "left" && "inset-y-0 left-0 w-[75%] animate-slide-in-from-left",
        side === "right" && "inset-y-0 right-0 w-[75%] animate-slide-in-from-right",
        className
      )}
      {...props}
    >
      {children}
      <SheetClose className="absolute right-4 top-4">
        <X className="h-5 w-5" />
        <span className="sr-only">Close</span>
      </SheetClose>
    </DialogPrimitive.Content>
  </SheetPortal>
))
SheetContent.displayName = DialogPrimitive.Content.displayName

const SheetTitle = DialogPrimitive.Title
const SheetDescription = DialogPrimitive.Description

export {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetTitle,
  SheetDescription,
}
