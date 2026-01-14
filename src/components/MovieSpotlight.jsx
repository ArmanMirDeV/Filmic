"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star, Info, Calendar } from "lucide-react";
import { MOVIES_DATA } from "@/data/movies";

export default function MovieSpotlight() {
  const [index, setIndex] = useState(0);
  
  // Hand-picked top-tier movies for the spotlight shuffle
  const spotlightPool = [
    MOVIES_DATA.find(m => m.id === 4), // Interstellar
    MOVIES_DATA.find(m => m.id === 3), // The Dark Knight
    MOVIES_DATA.find(m => m.id === 5), // Inception
    MOVIES_DATA.find(m => m.id === 1), // Shawshank
    MOVIES_DATA.find(m => m.id === 18) // Spirited Away
  ].filter(Boolean);

  const spotlightMovie = spotlightPool[index];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % spotlightPool.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [spotlightPool.length]);

  return (
    <section className="py-24 bg-bg-base relative overflow-hidden min-h-[800px] flex items-center">
      <AnimatePresence mode="wait">
        <motion.div
           key={spotlightMovie.id}
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           className="w-full"
        >
            {/* Background Decorative Glow (Changes Color per Movie) */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.25, scale: 1 }}
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br ${spotlightMovie.color} rounded-full blur-[120px] pointer-events-none z-0`}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                
                {/* Large Poster Image */}
                <motion.div 
                    initial={{ opacity: 0, x: -50, rotate: -2 }}
                    animate={{ opacity: 1, x: 0, rotate: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full lg:w-1/2"
                >
                    <div className="relative aspect-[2/3] md:aspect-video lg:aspect-[2/3] rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] group border border-white/10">
                    <Image
                        src={spotlightMovie.image}
                        alt={spotlightMovie.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-base via-transparent to-transparent opacity-60" />
                    
                    {/* Floating Rating Badge */}
                    <div className="absolute top-8 left-8 bg-black/60 backdrop-blur-xl px-4 py-2 rounded-2xl border border-white/10 flex items-center gap-2 shadow-2xl">
                        <Star size={18} className="text-accent" fill="currentColor" />
                        <span className="text-white font-black text-xl">{spotlightMovie.rating}</span>
                    </div>
                    </div>
                </motion.div>

                {/* Emotional Content Hook */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full lg:w-1/2 space-y-8 text-center lg:text-left"
                >
                    <div>
                    <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-xs font-black uppercase tracking-[0.2em] border border-primary/20 mb-6 font-mono">
                        Exclusive Spotlight
                    </span>
                    <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter mb-6">
                        {spotlightMovie.title}
                    </h2>
                    <div className="flex items-center justify-center lg:justify-start gap-6 text-text-secondary font-medium uppercase tracking-widest text-[10px]">
                        <span className="flex items-center gap-2 font-black text-white">
                        <Calendar size={12} className="text-primary" /> {spotlightMovie.year}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span className="font-black text-white">{spotlightMovie.genre}</span>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span className="text-text-muted">Director: {spotlightMovie.director}</span>
                    </div>
                    </div>

                    <p className="text-xl md:text-2xl text-text-secondary leading-relaxed font-light">
                    "{spotlightMovie.description.split('.')[0]}."
                    <span className="block mt-4 text-white/40 text-lg italic">
                        The definitive cinematic experience of our generation.
                    </span>
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                    <Link 
                        href={`/movies/${spotlightMovie.id}`}
                        className="w-full sm:w-auto px-10 py-5 bg-primary hover:bg-primary-dark text-white rounded-2xl font-black text-lg transition-all shadow-2xl shadow-primary/40 flex items-center justify-center gap-3 active:scale-95 group"
                    >
                        <Info size={22} className="group-hover:rotate-12 transition-transform" /> View Details
                    </Link>
                    
                    <Link 
                        href="/movies"
                        className="w-full sm:w-auto px-10 py-5 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-bold text-lg transition-all border border-white/10 flex items-center justify-center gap-3"
                    >
                        Explore More
                    </Link>
                    </div>

                    {/* Simple Indicator Dots */}
                    <div className="flex justify-center lg:justify-start gap-2 pt-8">
                        {spotlightPool.map((_, i) => (
                            <div 
                                key={i}
                                className={`h-1 rounded-full transition-all duration-500 ${index === i ? "w-8 bg-primary" : "w-2 bg-white/10"}`}
                            />
                        ))}
                    </div>
                </motion.div>

                </div>
            </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
