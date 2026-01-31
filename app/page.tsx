"use client";
import CaseStudies from "@/components/shared/CaseStudies";
import CTASection from "@/components/shared/CTASection";
import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/shared/HeroSection";
import HomepageNavbar from "@/components/shared/HomepageNavbar";
import ProcessSteps from "@/components/shared/ProcessSteps";
import ServicesSection from "@/components/shared/ServicesSection";
import TrustIndicators from "@/components/shared/TrustIndicators";
import ValueProposition from "@/components/shared/ValueProposition";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <HomepageNavbar />
      <HeroSection />
      <TrustIndicators />
      <ServicesSection />
      <ValueProposition />
      <ProcessSteps />
      <CaseStudies />
      <CTASection />
      <Footer />
    </div>
  )
}