"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Mail, 
  Linkedin, 
  MapPin, 
  Phone,
  Heart,
  ArrowUp
} from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black border-t border-[#66FCF1]/20">
      <div className="container-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#66FCF1] to-[#45A29E] text-white font-bold text-lg neon-glow-button">
                AK
              </div>
              <span className="font-heading font-semibold text-xl text-white">
                Aryan Kumawat
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Data & Finance at USYD — building AI-driven, real-world solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-gray-400 hover:text-white transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#66FCF1]" />
                <a 
                  href="mailto:kumawataryan23@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  kumawataryan23@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <a 
                  href="tel:+61493322348"
                  className="hover:text-white transition-colors"
                >
                  +61 493 322 348
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#66FCF1]" />
                Sydney, Australia
              </li>
            </ul>
          </div>

          {/* Social & Resume */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Connect</h3>
            <div className="space-y-3">
              <Button asChild variant="outline" size="sm" className="w-full border-[#66FCF1]/30 hover:border-[#66FCF1]/40 hover:bg-[#66FCF1]/5 text-white">
                <a 
                  href="https://www.linkedin.com/in/aryan-kumawat-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button asChild size="sm" className="w-full bg-gradient-to-r from-[#66FCF1] to-[#45A29E] hover:from-[#66FCF1]/80 hover:to-[#45A29E]/80 text-white border-0">
                <a href="/resume/Aryan_Web_CV.pdf" download="Aryan_Kumawat_CV.pdf" className="flex items-center gap-2">
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#66FCF1]/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>© 2024 Aryan Kumawat</span>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToTop}
            className="rounded-full hover:bg-[#66FCF1]/5 text-white hover:text-[#66FCF1]"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
