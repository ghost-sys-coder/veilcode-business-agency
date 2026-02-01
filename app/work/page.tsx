"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { CaseStudyCard } from "@/components/shared/CaseStudy";

// Reusable Case Study Card Component
type CaseStudy = {
    slug: string;
    title: string;
    client: string;
    industry: string;
    image: string;
    result: string;
    resultLabel: string;
    tags: string[];
};

const caseStudies: CaseStudy[] = [
    {
        slug: "fintech-dashboard",
        title: "Next-Gen Banking Dashboard",
        client: "Harbor Finance",
        industry: "Fintech",
        image: "/cases/banking-dashboard.png",
        result: "+180%",
        resultLabel: "User Engagement",
        tags: ["Web App", "Data Viz", "Next.js"],
    },
    {
        slug: "ecommerce-growth",
        title: "E-commerce Scaling Engine",
        client: "AfriCart",
        industry: "Retail / E-commerce",
        image: "/cases/afrikart-ecommerce-scaling-engine.png",
        result: "+340%",
        resultLabel: "Revenue in 9 months",
        tags: ["Growth", "Meta Ads", "Conversion Rate"],
    },
    {
        slug: "ai-support-agent",
        title: "AI Customer Support Agent",
        client: "Swift Logistics",
        industry: "Logistics",
        image: "/cases/swift-logistics-chatbot.png",
        result: "-74%",
        resultLabel: "Support Tickets",
        tags: ["AI", "Automation", "LangChain"],
    },
    {
        slug: "real-estate-crm",
        title: "Property Management CRM",
        client: "RealtyPro",
        industry: "Real Estate",
        image: "/assets/growth-hero-2.jpg",
        result: "+215%",
        resultLabel: "Lead Conversion",
        tags: ["Web App", "Supabase", "Tailwind"],
    },
    {
        slug: "saas-analytics",
        title: "SaaS Product Analytics Suite",
        client: "FlowMetrics",
        industry: "SaaS",
        image: "/cases/saas-products-analytics-suite.png",
        result: "42%",
        resultLabel: "Churn Reduction",
        tags: ["BI", "Data Pipeline", "dbt"],
    },
    {
        slug: "ad-automation",
        title: "Paid Media Automation System",
        client: "ScaleVibe",
        industry: "Marketing Agency",
        image: "/cases/media-automation.png",
        result: "+290%",
        resultLabel: "ROAS",
        tags: ["Growth", "Automation", "Make.com"],
    },
];


export default function WorkPage() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            {/* Hero */}
            <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-linear-to-br from-blue-50 via-white to-slate-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            Selected Work
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12">
                            Real results from real clients — websites that convert, campaigns that scale, analytics that inform, and automation that saves time.
                        </p>

                        <div className="flex flex-wrap justify-center gap-6 text-sm uppercase tracking-wider text-slate-500">
                            <div className="flex items-center gap-2">
                                <span className="text-2xl font-bold text-blue-600">40+</span> Projects
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-2xl font-bold text-blue-600">4.9/5</span> Avg Rating
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-2xl font-bold text-blue-600">12–36 mo</span> Avg Relationship
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Portfolio Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                        {caseStudies.map((project) => (
                            <div key={project.slug} className="block">
                                <CaseStudyCard project={project} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-slate-900 text-white text-center">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                    >
                        Ready to see these kinds of results for your business?
                    </motion.h2>
                    <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
                        Let&apos;s discuss your project — no slides, no pressure, just clarity.
                    </p>
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                        <Link href="/book-call">Book Free Strategy Call</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}