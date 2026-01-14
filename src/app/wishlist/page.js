"use client";

import { useState, useEffect } from "react";
import { MOVIES_DATA } from "@/data/movies";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Bookmark, Star, PlayCircle, Trash2, film, ChevronRight } from "lucide-react";
import Toast from "@/components/Toast";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function WishlistPage() {
  const [wishlistMovies, setWishlistMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [toast, setToast] = useState({ visible: false, message: "", type: "success" });

  useEffect(() => {
    const loadWishlist = () => {
      const savedIds = JSON.parse(localStorage.getItem("filmic_wishlist") || "[]");
      const filtered = MOVIES_DATA.filter(movie => savedIds.includes(movie.id));
      setWishlistMovies(filtered);
      setIsLoading(false);
    };

    loadWishlist();
  }, []);

  const removeFromWishlist = (id, title) => {
    const savedIds = JSON.parse(localStorage.getItem("filmic_wishlist") || "[]");
    const updatedIds = savedIds.filter(savedId => savedId !== id);
    localStorage.setItem("filmic_wishlist", JSON.stringify(updatedIds));
    
    setWishlistMovies(prev => prev.filter(m => m.id !== id));
    
    setToast({ 
      visible: true, 
      message: `${title} removed from your list.`, 
      type: "update" 
    });
    
    setTimeout(() => setToast({ ...toast, visible: false }), 4000);
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-bg-base py-12 md:py-24 px-4 sm:px-6 lg:px-8">

      <Toast 
        isVisible={toast.visible} 
        message={toast.message} 
        type={toast.type}
        onClose={() => setToast({ ...toast, visible: false })}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <div className="flex items-center gap-3 text-primary mb-4">
              <span className="w-12 h-[2px] bg-primary"></span>
              <span className="font-black uppercase tracking-[0.3em] text-xs">Your Curated Collection</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
                Personal <span className="text-primary italic">Cinema</span>
            </h1>
          </div>
          
          <div className="bg-white/5 border border-white/10 px-6 py-4 rounded-[2rem] backdrop-blur-xl">
            <p className="text-text-muted text-xs font-black uppercase tracking-widest mb-1">Total Spotlight</p>
            <p className="text-3xl font-black text-white">{wishlistMovies.length} <span className="text-xs text-text-secondary">Films Saved</span></p>
          </div>
        </motion.div>

        {/* Grid or Empty State */}
        <AnimatePresence mode="popLayout">
          {wishlistMovies.length > 0 ? (
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {wishlistMovies.map((movie, index) => (
                <motion.div
                  key={movie.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative aspect-[2/3] rounded-[2rem] overflow-hidden bg-bg-medium border border-white/5 shadow-2xl"
                >
                  <Image
                    src={movie.image}
                    alt={movie.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="flex items-center gap-2 mb-2 text-accent">
                            <Star size={14} fill="currentColor" />
                            <span className="font-black text-sm">{movie.rating}</span>
                        </div>
                        <h3 className="text-xl font-black text-white mb-6 leading-tight group-hover:text-primary transition-colors">
                            {movie.title}
                        </h3>
                        
                        <div className="flex gap-2">
                           <Link 
                            href={`/movies/${movie.id}`}
                            className="flex-1 py-3 bg-primary hover:bg-primary-dark text-white rounded-xl font-black text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                           >
                            <PlayCircle size={14} /> Open
                           </Link>
                           <button 
                            onClick={() => removeFromWishlist(movie.id, movie.title)}
                            className="w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-accent/20 text-white hover:text-accent rounded-xl border border-white/5 transition-all"
                           >
                             <Trash2 size={18} />
                           </button>
                        </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-32 flex flex-col items-center text-center space-y-8"
            >
                <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center border border-white/5">
                    <Bookmark size={40} className="text-white/20" />
                </div>
                <div>
                    <h2 className="text-3xl font-black text-white mb-2">The screen is empty</h2>
                    <p className="text-text-secondary max-w-sm font-medium">Your watchlist is currently blank. Discover masterpieces and save them here.</p>
                </div>
                <Link 
                    href="/movies"
                    className="px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-xl shadow-primary/20 flex items-center gap-2 group"
                >
                    Explore Library <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      </div>
    </ProtectedRoute>
  );
}
