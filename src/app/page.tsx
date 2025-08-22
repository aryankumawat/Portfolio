import { Hero } from "@/components/hero";
import { Highlights } from "@/components/highlights";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="section-padding container-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Hi, I'm <span className="gradient-text">Aryan Kumawat</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Data & Finance at USYD — building AI-driven, real-world solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/resume"
              className="bg-electric hover:bg-electric-dark text-white px-8 py-3 rounded-2xl font-semibold transition-colors"
            >
              Download Resume
            </a>
            <a
              href="/contact"
              className="border border-electric text-electric hover:bg-electric hover:text-white px-8 py-3 rounded-2xl font-semibold transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="section-padding container-padding bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">
            What I Do
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-background rounded-2xl">
              <h3 className="text-xl font-semibold mb-3">Data Science</h3>
              <p className="text-muted-foreground">
                Machine learning, statistical analysis, and data-driven insights
              </p>
            </div>
            <div className="text-center p-6 bg-background rounded-2xl">
              <h3 className="text-xl font-semibold mb-3">Finance</h3>
              <p className="text-muted-foreground">
                Financial modeling, investment analysis, and market research
              </p>
            </div>
            <div className="text-center p-6 bg-background rounded-2xl">
              <h3 className="text-xl font-semibold mb-3">Software</h3>
              <p className="text-muted-foreground">
                Full-stack development, APIs, and scalable solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section-padding container-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-8">
            Explore My Work
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="/experience"
              className="p-6 border border-border rounded-2xl hover:border-electric transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">Experience</h3>
              <p className="text-muted-foreground">
                View my professional journey and achievements
              </p>
            </a>
            <a
              href="/projects"
              className="p-6 border border-border rounded-2xl hover:border-electric transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">Projects</h3>
              <p className="text-muted-foreground">
                Check out my technical and finance projects
              </p>
            </a>
            <a
              href="/about"
              className="p-6 border border-border rounded-2xl hover:border-electric transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">About</h3>
              <p className="text-muted-foreground">
                Learn more about my background and skills
              </p>
            </a>
            <a
              href="/contact"
              className="p-6 border border-border rounded-2xl hover:border-electric transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">Contact</h3>
              <p className="text-muted-foreground">
                Get in touch for opportunities and collaboration
              </p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
