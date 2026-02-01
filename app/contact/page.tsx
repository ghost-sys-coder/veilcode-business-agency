"use client";
import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "motion/react";
import axios from "axios";

import Link from "next/link";
import { toast } from "sonner";
import ScreenLoader from "@/components/shared/ScreenLoader";

export default function ContactPage() {
    const formRef = useRef<HTMLFormElement | null>(null);
    const [messageDetails, setMessageDetails] = useState({
        name: "",
        email: "",
        companyName: "",
        projectType: "",
        budgetRange: "",
        projectDescription: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();

        setIsSubmitting(true);

        try {
            const { data, status } = await axios.post("/api/client/messages", {
                name: messageDetails.name,
                email: messageDetails.email,
                companyName: messageDetails.companyName,
                projectType: messageDetails.projectType,
                budgetRange: messageDetails.budgetRange,
                projectDescription: messageDetails.projectDescription
            });
            console.log(data);

            if (status === 201 && data?.success) {
                toast.success(data?.message || "You have received an email from us! Check your inbox!");
                return;
            }
        } catch (error) {
            console.error("Failed to send message", error);
        } finally {
            setIsSubmitting(false);
        }

    }

    if (isSubmitting) return <ScreenLoader />


    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-linear-to-br from-blue-50 via-white to-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            Get in Touch
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-8">
                            Let&apos;s build something powerful together. We usually reply within 1-3 hours on weekdays.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                                <Link href="/book-call">Book Free Strategy Call</Link>
                            </Button>

                            <Button
                                size="lg"
                                variant="outline"
                                onClick={() => {
                                    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
                                }}
                            >
                                Or send us a message ↓
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        {/* Left: Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="bg-slate-50/70 backdrop-blur-sm border border-slate-200 rounded-2xl p-8 shadow-sm"
                        >
                            <h2 className="text-3xl font-bold mb-8">Send us a message</h2>

                            <form className="space-y-6" onSubmit={handleSubmit} id="contact-form" ref={formRef}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Full Name</Label>
                                        <Input
                                            id="name"
                                            placeholder="Your name"
                                            required
                                            value={messageDetails.name}
                                            onChange={e => setMessageDetails({ ...messageDetails, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="your@company.com"
                                            required
                                            value={messageDetails.email}
                                            onChange={e => setMessageDetails({ ...messageDetails, email: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="company">Company (optional)</Label>
                                    <Input
                                        id="company"
                                        placeholder="Your company name"
                                        value={messageDetails.companyName}
                                        onChange={e => setMessageDetails({ ...messageDetails, companyName: e.target.value })}
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="project-type">Project Type</Label>
                                        <Select
                                            value={messageDetails.projectType}
                                            onValueChange={(value) => setMessageDetails({ ...messageDetails, projectType: value })}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select one" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="web">Web Design & Development</SelectItem>
                                                <SelectItem value="growth">Growth & Advertising</SelectItem>
                                                <SelectItem value="analytics">Data Analytics & BI</SelectItem>
                                                <SelectItem value="ai">AI & Automation</SelectItem>
                                                <SelectItem value="other">Other / Combination</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="budget">Budget Range</Label>
                                        <Select
                                            value={messageDetails.budgetRange}
                                            onValueChange={(value) => setMessageDetails({ ...messageDetails, budgetRange: value })}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select your budget range" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="120-300">$120 – $300</SelectItem>
                                                <SelectItem value="300-700">$300 – $700</SelectItem>
                                                <SelectItem value="700-1500">$700 - $1500</SelectItem>
                                                <SelectItem value="1500-3000">$1500 - $3000</SelectItem>
                                                <SelectItem value="3000+">$3000+</SelectItem>
                                                <SelectItem value="exploring">Just exploring</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">Message / Project Brief</Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Tell us about your goals, timeline, challenges, or anything else that would help us understand your project..."
                                        className="min-h-35"
                                        required
                                        value={messageDetails.projectDescription}
                                        onChange={e => setMessageDetails({ ...messageDetails, projectDescription: e.target.value })}
                                    />
                                </div>

                                <Button type="submit" size="lg" className="bg-blue-600 hover:bg-blue-700 w-full md:w-auto">
                                    Send Message
                                </Button>
                            </form>
                        </motion.div>

                        {/* Right: Trust / Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="space-y-10 lg:pt-8"
                        >
                            <div>
                                <h3 className="text-2xl font-bold mb-6">Why choose Veilcode?</h3>
                                <ul className="space-y-4 text-lg">
                                    <li className="flex items-start gap-3">
                                        <span className="text-blue-600 text-xl mt-0.5">✓</span>
                                        <span>Honest scoping — fixed-price proposals when possible</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-blue-600 text-xl mt-0.5">✓</span>
                                        <span>Strategy-first approach — not just execution</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-blue-600 text-xl mt-0.5">✓</span>
                                        <span>Most clients stay 12–36 months</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-blue-600 text-xl mt-0.5">✓</span>
                                        <span>Remote-first team — seamless global collaboration</span>
                                    </li>
                                </ul>
                            </div>

                            <Card className="border-none shadow-lg bg-linear-to-br from-blue-50 to-slate-50">
                                <CardContent className="p-8">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="text-3xl font-bold text-blue-600">4.9</div>
                                        <div>
                                            <div className="text-sm text-slate-500">Client satisfaction</div>
                                            <div className="text-lg font-medium">based on 40+ projects</div>
                                        </div>
                                    </div>
                                    <p className="text-slate-600 italic">
                                        “Veilcode didn&apos; just build our platform — they helped us rethink our entire growth strategy.”
                                    </p>
                                    <p className="mt-2 text-sm text-slate-500">— Founder, Fintech Startup</p>
                                </CardContent>
                            </Card>

                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold">Preferred way: Strategy Call</h3>
                                <p className="text-slate-600">
                                    30-minute no-pressure call to understand your goals and see if we&apos;re the right fit.
                                </p>
                                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                                    <Link href="/book-call">Book 30-min Discovery Call</Link>
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Final CTA Band */}
            <section className="py-20 bg-slate-900 text-white text-center">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                    >
                        Ready to start something meaningful?
                    </motion.h2>
                    <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
                        Whether it&apos;s a quick question or a full project — we&apos;re here to help.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                            <Link href="/book-call">Book Free Strategy Call</Link>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-slate-600 text-black hover:bg-slate-800"
                            onClick={() => {
                                formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
                            }}
                        >
                            Continue to Message Form ↑
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}