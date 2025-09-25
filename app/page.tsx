"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Mail, Phone, CalendarDays, ShieldCheck, Zap, LineChart, Users, Sparkles } from "lucide-react";
import { PenLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// Tailwind color guide used:
// Primary: #2563EB (blue-600)
// Secondary: #10B981 (emerald-500)
// Dark: #111827 (gray-900)
// Light BG: #F9FAFB (gray-50)
// Mid BG: #F3F4F6 (gray-100)

const container = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Section: React.FC<{ id?: string; className?: string; children: React.ReactNode }>=({ id, className = "", children })=> (
  <section id={id} className={`py-16 md:py-24 ${className}`}>{children}</section>
);

const CTAButton: React.FC<{ label?: string; href?: string; variant?: "primary"|"secondary" }>=({ label = "Book Your Free Pipeline Audit", href = "#book", variant = "primary" })=> (
  <Button asChild className={`${variant === "primary" ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-emerald-500 hover:bg-emerald-600 text-white"} rounded-2xl px-6 h-11 text-sm font-semibold`}> 
    <a href={href}>
      {label}
      <ArrowRight className="ml-2 h-4 w-4 inline-block" />
    </a>
  </Button>
);

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-white border border-gray-200 p-4 text-center">
      <div className="text-2xl font-extrabold text-gray-900">{value}</div>
      <div className="text-xs text-gray-500 mt-1">{label}</div>
    </div>
  );
}

export default function NevBoostHomepage() {
  return (
    <TooltipProvider>
      <div className="min-h-screen bg-white text-gray-900">
        {/* Nav */}
        <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/80 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between">
            <a href="#" className="flex items-center gap-2 font-bold text-gray-900">
              <div className="h-7 w-7 rounded-xl bg-blue-600" />
              <span>NevBoost</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#process" className="hover:text-blue-600">Process</a>
              <a href="#services" className="hover:text-blue-600">What We Do</a>
              <a href="#proof" className="hover:text-blue-600">Proof</a>
              <a href="#about" className="hover:text-blue-600">About</a>
              <a href="#faq" className="hover:text-blue-600">FAQ</a>
            </nav>
            <div className="flex items-center gap-3">
              <CTAButton label="Book a Call" />
            </div>
          </div>
        </header>

        {/* Hero */}
        <Section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">We Build SaaS Pipelines That Don’t Rely on <span className="text-blue-600">Luck</span> or <span className="text-blue-600">Spam</span>.</h1>
              <p className="mt-4 text-gray-600 text-lg">The Precision Pipeline Framework™ helps SaaS founders consistently book qualified sales meetings with the right prospects — without wasted volume or gimmicks.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <CTAButton />
                <CTAButton variant="secondary" label="See If We’re a Fit" href="#fit" />
              </div>
              <div className="mt-6 flex items-center gap-6 text-gray-500 text-sm">
                <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4"/> Deliverability‑safe</div>
                <div className="flex items-center gap-2"><LineChart className="h-4 w-4"/> ACV/CAC‑aware</div>
                <div className="flex items-center gap-2"><Users className="h-4 w-4"/> ICP‑aligned</div>
              </div>
            </motion.div>

            {/* Visual / Mock video frame */}
            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative">
              <div className="aspect-video w-full rounded-2xl border border-gray-200 shadow-sm overflow-hidden bg-gray-50">
                <div className="h-full w-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto mb-4 h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center">
                      <Zap className="h-7 w-7 text-blue-600"/>
                    </div>
                    <p className="font-semibold">3‑Minute Framework Overview</p>
                    <p className="text-gray-500 text-sm">Drop your video embed here (Vimeo/YouTube)</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl border border-gray-200 px-4 py-2 shadow-sm hidden md:block">
                <div className="text-xs text-gray-500">Trusted by</div>
                <div className="mt-1 flex items-center gap-4 opacity-80">
                  <div className="h-6 w-16 bg-gray-200 rounded"/>
                  <div className="h-6 w-16 bg-gray-200 rounded"/>
                  <div className="h-6 w-16 bg-gray-200 rounded"/>
                </div>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* Pain */}
        <Section className="bg-gray-50">
          <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold">Cold email shouldn’t feel like risking <span className="text-blue-600">burning time & money</span>.</h2>
            <div className="mt-6 grid md:grid-cols-3 gap-6 text-left">
              {["Other agencies chase volume → spammy templates, bad leads, zero traction.", "You end up with wasted domains, frustrated reps, and no pipeline clarity.", "We’ve been on the other side of it — so we built a better way."].map((t, i)=> (
                <Card key={i} className="border-none shadow-none bg-transparent">
                  <CardContent className="p-0 flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5"/>
                    <p className="text-gray-600">{t}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* Differentiator Table */}
        <Section className="bg-white" id="fit">
          <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center">Not Just Another "Spray & Pray" Agency</h2>
            <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200">
              <table className="w-full text-sm md:text-base">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="p-4 text-left">Other Agencies</th>
                    <th className="p-4 text-left">NevBoost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { other: "One-size-fits-all templates", us: "ICP‑aligned, research‑based messaging" },
                    { other: "Shallow offers (free trials/discounts)", us: "SaaS‑specific offer engineering" },
                    { other: "Vanity metrics: opens & clicks", us: "Pipeline contribution (ACV/CAC focus)" },
                    { other: "Short‑term spikes", us: "Playbook for repeatable growth" },
                  ].map((row, i)=> (
                    <tr key={i} className="bg-white hover:bg-gray-50">
                      <td className="p-4">{row.other}</td>
                      <td className="p-4 font-medium text-gray-900">{row.us}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 flex justify-center"><CTAButton label="See If We’re a Fit" href="#book"/></div>
          </div>
        </Section>

        {/* Process */}
        <Section id="process" className="bg-gray-50">
          <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center">Here’s How We Build Your Pipeline — Step by Step</h2>
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {[
                { title: "Pilot", desc: "Quick‑win campaign to test your ICP & offer.", icon: Sparkles },
                { title: "Playbook", desc: "Documented outbound system designed for repeatability.", icon: LineChart },
                { title: "Scale", desc: "Turn into a consistent flow of qualified meetings.", icon: Users },
              ].map(({ title, desc, icon: Icon }, i)=> (
                <Card key={i} className="rounded-2xl">
                  <CardHeader>
                    <div className="h-10 w-10 rounded-xl bg-blue-100 text-blue-700 flex items=center justify-center">
                      <Icon className="h-5 w-5"/>
                    </div>
                    <CardTitle className="mt-3">{title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 text-gray-600">{desc}</CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* Services */}
        <Section id="services" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center">Everything You Need for Outbound Success — Done With You</h2>
            <p className="mt-3 text-center text-gray-500 max-w-3xl mx-auto">Fast to scan on mobile, with extra detail on hover for desktop. Short captions are always visible; tooltips add clarity without clutter.</p>
            <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { title: "ICP Research & Data Enrichment", icon: Users, caption: "Define who actually buys & why.", tip: "We segment accounts by pains, triggers, and buying roles; enrich with LinkedIn + firmographic data for precision outreach." },
                { title: "Offer Engineering", icon: Sparkles, caption: "Design offers that convert.", tip: "We craft SaaS-specific value props + risk reversals aligned to ACV/CAC targets and sales cycle length." },
                { title: "Multi-Step Campaign Buildout", icon: Mail, caption: "Email + LinkedIn + reply maps.", tip: "Sequenced touchpoints with conditional logic, reply handling, and calendar-forward CTAs." },
                { title: "Deliverability & Domain Setup", icon: ShieldCheck, caption: "Protect sender reputation.", tip: "Warmups, DMARC/DKIM/SPF, pools, throttling, and bounce control to keep you landing in inboxes." },
                { title: "Conversion-Focused Copywriting", icon: PenLine, caption: "Message-market fit in the inbox.", tip: "Plain-text, prospect-centric copy with problem-proof-promise structure and tight personalization rules." },
                { title: "Pipeline Reporting & Insights", icon: LineChart, caption: "Decisions by data, not vibes.", tip: "We track pipeline contribution, meeting quality, and offer/ICP splits to double down on what works." },
              ].map(({ title, icon: Icon, caption, tip }, i)=> (
                <Card key={i} className="rounded-2xl h-full">
                  <CardHeader className="pb-2">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 shrink-0 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                        <Icon className="h-5 w-5"/>
                      </div>
                      <div className="min-w-0">
                        <CardTitle className="text-base leading-snug">
  <span className="inline-flex items-baseline gap-1 min-w-0">
    <span className="break-words">{title}</span>
    <Tooltip>
      <TooltipTrigger asChild>
        <span className="inline-flex h-4 w-4 shrink-0 whitespace-nowrap rounded-full bg-gray-100 text-gray-500 items-center justify-center text-[10px] cursor-help select-none">i</span>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs">{tip}</TooltipContent>
    </Tooltip>
  </span>
</CardTitle>
                        <p className="mt-1 text-sm text-gray-500 line-clamp-2">{caption}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
            <div className="mt-8 flex justify-center"><CTAButton label="Book Your Audit Call" href="#book"/></div>
          </div>
        </Section>

        {/* PPF (replaces Proof) */}
        <Section id="proof" className="bg-gray-50">
          <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center">The Precision Pipeline Framework (PPF)</h2>
            <p className="mt-3 text-center text-gray-500 max-w-3xl mx-auto">Consistent outbound = the <strong>right offer</strong> to the <strong>right person</strong> in the <strong>right situation</strong>. When any one is off, replies drop and meetings stall.</p>

            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {/* Right Offer */}
              <Card className="rounded-2xl">
                <CardHeader>
                  <div className="h-10 w-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <CardTitle className="mt-3">Right Offer</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-gray-600">
                  <ul className="list-disc ml-5 space-y-2 text-sm">
                    <li>Value prop tied to a measurable outcome (ACV/CAC aware).</li>
                    <li>Risk reversal (pilot, proof, or light‑lift next step).</li>
                    <li>Specific to the prospect’s context (not a generic demo).</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Right Person */}
              <Card className="rounded-2xl">
                <CardHeader>
                  <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <Users className="h-5 w-5" />
                  </div>
                  <CardTitle className="mt-3">Right Person</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-gray-600">
                  <ul className="list-disc ml-5 space-y-2 text-sm">
                    <li>Clear ICP by role, seniority, and buying committee.</li>
                    <li>Signals & triggers (hiring, tech stack, funding, intent).</li>
                    <li>Personalization rules that scale beyond first name.</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Right Situation */}
              <Card className="rounded-2xl">
                <CardHeader>
                  <div className="h-10 w-10 rounded-xl bg-yellow-100 text-yellow-700 flex items-center justify-center">
                    <CalendarDays className="h-5 w-5" />
                  </div>
                  <CardTitle className="mt-3">Right Situation</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-gray-600">
                  <ul className="list-disc ml-5 space-y-2 text-sm">
                    <li>Timing & relevance (quarter, initiatives, current tools).</li>
                    <li>Channel mix (email + LinkedIn) with reply mappings.</li>
                    <li>Deliverability‑safe sending to protect domain reputation.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">PPF is how we engineer replies into meetings — without gimmicks or spam.</p>
              <div className="mt-4 flex justify-center"><CTAButton label="Map Your PPF" href="#book" /></div>
            </div>
          </div>
        </Section>

        {/* About */}
        <Section id="about" className="bg-white">
          <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8 grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2">
              <div className="aspect-square w-full rounded-2xl bg-gray-100 border border-gray-200" />
            </div>
            <div className="md:col-span-3">
              <h2 className="text-2xl md:text-3xl font-bold">Who’s Behind NevBoost?</h2>
              <p className="mt-4 text-gray-600">I’m Eli Yonas, founder of NevBoost. After years studying SaaS sales, I realized most agencies were missing the big picture — it’s not about templates or tools, it’s about the <strong>right offer, right person, right situation</strong>. NevBoost exists to give SaaS teams a repeatable, economics‑driven outbound system.</p>
              <div className="mt-6 flex gap-3">
                <CTAButton label="Meet Eli" href="#contact" variant="secondary"/>
                <CTAButton label="Book a Call" href="#book"/>
              </div>
            </div>
          </div>
        </Section>

        {/* FAQ */}
        <Section id="faq" className="bg-gray-50">
          <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center">Still Wondering If This Will Work for You?</h2>
            <Accordion type="single" collapsible className="mt-8">
              <AccordionItem value="item-1">
                <AccordionTrigger>What if my SaaS is early‑stage?</AccordionTrigger>
                <AccordionContent>The framework adapts to your stage — pilot programs are perfect for testing.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How soon can I see results?</AccordionTrigger>
                <AccordionContent>Most SaaS clients see clarity + first calls within 30–45 days.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Do you guarantee results?</AccordionTrigger>
                <AccordionContent>No one can guarantee meetings — but we guarantee a tested system + clear data to scale.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Section>

        {/* Final CTA */}
        <Section className="bg-gray-900 text-white">
          <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold">Ready to Build a Pipeline That Works While You Sleep?</h2>
            <p className="mt-3 text-gray-300">Let’s audit your outbound and map a Precision Pipeline plan.</p>
            <div className="mt-6 flex justify-center"><CTAButton /></div>
          </div>
        </Section>

        {/* Contact / Book anchor */}
        <Section id="book" className="bg-white">
          <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Book Your Free Pipeline Audit</CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-6">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium">Full Name</label>
                    <input className="mt-1 w-full rounded-xl border border-gray-300 px-3 h-10 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Jane Doe"/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Work Email</label>
                    <input type="email" className="mt-1 w-full rounded-xl border border-gray-300 px-3 h-10 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="jane@company.com"/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Company</label>
                    <input className="mt-1 w-full rounded-xl border border-gray-300 px-3 h-10 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Acme SaaS"/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium">What’s your biggest outbound challenge?</label>
                    <textarea className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="e.g., low reply rates, unclear ICP, deliverability, offer"/>
                  </div>
                  <CTAButton label="Request Audit" />
                </form>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-600"><CalendarDays className="h-5 w-5 text-blue-600"/> Get a 20–40 min call — zero hard selling.</div>
                  <div className="flex items-center gap-3 text-gray-600"><LineChart className="h-5 w-5 text-blue-600"/> Clear data on ICP & offer viability.</div>
                  <div className="flex items-center gap-3 text-gray-600"><ShieldCheck className="h-5 w-5 text-blue-600"/> Deliverability‑safe setup recommendations.</div>
                  <div className="flex items-center gap-3 text-gray-600"><Phone className="h-5 w-5 text-blue-600"/> Prefer Calendly? Embed it here.</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 text-white font-bold">
                <div className="h-7 w-7 rounded-xl bg-blue-600" />
                <span>NevBoost</span>
              </div>
              <p className="mt-3 text-sm text-gray-400">Precision Pipeline Framework™ for consistent SaaS meetings.</p>
            </div>
            <div className="grid grid-cols-2 gap-8 text-sm">
              <div>
                <div className="text-white font-semibold mb-3">Company</div>
                <ul className="space-y-2">
                  <li><a href="#process" className="hover:text-white">Process</a></li>
                  <li><a href="#services" className="hover:text-white">Services</a></li>
                  <li><a href="#proof" className="hover:text-white">Proof</a></li>
                  <li><a href="#about" className="hover:text-white">About</a></li>
                </ul>
              </div>
              <div>
                <div className="text-white font-semibold mb-3">Contact</div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2"><Mail className="h-4 w-4"/> hello@nevboost.com</li>
                  <li className="flex items-center gap-2"><Phone className="h-4 w-4"/> (555) 123‑4567</li>
                </ul>
              </div>
            </div>
            <div className="text-sm text-gray-400">© {new Date().getFullYear()} NevBoost. All rights reserved.</div>
          </div>
        </footer>
      </div>
    </TooltipProvider>
  );
}

// NOTE: Replace placeholders with live assets when ready:
// - Hero video embed (Vimeo/YouTube)
// - Client logos (SVGs)
// - Calendly embed in #book section if preferred
// - Real contact info
// - Hook up form submission to your backend or form tool
