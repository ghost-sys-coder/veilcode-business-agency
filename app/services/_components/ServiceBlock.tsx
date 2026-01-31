"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";


type ServiceBlockProps = {
    title: string;
    description: string;
    bullets: string[];
    imageSrc: string;
    imageAlt: string;
    href: string;
    reverse?: boolean;
};

export function ServiceBlock({
    title,
    description,
    bullets,
    imageSrc,
    imageAlt,
    href,
    reverse = false,
}: ServiceBlockProps) {
    return (
        <section className="py-20 md:py-28 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${reverse ? "lg:flex-row-reverse" : ""}`}>
                    {/* Text Column */}
                    <motion.div
                        initial={{ opacity: 0, x: reverse ? 40 : -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900">
                            {title}
                        </h2>
                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                            {description}
                        </p>
                        <ul className="space-y-4">
                            {bullets.map((bullet, i) => (
                                <li key={i} className="flex items-start gap-3 text-slate-700">
                                    <span className="mt-1.5 h-2 w-2 rounded-full bg-blue-500 shrink-0" />
                                    {bullet}
                                </li>
                            ))}
                        </ul>
                        <Button className="bg-blue-500 hover:bg-blue-600 group" asChild>
                            <Link href={href}>
                                View Service Details
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </motion.div>

                    {/* Visual Column */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 aspect-4/3"
                    >
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        {/* Subtle overlay gradient for premium feel */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}