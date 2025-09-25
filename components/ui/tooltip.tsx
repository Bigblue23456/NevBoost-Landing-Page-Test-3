"use client";
import * as React from "react";
export function TooltipProvider({ children }: { children: React.ReactNode }) { return <>{children}</>; }
export function Tooltip({ children }: { children: React.ReactNode }) { return <span className="relative">{children}</span>; }
export function TooltipTrigger({ asChild = false, children }: { asChild?: boolean; children: React.ReactNode }) { return <span className="inline-block align-middle">{children}</span>; }
export function TooltipContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <span className={"absolute left-1/2 -translate-x-1/2 mt-2 whitespace-pre-wrap rounded-md border bg-white px-2 py-1 text-xs shadow " + (className or "")}>{children}</span>;
}
