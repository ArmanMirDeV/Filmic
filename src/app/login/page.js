"use client";

import { motion } from "framer-motion";
import { Mail, Lock, LogIn, Github } from "lucide-react";
import Link from "next/link";
import Logo from "@/components/Logo";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-bg-base flex items-center justify-center p-4">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-bg-medium p-8 rounded-3xl border border-white/5 shadow-2xl relative z-10"
      >
        <div className="flex justify-center mb-8">
          <Logo />
        </div>

        <h1 className="text-3xl font-bold text-white text-center mb-2">Welcome Back</h1>
        <p className="text-text-secondary text-center mb-8">Sign in to manage your collection.</p>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-bg-base border border-bg-lighter text-white pl-12 pr-4 py-3 rounded-xl focus:outline-none focus:border-primary transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-bg-base border border-bg-lighter text-white pl-12 pr-4 py-3 rounded-xl focus:outline-none focus:border-primary transition-all"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded border-bg-lighter bg-bg-base text-primary focus:ring-primary" />
              <span className="text-text-secondary">Remember me</span>
            </label>
            <a href="#" className="text-primary hover:text-primary-dark font-medium transition-colors">Forgot password?</a>
          </div>

          <button
            type="button"
            className="w-full py-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-bold transition-all shadow-lg shadow-primary/25 flex items-center justify-center gap-2"
          >
            <LogIn size={20} /> Sign In
          </button>
        </form>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-bg-lighter"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-bg-medium text-text-muted">Or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <button className="flex items-center justify-center gap-2 py-3 bg-bg-base border border-bg-lighter hover:bg-bg-lighter rounded-xl text-white transition-all">
            <Github size={20} /> GitHub
          </button>
        </div>

        <p className="text-center text-text-secondary text-sm mt-8">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-primary hover:text-primary-dark font-bold transition-colors">
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
