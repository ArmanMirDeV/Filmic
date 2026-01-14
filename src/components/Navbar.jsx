"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User, LogOut, ChevronDown, UserCircle } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Movies", href: "/movies" },
  { name: "Add Movies", href: "/add-movies" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const pathname = usePathname();

  // Simulated User State
  const isLoggedIn = true;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-base/80 backdrop-blur-md border-b border-bg-lighter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    pathname === link.href
                      ? "text-primary"
                      : "text-text-secondary hover:text-white"
                  }`}
                >
                  {link.name}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary"
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side - User / Mobile Toggle */}
          <div className="flex items-center gap-4">
            {/* User Dropdown (Desktop & Mobile) */}
            <div className="relative">
              {isLoggedIn ? (
                <div className="relative">
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="flex items-center gap-2 p-2 rounded-full hover:bg-bg-lighter transition-colors focus:outline-none"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                      A
                    </div>
                    <ChevronDown size={16} className={`text-text-secondary transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isProfileOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-48 bg-bg-medium border border-bg-lighter rounded-xl shadow-xl py-2 overflow-hidden ring-1 ring-black ring-opacity-5"
                      >
                         <div className="px-4 py-3 border-b border-bg-lighter">
                          <p className="text-sm text-text-primary">Arman</p>
                          <p className="text-xs text-text-muted truncate">user@example.com</p>
                        </div>
                        <Link
                          href="/profile"
                          className="flex items-center px-4 py-2 text-sm text-text-secondary hover:bg-bg-lighter hover:text-white transition-colors"
                          onClick={() => setIsProfileOpen(false)}
                        >
                          <User size={16} className="mr-2" />
                          Profile
                        </Link>
                        <button
                          className="w-full flex items-center px-4 py-2 text-sm text-secondary-accent hover:bg-bg-lighter transition-colors text-left"
                          onClick={() => setIsProfileOpen(false)}
                        >
                          <LogOut size={16} className="mr-2" />
                          Sign out
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  href="/login"
                  className="px-4 py-2 rounded-lg bg-primary hover:bg-primary-dark text-white text-sm font-medium transition-colors"
                >
                  Login
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-text-secondary hover:text-white hover:bg-bg-lighter focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg-medium border-b border-bg-lighter overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    pathname === link.href
                      ? "bg-bg-lighter text-primary"
                      : "text-text-secondary hover:bg-bg-lighter hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
