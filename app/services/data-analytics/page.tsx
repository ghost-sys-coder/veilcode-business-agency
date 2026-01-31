"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  BarChart3,
  Database,
  LineChart,
  PieChart,
  TrendingUp,
} from "lucide-react";

const whatWeDeliver = [
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-500" />,
    title: "Custom BI Dashboards",
    description: "Interactive, real-time dashboards tailored to your KPIs and decision-making workflow.",
  },
  {
    icon: <Database className="h-8 w-8 text-blue-500" />,
    title: "Data Warehouse & ETL Pipelines",
    description: "Centralized, clean, and performant data infrastructure that scales with your business.",
  },
  {
    icon: <LineChart className="h-8 w-8 text-blue-500" />,
    title: "Predictive Analytics & Forecasting",
    description: "Machine learning models for demand forecasting, churn prediction, revenue projection, etc.",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-500" />,
    title: "Advanced Segmentation & Cohort Analysis",
    description: "Deep customer & product behavior insights through powerful segmentation tools.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-blue-500" />,
    title: "Executive Reporting & Automated Insights",
    description: "Beautiful weekly/monthly reports + AI-generated narrative summaries.",
  },
];

const approachSteps = [
  {
    number: "01",
    title: "Data Landscape Audit",
    description: "Map all data sources, evaluate quality, volume, velocity, and current pain points.",
  },
  {
    number: "02",
    title: "Requirements & KPI Workshop",
    description: "Define success metrics, critical business questions, and reporting cadence.",
  },
  {
    number: "03",
    title: "Architecture & Pipeline Design",
    description: "Design modern data stack, ETL/ELT flows, storage, and transformation strategy.",
  },
  {
    number: "04",
    title: "Modeling & Dashboard Build",
    description: "Build dimensional models, semantic layer, and polished visualization layer.",
  },
  {
    number: "05",
    title: "Adoption & Iteration",
    description: "User training, feedback loops, continuous refinement, and new use-case expansion.",
  },
];

const toolsAndTechnologies = [
  "PostgreSQL / Snowflake / BigQuery",
  "dbt",
  "Airbyte / Fivetran",
  "Looker / Metabase / Power BI",
  "Python (pandas, polars, scikit-learn)",
  "Supabase / ClickHouse (real-time)",
  "DBT Cloud / Prefect / Dagster",
  "Looker Studio (free tier option)",
  "Vercel / Render (frontend hosting)",
];

export default function DataAnalyticsPage() {
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
              Data Analytics & Business Intelligence
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto mb-10">
              Turn raw data into clear, actionable insights that drive better decisions and faster growth.
            </p>

            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 mb-12" asChild>
              <Link href="/book-call">Unlock Your Data → Book Strategy Call</Link>
            </Button>

            <div className="mt-4 md:mt-8 max-w-6xl mx-auto">
              <Image
                src="/assets/data-analysis-2.jpg"
                alt="Business intelligence analytics dashboard"
                width={1200}
                height={800}
                className="rounded-xl shadow-2xl mx-auto border border-slate-200 w-full h-150 object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

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


      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Tools & Technologies We Use</h2>
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

      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to make data your competitive advantage?
          </motion.h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            We build analytics systems that don’t just show numbers — they tell stories and guide decisions.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
            <Link href="/book-call">Start Seeing Clearer – Book Strategy Call</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}