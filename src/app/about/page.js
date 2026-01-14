"use client";

import { motion } from "framer-motion";
import { Film, Users, Shield, Globe, Award, Heart } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-bg-base text-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-bg-base z-0" />
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter"
          >
            About <span className="text-secondary">Filmic</span>
          </motion.h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto font-light">
            Redefining how movie enthusiasts discover, celebrate, and preserve the magic of cinema.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
                <Image 
                    src="https://images.jdmagicbox.com/comp/jd_social/news/2018jul21/image-119206-zkypi64x2m.jpg" 
                    alt="Cinematic Experience" 
                    fill 
                    className="object-cover"
                />
            </motion.div>
            
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <Heart className="text-secondary" /> Our Mission
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                    Filmic was born out of a simple passion: the love for storytelling through the lens. We believe that every movie is a journey, and every viewer deserves a sanctuary to curate those journeys.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                    Our platform is built for the purists, the critics, and the casual viewers alike. We aim to provide a modern, lightning-fast, and visually stunning space where the art of film takes center stage.
                </p>
            </motion.div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-bg-medium/50 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Values that Drive Us</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ValueCard 
                        icon={<Award className="text-accent" />} 
                        title="Quality First" 
                        description="We curate only the finest data and provide a premium interface for our users." 
                    />
                    <ValueCard 
                        icon={<Shield className="text-primary" />} 
                        title="User Privacy" 
                        description="Your collection is yours. We prioritize data security and transparency above all." 
                    />
                    <ValueCard 
                        icon={<Globe className="text-secondary" />} 
                        title="Global Community" 
                        description="Bringing together cinephiles from every corner of the globe to share their passion." 
                    />
                </div>
          </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <StatItem number="10K+" label="Movies Listed" />
                <StatItem number="50K+" label="Daily Visitors" />
                <StatItem number="100+" label="Countries" />
                <StatItem number="4.9/5" label="User Rating" />
            </div>
      </section>
    </div>
  );
}

function ValueCard({ icon, title, description }) {
    return (
        <motion.div 
            whileHover={{ y: -5 }}
            className="bg-bg-medium p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all"
        >
            <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="text-text-secondary leading-relaxed">{description}</p>
        </motion.div>
    );
}

function StatItem({ number, label }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
        >
            <p className="text-4xl md:text-5xl font-bold text-primary mb-2 tracking-tighter">{number}</p>
            <p className="text-text-muted text-sm uppercase tracking-widest">{label}</p>
        </motion.div>
    );
}
