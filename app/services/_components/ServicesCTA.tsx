"use client";
import React from 'react';
import { motion } from "motion/react";
import { Button } from '@/components/ui/button';
import Link from 'next/link';


const ServicesCTA = () => {
    return (
        <section className="py-20 bg-slate-900 text-white text-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl font-bold mb-6"
                >
                    Ready to transform your business?
                </motion.h2>
                <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                    Choose the solution that fits your goals — or let’s discuss a custom combination.
                </p>
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600" asChild>
                    <Link href="/book-call">Book Free Strategy Call</Link>
                </Button>
            </div>
        </section>
    )
}

export default ServicesCTA