"use client";
import * as React from "react";
export function Accordion({ children, className }: { children: React.ReactNode; className?: string }) { return <div className={className}>{children}</div>; }
export function AccordionItem({ value, children }: { value: string; children: React.ReactNode }) { return <div data-accordion-item={value} className="border-b">{children}</div>; }
export function AccordionTrigger({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  return <button type="button" onClick={()=>setOpen(o=>!o)} className="flex w-full items-center justify-between py-4 text-left font-medium"><span>{children}</span><span className="ml-2">{open?"−":"+"}</span></button>;
}
export function AccordionContent({ children }: { children: React.ReactNode }) { return <div className="pb-4 text-gray-600">{children}</div>; }
