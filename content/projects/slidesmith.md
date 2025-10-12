---
title: "SlideSmith"
subtitle: "Enterprise-Grade AI Presentation Generation Platform"
slug: "slidesmith"
date: "2025-10-12"
cover: "/images/projects/slidesmith-hero.png"
tags:
  - LLM Orchestration
  - Multi-Agent Systems
  - Next.js 15
  - TypeScript
  - Ollama
  - OpenAI
seo:
  description: "SlideSmith is a production-grade, distributed multi-agent system for automated slide deck generation with policy-based model routing, parallel QA, and native PPTX/PDF export."
---

## Overview
SlideSmith is a **production-ready, distributed multi-agent system** that converts unstructured input into polished, on-brand slide decks. It implements a **13-agent DAG pipeline** with **parallel QA** and **semantic export** to PPTX/PDF. The platform runs **locally (Ollama)** or in the **cloud (OpenAI)** via a provider-agnostic abstraction.

- **Parallel QA:** factual checks, WCAG accessibility, readability
- **Routing Policies:** _quality_, _speed_, _balanced (default)_, _local-only_
- **Semantic Export:** theme-aware PPTX/PDF with native charts & smart wrapping

---

## Architecture
- **Distributed Agent Orchestration:** DAG with dependency resolution and concurrent stages  
- **Adaptive Model Selection:** policy-based router assigns Phi-4 14B or Gemma3 4B per task  
- **Provider Abstraction:** unified client for Ollama/OpenAI/OpenRouter  
- **Semantic Export Engine:** PPTX (PptxGenJS native charts), PDF (PDFKit)  
- **Validation:** Zod contracts (compile-time & runtime)

**Key Agents (13):** Researcher, Structurer, Slidewriter, Copy Tightener, Fact Checker, Data→Viz Planner, Media Finder, Speaker Notes Generator, Accessibility Linter, Live Widget Planner, Executive Summary, Audience Adapter, Readability Analyzer.  
**Export:** PPTX Export Agent (native charts), PDF Export (theme-aware pagination).

---

## Model Routing Policies
- **Quality:** Phi-4 14B for all agents (max accuracy)  
- **Speed:** Gemma3 4B for all agents (rapid prototyping)  
- **Balanced (default):** Phi-4 14B for critical reasoning; Gemma3 4B for routine tasks  
- **Local-Only:** Ollama models only (privacy/offline)

**API example**
```json
POST /api/multi-model-generate
{
  "topic": "AI in Healthcare",
  "policy": "balanced"
}
```

---

## Performance

* **Latency:** ~3–5 minutes for a 10-slide deck (balanced policy, M1 Pro)
* **Parallel QA:** ~75% latency reduction vs. serial checks
* **Routing Efficiency:** ~60% cost optimization via task-aware model selection
* **Reliability:** 99.5% with timeout/backoff & graceful degradation
* **Tokens/Deck:** ~10k–20k total

---

## Technology Stack

* **Runtime:** Next.js 15 (App Router), Node 18+, TypeScript (strict)
* **UI:** React 18, Tailwind, shadcn/ui
* **AI:** Ollama (Phi-4 14B, Gemma3 4B), OpenAI (cloud), provider abstraction
* **Validation/Parsing:** Zod schemas, robust JSON extraction with fallbacks
* **Viz & Export:** Recharts + PptxGenJS (native charts), PDFKit (theme-aware text wrapping)
* **Storage:** Local-first (IndexedDB) for user-owned sessions

---

## Quality Assurance

* **Schemas:** Zod input/output contracts
* **Factuality:** claim–citation alignment & confidence scoring
* **Accessibility:** WCAG 2.1 AA checks & contrast analysis
* **Readability:** Flesch-Kincaid grade targets & tone deviation detection

**Quality Metrics (example)**

```ts
interface QualityMetrics {
  factualAccuracy: number;     // 0–1
  accessibilityScore: number;  // 0–100
  readabilityGrade: number;    // 6–16
  toneConsistency: number;     // 0–1
  citationCoverage: number;    // 0–100%
}
```

---

## API Surface

**Multi-Agent Generation**

```ts
POST /api/multi-model-generate
{
  topic: string;
  audience: string;
  tone: 'Professional' | 'Academic' | 'Technical' | 'Casual';
  desiredSlideCount: number;
  theme: string;
  duration: number;             // minutes
  policy: 'quality' | 'speed' | 'balanced' | 'local-only';
}
```

**Simplified Generation**

```ts
POST /api/generate-deck
{
  mode: 'quick_prompt' | 'doc_to_deck';
  prompt: string;
  files?: File[];
  style: string;                // theme id
}
```

**Exports**

* `POST /api/export/pdf` – theme-aware PDF (11"×8.5", embedded fonts, footers)
* `POST /api/export/pptx` – native charts, smart wrapping, speaker notes

---

## Security & Privacy

* **Local-First:** full offline flow with Ollama
* **No Persistence:** server processes are ephemeral
* **GDPR-Friendly:** no personal data collection
* **TLS 1.3:** for any external API calls
* **API Keys:** server-side env only (never client-exposed)

---

## Repository & Setup

```bash
git clone https://github.com/aryankumawat/SlideSmith.git
cd SlideSmith
npm install
cp .env.example .env.local

# Local LLMs (Ollama)
ollama serve
ollama pull phi4:latest
ollama pull gemma3:4b

npm run dev   # http://localhost:3000/studio-new
```

---

## Outcome

SlideSmith demonstrates **scalable LLM orchestration** with **enterprise-grade quality controls** and **multi-format export**, enabling teams to go from raw notes to polished, editable decks in minutes—while preserving privacy in **local/offline** deployments.

