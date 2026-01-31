"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "motion/react";
import { Code, Database, LayoutDashboard, Globe, ShieldCheck } from "lucide-react";
import Image from "next/image";

const whatWeBuild = [
    {
        icon: <Globe className="h-8 w-8 text-blue-500" />,
        title: "Business Websites",
        description: "Elegant, conversion-focused corporate and marketing sites that build trust and generate leads.",
    },
    {
        icon: <LayoutDashboard className="h-8 w-8 text-blue-500" />,
        title: "SaaS Platforms",
        description: "Scalable subscription-based applications with user dashboards, billing, and feature gating.",
    },
    {
        icon: <Database className="h-8 w-8 text-blue-500" />,
        title: "Dashboards & Analytics",
        description: "Real-time data visualization interfaces for internal tools and client-facing reporting.",
    },
    {
        icon: <Code className="h-8 w-8 text-blue-500" />,
        title: "Client Portals",
        description: "Secure, branded portals for file sharing, project tracking, and client collaboration.",
    },
    {
        icon: <ShieldCheck className="h-8 w-8 text-blue-500" />,
        title: "Internal Systems",
        description: "Custom CRMs, inventory tools, HR systems, and workflow automation built for your team.",
    },
];

const approachSteps = [
    {
        number: "01",
        title: "Discovery & Planning",
        description: "Deep dive into your goals, audience, competitors, and technical requirements.",
    },
    {
        number: "02",
        title: "Strategy & Wireframing",
        description: "Define architecture, user flows, and create high-fidelity wireframes & prototypes.",
    },
    {
        number: "03",
        title: "Design & Development",
        description: "Pixel-perfect UI/UX design followed by clean, performant code implementation.",
    },
    {
        number: "04",
        title: "Testing & Launch",
        description: "Rigorous QA, performance optimization, SEO setup, and smooth deployment.",
    },
    {
        number: "05",
        title: "Optimization & Growth",
        description: "Post-launch analytics, A/B testing, and continuous improvements.",
    },
];

const techStack = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Shadcn UI",
    "Supabase / Appwrite",
    "PostgreSQL",
    "Vercel",
    "Framer Motion",
    "Stripe (if needed)",
    "MongoDB",
    "Paypal (if needed)",
    "Mobile Money Payments"
];

export default function WebDevelopmentPage() {
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
                            High-Performance Websites & Web Applications
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto">
                            Built for scale, speed, and conversion.
                        </p>
                        <div className="mt-10">
                            <Button size="lg" className="bg-blue-500 hover:bg-blue-600" asChild>
                                <Link href="/book-call">Let&apos;s Build Your Platform →</Link>
                            </Button>
                        </div>
                        <div className="mt-4 md:mt-8 max-w-6xl mx-auto">
                            <Image
                                src="/assets/web-development-services.jpg"
                                alt="Web development services"
                                width={1200}
                                height={700}
                                className="rounded-xl shadow-2xl mx-auto border border-slate-200 object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* What We Build */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-16">What We Build</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whatWeBuild.map((item, i) => (
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
                        {/* Connecting lines (desktop only) */}
                        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200 -z-10 transform -translate-y-1/2" />
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-12">Our Tech Stack</h2>
                    <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
                        {techStack.map((tech, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                className="px-6 py-3 bg-slate-100 rounded-full text-slate-700 font-medium shadow-sm hover:bg-blue-50 hover:text-blue-600 transition-colors"
                            >
                                {tech}
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
                        Let&apos;s Build Your Platform
                    </motion.h2>
                    <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                        From strategy to launch — we create digital experiences that drive real business results.
                    </p>
                    <Button size="lg" className="bg-blue-500 hover:bg-blue-600" asChild>
                        <Link href="/book-call">Get Started → Book Free Strategy Call</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}