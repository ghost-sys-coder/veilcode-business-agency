"use client";
import React from 'react';
import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const services = [
    {
        icon: "/assets/agency.jpg", // Placeholder for icon
        title: "Web Design & Development",
        description: "Craft high-performing websites and scalable web applications focused on user experience and data-driven analytics.",
    },
    {
        icon: "/assets/agency.jpg",
        title: "Growth & Advertising Systems",
        description: "Launch profitable ad campaigns and build systems to drive customer acquisition and revenue growth.",
    },
    {
        icon: "/assets/agency.jpg",
        title: "Data Analytics & BI",
        description: "Unlock actionable insights through advanced data analytics and business intelligence tools.",
    },
    {
        icon: "/assets/agency.jpg",
        title: "AI & Automation",
        description: "Implement AI-driven solutions and automation to streamline operations and enhance efficiency.",
    },
];

const ServicesSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <Card className={cn(
                                "h-full hover:shadow-lg transition-shadow cursor-pointer",
                                i === 0 ? "bg-blue-800 text-white" : "bg-slate-200"

                            )}>
                                <CardHeader className=''>
                                    <Image src={service.icon} alt={service.title} width={40} height={40} className='rounded-sm p-1 shadow' />
                                    <CardTitle className={cn("mt-4", i === 0 && "font-semibold")}>{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className={cn("", i === 0 && "text-white/80")}>{service.description}</CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServicesSection