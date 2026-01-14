"use client";

import { MOVIES_DATA } from "@/data/movies";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Clock, ChevronLeft, User, Film, PlayCircle, Share2, Calendar, Bookmark, BookmarkCheck } from "lucide-react";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Toast from "@/components/Toast";

export default function MovieDetailsPage() {
  const params = useParams();
  const id = params.id;
  const movie = MOVIES_DATA.find((m) => m.id === parseInt(id));
  
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [toast, setToast] = useState({ visible: false, message: "", type: "success" });

  useEffect(() => {
    if (movie) {
      const wishlist = JSON.parse(localStorage.getItem("filmic_wishlist") || "[]");
      setIsInWishlist(wishlist.includes(movie.id));
    }
  }, [movie]);

  const toggleWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem("filmic_wishlist") || "[]");
    let newWishlist;
    let message = "";
    let type = "success";

    if (isInWishlist) {
      newWishlist = wishlist.filter(item => item !== movie.id);
      message = `${movie.title} removed from your watchlist.`;
      type = "update";
    } else {
      newWishlist = [...wishlist, movie.id];
      message = `${movie.title} added to your personal watchlist!`;
      type = "success";
    }

    localStorage.setItem("filmic_wishlist", JSON.stringify(newWishlist));
    setIsInWishlist(!isInWishlist);
    
    // Show Toast
    setToast({ visible: true, message, type });
    setTimeout(() => setToast({ ...toast, visible: false }), 4000);
  };

  if (!movie) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-base">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Movie Not Found</h1>
           <Link
            href="/movies"
            className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
          >
            <ChevronLeft size={20} className="mr-2" />
            Back to Explore
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-base pb-20 overflow-x-hidden">
      {/* Toast Notification */}
      <Toast 
        isVisible={toast.visible} 
        message={toast.message} 
        type={toast.type}
        onClose={() => setToast({ ...toast, visible: false })}
      />

      {/* Hero Header with Animated Gradient & Images */}
      <div className="relative h-[65vh] md:h-[80vh] w-full overflow-hidden">
        <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
        >
            <Image
            src={movie.image}
            alt={movie.title}
            fill
            className="object-cover blur-[4px]"
            priority
            />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-bg-base via-bg-base/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-base/80 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12 md:pb-20">
                <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-end">
                    
                    {/* Fixed motion.div poster issue */}
                    <motion.div 
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hidden md:block relative w-64 lg:w-72 aspect-[2/3] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 shrink-0 z-20 group"
                    >
                        <Image
                        src={movie.image}
                        alt={movie.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                            <div className="p-4 bg-primary rounded-full shadow-2xl scale-75 group-hover:scale-100 transition-transform">
                                <PlayCircle size={40} className="text-white" />
                            </div>
                        </div>
                    </motion.div>

                    <div className="flex-1 z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <Link
                                href="/movies"
                                className="inline-flex items-center text-text-secondary hover:text-white transition-all mb-6 group bg-white/5 px-4 py-2 rounded-full border border-white/5"
                            >
                                <ChevronLeft size={18} className="mr-1 group-hover:-translate-x-1 transition-transform" />
                                Back to Collection
                            </Link>

                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tighter leading-[0.9]">
                                {movie.title}
                            </h1>
                            
                            <div className="flex flex-wrap items-center gap-4 md:gap-8 text-base md:text-xl text-gray-300 font-medium">
                                <span className="flex items-center gap-2 text-primary">
                                    <Film size={20} /> {movie.genre}
                                </span>
                                <span className="flex items-center gap-2 text-accent">
                                    <Star size={20} fill="currentColor" /> {movie.rating}
                                </span>
                                <span className="flex items-center gap-2 text-white/60">
                                    <Calendar size={20} /> {movie.year}
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mt-8 md:mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
            
            {/* Mobile Poster Section */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="md:hidden w-full aspect-[2/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
                <Image src={movie.image} alt={movie.title} fill className="object-cover" />
            </motion.div>

            <div className="lg:col-span-2 space-y-16">
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent italic">
                        The Story
                    </h2>
                    <p className="text-xl md:text-2xl text-text-secondary leading-relaxed font-light">
                        {movie.description}
                    </p>
                </motion.section>
                
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl font-bold text-white mb-10 border-l-4 border-secondary pl-4">
                        Cast & Production
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-bg-medium/40 backdrop-blur-md p-8 rounded-3xl border border-white/5 hover:bg-bg-medium/60 transition-colors group">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-secondary/10 rounded-2xl text-secondary group-hover:scale-110 transition-transform font-bold">
                                    DR
                                </div>
                                <p className="text-sm text-text-muted uppercase tracking-widest font-bold">Director</p>
                            </div>
                            <p className="text-2xl font-bold text-white">{movie.director || "Legendary Auteur"}</p>
                        </div>
                        
                        <div className="bg-bg-medium/40 backdrop-blur-md p-8 rounded-3xl border border-white/5 hover:bg-bg-medium/60 transition-colors group">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-primary/10 rounded-2xl text-primary group-hover:scale-110 transition-transform font-bold">
                                    ST
                                </div>
                                <p className="text-sm text-text-muted uppercase tracking-widest font-bold">Top Billing</p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {movie.cast && movie.cast.map(actor => (
                                    <span key={actor} className="px-3 py-1.5 bg-bg-base/80 rounded-xl text-text-secondary text-sm border border-white/5 hover:border-primary/50 transition-colors">
                                        {actor}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.section>
            </div>

            {/* Sidebar Details */}
            <div className="lg:col-span-1">
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-bg-medium p-8 rounded-[2rem] border border-white/5 sticky top-28 shadow-2xl"
                >
                    <h3 className="text-2xl font-bold text-white mb-8 tracking-tight">Movie <span className="text-primary italic">Stats</span></h3>
                    <div className="space-y-6">
                        <StatRow label="Release" value={movie.year} />
                        <StatRow label="Universe" value={movie.genre} />
                        <StatRow label="Director" value={movie.director} />
                        <StatRow label="Audience" value={`${movie.rating}/10`} isAccent />
                    </div>
                    
                    <div className="mt-12 space-y-4">
                        <a 
                            href={`https://www.youtube.com/results?search_query=${encodeURIComponent(movie.title + " trailer")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-4 bg-primary hover:bg-primary-dark text-white rounded-2xl font-black text-lg transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-3 active:scale-95 text-center"
                        >
                            <PlayCircle size={24} /> Watch Trailer
                        </a>
                        
                        <button 
                            onClick={toggleWishlist}
                            className={`w-full py-4 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3 active:scale-95 border ${
                                isInWishlist 
                                ? 'bg-accent text-white border-accent shadow-xl shadow-accent/20' 
                                : 'bg-white/5 hover:bg-white/10 text-white border-white/10'
                            }`}
                        >
                            {isInWishlist ? <BookmarkCheck size={24} /> : <Bookmark size={24} />}
                            {isInWishlist ? 'In Watchlist' : 'Want to Watch'}
                        </button>

                        <button className="w-full py-4 bg-transparent hover:bg-white/5 text-text-muted rounded-2xl font-bold transition-all flex items-center justify-center gap-3">
                            <Share2 size={20} /> Share Film
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
      </div>
    </div>
  );
}

function StatRow({ label, value, isAccent }) {
    return (
        <div className="flex justify-between items-center py-4 border-b border-white/5 last:border-0">
            <span className="text-text-muted font-medium">{label}</span>
            <span className={`font-bold ${isAccent ? 'text-accent text-xl' : 'text-white'}`}>{value}</span>
        </div>
    );
}
