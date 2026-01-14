"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import Image from "next/image";
import { Award, Star } from "lucide-react";
import { ACTORS_DATA } from "@/data/actors";

export default function BestActors() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const x = useMotionValue(0);
  const [isPaused, setIsPaused] = useState(false);

  // Triple the list for a truly infinite feel during manual drag/scroll
  const duplicatedActors = [...ACTORS_DATA, ...ACTORS_DATA, ...ACTORS_DATA];

  useEffect(() => {
    const handleResize = () => {
      if (carousel.current) {
        // Width of one full set of actors
        setWidth(carousel.current.scrollWidth / 3);
      }
    };

    const timer = setTimeout(handleResize, 100);
    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Auto-scroll logic using useAnimationFrame for buttery smooth performance
  useAnimationFrame((t, delta) => {
    if (isPaused || !width) return;

    let moveBy = -0.5; // Speed factor (negative moves left)
    let currentX = x.get();
    let newX = currentX + moveBy;

    // Seamless loop reset
    if (newX <= -width) {
      newX = 0;
    }
    
    x.set(newX);
  });

  return (
    <section className="py-24 bg-bg-base relative overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none select-none">
        <h2 className="text-[20vw] font-black text-white/[0.02] whitespace-nowrap -translate-x-20 tracking-tighter">
            THE LEGENDS THE LEGENDS
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
        >
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 flex items-center gap-4">
                <span className="w-2 h-10 bg-primary rounded-full shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]"></span>
                Icons of <span className="text-primary italic">Performance</span>
            </h2>
            <p className="text-text-secondary max-w-2xl font-medium">
                Celebrating the maestros who bring stories to life. A continuous journey through the souls of cinema.
            </p>
        </motion.div>
      </div>

      {/* Draggable + Auto-Rotating Marquee */}
      <div 
        className="relative flex overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div 
          ref={carousel}
          style={{ x }}
          drag="x"
          dragConstraints={{ right: 0, left: -width * 2 }}
          onDragStart={() => setIsPaused(true)}
          className="flex gap-8 py-8 px-4"
        >
          {duplicatedActors.map((actor, index) => (
            <ActorCard key={`${actor.id}-${index}`} actor={actor} index={index} />
          ))}
        </motion.div>
      </div>

      {/* Cinematic Fog / Fades at the edges */}
      <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-bg-base to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-bg-base to-transparent z-10 pointer-events-none" />

      {/* Interaction Hint */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 flex justify-center">
        <div className="flex items-center gap-3 text-white/20 text-[9px] font-black uppercase tracking-[0.3em] bg-white/[0.02] px-6 py-3 rounded-full border border-white/5">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Drag or Let it Flow — The Legends of the Screen
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
        </div>
      </div>
    </section>
  );
}

function ActorCard({ actor, index }) {
  return (
    <motion.div
        className="min-w-[280px] md:min-w-[320px] relative h-[420px] md:h-[480px] rounded-[2.5rem] overflow-hidden bg-bg-medium border border-white/5 shadow-2xl group flex-shrink-0 select-none"
    >
        {/* Main Image */}
        <Image
            src={actor.image}
            alt={actor.name}
            fill
            className="object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110 pointer-events-none"
            sizes="(max-width: 768px) 280px, 320px"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 pointer-events-none" />
        
        {/* Frame Accent on Hover */}
        <div className="absolute inset-4 border border-white/5 rounded-[2rem] pointer-events-none group-hover:border-primary/40 transition-colors duration-700" />

        {/* Content */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end z-10 pointer-events-none">
            <div className="space-y-4">
                <div className="flex justify-between items-start">
                    <div>
                        <span className="text-primary font-black text-[9px] uppercase tracking-widest mb-1 block">Legendary Actor</span>
                        <h3 className="text-2xl font-black text-white leading-tight group-hover:text-primary transition-colors duration-500">
                            {actor.name}
                        </h3>
                    </div>
                    {actor.oscarWins > 0 && (
                        <div className="flex flex-col items-center bg-accent/20 backdrop-blur-xl px-2.5 py-1.5 rounded-2xl border border-accent/30 shadow-lg">
                            <Award className="text-accent" size={16} />
                            <span className="text-[9px] text-accent font-black mt-1 uppercase leading-none">{actor.oscarWins}</span>
                        </div>
                    )}
                </div>

                <div className="h-[1px] w-0 group-hover:w-full bg-primary/30 transition-all duration-700" />

                <div className="space-y-3 max-h-0 group-hover:max-h-[150px] opacity-0 group-hover:opacity-100 transition-all duration-700 overflow-hidden">
                    <ul className="text-[11px] text-white/50 space-y-1.5 font-medium">
                        {actor.notableRoles.slice(0, 2).map((role, i) => (
                            <li key={i} className="flex items-center gap-2">
                                <div className="w-1 h-1 rounded-full bg-primary" /> {role}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

        {/* Birth Year Badge */}
        <div className="absolute top-6 right-6 bg-black/40 backdrop-blur-md w-10 h-10 rounded-full border border-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none">
            <span className="text-[10px] font-black text-primary italic">est.{actor.birthYear.toString().slice(-2)}</span>
        </div>
    </motion.div>
  );
}
