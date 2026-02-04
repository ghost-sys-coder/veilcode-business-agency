import React from 'react'
import { motion } from "motion/react";
import { Code2, Lightbulb, LineChart, Search } from 'lucide-react';


const processSteps = [
    {
        icon: <Search className='text-blue-600 h-10 w-10' />,
        title: "Discovery",
        description: "Understand your business goals and challenges.",
    },
    {
        icon: <Lightbulb className='text-blue-600 h-10 w-10' />,
        title: "Strategy",
        description: "Develop a tailored plan for success.",
    },
    {
        icon: <Code2 className='text-blue-600 h-10 w-10'/>,
        title: "Build",
        description: "Create robust digital systems.",
    },
    {
        icon: <LineChart className='text-blue-600 h-10 w-10' />,
        title: "Optimize",
        description: "Continuously improve and scale.",
    },
];


const ProcessSteps = () => {
  return (
      <section className='py-20 bg-white'>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-md:gap-14">
                    {processSteps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="text-center relative flex flex-col gap-1 justify-center items-center rounded-xl shadow-md p-2 max-md:py-4" 
                        >
                            <div className="bg-white p-1 rounded-sm shadow-sm w-fit mb-2">
                                {step.icon}
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