"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Calendar, Clock, Users } from "lucide-react";
import { BookingCalendar } from "@/components/shared/BookingCalendar";

export const callExpectations = [
  {
    title: "Your Business Goals",
    description: "We'll dive into your challenges and objectives.",
    icon: Check,
  },
  {
    title: "Custom Recommendations",
    description: "Tailored advice on web, analytics, marketing, or AI.",
    icon: Check,
  },
  {
    title: "Next Steps Clarity",
    description: "Clear timeline, pricing overview, and fit assessment.",
    icon: Check,
  },
  {
    title: "No Obligation",
    description: "Just valuable insights — even if we don't work together.",
    icon: Check,
  },
];

export default function BookCallPage() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            {/* Hero */}
            <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-linear-to-br from-blue-50 via-white to-slate-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            Book a Free Strategy Call
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12">
                            30 minutes to discuss your goals, challenges, and how Veilcode can help with web solutions, data analytics, marketing, or AI automation.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-3xl mx-auto">
                            <div className="flex flex-col items-center text-center">
                                <Calendar className="h-10 w-10 text-blue-600 mb-4" />
                                <p className="text-lg font-medium">Quick & No Pressure</p>
                                <p className="text-slate-600 text-sm">No slides — just real talk.</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <Clock className="h-10 w-10 text-blue-600 mb-4" />
                                <p className="text-lg font-medium">Fast Response</p>
                                <p className="text-slate-600 text-sm">Calls start in 1–2 business days.</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <Users className="h-10 w-10 text-blue-600 mb-4" />
                                <p className="text-lg font-medium">Expert Team</p>
                                <p className="text-slate-600 text-sm">Speak with a senior strategist.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Calendar Embed Section */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-3xl font-bold text-center mb-8">Choose a Time That Works for You</h2>
                        <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
                            Select from available slots. We&apos;ll confirm via email.
                        </p>
                        <BookingCalendar />
                    </motion.div>
                </div>
            </section>

            {/* Trust / What to Expect */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">What to Expect on the Call</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                        {callExpectations.map((expectation, index) => (
                            <Card key={index} className="border-none shadow-md bg-white">
                            <CardContent className="p-6">
                                <Check className="h-6 w-6 text-blue-600 mb-4" />
                                    <h3 className="text-xl font-semibold mb-2">{expectation.title}</h3>
                                    <p className="text-slate-600">{expectation.description}</p>
                            </CardContent>
                        </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-slate-900 text-white text-center">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Can&apos;t Find a Slot? Drop Us a Line
                    </h2>
                    <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
                        We&apos;ll get back to you ASAP to schedule manually.
                    </p>
                    <Button size="lg" variant="outline" className="border-white text-slate-800 hover:bg-slate-800" asChild>
                        <Link href="/contact">Go to Contact Form</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}