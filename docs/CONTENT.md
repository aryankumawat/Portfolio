# Content Management Documentation

## Overview

This portfolio uses a hybrid content management approach with JSON data sources and MDX for rich content. This allows for easy content updates while maintaining type safety and performance.

## Content Structure

```
src/
├── data/
│   ├── projects/
│   │   ├── index.json
│   │   └── [slug].mdx
│   ├── blog/
│   │   ├── index.json
│   │   └── [slug].mdx
│   └── profile.json
├── components/
│   ├── content/
│   │   ├── mdx-content.tsx
│   │   ├── project-card.tsx
│   │   └── blog-card.tsx
│   └── ...
```

## Adding New Projects

### 1. Create Project Data

Add to `src/data/projects/index.json`:

```json
{
  "projects": [
    {
      "id": "project-slug",
      "title": "Project Title",
      "description": "Brief project description",
      "longDescription": "Detailed project description",
      "technologies": ["React", "TypeScript", "Node.js"],
      "category": "web-development",
      "status": "completed",
      "featured": true,
      "image": "/images/projects/project-slug.jpg",
      "gallery": [
        "/images/projects/project-slug-1.jpg",
        "/images/projects/project-slug-2.jpg"
      ],
      "links": {
        "live": "https://project-url.com",
        "github": "https://github.com/username/project"
      },
      "timeline": {
        "start": "2024-01",
        "end": "2024-03"
      },
      "achievements": [
        "Achievement 1",
        "Achievement 2"
      ],
      "challenges": [
        "Challenge 1",
        "Challenge 2"
      ],
      "solutions": [
        "Solution 1",
        "Solution 2"
      ]
    }
  ]
}
```

### 2. Create Detailed MDX Content (Optional)

Create `src/data/projects/project-slug.mdx`:

```mdx
---
title: "Project Title"
description: "Project description"
technologies: ["React", "TypeScript"]
---

# Project Title

## Overview

Detailed project description with rich content.

## Problem Statement

What problem did this project solve?

## Solution

How did you solve it?

## Technologies Used

- React
- TypeScript
- Node.js

## Key Features

- Feature 1
- Feature 2

## Results

What were the outcomes?

## Lessons Learned

What did you learn from this project?
```

## Adding Blog Posts

### 1. Create Blog Data

Add to `src/data/blog/index.json`:

```json
{
  "posts": [
    {
      "id": "post-slug",
      "title": "Post Title",
      "description": "Brief post description",
      "author": "Aryan Kumawat",
      "publishedAt": "2024-01-15",
      "updatedAt": "2024-01-15",
      "tags": ["data-science", "machine-learning"],
      "category": "technical",
      "featured": true,
      "image": "/images/blog/post-slug.jpg",
      "readTime": "5 min read",
      "excerpt": "Post excerpt for previews"
    }
  ]
}
```

### 2. Create MDX Content

Create `src/data/blog/post-slug.mdx`:

```mdx
---
title: "Post Title"
description: "Post description"
tags: ["data-science", "machine-learning"]
publishedAt: "2024-01-15"
---

# Post Title

## Introduction

Post content here...

## Section 1

Content...

## Code Example

```typescript
function example() {
  return "Hello World";
}
```

## Conclusion

Wrap up the post...
```

## Profile Data

Update `src/data/profile.json` for personal information:

```json
{
  "personal": {
    "name": "Aryan Kumawat",
    "title": "Data Science & Finance Student",
    "location": "Sydney, Australia",
    "email": "akum9196@uni.sydney.edu.au",
    "bio": "Brief bio description",
    "avatar": "/images/avatar.jpg"
  },
  "social": {
    "linkedin": "https://www.linkedin.com/in/aryan-kumawat-/",
    "github": "https://github.com/aryankumawat",
    "twitter": "https://twitter.com/aryankumawat"
  },
  "education": [
    {
      "institution": "University of Sydney",
      "degree": "Bachelor of Engineering (Data Science)",
      "start": "2022",
      "end": "2025",
      "gpa": "3.8/4.0"
    }
  ],
  "skills": {
    "programming": ["Python", "JavaScript", "TypeScript", "R"],
    "frameworks": ["React", "Next.js", "Node.js", "Django"],
    "tools": ["Git", "Docker", "AWS", "Tableau"],
    "languages": ["English", "Hindi"]
  }
}
```

## Content Types

### Project Categories
- `web-development`
- `data-science`
- `machine-learning`
- `finance`
- `mobile-development`
- `open-source`

### Blog Categories
- `technical`
- `tutorial`
- `opinion`
- `case-study`
- `announcement`

### Project Status
- `completed`
- `in-progress`
- `planned`
- `archived`

## Content Components

### ProjectCard
```tsx
import { ProjectCard } from '@/components/content/project-card';

<ProjectCard 
  project={project} 
  featured={true}
  showDescription={true}
/>
```

### BlogCard
```tsx
import { BlogCard } from '@/components/content/blog-card';

<BlogCard 
  post={post}
  featured={true}
  showExcerpt={true}
/>
```

### MDXContent
```tsx
import { MDXContent } from '@/components/content/mdx-content';

<MDXContent content={mdxContent} />
```

## Image Optimization

### Project Images
- **Hero Image**: 1200x800px, WebP format
- **Gallery Images**: 800x600px, WebP format
- **Thumbnails**: 400x300px, WebP format

### Blog Images
- **Featured Image**: 1200x630px, WebP format
- **Content Images**: 800x600px, WebP format

### Optimization Commands
```bash
# Convert to WebP
cwebp input.jpg -o output.webp -q 80

# Resize images
convert input.jpg -resize 1200x800 output.jpg
```

## SEO Optimization

### Meta Tags
Each content piece should include:
- Title
- Description
- Keywords
- Open Graph tags
- Twitter Card tags

### Structured Data
Use JSON-LD for rich snippets:
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Post Title",
  "author": {
    "@type": "Person",
    "name": "Aryan Kumawat"
  },
  "datePublished": "2024-01-15"
}
```

## Content Validation

### JSON Schema
Use JSON schemas to validate content structure:

```json
{
  "type": "object",
  "properties": {
    "title": { "type": "string", "minLength": 1 },
    "description": { "type": "string", "minLength": 10 },
    "technologies": { "type": "array", "items": { "type": "string" } }
  },
  "required": ["title", "description", "technologies"]
}
```

### TypeScript Types
Define TypeScript interfaces for type safety:

```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  // ... other properties
}
```

## Best Practices

1. **Consistent Naming**: Use kebab-case for slugs
2. **Descriptive Titles**: Clear, SEO-friendly titles
3. **Rich Descriptions**: Detailed, engaging descriptions
4. **Proper Categorization**: Use consistent categories and tags
5. **Image Optimization**: Always optimize images
6. **Content Validation**: Validate all content before publishing
7. **Version Control**: Track all content changes
8. **Backup**: Regular backups of content data
