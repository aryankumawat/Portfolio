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
    <footer className="bg-muted/50 border-t border-border/50">
      <div className="container-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-electric to-electric-light text-white font-bold text-lg">
                AK
              </div>
              <span className="font-heading font-semibold text-xl">
                Aryan Kumawat
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Data & Finance at USYD — building AI-driven, real-world solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-muted-foreground hover:text-foreground transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-electric" />
                <a 
                  href="mailto:akum9196@uni.sydney.edu.au"
                  className="hover:text-foreground transition-colors"
                >
                  akum9196@uni.sydney.edu.au
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-electric" />
                <a 
                  href="tel:+61493322348"
                  className="hover:text-foreground transition-colors"
                >
                  +61 493 322 348
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-electric" />
                Sydney, Australia
              </li>
            </ul>
          </div>

          {/* Social & Resume */}
          <div className="space-y-4">
            <h3 className="font-semibold">Connect</h3>
            <div className="space-y-3">
              <Button asChild variant="outline" size="sm" className="w-full">
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
              <Button asChild variant="gradient" size="sm" className="w-full">
                <Link href="/resume" className="flex items-center gap-2">
                  Download Resume
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© 2024 Aryan Kumawat. Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            <span>in Sydney</span>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToTop}
            className="rounded-full"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
