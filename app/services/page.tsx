import React from 'react'
import ServicesHero from './_components/ServicesHero'
import { ServiceBlock } from './_components/ServiceBlock'
import ServicesCTA from './_components/ServicesCTA'

const services = [
    {
      title: "Web Design & Development",
      description: "We craft high-performance, conversion-focused websites and scalable web applications that look premium and perform flawlessly across devices.",
      bullets: [
        "Pixel-perfect, responsive design",
        "Blazing-fast load times with modern frameworks",
        "SEO-optimized architecture",
        "Secure, scalable backend integrations",
        "Custom animations & interactive experiences",
      ],
      imageSrc: "/assets/website-development.jpg",
      imageAlt: "High-performance web application dashboard",
      href: "/services/web-development",
    },
    {
      title: "Growth & Advertising Systems",
      description: "Launch profitable, data-driven ad campaigns and build automated growth systems that acquire customers at scale while maximizing ROI.",
      bullets: [
        "Meta, Google & LinkedIn campaign strategy",
        "Conversion tracking & attribution setup",
        "Landing page optimization",
        "A/B testing & creative iteration",
        "Automated scaling rules & budget allocation",
      ],
      imageSrc: "/assets/growth-ad-systems-1.jpg",
      imageAlt: "Growth advertising analytics dashboard",
      href: "/services/growth-advertising",
      reverse: true,
    },
    {
      title: "Data Analytics & Business Intelligence",
      description: "Turn raw data into actionable insights with custom dashboards, reporting, and predictive analytics that drive smarter business decisions.",
      bullets: [
        "Real-time KPI tracking",
        "Custom BI dashboards & visualizations",
        "Data warehouse & ETL pipelines",
        "Predictive modeling & forecasting",
        "Integration with CRM, ads & internal tools",
      ],
      imageSrc: "/assets/data-analysis-1.jpg",
      imageAlt: "Business intelligence analytics interface",
      href: "/services/data-analytics",
    },
    {
      title: "AI & Automation",
      description: "Deploy intelligent automation and AI-powered solutions that eliminate manual work, personalize experiences, and unlock new revenue streams.",
      bullets: [
        "Custom AI agents & workflows",
        "Process automation (RPA + AI)",
        "Chatbots & conversational AI",
        "Recommendation engines",
        "Predictive maintenance & anomaly detection",
      ],
      imageSrc: "/assets/ai-automation-1.jpg",
      imageAlt: "AI automation workflow visualization",
      href: "/services/ai-automation",
      reverse: true,
    },
]

const page = () => {
    return (
        <div className='min-h-screen bg-slate-50 text-slate-900'>
            <ServicesHero />
            {services.map((service, index) => <ServiceBlock key={index} {...service} />)}
            <ServicesCTA />
        </div>
    )
}

export default page