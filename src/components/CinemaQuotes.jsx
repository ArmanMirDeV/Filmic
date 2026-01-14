"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

const QUOTES = [
  { text: "I'm going to make him an offer he can't refuse.", movie: "The Godfather", year: 1972, author: "Vito Corleone" },
  { text: "May the Force be with you.", movie: "Star Wars", year: 1977, author: "Han Solo" },
  { text: "Why so serious?", movie: "The Dark Knight", year: 2008, author: "The Joker" },
  { text: "Life is like a box of chocolates. You never know what you're gonna get.", movie: "Forrest Gump", year: 1994, author: "Forrest Gump" },
  { text: "To infinity and beyond!", movie: "Toy Story", year: 1995, author: "Buzz Lightyear" },
  { text: "Here's looking at you, kid.", movie: "Casablanca", year: 1942, author: "Rick Blaine" },
  { text: "Keep your friends close, but your enemies closer.", movie: "The Godfather Part II", year: 1974, author: "Michael Corleone" },
  { text: "I'll be back.", movie: "The Terminator", year: 1984, author: "The Terminator" },
  { text: "You talking to me?", movie: "Taxi Driver", year: 1976, author: "Travis Bickle" },
  { text: "E.T. phone home.", movie: "E.T. the Extra-Terrestrial", year: 1982, author: "E.T." },
  { text: "I see dead people.", movie: "The Sixth Sense", year: 1999, author: "Cole Sear" },
  { text: "Houston, we have a problem.", movie: "Apollo 13", year: 1995, author: "Jim Lovell" },
  { text: "You can't handle the truth!", movie: "A Few Good Men", year: 1992, author: "Col. Jessup" },
  { text: "There's no place like home.", movie: "The Wizard of Oz", year: 1939, author: "Dorothy" },
  { text: "I'm king of the world!", movie: "Titanic", year: 1997, author: "Jack Dawson" },
  { text: "Carpe diem. Seize the day, boys.", movie: "Dead Poets Society", year: 1989, author: "John Keating" },
  { text: "Say hello to my little friend!", movie: "Scarface", year: 1983, author: "Tony Montana" },
  { text: "You shall not pass!", movie: "The Lord of the Rings: The Fellowship of the Ring", year: 2001, author: "Gandalf" },
  { text: "I am your father.", movie: "Star Wars: The Empire Strikes Back", year: 1980, author: "Darth Vader" },
  { text: "Keep swimming.", movie: "Finding Nemo", year: 2003, author: "Dory" },
  { text: "Why did it have to be snakes?", movie: "Raiders of the Lost Ark", year: 1981, author: "Indiana Jones" },
  { text: "Hasta la vista, baby.", movie: "Terminator 2: Judgment Day", year: 1991, author: "The Terminator" },
  { text: "I'm the king of the world!", movie: "Titanic", year: 1997, author: "Jack Dawson" },
  { text: "Just keep swimming.", movie: "Finding Nemo", year: 2003, author: "Dory" },
  { text: "Inconceivable!", movie: "The Princess Bride", year: 1987, author: "Vizzini" },
  { text: "Elementary, my dear Watson.", movie: "The Adventures of Sherlock Holmes", year: 1939, author: "Sherlock Holmes" },
  { text: "They may take our lives, but they'll never take our freedom!", movie: "Braveheart", year: 1995, author: "William Wallace" },
  { text: "I'm walking here!", movie: "Midnight Cowboy", year: 1969, author: "Ratso" },
  { text: "Keep the change, ya filthy animal.", movie: "Home Alone", year: 1990, author: "Gangster in Movie" },
  { text: "My precious.", movie: "The Lord of the Rings: The Two Towers", year: 2002, author: "Gollum" },
  { text: "Why so serious?", movie: "The Dark Knight", year: 2008, author: "The Joker" },
  { text: "I drink your milkshake!", movie: "There Will Be Blood", year: 2007, author: "Daniel Plainview" },
  { text: "I'm mad as hell, and I'm not going to take this anymore!", movie: "Network", year: 1976, author: "Howard Beale" },
  { text: "Frankly, my dear, I don't give a damn.", movie: "Gone with the Wind", year: 1939, author: "Rhett Butler" },
  { text: "Roads? Where we're going, we don't need roads.", movie: "Back to the Future", year: 1985, author: "Dr. Emmett Brown" },
  { text: "Snap out of it!", movie: "Moonstruck", year: 1987, author: "Loretta Castorini" },
  { text: "I feel the need—the need for speed!", movie: "Top Gun", year: 1986, author: "Maverick" },
  { text: "Mama always said life was like a box of chocolates.", movie: "Forrest Gump", year: 1994, author: "Forrest Gump" },
  { text: "Just when I thought I was out, they pull me back in.", movie: "The Godfather Part III", year: 1990, author: "Michael Corleone" },
  { text: "Open the pod bay doors, HAL.", movie: "2001: A Space Odyssey", year: 1968, author: "Dave Bowman" },
  { text: "I'm having an old friend for dinner.", movie: "The Silence of the Lambs", year: 1991, author: "Hannibal Lecter" },
  { text: "Bond. James Bond.", movie: "Dr. No", year: 1962, author: "James Bond" },
  { text: "It's alive! It's alive!", movie: "Frankenstein", year: 1931, author: "Henry Frankenstein" },
  { text: "Life finds a way.", movie: "Jurassic Park", year: 1993, author: "Dr. Ian Malcolm" },
  { text: "You had me at 'hello.'", movie: "Jerry Maguire", year: 1996, author: "Dorothy Boyd" },
  { text: "I solemnly swear that I am up to no good.", movie: "Harry Potter and the Prisoner of Azkaban", year: 2004, author: "Harry Potter" },
  { text: "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.", movie: "Harry Potter and the Prisoner of Azkaban", year: 2004, author: "Albus Dumbledore" },
  { text: "Fear is the mind-killer.", movie: "Dune", year: 2021, author: "Paul Atreides" },
  { text: "I am Groot.", movie: "Guardians of the Galaxy", year: 2014, author: "Groot" },
  { text: "Wakanda forever!", movie: "Black Panther", year: 2018, author: "T'Challa" },
  { text: "Whatever happens tomorrow, we had today.", movie: "The Notebook", year: 2004, author: "Noah Calhoun" },
  { text: "Just a flesh wound.", movie: "Monty Python and the Holy Grail", year: 1975, author: "Black Knight" }
];


export default function CinemaQuotes() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % QUOTES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 bg-bg-base relative overflow-hidden flex items-center min-h-[500px]">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.15)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4 flex items-center justify-center gap-3">
                    <span className="w-8 h-[2px] bg-primary rounded-full"></span>
                    Words of <span className="text-primary italic">Cinema</span>
                    <span className="w-8 h-[2px] bg-primary rounded-full"></span>
                </h2>
                <p className="text-text-secondary uppercase tracking-[0.2em] text-[10px] font-black">
                    Legendary perspectives that defined generations
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 0.05, scale: 1 }}
                viewport={{ once: true }}
                className="absolute top-20 text-primary"
            >
                <Quote size={300} fill="currentColor" />
            </motion.div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    className="space-y-8"
                >
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white italic leading-tight tracking-tight px-4">
                        “{QUOTES[index].text}”
                    </h2>

                    <div className="flex flex-col items-center gap-2">
                        <motion.span 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-primary font-black uppercase tracking-[0.3em] text-xs"
                        >
                            {QUOTES[index].author}
                        </motion.span>
                        <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: "40px" }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="h-[2px] bg-white/10"
                        />
                        <motion.span 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            transition={{ delay: 0.6 }}
                            className="text-white text-sm font-medium"
                        >
                            {QUOTES[index].movie} ({QUOTES[index].year})
                        </motion.span>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Slider Indicators */}
            <div className="flex gap-3 mt-16">
                {QUOTES.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`group relative h-1 transition-all duration-300 ${index === i ? "w-12 bg-primary" : "w-4 bg-white/10 hover:bg-white/20"}`}
                    >
                        <span className="sr-only">Quote {i + 1}</span>
                    </button>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
