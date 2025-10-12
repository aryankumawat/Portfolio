# SlideSmith Project Structure

```
src/
├── app/                                    # Next.js App Router
│   ├── api/                               # API Routes
│   │   ├── multi-model-generate/         # Multi-agent orchestration endpoint
│   │   ├── generate-deck/                # Simplified generation endpoint
│   │   ├── generate/                     # Legacy endpoint (backward compat)
│   │   └── export/                       # Format conversion endpoints
│   │       ├── pdf/                      # PDF export endpoint
│   │       └── pptx/                     # PPTX export endpoint
│   ├── studio/                           # Legacy studio interface
│   ├── studio-new/                       # Modern studio interface
│   └── page.tsx                          # Landing page
│
├── components/                            # React Components
│   ├── blocks/                           # Slide content primitives
│   │   ├── HeadingBlock.tsx             # Heading/title blocks
│   │   ├── BulletsBlock.tsx             # Bullet point lists
│   │   ├── ChartBlock.tsx               # Chart visualizations
│   │   ├── ImageBlock.tsx               # Image blocks
│   │   └── ...                          # Additional block types
│   │
│   ├── live-widgets/                     # Real-time data components
│   │   ├── LiveChart.tsx                # Live data charts
│   │   ├── Ticker.tsx                   # Stock/crypto tickers
│   │   ├── Map.tsx                      # Interactive maps
│   │   └── ...                          # Additional widgets
│   │
│   ├── DeckCanvas.tsx                    # Slide rendering engine
│   └── ui/                               # Design system components (shadcn)
│
├── lib/                                   # Core Library & Utilities
│   ├── multi-model/                      # Agent system core
│   │   ├── agents/                       # Individual agent implementations
│   │   │   ├── researcher.ts            # Research & fact gathering agent
│   │   │   ├── structurer.ts            # Deck outline & structure agent
│   │   │   ├── slidewriter.ts           # Content generation agent
│   │   │   ├── copy-tightener.ts        # Tone & refinement agent
│   │   │   ├── fact-checker.ts          # Verification & citation agent
│   │   │   ├── accessibility-linter.ts  # WCAG compliance agent
│   │   │   └── ...                      # Additional specialized agents
│   │   │
│   │   ├── base-agent.ts                # Abstract agent class
│   │   ├── orchestrator.ts              # DAG execution coordinator
│   │   ├── router.ts                    # Model selection logic
│   │   ├── schemas.ts                   # Zod validation contracts
│   │   └── ollama-config.ts             # Model configuration
│   │
│   ├── llm.ts                            # LLM provider abstraction
│   ├── deck-generator.ts                 # Simplified generation pipeline
│   ├── pptx-advanced-exporter.ts        # 🆕 Advanced PPTX engine (native charts, wrapping)
│   ├── schema.ts                         # Core TypeScript types
│   ├── theming.ts                        # Theme system
│   ├── storage.ts                        # Client-side persistence
│   └── utils.ts                          # Utility functions
│
└── prompts/                               # AI Prompt Templates
    └── slide_prompts.ts                   # Prompt template library
```

## Directory Descriptions

### `/app` - Application Routes
The Next.js App Router structure containing all pages and API endpoints.

### `/app/api` - API Endpoints
- **multi-model-generate/**: Main multi-agent orchestration endpoint for slide generation
- **generate-deck/**: Simplified single-model generation endpoint
- **generate/**: Legacy endpoint maintained for backward compatibility
- **export/**: Format conversion endpoints for PDF and PPTX export

### `/components` - React Components
Reusable UI components organized by functionality.

#### `/components/blocks` - Slide Content Primitives
Individual slide block components that compose the presentation:
- Headings, bullets, charts, images, and more
- Each block is a self-contained React component

#### `/components/live-widgets` - Real-Time Data Components
Interactive widgets that display live data:
- Live charts with auto-refresh
- Stock/crypto price tickers
- Interactive maps
- Embedded dashboards

### `/lib` - Core Library
Business logic, utilities, and the multi-agent system.

#### `/lib/multi-model` - Multi-Agent System
The revolutionary 12-agent AI system:
- **agents/**: 12 specialized AI agents (Researcher, Structurer, Slidewriter, etc.)
- **base-agent.ts**: Abstract base class for all agents
- **orchestrator.ts**: Coordinates agent execution in a DAG (Directed Acyclic Graph)
- **router.ts**: Smart model selection (Phi-4 vs Gemma3-4B)
- **schemas.ts**: Zod schemas for type-safe validation
- **ollama-config.ts**: Ollama model configuration

#### Other Library Files
- **llm.ts**: Abstraction layer for LLM providers (Ollama, OpenAI)
- **deck-generator.ts**: Simplified generation pipeline
- **pptx-advanced-exporter.ts**: Advanced PPTX export with native charts
- **schema.ts**: Core TypeScript type definitions
- **theming.ts**: Theme system (5 themes: DeepSpace, Ultraviolet, etc.)
- **storage.ts**: IndexedDB-based client-side persistence

### `/prompts` - AI Prompt Templates
Carefully crafted prompt templates for all AI agents to ensure consistent, high-quality output.

## Key Features by Directory

| Directory | Key Features |
|-----------|-------------|
| `/app/api/multi-model-generate` | 12-agent orchestration, parallel processing, smart routing |
| `/components/blocks` | Modular slide content, reusable primitives |
| `/components/live-widgets` | Real-time data integration, auto-refresh |
| `/lib/multi-model/agents` | Specialized AI agents (research, structure, quality checks) |
| `/lib/multi-model/orchestrator` | DAG-based agent coordination, dependency management |
| `/lib/pptx-advanced-exporter` | Native chart rendering, text wrapping, theme fidelity |

## Technology Stack by Layer

- **Frontend**: Next.js 15, React 18, TypeScript, Tailwind CSS
- **AI Layer**: Ollama (Phi-4, Gemma3-4B), OpenAI
- **Validation**: Zod schemas, TypeScript strict mode
- **Export**: Playwright (PDF), PptxGenJS (PPTX)
- **Storage**: IndexedDB with intelligent caching
- **UI Components**: shadcn/ui, Lucide icons

