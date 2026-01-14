"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Clock, Info, PlayCircle, RefreshCw } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MOVIES_DATA } from "@/data/movies";

export default function FeaturedMovies() {
  const [width, setWidth] = useState(0);
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const carousel = useRef();

  // Pick 10 random movies
  const getRandomMovies = useCallback(() => {
    const shuffled = [...MOVIES_DATA].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10);
  }, []);

  // Initialize and set interval
  useEffect(() => {
    setFeaturedMovies(getRandomMovies());

    const interval = setInterval(() => {
      setFeaturedMovies(getRandomMovies());
    }, 10000);

    return () => clearInterval(interval);
  }, [getRandomMovies]);

  useEffect(() => {
    if (carousel.current) {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, [featuredMovies]);

  return (
    <section className="py-20 bg-bg-base overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-primary rounded-full"></span>
                Instant <span className="text-primary italic">Discovery</span>
                </h2>
                
            </motion.div>

            <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full self-start md:self-auto">
                <RefreshCw size={16} className="text-primary animate-spin-slow" />
                <span className="text-xs font-bold text-white/50 uppercase tracking-widest">Next Shuffle in 10s</span>
            </div>
        </div>
      </div>

      <motion.div 
        ref={carousel} 
        className="cursor-grab active:cursor-grabbing pl-4 sm:pl-8 lg:pl-16 overflow-hidden"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div 
          drag="x" 
          dragConstraints={{ right: 0, left: -width }} 
          className="flex gap-6 py-4"
        >
          <AnimatePresence mode="popLayout">
            {featuredMovies.map((movie, index) => (
                <motion.div
                    key={`${movie.id}-${index}`}
                    initial={{ opacity: 0, scale: 0.8, x: 50 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.8, x: -50 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    layout
                >
                    <MovieCard movie={movie} />
                </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}

function MovieCard({ movie }) {
  return (
    <motion.div 
      className="min-w-[280px] h-[400px] relative rounded-3xl overflow-hidden group shadow-2xl shadow-black/50 bg-bg-medium border border-white/5"
      whileHover={{ y: -12, transition: { duration: 0.4 } }}
    >
      {/* Movie Image */}
      <div className="absolute inset-0">
        <Image
          src={movie.image}
          alt={movie.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 280px, 300px"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-base via-bg-base/20 to-transparent opacity-90" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
        <div className="transform translate-y-6 group-hover:translate-y-0 transition-all duration-500">
          <div className="flex gap-2 mb-3">
            <span className="px-2 py-1 bg-primary/20 backdrop-blur-md rounded-lg text-[10px] font-black text-primary border border-primary/30 uppercase tracking-tighter">
                {movie.genre}
            </span>
            <span className="px-2 py-1 bg-white/10 backdrop-blur-md rounded-lg text-[10px] font-black text-white/70 border border-white/10 uppercase tracking-tighter">
                {movie.year}
            </span>
          </div>
          
          <h3 className="text-2xl font-black text-white mb-2 leading-[1.1] tracking-tight group-hover:text-primary transition-colors">
            {movie.title}
          </h3>
          
          <div className="flex items-center gap-4 text-xs text-gray-400 mb-6 font-bold uppercase tracking-widest">
            <span className="flex items-center gap-1.5 text-accent">
              <Star size={14} fill="currentColor" /> {movie.rating}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} /> 128m
            </span>
          </div>
          
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <Link href={`/movies/${movie.id}`} className="flex-[2] py-2.5 bg-primary hover:bg-primary-dark rounded-xl text-white font-bold transition-all flex items-center justify-center gap-2 shadow-xl shadow-primary/20 text-xs">
                <Info size={14} /> Details
            </Link>
            <a 
                href={`https://www.youtube.com/results?search_query=${encodeURIComponent(movie.title + " trailer")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-xl text-white font-bold transition-all flex items-center justify-center gap-2 border border-white/10 shadow-xl text-xs"
            >
                <PlayCircle size={14} /> Trailer
            </a>
          </div>
        </div>
      </div>
      
      {/* ID Badge */}
      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-black text-white/50 border border-white/5 z-20 italic">
        #{movie.id}
      </div>
    </motion.div>
  );
}
