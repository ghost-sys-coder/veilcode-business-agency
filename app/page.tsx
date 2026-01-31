"use client";
import CaseStudies from "@/components/shared/CaseStudies";
import CTASection from "@/components/shared/CTASection";
import HeroSection from "@/components/shared/HeroSection";
import ProcessSteps from "@/components/shared/ProcessSteps";
import ServicesSection from "@/components/shared/ServicesSection";
import TrustIndicators from "@/components/shared/TrustIndicators";
import ValueProposition from "@/components/shared/ValueProposition";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <HeroSection />
      <TrustIndicators />
      <ServicesSection />
      <ValueProposition />
      <ProcessSteps />
      <CaseStudies />
      <CTASection />
    </div>
  )
}