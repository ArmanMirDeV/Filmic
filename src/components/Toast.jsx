"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X, Bookmark } from "lucide-react";

export default function Toast({ message, type = "success", isVisible, onClose }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: 20, scale: 0.95, filter: "blur(10px)" }}
          className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] min-w-[320px]"
        >
          <div className="bg-bg-medium/90 backdrop-blur-2xl border border-white/10 p-4 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center gap-4">
            <div className={`p-2 rounded-2xl ${type === 'success' ? 'bg-primary/20 text-primary' : 'bg-accent/20 text-accent'}`}>
              {type === 'success' ? <CheckCircle2 size={24} /> : <Bookmark size={24} />}
            </div>
            <div className="flex-1">
              <p className="text-white font-black text-sm uppercase tracking-wider">{type === 'success' ? 'Personal Cinema' : 'Update'}</p>
              <p className="text-text-secondary text-sm font-medium">{message}</p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-white/5 rounded-xl text-text-muted transition-colors"
            >
              <X size={18} />
            </button>
          </div>
          {/* Progress Bar */}
          <motion.div 
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{ duration: 4, ease: "linear" }}
            className={`h-1 absolute bottom-0 left-4 right-4 rounded-full ${type === 'success' ? 'bg-primary' : 'bg-accent'}`}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
