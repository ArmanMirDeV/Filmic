"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, Film, Search, Clapperboard } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg-base flex items-center justify-center px-4 overflow-hidden relative">
      {/* Background Cinematic Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
            animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.15, 0.1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px]" 
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/p6.png')] opacity-[0.03]" />
      </div>

      <div className="max-w-2xl w-full text-center relative z-10">
        {/* Animated "404" with Film Effect */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative inline-block mb-12"
        >
            <h1 className="text-[12rem] md:text-[18rem] font-black text-white leading-none tracking-tighter opacity-10">
                404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                    <Clapperboard size={120} className="text-primary opacity-80" strokeWidth={1.5} />
                </motion.div>
            </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
        >
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                Scene <span className="text-primary italic">Not Found</span>
            </h2>
            <p className="text-text-secondary text-lg md:text-xl font-medium max-w-md mx-auto leading-relaxed">
                It looks like this reel got lost in the edit. The page you're looking for has moved to the cutting room floor.
            </p>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
            <Link 
                href="/"
                className="w-full sm:w-auto px-10 py-5 bg-primary hover:bg-primary-dark text-white rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-2xl shadow-primary/20 flex items-center justify-center gap-3 active:scale-95 group"
            >
                <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> 
                Return to Premiere
            </Link>
            
            <Link 
                href="/movies"
                className="w-full sm:w-auto px-10 py-5 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-black text-sm uppercase tracking-widest transition-all border border-white/10 flex items-center justify-center gap-3 active:scale-95"
            >
                <Search size={20} /> Browse Library
            </Link>
        </motion.div>

        {/* Cinematic Footer Elements */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 1 }}
            className="mt-20 flex items-center justify-center gap-6"
        >
            <div className="h-[1px] w-12 bg-white/20" />
            <Film size={20} className="text-text-muted" />
            <div className="h-[1px] w-12 bg-white/20" />
        </motion.div>
      </div>

      {/* Grid Masks Style */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
    </div>
  );
}
