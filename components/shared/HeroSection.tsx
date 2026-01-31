"use client";
import React from 'react'
import { motion } from "motion/react"
import { Button } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'

const HeroSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                        Design. Growth. Intelligence.
                    </span>
                    <h1 className="text-5xl font-bold leading-tight">
                        We Build Digital Systems That Drive Business Growth
                    </h1>
                    <p className="text-lg text-slate-600">
                        We help businesses design high-performing websites, build scalable web applications, launch profitable ad campaigns, and unlock insights through data analytics.
                    </p>
                    <div className="space-x-4">
                        <Button className="bg-blue-500 hover:bg-blue-600 text-white" asChild>
                            <Link href="/book-call">Book Free Strategy Call</Link>
                        </Button>
                        <Button variant="outline" asChild>
                            <Link href="/work">View Our Work</Link>
                        </Button>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                >
                    {/* Placeholder for abstract illustration/dashboard mockups */}
                    <Image
                        src="/assets/all-services-1.jpg"
                        alt="Digital systems illustration"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-xl"
                    />
                </motion.div>
            </div>
        </section>
    )
}

export default HeroSection