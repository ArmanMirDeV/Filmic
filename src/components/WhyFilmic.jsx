"use client";

import { motion } from "framer-motion";
import { Layout, Clapperboard, Zap } from "lucide-react";

const features = [
  {
    icon: <Layout size={32} />,
    title: "Simple & Clean",
    description: "No clutter, no distractions. Just you and your movie collection in a beautifully designed interface.",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "group-hover:border-primary/50"
  },
  {
    icon: <Clapperboard size={32} />,
    title: "Cinematic Experience",
    description: "Immersive visuals and smooth animations that make browsing your library feel like watching a movie.",
    color: "text-secondary",
    bg: "bg-secondary/10",
    border: "group-hover:border-secondary/50"
  },
  {
    icon: <Zap size={32} />,
    title: "Fast & Modern",
    description: "Built with the latest tech for lightning-fast load times and instant interactions.",
    color: "text-accent",
    bg: "bg-accent/10",
    border: "group-hover:border-accent/50"
  }
];

export default function WhyFilmic() {
  return (
    <section className="py-5 bg-bg-base relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Why <span className="text-primary">Filmic</span>?
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Designed for movie lovers who appreciate aesthetics and performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`bg-bg-medium p-8 rounded-2xl border border-white/5 ${feature.border} transition-colors duration-300 group hover:bg-bg-medium/80`}
    >
      <div className={`w-16 h-16 ${feature.bg} ${feature.color} rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
        {feature.icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
        {feature.title}
      </h3>
      <p className="text-text-secondary leading-relaxed group-hover:text-white transition-colors">
        {feature.description}
      </p>
    </motion.div>
  );
}
