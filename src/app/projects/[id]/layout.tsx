import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const projectId = resolvedParams.id;

  // Metadata for SlideSmith
  if (projectId === "slidesmith") {
    return {
      title: "SlideSmith — Enterprise AI Presentation Generator | Aryan Kumawat",
      description:
        "Production-ready multi-agent system for automated slide decks with policy-based model routing, parallel QA, and native PPTX/PDF export. Runs on Ollama or OpenAI.",
      openGraph: {
        title: "SlideSmith — Enterprise AI Presentation Generator",
        description:
          "13-agent DAG pipeline, parallel QA, semantic export, and provider-agnostic LLM routing (local or cloud).",
        url: "/projects/slidesmith",
        type: "website",
        images: [
          {
            url: "/images/projects/slidesmith-og.png",
            width: 1200,
            height: 630,
            alt: "SlideSmith - Enterprise AI Presentation Generator"
          }
        ]
      },
      twitter: {
        card: "summary_large_image",
        title: "SlideSmith — Enterprise AI Presentation Generator",
        description:
          "Distributed multi-agent slide generation with parallel QA, policy routing, and native PPTX/PDF export.",
        images: ["/images/projects/slidesmith-og.png"]
      }
    };
  }

  // Default metadata for other projects
  return {
    title: "Project Details | Aryan Kumawat",
    description: "View detailed information about this project."
  };
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

