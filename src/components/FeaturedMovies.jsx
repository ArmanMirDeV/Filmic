"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, Clock, Info } from "lucide-react";
import Image from "next/image";

const DUMMY_MOVIES = [
  { id: 1, title: "The Shawshank Redemption", rating: 9.3, year: 1994, genre: "Drama", color: "from-orange-500 to-amber-700", image: "https://images.jdmagicbox.com/comp/jd_social/news/2018jul21/image-119206-zkypi64x2m.jpg" },
  { id: 2, title: "The Godfather", rating: 9.2, year: 1972, genre: "Crime", color: "from-neutral-800 to-neutral-900", image: "https://m.media-amazon.com/images/S/pv-target-images/5bc7a0cbcc18491a4465ea2c90591d1435a20bbc62ac115dad9aa2e2252eaea6.jpg" },
  { id: 3, title: "The Dark Knight", rating: 9.0, year: 2008, genre: "Action", color: "from-blue-900 to-slate-900", image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg" },
   { id: 4, title: "Interstellar", rating: 8.6, year: 2014, genre: "Sci-Fi", color: "from-indigo-900 to-purple-950", image: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
  
  { id: 5, title: "Inception", rating: 8.8, year: 2010, genre: "Sci-Fi", color: "from-sky-800 to-indigo-950", image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg" },
  { id: 6, title: "Fight Club", rating: 8.8, year: 1999, genre: "Drama", color: "from-pink-900 to-purple-900", image: "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
  { id: 7, title: "Forrest Gump", rating: 8.8, year: 1994, genre: "Romance", color: "from-green-800 to-emerald-950", image: "https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
  { id: 8, title: "The Matrix", rating: 8.7, year: 1999, genre: "Sci-Fi", color: "from-green-900 to-black", image: "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_.jpg" },
  { id: 9, title: "Goodfellas", rating: 8.7, year: 1990, genre: "Biography", color: "from-red-800 to-rose-950", image: "https://m.media-amazon.com/images/M/MV5BN2E5NzI2ZGMtY2VjNi00YTRjLWI1MDUtZGY5OWU1MWJjZjRjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },{ id: 10, title: "Pulp Fiction", rating: 8.9, year: 1994, genre: "Crime", color: "from-red-900 to-orange-900", image: "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg" },
 
];

export default function FeaturedMovies() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <section className="py-20 bg-bg-base overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-accent rounded-full"></span>
              Top Rated Masterpieces
            </h2>
        
        </motion.div>
      </div>

      <motion.div 
        ref={carousel} 
        className="cursor-grab active:cursor-grabbing pl-4 sm:pl-8 lg:pl-16 overflow-hidden"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div 
          drag="x" 
          dragConstraints={{ right: 0, left: -width }} 
          className="flex gap-6"
        >
          {DUMMY_MOVIES.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function MovieCard({ movie }) {
  return (
    <motion.div 
      className="min-w-[280px] h-[400px] relative rounded-2xl overflow-hidden group shadow-lg shadow-black/50 bg-bg-medium border border-white/5"
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      {/* Movie Image */}
      <div className="absolute inset-0">
        <Image
          src={movie.image}
          alt={movie.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 280px, 300px"
        />
        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-base via-bg-base/40 to-transparent opacity-90" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <span className="inline-block px-2 py-1 bg-primary/80 backdrop-blur-md rounded text-xs font-bold text-white mb-2 shadow-lg">
            {movie.genre}
          </span>
          <h3 className="text-2xl font-bold text-white mb-1 leading-tight">{movie.title}</h3>
          <div className="flex items-center gap-4 text-sm text-gray-200 mb-4 font-medium">
            <span className="flex items-center gap-1 text-accent">
              <Star size={14} fill="currentColor" /> {movie.rating}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} /> {movie.year}
            </span>
          </div>
          
          <button className="w-full py-2 bg-primary hover:bg-primary-dark rounded-lg text-white font-medium transition-colors flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 duration-300 shadow-lg">
            <Info size={16} /> View Details
          </button>
        </div>
      </div>
      
      {/* Rank Badge */}
      <div className="absolute top-4 right-4 w-10 h-10 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center text-white font-bold border border-white/10 z-20">
        #{movie.id}
      </div>
    </motion.div>
  );
}
