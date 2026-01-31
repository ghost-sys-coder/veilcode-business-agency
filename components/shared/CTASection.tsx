"use client";
import React from 'react'
import { motion } from "motion/react";
import { Button } from '../ui/button';
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="py-20 bg-slate-900 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-6"
          >
            Ready to build something powerful?
          </motion.h2>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white" asChild>
            <Link href="/book-call">Book Strategy Call</Link>
          </Button>
        </div>
      </section>
  )
}

export default CTASection