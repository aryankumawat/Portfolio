"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Command } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Awards", href: "/awards" },
  { name: "Volunteering", href: "/volunteering" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Command palette shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // TODO: Open command palette
        console.log('Command palette triggered');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "glass border-b border-border-primary"
          : "bg-transparent"
      )}
    >
      <div className="container-padding">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300"
            >
              AK
            </motion.div>
            <span className="hidden sm:block font-heading font-semibold text-xl text-text-primary">
              Aryan Kumawat
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors relative group",
                    isActive
                      ? "text-text-primary"
                      : "text-text-muted hover:text-text-primary"
                  )}
                >
                  {item.name}
                  <span 
                    className={cn(
                      "absolute -bottom-1 left-0 h-0.5 transition-all",
                      isActive 
                        ? "w-full bg-gradient-primary" 
                        : "w-0 bg-gradient-primary group-hover:w-full"
                    )} 
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right side - Command palette, Theme toggle and CTA */}
          <div className="flex items-center space-x-4">
            {/* Command Palette Button */}
            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:inline-flex items-center gap-2 text-text-muted hover:text-text-primary"
            >
              <Command className="h-4 w-4" />
              <span className="text-xs">⌘K</span>
            </Button>

            <Button
              asChild
              size="sm"
              className="hidden sm:inline-flex bg-gradient-primary hover:opacity-90 text-white border-0"
            >
              <Link href="/resume">Download Resume</Link>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-bg-glass"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass border-b border-border-primary"
          >
            <nav className="container-padding py-4 space-y-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "block px-4 py-2 text-sm font-medium rounded-md transition-colors",
                      isActive
                        ? "text-text-primary bg-bg-glass"
                        : "text-text-muted hover:text-text-primary hover:bg-bg-glass"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-border-primary">
                <Button 
                  asChild 
                  className="w-full bg-gradient-primary hover:opacity-90 text-white border-0"
                >
                  <Link href="/resume">Download Resume</Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
