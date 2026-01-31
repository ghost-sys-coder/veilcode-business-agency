"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from "motion/react";

const processSteps = [
    {
        icon: "/assets/agency.jpg",
        title: "Discovery",
        description: "Understand your business goals and challenges.",
    },
    {
        icon: "/assets/agency.jpg",
        title: "Strategy",
        description: "Develop a tailored plan for success.",
    },
    {
        icon: "/assets/agency.jpg",
        title: "Build",
        description: "Create robust digital systems.",
    },
    {
        icon: "/assets/agency.jpg",
        title: "Optimize",
        description: "Continuously improve and scale.",
    },
];

const ProcessSteps = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {processSteps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="text-center relative flex flex-col gap-1 justify-center items-center rounded-xl shadow-md"
                        >
                            <div className="bg-white p-1 rounded-sm shadow-sm w-fit">
                                <Image
                                    src={step.icon}
                                    alt={step.title} width={40}
                                    height={40}
                                    className="mx-auto mb-4"
                                />
                            </div>
                            <h3 className="font-semibold">{step.title}</h3>
                            <p className="text-slate-600">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProcessSteps