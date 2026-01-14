"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import { motion } from "framer-motion";
import { PlusCircle, Upload, Film, AlertTriangle } from "lucide-react";

export default function AddMoviesPage() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-bg-base py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-12"
            >
                <div className="inline-flex p-6 bg-primary/10 rounded-full mb-8 text-primary shadow-[0_0_50px_rgba(var(--primary-rgb),0.2)]">
                    <PlusCircle size={48} />
                </div>
                <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-4">
                    Submit a <span className="text-primary italic">Masterpiece</span>
                </h1>
                <p className="text-text-secondary text-lg font-medium max-w-xl mx-auto">
                    Contribute to the world's most curated cinematic library. Upload your movie data here.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-bg-medium/40 backdrop-blur-3xl border border-white/5 p-12 rounded-[3rem] shadow-2xl relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-50 pointer-events-none" />
                
                <div className="relative z-10 space-y-8">
                    <div className="flex flex-col items-center justify-center border-2 border-dashed border-white/10 rounded-[2rem] p-16 hover:border-primary/50 hover:bg-white/[0.02] transition-all group cursor-pointer">
                        <Upload size={48} className="text-white/20 group-hover:text-primary transition-colors mb-4 group-hover:-translate-y-2 transition-transform duration-500" />
                        <p className="text-white font-black text-lg">Click to Upload Reel Poster</p>
                        <p className="text-text-muted text-sm mt-2">WEBP, PNG, or JPG (Max 5MB)</p>
                    </div>

                    <div className="bg-accent/10 border border-accent/20 p-6 rounded-2xl flex items-center gap-4 text-left">
                        <AlertTriangle className="text-accent shrink-0" size={24} />
                        <div>
                            <p className="text-accent font-black uppercase text-xs tracking-widest mb-1">Production Policy</p>
                            <p className="text-white/70 text-sm font-medium">All submissions are subject to editorial review before appearing in the grand premiere.</p>
                        </div>
                    </div>

                    <button className="w-full py-5 bg-primary hover:bg-primary-dark text-white rounded-2xl font-black text-xl shadow-2xl shadow-primary/20 transition-all active:scale-95 flex items-center justify-center gap-3">
                        <Film size={24} /> Add to Collection
                    </button>
                </div>
            </motion.div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
