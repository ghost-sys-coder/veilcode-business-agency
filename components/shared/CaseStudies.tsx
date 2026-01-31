"use client";
import React from 'react'
import Image from 'next/image';
import { motion } from "motion/react";
import { Card, CardHeader, CardContent, CardDescription, CardTitle } from '../ui/card';

const caseStudies = [
    {
        image: "/assets/ecommerce-project1.png",
        title: "E-commerce Platform",
        industry: "Retail",
        result: "+220% lead increase",
    },
    {
        image: "/assets/realestate-project1.png",
        title: "Real Estate",
        industry: "Real Estate",
        result: "+150% user engagement",
    },
    {
        image: "/assets/ai-project.png",
        title: "AI Automation Tool",
        industry: "Tech",
        result: "30% cost reduction",
    },
];

const CaseStudies = () => {
    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {caseStudies.map((study, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                                <CardContent className="p-0">
                                    <Image
                                        src={study.image}
                                        alt={study.title}
                                        width={400} height={200}
                                        className="w-full h-80 object-cover"
                                    />
                                </CardContent>
                                <CardHeader>
                                    <CardTitle>{study.title}</CardTitle>
                                    <CardDescription>{study.industry}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-blue-500 font-semibold">{study.result}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CaseStudies