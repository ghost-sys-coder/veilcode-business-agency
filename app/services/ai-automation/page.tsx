"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Bot,
    BrainCircuit,
    Workflow,
    MessageSquare,
    BarChart3,
} from "lucide-react";

const whatWeDeliver = [
    {
        icon: <Bot className="h-8 w-8 text-blue-500" />,
        title: "Custom AI Agents & Assistants",
        description: "Intelligent agents that handle repetitive tasks, customer support, lead qualification, and internal operations.",
    },
    {
        icon: <Workflow className="h-8 w-8 text-blue-500" />,
        title: "Process & Workflow Automation",
        description: "End-to-end automation combining RPA, rule-based logic, and AI decision-making to eliminate manual work.",
    },
    {
        icon: <MessageSquare className="h-8 w-8 text-blue-500" />,
        title: "Conversational AI & Chat Interfaces",
        description: "Advanced chatbots, voice assistants, WhatsApp/Telegram/Slack bots with natural language understanding.",
    },
    {
        icon: <BrainCircuit className="h-8 w-8 text-blue-500" />,
        title: "Recommendation & Personalization Engines",
        description: "Product, content, pricing, and next-best-action recommendations powered by collaborative filtering and deep learning.",
    },
    {
        icon: <BarChart3 className="h-8 w-8 text-blue-500" />,
        title: "Predictive Maintenance & Anomaly Detection",
        description: "Real-time monitoring systems that predict failures, detect fraud, spot quality issues, and flag unusual patterns.",
    },
];

const approachSteps = [
    {
        number: "01",
        title: "Opportunity & Feasibility Mapping",
        description: "Identify highest-ROI automation & AI use cases, evaluate data availability, and define success criteria.",
    },
    {
        number: "02",
        title: "Data Preparation & Prototyping",
        description: "Collect, clean, and label data; build quick proof-of-concept models and automation flows.",
    },
    {
        number: "03",
        title: "Core Model & Workflow Development",
        description: "Train production-grade models, integrate LLMs / vision / time-series models, build robust pipelines.",
    },
    {
        number: "04",
        title: "Integration & User Interface Layer",
        description: "Connect to existing tools (CRM, ERP, Slack, etc.), create intuitive control panels and monitoring.",
    },
    {
        number: "05",
        title: "Monitoring, Retraining & Expansion",
        description: "Set up drift detection, human-in-the-loop feedback, automated retraining, and phased rollout of new features.",
    },
];

const toolsAndTechnologies = [
    "Python • LangChain / LlamaIndex",
    "OpenAI • Anthropic • Grok • Gemini",
    "Hugging Face Transformers",
    "n8n • Make • Zapier (light automation)",
    "CrewAI / AutoGen (multi-agent)",
    "Supabase / Pinecone / Weaviate (vector DB)",
    "FastAPI / Next.js API routes",
    "Vercel / Render / Railway",
    "Temporal / Prefect (orchestration)",
    "Prometheus + Grafana (monitoring)",
];

export default function AiAutomationPage() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-linear-to-br from-blue-50 via-white to-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                            AI & Automation
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto mb-10">
                            Intelligent systems that eliminate manual work, personalize experiences, and create new revenue streams.
                        </p>

                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 mb-12" asChild>
                            <Link href="/book-call">Start Automating Intelligence →</Link>
                        </Button>

                        <div className="mt-4 md:mt-8 max-w-6xl mx-auto">
                            <Image
                                src="/assets/ai-automation-2.jpg"
                                alt="AI automation workflow visualization"
                                width={1200}
                                height={700}
                                className="rounded-xl shadow-2xl mx-auto border border-slate-200"
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
                                <Card className="h-full border-none shadow-md hover:shadow-xl transition-all duration-300 bg-slate-50/70 backdrop-blur-sm">
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative">
                        {approachSteps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="text-center relative z-10 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                            >
                                <div className="text-5xl font-bold text-blue-100 mb-3">{step.number}</div>
                                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                            </motion.div>
                        ))}

                        <div className="hidden md:block absolute top-1/2 left-10 right-10 h-0.5 bg-linear-to-r from-blue-200 via-blue-300 to-blue-200 -z-10 transform -translate-y-1/2" />
                    </div>
                </div>
            </section>

            {/* Tools & Technologies */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-12">Tools & Technologies We Master</h2>
                    <div className="flex flex-wrap justify-center gap-5 max-w-5xl mx-auto">
                        {toolsAndTechnologies.map((tool, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.92 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.04 }}
                                className="px-6 py-3 bg-slate-100 rounded-full text-slate-700 font-medium shadow-sm hover:bg-blue-50 hover:text-blue-700 transition-colors"
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
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Ready to put intelligence to work?
                    </motion.h2>
                    <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
                        We build AI systems that learn, adapt, and deliver measurable business impact — not just demos.
                    </p>
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                        <Link href="/book-call">Begin Your AI Journey – Book Strategy Call</Link>
                    </Button>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 bg-slate-800 text-slate-300 text-center">
                <p>© {new Date().getFullYear()} Veilcode. All rights reserved.</p>
            </footer>
        </div>
    );
}