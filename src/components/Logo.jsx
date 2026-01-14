"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <motion.div
        whileHover={{ rotate: 10, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative w-10 h-10"
      >
        <Image
          src="/filmic-logo.png"
          alt="Filmic Logo"
          fill
          className="object-contain"
          priority
        />
      </motion.div>
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:from-secondary group-hover:to-primary transition-all duration-300"
      >
        Filmic
      </motion.span>
    </Link>
  );
}
