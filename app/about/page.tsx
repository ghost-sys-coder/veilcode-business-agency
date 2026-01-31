"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const values = [
  {
    title: "Excellence in execution",
    description: "We deliver pixel-perfect, high-performance solutions every time.",
  },
  {
    title: "Transparency & honesty",
    description: "Clear communication and no hidden surprises — ever.",
  },
  {
    title: "Business-first thinking",
    description: "Every decision is made with your growth and ROI in mind.",
  },
  {
    title: "Continuous improvement",
    description: "We learn, iterate, and evolve — just like the best companies do.",
  },
  {
    title: "Long-term partnerships",
    description: "We build relationships that last, not just projects that end.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero / Who We Are */}
      <section className="pt-18 pb-16 md:pt-12 md:pb-24 bg-linear-to-br from-blue-50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                Who We Are
              </span>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Premium Digital Systems Built for Growth
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Veilcode is a digital solutions firm focused on building high-performing digital products, growth systems, and data intelligence tools for businesses of all sizes.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We operate at the intersection of <strong>design</strong>, <strong>software engineering</strong>, <strong>marketing</strong>, and <strong>analytics</strong>, enabling companies to grow faster and operate smarter.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                <Image
                  src="/assets/digital-systems-1.jpg"
                  alt="Veilcode team working on digital systems"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
              </div>
              {/* Optional decorative overlay */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Our Mission</h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                To help businesses scale through technology, data, and intelligent systems.
              </p>
              <Button className="bg-blue-500 hover:bg-blue-600" asChild>
                <Link href="/contact">Start a Conversation</Link>
              </Button>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/assets/mission-2.jpg"
                alt="Mission visualization"
                fill
                className="object-cover bg-center"
              />
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse"
          >
            <div className="space-y-6 lg:order-2">
              <h2 className="text-4xl font-bold">Our Vision</h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                To become one of Africa’s leading digital product and analytics firms, delivering world-class solutions globally.
              </p>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl lg:order-1">
              <Image
                src="/assets/vision-1.jpg"
                alt="Vision visualization"
                fill
                className="bg-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              These principles guide every project, every conversation, and every decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow bg-white/70 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-6 w-6 text-blue-500" />
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to build something powerful together?
          </motion.h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Let’s create digital systems that don’t just look good — they drive real business results.
          </p>
          <Button size="lg" className="bg-blue-500 hover:bg-blue-600" asChild>
            <Link href="/book-call">Book Free Strategy Call</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}