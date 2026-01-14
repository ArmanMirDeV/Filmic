"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Github, Mail } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-medium border-t border-bg-lighter pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Logo />
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs mt-4">
              Your ultimate destination for discovering, tracking, and celebrating the world of cinema. Experience movies like never before.
            </p>
            <div className="flex gap-4 mt-6">
              <SocialLink href="#" icon={<Twitter size={20} />} label="Twitter" />
              <SocialLink href="#" icon={<Facebook size={20} />} label="Facebook" />
              <SocialLink href="#" icon={<Instagram size={20} />} label="Instagram" />
              <SocialLink href="#" icon={<Github size={20} />} label="Github" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Explore</h3>
            <ul className="space-y-3">
              <FooterLink href="/movies" label="Movies Library" />
              <FooterLink href="/trending" label="Trending Now" />
              <FooterLink href="/top-rated" label="Top Rated" />
              <FooterLink href="/upcoming" label="Coming Soon" />
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <FooterLink href="/about" label="About Us" />
              <FooterLink href="/contact" label="Contact" />
              <FooterLink href="/careers" label="Careers" />
              <FooterLink href="/press" label="Press Kit" />
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Stay Updated</h3>
            <p className="text-text-secondary text-sm mb-4">
              Subscribe to our newsletter for the latest movie releases and exclusive reviews.
            </p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-bg-base border border-bg-lighter text-text-primary px-4 py-2 rounded-lg w-full focus:outline-none focus:border-primary transition-colors text-sm"
              />
              <button 
                type="submit"
                className="bg-primary hover:bg-primary-dark text-white p-2 rounded-lg transition-colors"
                aria-label="Subscribe"
              >
                <Mail size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-bg-lighter flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">
            © {currentYear} Filmic. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-text-muted hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-text-muted hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="text-text-muted hover:text-primary transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label }) {
  return (
    <a 
      href={href} 
      className="bg-bg-base p-2 rounded-full text-text-secondary hover:text-white hover:bg-primary transition-all duration-300"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

function FooterLink({ href, label }) {
  return (
    <li>
      <Link 
        href={href} 
        className="text-text-secondary hover:text-primary transition-colors text-sm"
      >
        {label}
      </Link>
    </li>
  );
}
