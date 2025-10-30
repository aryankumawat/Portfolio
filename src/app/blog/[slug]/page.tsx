"use client";

import { GlassCard } from "@/components/GlassCard";
import { Reveal } from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, Tag, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

// Blog post data - in a real app, this would come from a CMS or API
const blogPosts = [
  {
    id: "google-project-ara-modular-smartphone",
    title: "Google Project Ara: The Ambitious Dream of a Modular Smartphone",
    excerpt: "Imagine a phone you could upgrade like LEGO—swap the camera, add a better battery, or even change the processor. That was the promise of Google’s Project Ara, a revolutionary concept that aimed to redefine the smartphone industry.",
    category: "Innovation",
    date: "2025-10-31",
    readTime: "8 min read",
    author: "Aryan Kumawat",
    tags: ["Google", "Project Ara", "Smartphone", "Modular Design", "Technology"],
    featured: true,
    content: `Imagine a phone you could upgrade like LEGO—swap the camera, add a better battery, or even change the processor. That was the promise of **Google’s Project Ara**, a bold experiment that set out to reinvent what smartphones could be.

Back in 2013, while most manufacturers were focused on making devices thinner and faster, Google envisioned something radical: a **modular smartphone** where every component could be customized, upgraded, or replaced individually. It was a concept that promised sustainability, personalization, and freedom—all in one device.

---

## The Vision: A Phone Built Like LEGO

Project Ara was designed around a simple yet powerful idea: a smartphone shouldn’t be disposable. Instead of throwing away your device every two years, why not just replace the part that’s outdated?

At the heart of this design was the **“endo”**, or **endoskeleton**—a frame that held different **modules** such as the camera, battery, CPU, memory, and sensors. Each module could be attached or detached using electropermanent magnets and standardized connectors.

The modular approach meant you could:
- Upgrade your camera without changing the entire phone.
- Add a bigger battery for trips.
- Replace damaged parts instantly.
- Even experiment with new modules created by third-party developers.

This flexibility could have made smartphones truly personal—and drastically reduced electronic waste.

---

## The Engineering Challenge

Google’s Advanced Technology and Projects (ATAP) team, under the leadership of Paul Eremenko, took on the enormous challenge of turning this vision into reality. The technical foundation relied on **MIPI UniPro** and **M-PHY** protocols—high-speed communication standards that would allow modules to talk seamlessly with the main system.

However, modularity came with trade-offs:
- **Space constraints** made it difficult to maintain slim designs.
- **Signal and power distribution** across detachable modules was complex.
- **Durability and aesthetics** suffered from the need for removable parts.

Despite these hurdles, prototypes like **Spiral 1** and **Spiral 2** were showcased, and early developer kits were even released in limited numbers. The dream was alive—for a while.

---

## The Shift in Direction

As the project evolved, Google realized that making *every* component modular was too complicated for mass production. By 2016, the plan changed: the **core phone** (screen, antennas, sensors) would remain fixed, while only select components—like the camera and storage—could be swapped.

This was a compromise that diluted Ara’s original vision. It was no longer a fully modular smartphone, but rather a semi-modular one—closer to what LG’s G5 or Motorola’s Moto Mods later attempted.

---

## The Fall of a Revolutionary Idea

On **September 2, 2016**, Google officially **shelved Project Ara**. The reasons were multifaceted:
- **Engineering complexity** made it hard to deliver a stable consumer product.
- **Manufacturing costs** outweighed the potential benefits.
- **Regulatory hurdles** (like FCC certification for modular variations) complicated the launch.
- And ultimately, **consumer demand** leaned toward sleek, integrated designs— not bulky modular experiments.

Google decided to pivot toward more conventional hardware efforts, such as the **Pixel** lineup, marking the end of Ara’s ambitious run.

---

## Why Project Ara Still Matters

Even though Project Ara never reached the market, it left an undeniable mark on the tech industry.

**1. It challenged the status quo.**  
Ara questioned the idea that innovation must come at the cost of sustainability. It highlighted the growing issue of e-waste and opened the conversation about modularity in consumer electronics.

**2. It inspired others.**  
Brands like **Fairphone** have since pursued ethical and repairable designs inspired by Ara’s philosophy.

**3. It revealed the limits of modularity.**  
Ara taught engineers and designers that modular hardware, while exciting, comes with real-world trade-offs—like structural fragility, added cost, and performance bottlenecks.

**4. It predicted a future of modular ecosystems.**  
Today, we see modularity thrive in other forms: software microservices, plug-in architectures, and even multi-agent AI systems—concepts not too far removed from Ara’s vision.

---

## Lessons from Project Ara

For innovators, Ara offers timeless lessons:

- **Vision must align with market reality.** Even the most brilliant idea can fail if it doesn’t fit consumer habits or manufacturing economics.  
- **Simplicity sells.** While modularity sounded empowering, most users just wanted a phone that “worked” out of the box.  
- **Experimentation drives evolution.** Every failed experiment leaves behind insights that fuel future success.

---

## The Bottom Line

Google Project Ara may have been short-lived, but it symbolized the spirit of innovation that defines tech progress: bold, experimental, and unafraid to fail.  

Its legacy endures—not in our pockets, but in the lessons it taught the tech world about design, modularity, and ambition.  

In a world of uniform, sealed smartphones, Ara remains a reminder that technology should be **flexible, sustainable, and human-centered**—even if the road to that ideal is anything but simple.`
  },
  {
    id: "chatgpt-atlas-browser-ai-future",
    title: "ChatGPT Atlas: The Browser That Thinks With You",
    excerpt: "OpenAI's ChatGPT Atlas reimagines the web browser as an intelligent workspace — one that understands context, assists proactively, and turns passive browsing into active collaboration.",
    category: "AI & Innovation",
    date: "24/10/2025",
    readTime: "8 min read",
    author: "Aryan Kumawat",
    tags: ["ChatGPT", "OpenAI", "Atlas", "AI Browser", "Innovation"],
    featured: true,
    content: `The future of browsing just changed forever. OpenAI's **ChatGPT Atlas** isn't just another Chrome alternative — it's a complete reinvention of how we experience the internet. By merging the intelligence of ChatGPT directly into the browser itself, Atlas turns every tab into a collaborative space where AI works *with* you, not just *for* you.

Unlike traditional browsers designed for navigation, Atlas is designed for **comprehension, creation, and action**. It understands the page you're on, remembers your context, and can even perform multi-step actions through Agent Mode — from researching and summarising to filling out forms and comparing data in real time.

---

## What Makes ChatGPT Atlas Revolutionary?

**1. Chat at the Core — Not a Plugin**  
Atlas isn't about adding an AI sidebar to a normal browser; it's built from the ground up around ChatGPT. The assistant sits seamlessly alongside your browsing, allowing you to highlight text, ask questions, or generate summaries *without leaving the page*.

**2. Agent Mode: From Answers to Actions**  
In Agent Mode, Atlas goes beyond passive responses. It can open tabs, navigate websites, extract information, and complete multi-step tasks autonomously — all while keeping you in control. Imagine asking, "Find flights under $400 from Sydney to Tokyo next month," and watching it work through booking pages for you.

**3. Contextual Memory and Continuity**  
Atlas introduces **optional browser memory** — enabling ChatGPT to recall your past projects, preferences, or research threads. If you were comparing laptops yesterday, you can ask, "Show me the results from my last search," and pick up exactly where you left off.

**4. A Familiar Yet Enhanced Experience**  
Built on Chromium, Atlas supports your existing extensions, shortcuts, and bookmarks — but with the added power of real-time AI. You can think of it as Chrome with a brain: everything you know, just *smarter*.

**5. Privacy and Transparency First**  
OpenAI's design makes memory strictly opt-in. You can view, edit, or delete what ChatGPT remembers, and the browser clearly indicates when AI is assisting with content. The goal is empowerment, not surveillance.

---

## Why It's a Milestone for Innovation

ChatGPT Atlas represents a philosophical shift in how we interact with the internet. The web, once a place to *search and click*, now becomes a space to *ask and act*. This marks the dawn of **conversational computing** — where your workflow is guided by natural dialogue rather than endless tabs and searches.

**Impact Across Domains:**  
- **Research & Education:** Instantly summarise papers, compare theories, and generate study notes within the same window.  
- **Productivity & Writing:** Draft emails, generate code snippets, or rephrase content directly beside your workspace.  
- **Shopping & Reviews:** Ask Atlas to find the best laptops under your budget, compare specs, and summarise top reviews.  
- **Data Analysis:** Pull key metrics or summarise datasets from web dashboards with a single query.  

The result? Browsing becomes less about searching — and more about *thinking*.

---

## Challenges and Considerations

Every revolution comes with trade-offs. While Atlas brings a new era of intelligent browsing, it raises important questions:  
- **Privacy:** Even with opt-in memory, users will need to stay aware of what data is stored and how it's used.  
- **Dependence on AI:** The convenience could make users overly reliant on AI judgment instead of verifying sources themselves.  
- **Early-stage Agent Mode:** As with any new automation feature, reliability and transparency will need refinement over time.

Despite these hurdles, Atlas' launch demonstrates OpenAI's clear vision — to merge conversational AI, browsing, and task automation into a single fluid experience.

---

## The Bottom Line

**ChatGPT Atlas is not just a browser — it's a companion for the modern web.** It redefines interaction by blending intelligence, context, and action into the very fabric of browsing. Whether you're researching a project, building a business, or just exploring ideas, Atlas turns the internet into a shared workspace between you and AI.

This isn't the end of browsers — it's the beginning of **AI-native exploration**.  
With Atlas, you don't just surf the web — you *collaborate* with it.`
  },
  {
    id: "genspark-future-ai-powered-creation",
    title: "Genspark: The Future of AI-Powered Creation",
    excerpt: "The creative tech space just got an upgrade. Genspark, a new-generation AI workspace, is redefining how ideas are built, tested, and shared — bridging the gap between imagination and execution.",
    category: "AI & Innovation",
    date: "2025-10-16",
    readTime: "8 min read",
    author: "Aryan Kumawat",
    tags: ["AI", "Automation", "No-Code", "Genspark", "Innovation"],
    featured: true,
    content: `The creative tech space just got an upgrade. **Genspark**, a new-generation AI workspace, is redefining how ideas are built, tested, and shared — bridging the gap between imagination and execution.

The rise of generative AI tools has already reshaped industries, but Genspark takes it a step further. It's not just about generating text or images — it's about creating *functional experiences* directly from a single prompt. Whether you're building a portfolio website, a prototype app, or an AI-assisted presentation, Genspark transforms your idea into a deployable product in minutes.

But what makes Genspark truly stand out in a world filled with AI builders, prompt tools, and code generators?

## What Makes Genspark Revolutionary?

**Multi-Agent Orchestration**

Unlike traditional AI tools that follow a single-threaded workflow, Genspark employs a **multi-agent orchestration system**. Each specialized agent tackles a unique part of your project — content generation, design layout, interactivity, or deployment — ensuring that complex ideas are broken down, parallelized, and executed seamlessly.

**Prompt-to-Product Pipeline**

Genspark introduces the concept of **prompt-driven development**. Instead of writing extensive code or wireframes, users simply describe their goals. The system interprets your intent, drafts the structure, builds HTML or app prototypes, and even provides live previews — all within minutes.

**Integrated Creativity & Functionality**

What sets Genspark apart is its ability to merge creativity and practicality. It doesn't just produce static output — it generates **interactive web pages, functional code blocks, and multimedia elements** that can be embedded directly into your projects or portfolio.

**Live Collaboration**

Creators can co-build with AI in real time, adjusting text, visuals, and layout dynamically. It's a next-level creative partner that learns from iteration, helping you refine outputs until they match your vision.

## Why Genspark Matters for Developers and Creators

**For Developers**

Genspark minimizes boilerplate coding. You can focus on innovation rather than repetitive setup work. Think of it as your intelligent scaffolding — it builds the foundation, and you build the experience.

**For Designers**

The AI understands design intent. By interpreting natural language prompts like "make it minimalist with soft tones and rounded edges," it generates aesthetically cohesive results, ready for refinement.

**For Entrepreneurs**

Prototype, validate, and iterate — all within hours. Genspark empowers startups and creators to test ideas faster, bringing agility to an otherwise slow and costly process.

## Strengths That Set Genspark Apart

**Speed and Accessibility**

From concept to prototype in minutes. Genspark democratizes creation, making advanced tools accessible even to non-coders.

**End-to-End Capability**

Most AI tools stop at generation. Genspark continues through **testing, iteration, and deployment**, giving creators a single environment to build and launch ideas.

**Portfolio Integration**

Its outputs are web-ready — you can directly embed generated projects, interactive widgets, or case studies into your personal portfolio, enhancing your digital presence.

## Challenges and Areas to Watch

As with any cutting-edge platform, there are growing pains.

- **Prompt Precision:** The quality of results still depends heavily on how well you articulate your vision.
- **Complex Logic:** Advanced interactivity or heavy computation may require post-generation edits.
- **AI Consistency:** Maintaining uniform design or logic across multiple generations can sometimes be tricky.

However, these are the very challenges that make tools like Genspark evolve rapidly — with every update, the models become sharper, faster, and more adaptive.

## The Future of Creation: Genspark's Vision

Imagine a world where ideation and execution are instantaneous — where you describe your next product, and it's live within minutes. That's the reality Genspark is working toward.

As AI models advance, Genspark's **multi-agent intelligence** and **cross-platform compatibility** could enable true *end-to-end automation of creativity*: research, content generation, design, and deployment working in unison.

It's not just about speed — it's about **unlocking creative potential**. Genspark is shaping a new era where everyone, regardless of coding skill, can bring ideas to life.

## The Bottom Line

**Genspark isn't just another AI tool — it's a creative ecosystem.**
It empowers developers, designers, and dreamers to work smarter, faster, and more fluidly than ever before.

With its agentic intelligence, real-time iteration, and prompt-based workflow, Genspark represents the next leap in AI-driven productivity.

Whether you're building your first portfolio, an experimental prototype, or an AI-powered product, Genspark offers the canvas, the tools, and the spark you need to create — instantly.`
  },
  {
    id: "what-is-n8n-workflow-automation",
    title: "What is n8n? The Open-Source Workflow Automation Platform Explained",
    excerpt: "The world of automation is evolving quickly, but some tools have already cemented themselves as go-to choices. One of the most powerful yet flexible platforms in this space is n8n (pronounced \"n-eight-n\").",
    category: "Automation",
    date: "2025-10-10",
    readTime: "6 min read",
    author: "Aryan Kumawat",
    tags: ["n8n", "Automation", "Workflow", "Open Source", "Integration"],
    featured: true,
    content: `The world of automation is evolving quickly, but some tools have already cemented themselves as go-to choices. One of the most powerful yet flexible platforms in this space is n8n (pronounced "n-eight-n"). Unlike many proprietary automation suites, n8n is an open-source, extendable workflow automation tool that empowers individuals and businesses to connect apps, automate processes, and build custom integrations—without being locked into a closed ecosystem.

So, what exactly makes n8n stand out? Let's break it down.

## The Core Idea: Workflows Made Easy

At its heart, n8n lets you create workflows—step-by-step chains of actions that connect your apps and services. Think of it as a bridge: you can set a trigger (like a new email, form submission, or webhook), and then define what happens next (send a message, update a database, transform data, etc.).

The beauty is in its visual drag-and-drop interface. Even if you aren't a developer, you can design powerful automations by simply connecting nodes on a canvas. Each node represents a task—whether it's pulling data from an API, formatting text, sending notifications, or running custom code.

## Why Developers Love n8n

While tools like Zapier and Make focus heavily on no-code simplicity, n8n strikes a balance:

**Open Source Freedom**: Because it's open-source, you're not stuck with vendor lock-in. You can host it yourself, customize it, and even add your own nodes.

**Custom Code Execution**: Built-in nodes let you run JavaScript, making it highly flexible for edge cases.

**API-First Design**: Developers can treat n8n as an automation engine, integrating it directly with their systems.

**Community Power**: With a strong open-source community, you'll find contributions, plugins, and discussions that help the platform evolve quickly.

## Key Features That Make n8n Special

**400+ Integrations**: From Google Sheets and Slack to CRMs and databases, n8n connects to virtually everything.

**Conditional Logic**: Unlike simple linear automation, you can branch workflows, add loops, and handle errors gracefully.

**Scalability**: Run it on your local machine, deploy it to the cloud, or scale it with Docker and Kubernetes.

**Fair Code License**: n8n uses a special license that keeps the core open-source but protects against unfair commercial exploitation.

## Where It Shines

n8n is perfect for:

- Startups and teams that want automation without paying per-workflow fees.
- Enterprises that need control, scalability, and self-hosting.
- Developers and power users who like to get under the hood and customize.
- Data workflows like ETL (Extract, Transform, Load), where multiple steps and conditional logic are required.

## Where It Has Limitations

Of course, n8n isn't flawless:

**Learning Curve**: While powerful, it can feel overwhelming to beginners compared to simpler drag-and-drop tools.

**Hosting Overhead**: If you self-host, you're responsible for infrastructure, updates, and security.

**Ecosystem vs Competitors**: Zapier has more polished integrations, while Make offers an even more beginner-friendly interface.

## The Bottom Line

n8n is more than just another automation tool—it's a platform for building custom, scalable, and open automation systems. Whether you're an individual trying to streamline repetitive tasks, or an enterprise architect designing large-scale workflows, n8n offers the flexibility to make it happen on your terms.

In a world where automation is becoming mission-critical, n8n proves that open-source solutions can be both powerful and practical. It's not just about connecting apps—it's about giving you the freedom to automate the way you want.`
  },
  {
    id: "chatgpt-agentkit-competitor-n8n",
    title: "ChatGPT's New AgentKit: A Competitor to n8n?",
    excerpt: "The automation landscape just got more interesting. OpenAI's latest release, AgentKit, transforms ChatGPT from a conversational AI into something far more powerful: a true autonomous agent capable of planning, executing, and adapting in real-time.",
    category: "AI & Automation",
    date: "08/10/2025",
    readTime: "8 min read",
    author: "Aryan Kumawat",
    tags: ["AI", "ChatGPT", "AgentKit", "n8n", "Automation"],
    featured: true,
    content: `The automation landscape just got more interesting. OpenAI's latest release, AgentKit, transforms ChatGPT from a conversational AI into something far more powerful: a true autonomous agent capable of planning, executing, and adapting in real-time.

Unlike traditional chatbots that simply respond to prompts, AgentKit enables ChatGPT to break down complex tasks, make decisions on the fly, and interact with the digital world through browsers, code execution, and file management. This isn't just another AI tool—it's a glimpse into the future of intelligent automation.

But here's the million-dollar question: How does this stack up against established workflow automation platforms like n8n?

## What Makes AgentKit Revolutionary?

**Dynamic Reasoning & Execution**: AgentKit doesn't just follow predefined scripts—it thinks, plans, and adapts its approach based on real-time feedback. It can branch into different strategies, reflect on its progress, and course-correct when things don't go as expected.

**Human-in-the-Loop Control**: Unlike black-box automation, AgentKit allows you to pause, redirect, or intervene at any point without losing context. This makes it perfect for complex, multi-step processes where human oversight is crucial.

**Real-World Tool Integration**: With access to web browsers, code execution environments, and file systems, AgentKit can perform actual work beyond just generating text. It can research, analyze data, write code, and manage files—essentially acting as a digital assistant that can handle end-to-end tasks.

## Where n8n Maintains Its Edge

n8n has earned its reputation as the go-to platform for workflow automation, and for good reason. Its visual drag-and-drop interface makes complex integrations accessible to non-technical users, while its extensive library of 400+ integrations covers virtually every business application you can think of.

**Production-Ready Reliability**: n8n excels at handling concurrency, error recovery, and observability—critical features for enterprise environments where downtime isn't an option. It's battle-tested in production environments with robust monitoring and alerting capabilities.

**Scalability & Performance**: When you need to process thousands of workflows simultaneously, n8n's architecture is designed to handle the load. AgentKit, while powerful, is still primarily designed for individual task execution.

**Ecosystem Maturity**: Years of development have created a mature ecosystem around n8n, including community contributions, extensive documentation, and enterprise support options.

## The Future: Competition or Collaboration?

The most exciting possibility isn't choosing between these tools—it's combining them. Here's how they could work together:

**AgentKit as the Strategic Brain**: Use AgentKit for complex reasoning, dynamic decision-making, and tasks that require creative problem-solving. Its ability to adapt and learn makes it perfect for handling novel situations.

**n8n as the Execution Engine**: Leverage n8n for reliable, scalable execution of well-defined processes. Its robust infrastructure and extensive integrations make it ideal for handling the heavy lifting of automation.

**Hybrid Workflows**: Imagine AgentKit analyzing a complex business problem, breaking it down into actionable steps, and then orchestrating n8n workflows to execute the solution. The AI handles the thinking, n8n handles the doing.

## The Bottom Line

AgentKit represents a significant leap forward in AI capabilities, pushing us closer to true artificial intelligence that can reason, plan, and act autonomously. It's not just another automation tool—it's a digital teammate that can adapt and learn.

However, n8n remains the gold standard for production-grade automation, offering the reliability, scalability, and ecosystem that businesses need for mission-critical workflows.

The real opportunity lies in their combination: AgentKit's intelligence paired with n8n's execution power could create automation solutions that are both smart and reliable. As these technologies mature, we might see a new category of hybrid AI-automation platforms that offer the best of both worlds.

The future of automation isn't about choosing between intelligence and reliability—it's about having both.`
  },
  {
    id: "meta-indisplay-glasses-innovation-breakthrough",
    title: "Meta In-Display Glasses: The Next Frontier of Innovation",
    excerpt: "Meta's in-display glasses are redefining the boundaries of augmented reality. By seamlessly merging the digital and physical worlds through ultra-thin, display-embedded lenses, they mark one of the most significant technological leaps since the smartphone.",
    category: "AR & Innovation",
    date: "22/10/2025",
    readTime: "7 min read",
    author: "Aryan Kumawat",
    tags: ["Meta", "AR", "Smart Glasses", "Innovation", "Technology"],
    featured: true,
    content: `The innovation landscape just experienced a paradigm shift. Meta's **in-display glasses** represent a milestone in augmented reality (AR) — bringing immersive, real-time digital experiences directly into your field of vision without the need for bulky headsets or external displays.
  
  Unlike previous iterations of AR wearables, these glasses integrate **micro-LED projection technology** directly within transparent lenses, delivering full-color, high-contrast visuals that feel naturally blended with the real world. They aren't just an accessory — they're a bridge between reality and the metaverse.
  
  ## What Makes Meta's In-Display Glasses Revolutionary?
  
  **1. Seamless Integration of Reality and Digital Layers**  
  Traditional AR devices rely on noticeable overlays or opaque lenses. Meta's in-display optics, however, use nano-scale waveguides to project images that appear *within* your vision, enabling a truly natural experience. From navigation prompts to translation text and holographic calls, digital elements now feel like part of your environment.
  
  **2. Real-Time AI Assistance**  
  Paired with Meta's AI ecosystem, the glasses can identify objects, people, and text around you — providing contextual insights instantly. Imagine looking at a foreign sign and seeing a live translation appear or receiving real-time cues in a meeting without looking at your phone.
  
  **3. Ultra-Light Design & Comfort**  
  One of the biggest challenges with wearable tech has been usability. Meta's engineering breakthrough reduces weight while maintaining performance, making these glasses indistinguishable from regular eyewear. The micro-battery system and graphene-based circuits make long usage hours practical.
  
  **4. Privacy-First Design**  
  Meta emphasizes a privacy-centric approach — with visible indicators when recording or streaming and on-device data processing to minimize cloud dependency. It's a crucial step toward building public trust in AR devices.
  
  ## How They Redefine Innovation
  
  These glasses mark a new chapter in human-computer interaction. Instead of screens, we now interact through **ambient computing** — where digital content exists naturally within our perception. Tasks like checking emails, joining meetings, or exploring cities will no longer require pulling out a phone or laptop.
  
  **Impact on Industries:**  
  - **Education:** Immersive, context-aware learning experiences.  
  - **Healthcare:** Real-time patient data overlays for doctors during procedures.  
  - **Retail:** Virtual try-ons and product insights directly through the lens.  
  - **Navigation:** AR overlays guiding you turn by turn in real-world environments.
  
  ## Challenges and Future Potential
  
  While groundbreaking, challenges remain — including battery efficiency, heat dissipation, and ensuring crystal-clear visibility under bright sunlight. However, with Meta's investment in micro-optics and spatial computing, these limitations are rapidly being addressed.
  
  In the near future, these glasses could serve as the **gateway to the metaverse**, blending physical and virtual experiences so seamlessly that "screens" as we know them may become obsolete.
  
  ## The Bottom Line
  
  Meta's in-display glasses are more than a wearable device — they're a **catalyst for the post-smartphone era**. By embedding intelligence directly into what we see, Meta is pioneering a world where information becomes *invisible yet omnipresent*.
  
  The future of innovation is no longer about what we hold — it's about what we *see*.`
  }
];

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  tags: string[];
  featured: boolean;
  content: string;
}

export default function BlogPostPage() {
  const params = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const slug = params.slug as string;
      console.log('Blog post slug:', slug);
      
      // Sort posts by date (latest first) for consistency
      const sortedPosts = [...blogPosts].sort((a, b) => {
        // Parse dates for comparison - handle both DD/MM/YYYY and YYYY-MM-DD formats
        const parseDate = (dateStr: string) => {
          if (dateStr.includes('/')) {
            // DD/MM/YYYY format
            const [day, month, year] = dateStr.split('/');
            return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
          } else {
            // YYYY-MM-DD format
            return new Date(dateStr);
          }
        };
        
        const dateA = parseDate(a.date);
        const dateB = parseDate(b.date);
        return dateB.getTime() - dateA.getTime();
      });
      
      const postData = sortedPosts.find(p => p.id === slug) || null;
      console.log('Blog post data:', postData);
      
      if (postData) {
        setPost(postData);
      } else {
        setError(`Blog post with slug "${slug}" not found`);
      }
      setLoading(false);
    } catch (err) {
      console.error('Error loading blog post:', err);
      setError('Failed to load blog post');
      setLoading(false);
    }
  }, [params.slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-hero noise flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-hero noise flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Error</h1>
          <p className="text-red-400 mb-4">{error}</p>
          <Link href="/blog">
            <Button className="bg-gradient-to-r from-[#66FCF1] to-[#45A29E]">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-hero noise flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <Link href="/blog">
            <Button className="bg-gradient-to-r from-[#66FCF1] to-[#45A29E]">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Function to render markdown-like content
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    let inList = false;
    let listItems: string[] = [];

    const flushList = () => {
      if (inList && listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="list-disc list-inside space-y-2 mb-4 text-slate-300">
            {listItems.map((item, idx) => (
              <li key={idx} className="leading-relaxed">
                {renderBoldText(item)}
              </li>
            ))}
          </ul>
        );
        listItems = [];
        inList = false;
      }
    };

    const renderBoldText = (text: string) => {
      const parts = text.split(/(\*\*.*?\*\*)/g);
      return parts.map((part, idx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={idx} className="font-bold text-white">
              {part.replace(/\*\*/g, '')}
            </strong>
          );
        }
        return part;
      });
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();
      
      if (trimmedLine.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={index} className="text-2xl font-bold text-white mt-6 mb-4 border-b border-slate-600 pb-2">
            {trimmedLine.replace('## ', '')}
          </h2>
        );
      } else if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**') && trimmedLine.length > 4) {
        flushList();
        elements.push(
          <h3 key={index} className="text-xl font-semibold text-[#66FCF1] mt-4 mb-3">
            {trimmedLine.replace(/\*\*/g, '')}
          </h3>
        );
      } else if (trimmedLine.startsWith('- ')) {
        if (!inList) {
          flushList();
          inList = true;
        }
        listItems.push(trimmedLine.replace('- ', ''));
      } else if (trimmedLine === '') {
        flushList();
        elements.push(<div key={index} className="h-2" />);
      } else if (trimmedLine.length > 0) {
        flushList();
        elements.push(
          <p key={index} className="text-slate-300 leading-relaxed mb-4 text-base">
            {renderBoldText(trimmedLine)}
          </p>
        );
      }
    });

    flushList(); // Flush any remaining list items
    return elements;
  };

  return (
    <div className="min-h-screen bg-hero noise">
      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <div className="mb-8">
              <Link href="/blog">
                <Button variant="outline" className="mb-6 glass border-white/20 hover:bg-white/10">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Blog
                </Button>
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <GlassCard className="p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-sm">
                    {post.category}
                  </Badge>
                  <Badge variant="default" className="text-sm bg-gradient-to-r from-[#66FCF1] to-[#45A29E]">
                    Featured
                  </Badge>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  {post.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {(() => {
                      // Handle both DD/MM/YYYY and YYYY-MM-DD formats
                      if (post.date.includes('/')) {
                        // DD/MM/YYYY format
                        const [day, month, year] = post.date.split('/');
                        const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
                        return date.toLocaleDateString();
                      } else {
                        // YYYY-MM-DD format
                        return new Date(post.date).toLocaleDateString();
                      }
                    })()}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
                
                <p className="text-lg text-slate-300/90 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {post.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="border-t border-slate-600 pt-6">
                  <div className="max-w-none">
                    <div className="space-y-4">
                      {renderContent(post.content)}
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.6}>
            <div className="text-center mt-12">
              <Link href="/blog">
                <Button className="bg-gradient-to-r from-[#66FCF1] to-[#45A29E]">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to All Articles
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
