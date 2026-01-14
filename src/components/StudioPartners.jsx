"use client";

import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { COMPANIES_DATA } from "@/data/companies";
import { Trophy, Film } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export default function StudioPartners() {
  // We'll prepare 3 variations of the list to ensure visual variety
  const col1Data = [...COMPANIES_DATA, ...COMPANIES_DATA];
  const col2Data = [...[...COMPANIES_DATA].reverse(), ...[...COMPANIES_DATA].reverse()];
  const col3Data = [...COMPANIES_DATA.slice(8), ...COMPANIES_DATA.slice(0, 8), ...COMPANIES_DATA.slice(8), ...COMPANIES_DATA.slice(0, 8)];

  return (
    <section className="py-24 bg-bg-base relative overflow-hidden h-[900px] md:h-[1100px]">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 h-full flex flex-col">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 shrink-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 text-primary mb-4">
              <span className="w-12 h-[2px] bg-primary"></span>
              <span className="font-black uppercase tracking-[0.3em] text-[10px]">The Architects of Cinema</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
                Studio <span className="text-primary italic">Powerhouses</span>
            </h2>
          </motion.div>
          <p className="text-text-secondary max-w-sm font-medium text-sm md:text-right">
            Every studio, every story. Explore the complete vertical gallery of the world's most influential production houses.
          </p>
        </div>

        {/* Vertical Marquee Container */}
        <div className="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden relative group/container">
          
          {/* Column 1: Slow Down */}
          <VerticalColumn items={col1Data} direction="down" speed={35} />
          
          {/* Column 2: Fast Up */}
          <VerticalColumn items={col2Data} direction="up" speed={45} className="hidden md:flex" />
          
          {/* Column 3: Medium Down */}
          <VerticalColumn items={col3Data} direction="down" speed={40} className="hidden lg:flex" />

          {/* Bottom Gradient Fade */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-bg-base to-transparent z-30 pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-bg-base to-transparent z-30 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

function VerticalColumn({ items, direction = "down", speed = 30, className = "" }) {
  const columnRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);
  const y = useMotionValue(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const calcHeight = () => {
        if (columnRef.current) {
            setContentHeight(columnRef.current.scrollHeight / 2);
        }
    };
    
    // Tiny delay to ensure images/layout are set
    const timer = setTimeout(calcHeight, 200);
    window.addEventListener('resize', calcHeight);
    
    return () => {
        clearTimeout(timer);
        window.removeEventListener('resize', calcHeight);
    };
  }, [items]);

  useAnimationFrame((t, delta) => {
    if (isPaused || !contentHeight) return;

    const moveBy = (delta / 1000) * speed;
    let currentY = y.get();
    
    if (direction === "down") {
        currentY += moveBy;
        if (currentY >= 0) {
            currentY = -contentHeight;
        }
    } else {
        currentY -= moveBy;
        if (currentY <= -contentHeight) {
            currentY = 0;
        }
    }
    
    y.set(currentY);
  });

  return (
    <div 
        className={`flex flex-col gap-6 ${className}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
    >
        <motion.div 
            ref={columnRef}
            style={{ y }}
            className="flex flex-col gap-6"
        >
            {items.map((company, index) => (
                <div
                    key={`${company.id}-${index}`}
                    className="group relative bg-bg-medium/40 backdrop-blur-xl border border-white/5 p-8 rounded-[2rem] hover:bg-bg-medium/60 transition-all duration-500 overflow-hidden"
                >
                    <div className="flex items-center justify-between mb-4 relative z-10">
                        <div className="relative w-20 h-8 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500">
                            <img 
                                src={company.logo} 
                                alt={company.name} 
                                className="max-w-full max-h-full object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]" 
                            />
                        </div>
                        <span className="text-lg font-black text-white/20 italic group-hover:text-primary/40 transition-colors uppercase text-[10px] tracking-widest">{company.year}</span>
                    </div>
                    
                    <h3 className="text-xl font-black text-white mb-2 relative z-10 group-hover:text-primary transition-colors leading-tight">
                        {company.name}
                    </h3>
                    <p className="text-text-secondary text-xs leading-relaxed line-clamp-2 mb-4 relative z-10 font-medium">
                        {company.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 relative z-10 opacity-60 group-hover:opacity-100 transition-opacity">
                        {company.notableFilms.slice(0, 2).map((film, i) => (
                            <span key={i} className="text-[9px] font-black text-white/60 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5 group-hover:border-primary/20 transition-colors">
                                {film}
                            </span>
                        ))}
                    </div>

                    <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-10 transition-opacity pointer-events-none">
                        <Trophy size={48} className="text-primary" />
                    </div>
                    
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </div>
            ))}
        </motion.div>
    </div>
  );
}
