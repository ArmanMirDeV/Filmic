"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PlayCircle, PlusCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[25vh] flex items-center justify-center overflow-hidden bg-bg-base">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px] mix-blend-screen opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary-deeper bg-clip-text text-transparent bg-300% animate-gradient">
              Filmic
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-text-secondary mb-10 max-w-2xl mx-auto font-light"
        >
          Your personal movie library. Discover, organize, and track your cinematic journey in one stunning space.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/movies"
            className="group relative px-8 py-4 bg-primary hover:bg-primary-dark rounded-full text-white font-medium text-lg transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 flex items-center gap-2 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Browse Movies <PlayCircle size={20} />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>

          <Link
            href="/add-movies"
            className="group px-8 py-4 bg-bg-lighter/50 hover:bg-bg-lighter backdrop-blur-sm border border-white/10 hover:border-white/20 rounded-full text-white font-medium text-lg transition-all duration-300 flex items-center gap-2"
          >
           <span>Add Your Collection</span> <PlusCircle size={20} className="text-secondary group-hover:text-white transition-colors"/>
          </Link>
        </motion.div>
      </div>
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10 pointer-events-none" />
    </section>
  );
}
