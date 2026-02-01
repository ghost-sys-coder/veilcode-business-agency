import Image from "next/image";
import { motion } from "motion/react";

// import { ArrowRight } from "lucide-react";
// import { Button } from "../ui/button";

// Reusable Case Study Card Component
type CaseStudy = {
    slug: string;
    title: string;
    client: string;
    industry: string;
    image: string;
    result: string;
    resultLabel: string;
    tags: string[];
};

export function CaseStudyCard({ project }: { project: CaseStudy }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300"
        >
            <div className="relative aspect-4/3 overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-blue-600">{project.industry}</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-sm text-slate-500">{project.client}</span>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-700 transition-colors">
                    {project.title}
                </h3>

                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                    <span className="text-lg font-bold">{project.result}</span>
                    <span>{project.resultLabel}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-xs px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* <Button variant="ghost" className="group/btn text-blue-600 hover:text-blue-700 p-0">
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button> */}
            </div>
        </motion.div>
    );
}