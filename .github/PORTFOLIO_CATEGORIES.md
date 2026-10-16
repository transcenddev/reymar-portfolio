# Portfolio Categories & Structure

> **Last Updated**: November 5, 2025  
> **Purpose**: Define content categories and organizational structure for Reymar's portfolio

---

## 🎯 Main Project Categories

These are the **primary categories** that should be prominently featured across the portfolio:

### 1. 🎨 Web Design

**Focus**: UI/UX projects, landing pages, and visual layouts

**Example Projects**:

- Read AI Website Design
- Landing page designs
- UI/UX case studies
- Responsive web layouts

**Key Skills**: Figma, Adobe XD, User Research, Wireframing, Prototyping

---

### 2. 💻 Web Development

**Focus**: Frontend builds and interactive websites using React + Tailwind

**Example Projects**:

- COVID-19 Health Declaration System
- Interactive web applications
- Custom component libraries
- Performance-optimized sites

**Key Skills**: React, Next.js, TypeScript, Tailwind CSS, Framer Motion

---

### 3. 🏷️ Branding & Visual Identity

**Focus**: Logos, color systems, and brand direction

**Example Projects**:

- Company rebrands
- Logo design systems
- Brand guidelines
- Visual identity packages

**Key Skills**: Adobe Illustrator, Brand Strategy, Typography, Color Theory

---

### 4. 📹 Content Creation

**Focus**: Personal brand visuals, storytelling videos, and social media content

**Example Projects**:

- Short-form video content (TikTok, Instagram Reels)
- YouTube videos
- Social media campaigns
- Photography portfolios

**Key Skills**: Video Editing (Premiere Pro, After Effects), Photography, Social Media Marketing, Storytelling

---

### 5. 🤖 Automation & AI

**Focus**: Workflows, bots, or AI-based automations that improve productivity

**Example Projects**:

- SP Madrid AI Multimedia ("Reviving Memories with AI")
- Workflow automation tools
- AI-powered design tools
- Process optimization systems

**Key Skills**: AI Integration, Workflow Design, Automation Tools, Python/JavaScript

---

## 🧪 Optional Categories

These categories can be **hidden initially** or marked as **"Coming Soon"** depending on content availability:

### 📚 Experiments / Case Studies

**Focus**: Redesigns, clones, or projects built for learning

**Purpose**:

- Show learning process and growth
- Demonstrate problem-solving approach
- Share design thinking and iterations

**Example Content**:

- App redesign challenges
- Clone projects (Duolingo, Spotify, etc.)
- Design system breakdowns
- Process documentation

**Status**: Can be gated or shown selectively

---

### 📈 Strategy / Systems

**Focus**: Growth frameworks, content systems, or creative direction

**Purpose**:

- Demonstrate strategic thinking
- Show how you approach business problems
- Document frameworks and methodologies

**Example Content**:

- Content strategy frameworks
- Growth marketing playbooks
- Personal branding systems
- Creative direction case studies

**Status**: Can be gated or shown selectively

---

## 🏗️ Implementation Guide

### Current Services (from `Services.tsx`)

The services section currently lists:

1. **Web Design & Development**

   - Modern, fast, responsive websites built with clean code and a focus on conversions

2. **Content Creation & Video Editing**

   - Short-form and long-form content that engages your audience across platforms

3. **Graphic & Brand Design**

   - Visual identity systems, brand guidelines, and assets that look sharp everywhere

4. **Digital Marketing & Personal Branding**

   - Positioning, messaging, and campaigns that build trust and grow your audience

5. **AI & Automation**
   - Workflows and tools that save time, reduce costs, and scale your operations

### Project Data Structure

When adding projects, include category metadata:

```typescript
{
  id: "project-slug",
  name: "Project Name",
  category: "Web Design", // or "Web Development", "Branding", etc.
  tags: ["UI/UX", "Figma", "Responsive"], // Related skills/tools
  featured: true, // Show on homepage
  comingSoon: false, // Mark as coming soon
  image: "/assets/images/project-thumbnail.jpg",
  // ... other project data
}
```

### Filtering & Display Logic

**Homepage (`Projects.tsx`)**:

- Show 3-4 featured projects
- Mix of different categories
- "View All Work" button leads to full portfolio

**Work Page (`/work`)**:

- Category filter tabs
- Grid or list view toggle
- Search functionality
- "Coming Soon" placeholders for optional categories

---

## 📊 Content Priority Matrix

| Category                   | Priority | Current Projects | Target Count |
| -------------------------- | -------- | ---------------- | ------------ |
| Web Design                 | High     | 1 (Read AI)      | 4-6          |
| Web Development            | High     | 1 (COVID System) | 4-6          |
| Branding & Visual Identity | High     | 0                | 3-5          |
| Content Creation           | Medium   | 0 (have assets)  | 4-6          |
| Automation & AI            | High     | 1 (SP Madrid)    | 3-5          |
| Experiments                | Low      | TBD              | 2-4          |
| Strategy                   | Low      | TBD              | 2-3          |

---

## 🎬 Next Steps

### Immediate Actions

- [ ] **Update Projects Section** - Add category tags to existing projects
- [ ] **Create Work Page** - Build filterable portfolio page with all categories
- [ ] **Add Category Badges** - Visual indicators for project types
- [ ] **Update Hero Section** - Ensure roles/titles reflect all categories

### Content Development

- [ ] **Web Design**: Add 3-4 UI/UX case studies
- [ ] **Branding**: Document logo/brand projects
- [ ] **Content Creation**: Showcase video/photo work
- [ ] **Web Development**: Add more dev projects
- [ ] **AI/Automation**: Document automation workflows

### Future Enhancements

- [ ] Category-specific landing pages
- [ ] Advanced filtering (by skill, tool, industry)
- [ ] Related projects suggestion system
- [ ] Case study templates per category

---

## 📝 Design References

Based on `design-portfolio-guide.md`, focus on:

1. **Clear Value Proposition** - Each category should answer "How does this help clients?"
2. **Social Proof** - Add testimonials specific to each category
3. **Quality over Quantity** - 4-6 strong projects per category
4. **Professional Mockups** - Context-appropriate presentations
5. **Case Study Structure** - Problem → Process → Solution

---

## 🔗 Related Files

- `.github/copilot-instructions.md` - AI agent coding guidelines
- `.github/design-portfolio-guide.md` - Portfolio strategy & structure
- `src/sections/Projects.tsx` - Homepage project showcase
- `src/sections/Services.tsx` - Service categories
- `src/app/work/page.tsx` - Full portfolio page (to be enhanced)
