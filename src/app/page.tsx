"use client";

import { Hero } from "@/components/hero";
import { FeaturedProjects } from "@/components/featured-projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-[#C5C6C7] overflow-x-hidden">
      {/* Hero Section */}
      <Hero />
      
      {/* Featured Projects */}
      <FeaturedProjects />
    </div>
  );
}
