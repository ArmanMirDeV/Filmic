"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { LogIn, Mail, Lock, AlertCircle, Film, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Simulate small delay for cinematic feel
    await new Promise(r => setTimeout(r, 800));

    const result = login(email, password);
    if (result.success) {
      router.push("/movies");
    } else {
      setError(result.message);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full"
      >
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex p-4 bg-primary/10 rounded-3xl mb-6 text-primary ring-1 ring-primary/20">
            <Film size={32} />
          </div>
          <h1 className="text-4xl font-black text-white tracking-tighter mb-2">Welcome <span className="text-primary italic">Back</span></h1>
          <p className="text-text-secondary font-medium italic">Sign in to access your personal cinema vault.</p>
        </div>

        {/* Login Form */}
        <div className="bg-bg-medium/40 backdrop-blur-2xl p-8 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden">
          {/* Subtle noise/texture overlay */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] opacity-[0.02] pointer-events-none" />

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted ml-4">Screenplay ID (Email)</label>
              <div className="relative group">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-primary transition-colors">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@filmic.com"
                  className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 pl-14 pr-6 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all font-medium"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted ml-4">Access Key (Password)</label>
              <div className="relative group">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-primary transition-colors">
                  <Lock size={18} />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 pl-14 pr-6 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all font-medium"
                />
              </div>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-accent/10 border border-accent/20 p-4 rounded-xl flex items-center gap-3 text-accent text-sm font-bold"
              >
                <AlertCircle size={18} /> {error}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary-dark disabled:bg-primary/50 text-white rounded-2xl py-4 font-black text-lg shadow-xl shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group"
            >
              {isSubmitting ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Action <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* Hint Overlay */}
          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <p className="text-[10px] text-text-muted font-black uppercase tracking-widest mb-3">Mock Credentials</p>
            <div className="flex flex-col items-center gap-1 text-[11px] text-white/40 font-mono">
              <p>Email: admin@filmic.com</p>
              <p>Pass: filmic2026</p>
            </div>
          </div>
        </div>

        {/* Footer Link */}
        <p className="mt-8 text-center text-text-muted text-sm font-medium">
          New to the theater? <Link href="/register" className="text-primary hover:underline font-bold italic">Audition here</Link>
        </p>
      </motion.div>
    </div>
  );
}
