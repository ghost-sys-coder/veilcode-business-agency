"use client";
import React from 'react';
import { motion } from "motion/react";

const ServicesHero = () => {
    return (
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-linear-to-br from-blue-50 via-white to-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                        Our Solutions
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
                        Powerful digital services designed for growth, scale, and intelligence.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default ServicesHero