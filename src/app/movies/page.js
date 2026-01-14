"use client";

import { MOVIES_DATA } from "@/data/movies";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Clock, Filter, Search, Play, Info, ChevronRight, LayoutGrid, List } from "lucide-react";
import { useState, useMemo } from "react";

export default function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [viewMode, setViewMode] = useState("grid"); // grid or list

  const genres = useMemo(() => ["All", ...new Set(MOVIES_DATA.map((m) => m.genre))], []);

  const filteredMovies = useMemo(() => {
    return MOVIES_DATA.filter((movie) => {
      const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesGenre = selectedGenre === "All" || movie.genre === selectedGenre;
      return matchesSearch && matchesGenre;
    });
  }, [searchQuery, selectedGenre]);

  // Featured movie (let's pick the first one or top rated)
  const featured = MOVIES_DATA[0];

  return (
    <div className="min-h-screen bg-bg-base text-white pb-20">
      {/* Dynamic Background Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] bg-secondary/10 rounded-full blur-[100px]" />
      </div>

      {/* Explore Hero Banner */}
      <section className="relative h-[40vh] md:h-[30vh] w-full overflow-hidden mb-12">
        <Image
          src="https://t4.ftcdn.net/jpg/02/71/50/69/360_F_271506927_WWFfd92jDIIDx6DgMflakU14o5jRPgBm.jpg"
          alt="Featured"
          fill
          className="object-cover opacity-40 blur-[2px]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-base via-bg-base/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-base via-transparent to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block border border-accent/30">
                Featured Masterpiece
              </span>
              <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">
                Explore the <span className="text-primary italic">Cinema</span>
              </h1>
              <p className="text-text-secondary text-lg max-w-xl mb-8 line-clamp-2 md:line-clamp-none">
                Dive into our collection of {MOVIES_DATA.length} handpicked films. From silent classics to modern blockbusters.
              </p>
              
              <div className="flex flex-wrap gap-4">
                 <Link href={`/movies/${featured.id}`} className="px-6 py-3 bg-primary hover:bg-primary-dark rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-primary/25">
                    <Info size={18} /> Watch Details
                 </Link>
                 <a 
                    href={`https://www.youtube.com/results?search_query=${encodeURIComponent(featured.title + " trailer")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white/5 hover:bg-white/10 rounded-xl font-bold border border-white/10 flex items-center gap-2 transition-all"
                >
                    <Play size={18} fill="currentColor" /> Watch Trailer
                 </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Advanced Filters & Search Bar */}
        <div className="sticky top-24 z-30 mb-12">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-bg-medium/80 backdrop-blur-xl p-4 md:p-6 rounded-3xl border border-white/10 shadow-2xl flex flex-col lg:flex-row gap-6 items-center justify-between"
            >
                {/* Search */}
                <div className="relative w-full lg:max-w-md group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-primary transition-colors" size={20} />
                    <input
                        type="text"
                        placeholder="Search for masterpieces..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-bg-base/50 border border-white/5 text-white pl-12 pr-4 py-3.5 rounded-2xl focus:outline-none focus:border-primary/50 transition-all focus:ring-4 focus:ring-primary/10 placeholder:text-text-muted/50"
                    />
                </div>

                {/* Genre Tags */}
                <div className="flex items-center gap-3 w-full lg:w-auto overflow-hidden">
                    <Filter className="text-primary shrink-0 lg:block hidden" size={20} />
                    <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide mask-fade-right">
                        {genres.map((genre) => (
                            <button
                                key={genre}
                                onClick={() => setSelectedGenre(genre)}
                                className={`px-5 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all border ${
                                    selectedGenre === genre
                                    ? "bg-primary border-primary text-white shadow-lg shadow-primary/20 scale-105"
                                    : "bg-white/5 border-white/5 text-text-secondary hover:text-white hover:bg-white/10"
                                }`}
                            >
                                {genre}
                            </button>
                        ))}
                    </div>
                </div>

                {/* View Switch */}
                <div className="hidden lg:flex items-center gap-1 bg-bg-base/50 p-1 rounded-xl border border-white/5">
                    <button 
                        onClick={() => setViewMode("grid")}
                        className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-primary text-white shadow-md' : 'text-text-muted hover:text-white'}`}
                    >
                        <LayoutGrid size={18} />
                    </button>
                    <button 
                        onClick={() => setViewMode("list")}
                        className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-primary text-white shadow-md' : 'text-text-muted hover:text-white'}`}
                    >
                        <List size={18} />
                    </button>
                </div>
            </motion.div>
        </div>

        {/* Movie Results Grid */}
        <div className="min-h-[400px]">
            <AnimatePresence mode="popLayout">
                {filteredMovies.length > 0 ? (
                <motion.div 
                    layout
                    className={viewMode === 'grid' 
                        ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8"
                        : "flex flex-col gap-4"
                    }
                >
                    {filteredMovies.map((movie, index) => (
                    <motion.div
                        key={movie.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4, delay: index * 0.02 }}
                    >
                        <MovieCard movie={movie} viewMode={viewMode} />
                    </motion.div>
                    ))}
                </motion.div>
                ) : (
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    className="text-center py-32"
                >
                    <div className="inline-block p-6 bg-white/5 rounded-full mb-6">
                        <Search size={48} className="text-text-muted" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">No results found</h2>
                    <p className="text-text-secondary mb-8">We couldn't find any movies matching "{searchQuery}"</p>
                    <button 
                        onClick={() => {setSearchQuery(""); setSelectedGenre("All")}}
                        className="px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-xl font-bold transition-all"
                    >
                        Reset All Filters
                    </button>
                </motion.div>
                )}
            </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function MovieCard({ movie, viewMode }) {
  if (viewMode === 'list') {
    return (
        <Link href={`/movies/${movie.id}`} className="group bg-bg-medium/40 hover:bg-bg-medium border border-white/5 hover:border-primary/30 p-4 rounded-2xl flex items-center gap-6 transition-all">
            <div className="relative w-16 h-24 rounded-lg overflow-hidden shrink-0">
                <Image src={movie.image} alt={movie.title} fill className="object-cover" />
            </div>
            <div className="flex-grow">
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{movie.title}</h3>
                <div className="flex items-center gap-3 text-sm text-text-muted mt-1">
                    <span className="flex items-center gap-1 text-accent font-bold"><Star size={14} fill="currentColor" /> {movie.rating}</span>
                    <span>•</span>
                    <span>{movie.year}</span>
                    <span>•</span>
                    <span className="px-2 py-0.5 bg-white/5 rounded text-xs">{movie.genre}</span>
                </div>
            </div>
            <ChevronRight className="text-text-muted group-hover:text-white transition-all transform group-hover:translate-x-1" />
        </Link>
    );
  }

  return (
    <Link href={`/movies/${movie.id}`} className="group block h-full">
      <div className="relative aspect-[2/3] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl mb-4 bg-bg-medium border border-white/5 group-hover:border-primary/50 transition-all duration-500 group-hover:shadow-primary/20">
        <Image
          src={movie.image}
          alt={movie.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110 blur-0 group-hover:blur-[2px]"
          sizes="(max-width: 768px) 50vw, 20vw"
        />
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-base via-transparent to-transparent opacity-80" />
        
        {/* Content on Hover */}
        <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-bg-base/80 backdrop-blur-md p-3 rounded-xl border border-white/10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-xs text-text-secondary line-clamp-3 mb-3 leading-relaxed">
                    {movie.description}
                </p>
                <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-white px-2 py-1 bg-primary rounded uppercase">Details</span>
                    <div className="flex items-center gap-1 text-accent text-xs font-bold">
                        <Star size={10} fill="currentColor" /> {movie.rating}
                    </div>
                </div>
            </div>
        </div>

        {/* Top Info Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
            <div className="bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg border border-white/10 flex items-center gap-1.5 transform group-hover:-translate-y-1 transition-transform">
                <span className="text-white text-[10px] font-black italic">#{movie.id}</span>
            </div>
            <div className="bg-primary/80 backdrop-blur-md px-2 py-1 rounded-lg border border-white/10 flex items-center gap-1 opacity-1 group-hover:opacity-0 transition-opacity">
                <span className="text-white text-[10px] font-bold">{movie.genre}</span>
            </div>
        </div>

        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100 shadow-lg">
            <Info size={16} className="text-white" />
        </div>
      </div>
      
      <div className="px-1 transform group-hover:translate-x-1 transition-transform duration-300">
        <h3 className="text-white font-bold text-base md:text-lg group-hover:text-primary transition-colors line-clamp-1 leading-tight">
            {movie.title}
        </h3>
        <div className="flex items-center gap-2 text-text-muted text-xs mt-1.5 font-medium">
            <span>{movie.year}</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="flex items-center gap-1 text-accent/80"><Star size={10} fill="currentColor" /> {movie.rating}</span>
        </div>
      </div>
    </Link>
  );
}
