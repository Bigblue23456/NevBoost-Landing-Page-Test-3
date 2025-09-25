"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

export function TooltipProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function Tooltip({ children, className }: { children: React.ReactNode; className?: string }) {
  // Simple, CSS-only tooltip (no portals/scripts) to avoid build errors
  return <span className={cn("relative inline-block group", className)}>{children}</span>;
}

export function TooltipTrigger({ asChild = false, children }: { asChild?: boolean; children: React.ReactNode }) {
  // We just render the child; the wrapper handles hover via CSS
  return <span className="inline-block">{children}</span>;
}

export function TooltipContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "absolute left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block",
        "whitespace-pre-wrap rounded-md border bg-white px-2 py-1 text-xs shadow",
        className
      )}
      role="tooltip"
    >
      {children}
    </span>
  );
}
