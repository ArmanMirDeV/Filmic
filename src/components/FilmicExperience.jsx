"use client";

import { motion } from "framer-motion";

export default function FilmicExperience() {
  return (
    <section className="py-32 bg-bg-base relative overflow-hidden">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      {/* Film Grain / Noise Overlay for texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-10 bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <span className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-4 block">
              The Philosophy
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-white leading-tight tracking-tighter">
              Filmic Experience
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-3xl"
          >
            <p className="text-2xl md:text-4xl text-text-secondary font-light leading-snug">
              “Filmic is designed to feel like <span className="text-white font-medium">cinema</span> — minimal, dark, and <span className="text-primary italic">distraction-free</span>.”
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 flex items-center gap-4"
          >
            <div className="h-[1px] w-12 bg-white/20" />
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="h-[1px] w-12 bg-white/20" />
          </motion.div>
        </div>
      </div>

      {/* Decorative Side Borders (Letterbox Style) */}
      <div className="absolute left-0 top-0 bottom-0 w-8 md:w-20 bg-gradient-to-r from-black/50 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 md:w-20 bg-gradient-to-l from-black/50 to-transparent pointer-events-none" />
    </section>
  );
}
