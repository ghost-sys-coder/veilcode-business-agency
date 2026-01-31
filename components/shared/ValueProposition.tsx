import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react";
import { Check } from 'lucide-react';

const valueProps = [
  "Strategy-first approach",
  "Data-driven decisions",
  "Scalable architecture",
  "Conversion-focused design",
  "Long-term partnership mindset",
];

const ValueProposition = () => {
  return (
    <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold">Why Choose Veilcode</h2>
            {valueProps.map((prop, i) => (
              <div key={i} className="flex items-center space-x-2">
                <Check className="text-blue-500" size={20} />
                <span>{prop}</span>
              </div>
            ))}
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Placeholder for system diagram */}
            <Image 
              src="/assets/digital-solutions.png" 
              alt="System diagram" 
              width={600} 
              height={400} 
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </section>
  )
}

export default ValueProposition