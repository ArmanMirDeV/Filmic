"use client";

import { motion } from "framer-motion";
import { User, Settings, Heart, History, LogOut, Star } from "lucide-react";
import Image from "next/image";

export default function ProfilePage() {
  const user = {
    name: "Arman",
    email: "user@example.com",
    role: "Movie Critic",
    joined: "January 2024",
    avatar: "https://images.jdmagicbox.com/comp/jd_social/news/2018jul21/image-119206-zkypi64x2m.jpg"
  };

  return (
    <div className="min-h-screen bg-bg-base py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Profile Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-bg-medium rounded-3xl p-8 border border-white/5 shadow-2xl overflow-hidden relative"
        >
          {/* Decorative Decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16" />
          
          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 shrink-0">
               <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-5xl font-bold">
                 {user.name[0]}
               </div>
            </div>

            <div className="text-center md:text-left flex-grow">
              <h1 className="text-3xl font-bold text-white mb-1">{user.name}</h1>
              <p className="text-primary font-medium mb-3">{user.role}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-text-muted">
                <span className="flex items-center gap-1"><User size={14} /> Member since {user.joined}</span>
                <span className="flex items-center gap-1">{user.email}</span>
              </div>
            </div>

            <button className="px-6 py-2 bg-bg-lighter hover:bg-white/10 text-white rounded-xl text-sm font-medium transition-all border border-white/5 shrink-0 flex items-center gap-2">
              <Settings size={16} /> Edit Profile
            </button>
          </div>
        </motion.div>

        {/* Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <StatsCard icon={<Heart className="text-secondary" />} label="Favorites" value="24 Movies" />
            <StatsCard icon={<History className="text-primary" />} label="Watchlist" value="12 Movies" />
        </div>

        {/* Recent Activity */}
        <section className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-6">Recent Activity</h2>
            <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                    <motion.div 
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: item * 0.1 }}
                        className="bg-bg-medium/50 p-4 rounded-xl border border-white/5 flex items-center justify-between"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-bg-base rounded-md" />
                            <div>
                                <p className="text-white font-medium text-sm">You rated <span className="text-primary">Inception</span></p>
                                <p className="text-xs text-text-muted">2 hours ago</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 text-accent font-bold text-sm">
                            <Star size={14} fill="currentColor" /> 9.5
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
      </div>
    </div>
  );
}

function StatsCard({ icon, label, value }) {
    return (
        <div className="bg-bg-medium p-6 rounded-2xl border border-white/5 flex items-center gap-6">
            <div className="w-16 h-16 bg-bg-base flex items-center justify-center rounded-2xl border border-white/5 text-2xl">
                {icon}
            </div>
            <div>
                <p className="text-text-muted text-sm">{label}</p>
                <p className="text-2xl font-bold text-white">{value}</p>
            </div>
        </div>
    );
}
