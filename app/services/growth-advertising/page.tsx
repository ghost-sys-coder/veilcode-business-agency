"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";
import { BarChart3, Target, LineChart, Megaphone, Zap } from "lucide-react";
import Image from "next/image";

const whatWeDeliver = [
    {
        icon: <Target className="h-8 w-8 text-blue-500" />,
        title: "Paid Media Strategy & Execution",
        description: "Full-funnel campaigns across Meta, Google, LinkedIn, TikTok, and programmatic platforms.",
    },
    {
        icon: <BarChart3 className="h-8 w-8 text-blue-500" />,
        title: "Conversion & Attribution Tracking",
        description: "Advanced setup with GA4, Meta CAPI, server-side tracking, and custom attribution models.",
    },
    {
        icon: <LineChart className="h-8 w-8 text-blue-500" />,
        title: "Creative Testing & Optimization",
        description: "Systematic A/B testing, dynamic creative, and performance creative frameworks.",
    },
    {
        icon: <Megaphone className="h-8 w-8 text-blue-500" />,
        title: "Landing Page & Funnel Optimization",
        description: "High-converting landing pages, post-click experience, and multi-step funnels.",
    },
    {
        icon: <Zap className="h-8 w-8 text-blue-500" />,
        title: "Automated Scaling Systems",
        description: "Rules-based automation, budget pacing, bid strategies, and lookalike audience expansion.",
    },
];

const approachSteps = [
    {
        number: "01",
        title: "Audit & Goal Setting",
        description: "Analyze current performance, define KPIs, ROAS/CPA targets, and growth roadmap.",
    },
    {
        number: "02",
        title: "Audience & Creative Research",
        description: "Deep customer research, competitor analysis, and high-potential creative concepts.",
    },
    {
        number: "03",
        title: "Campaign Architecture & Launch",
        description: "Build structured campaigns, implement tracking, and launch initial tests.",
    },
    {
        number: "04",
        title: "Optimization & Scaling",
        description: "Daily monitoring, creative iteration, budget reallocation, and aggressive scaling.",
    },
    {
        number: "05",
        title: "Reporting & Insights",
        description: "Custom dashboards, weekly insights, monthly deep-dives, and continuous refinement.",
    },
];

const platformsAndTools = [
    "Meta Ads (Facebook & Instagram)",
    "Google Ads (Search, Display, YouTube, Performance Max)",
    "LinkedIn Ads",
    "TikTok Ads",
    "Google Analytics 4 + Tag Manager",
    "Meta Conversions API",
    "Looker Studio / Power BI",
    "Triple Whale / Northbeam (optional)",
    "Zapier / Make (automation)",
    "Webflow / Framer / Next.js (landing pages)",
];

export default function GrowthAdvertisingPage() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            {/* Hero */}
            <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-linear-to-br from-blue-50 via-white to-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                            Growth & Advertising Systems
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto mb-10">
                            Profitable, scalable customer acquisition powered by data, creative, and automation.
                        </p>

                        <Button size="lg" className="bg-blue-500 hover:bg-blue-600 mb-12" asChild>
                            <Link href="/book-call">Launch Your Growth Engine →</Link>
                        </Button>

                        <div className="mt-4 md:mt-8 max-w-6xl mx-auto">
                            <Image
                                src="/assets/growth-hero-1.jpg"
                                alt="Growth advertising analytics dashboard"
                                width={1200}
                                height={700}
                                className="rounded-xl shadow-2xl mx-auto border border-slate-200 object-cover"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* What We Deliver */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-16">What We Deliver</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whatWeDeliver.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                            >
                                <Card className="h-full border-none shadow-md hover:shadow-xl transition-shadow bg-slate-50/80 backdrop-blur-sm">
                                    <CardHeader className="text-center pb-2">
                                        {item.icon}
                                        <CardTitle className="mt-4 text-xl">{item.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-center">
                                        <p className="text-slate-600">{item.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-16">Our Approach</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
                        {approachSteps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="text-center relative z-10 bg-white p-6 rounded-xl shadow-md"
                            >
                                <div className="text-5xl font-bold text-blue-100 mb-4">{step.number}</div>
                                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                                <p className="text-slate-600">{step.description}</p>
                            </motion.div>
                        ))}
                        {/* Connecting line for desktop */}
                        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200 -z-10 transform -translate-y-1/2" />
                    </div>
                </div>
            </section>

            {/* Platforms & Tools */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-12">Platforms & Tools We Master</h2>
                    <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
                        {platformsAndTools.map((tool, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                className="px-6 py-3 bg-slate-100 rounded-full text-slate-700 font-medium shadow-sm hover:bg-blue-50 hover:text-blue-600 transition-colors"
                            >
                                {tool}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-slate-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-4xl font-bold mb-6"
                    >
                        Ready to Scale Profitably?
                    </motion.h2>
                    <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                        We build advertising & growth systems that acquire customers efficiently and predictably.
                    </p>
                    <Button size="lg" className="bg-blue-500 hover:bg-blue-600" asChild>
                        <Link href="/book-call">Book Strategy Call – Let&apos;s Talk Numbers</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}