# Project Addition Checklist

> Quick reference for adding new projects to the portfolio

## ✅ Before Adding a Project

- [ ] **Gather assets**: Images, videos, mockups at high quality
- [ ] **Determine category**: Which main category does this fit?
  - Web Design
  - Web Development
  - Branding & Visual Identity
  - Content Creation
  - Automation & AI
- [ ] **Identify skills/tags**: List tools and technologies used
- [ ] **Get testimonial** (if applicable): Client quote or feedback

---

## 📁 File Preparation

### 1. Prepare Media Assets

**Location**: `public/assets/images/` or `public/assets/videos/`

**Naming Convention**:

```
project-slug-hero.jpg          // Main hero image
project-slug-screenshot1.jpg   // Additional screenshots
project-slug-demo.mp4          // Demo videos
```

**Image Specs**:

- **Thumbnails**: 800x450px (16:9 ratio) - for homepage grid
- **Hero Images**: 1920x1080px minimum
- **Screenshots**: Full resolution, optimized (use ImageOptim/TinyPNG)
- **Videos**: MP4 format, H.264 codec, under 10MB when possible

**Avatar Images** (for testimonials):

- **Location**: `public/assets/images/avatar/`
- **Naming**: `avatar-firstname-lastname.jpg`
- **Specs**: 400x400px square, optimized

---

## 💻 Code Changes

### Step 1: Add to Projects List

**File**: `src/sections/Projects.tsx`

```typescript
// Add to projects array (keep 3-4 featured projects on homepage)
{
  id: "project-slug",              // URL-friendly identifier
  name: "Project Display Name",    // What users see
  image: "/assets/images/project-slug-hero.jpg",
}
```

### Step 2: Create Project Data

**File**: `src/app/projects/[id]/page.tsx`

Find `projectsData` object and add:

```typescript
"project-slug": {
  title: "Project Full Title",
  category: "Web Design",           // Main category
  tags: ["UI/UX", "Figma", "React"], // Skills used
  description: "Brief 1-2 sentence overview",
  year: "2024",

  challenge: `
    Describe the business problem or challenge.
    What was the client trying to achieve?
  `,

  solution: `
    Explain your approach and the solution you delivered.
    What made your solution unique or effective?
  `,

  outcome: `
    Share results or impact.
    Metrics, feedback, or achievements.
  `,

  media: [
    "/assets/images/project-slug-hero.jpg",
    "/assets/images/project-slug-screenshot1.jpg",
    "/assets/videos/project-slug-demo.mp4",  // Videos autoplay on scroll
  ],

  links: {
    live: "https://project-url.com",          // Optional
    github: "https://github.com/user/repo",   // Optional
    case_study: "/projects/project-slug",     // Internal link
  },

  testimonial: {                              // Optional
    name: "Client Name",
    role: "Position at Company",
    quote: "What they said about working with you",
    image: "/assets/images/avatar/avatar-client.jpg",
  },
},
```

### Step 3: Add Related Projects

In the same project data, specify 2-3 related projects:

```typescript
relatedProjects: ["other-project-slug-1", "other-project-slug-2"];
```

---

## 🎨 Content Writing Tips

### Project Title

- **Clear & Descriptive**: "COVID-19 Health Declaration System"
- **Avoid Jargon**: "E-commerce Platform" not "MERN Stack App"
- **Client Name** (if allowed): "Shopify Store for Brand X"

### Challenge Section

- Start with business context
- Identify the pain point
- Set up the "why this matters"

**Example**:

> "The university needed a contactless way to track COVID-19 health declarations for 10,000+ students returning to campus. The existing paper system was slow, error-prone, and created bottlenecks at entry points."

### Solution Section

- Explain your approach
- Highlight key features
- Mention tools/technologies when relevant
- Keep it skimmable (short paragraphs)

**Example**:

> "I designed and developed a web-based health declaration system with QR code generation. Students submit their health status daily via mobile, receive a QR code, and guards scan it at checkpoints—reducing wait times by 80%."

### Outcome Section

- Quantify results when possible
- Include client feedback
- Mention adoption/usage stats
- Highlight business impact

**Example**:

> "Deployed across 15 campus buildings. Processed 50,000+ declarations in the first month. The system reduced entry checkpoint wait times from 5 minutes to under 30 seconds."

---

## 🖼️ Visual Presentation

### Mockup Best Practices

- Use realistic device mockups (Figma, Mockuuups)
- Show context: app on phone, website on laptop
- Maintain consistent mockup style across projects
- Don't over-design—clarity over creativity

### Media Order

1. **Hero Image** - Final product in context
2. **Problem/Before** - Show the challenge (optional)
3. **Process** - Wireframes, sketches, iterations (1-2 images)
4. **Solution** - Key features, interfaces
5. **Demo Video** - If available, show it in action
6. **Outcome** - Results, testimonials, metrics

---

## 🧪 Testing Checklist

Before publishing:

- [ ] **Test project page**: Visit `/projects/project-slug`
- [ ] **Check images load**: All media displays correctly
- [ ] **Test videos**: Autoplay works on scroll
- [ ] **Mobile responsive**: Check on phone/tablet
- [ ] **Links work**: External links open in new tab
- [ ] **Text readability**: No typos, clear descriptions
- [ ] **Related projects**: Navigate to related projects works
- [ ] **Back navigation**: Can return to homepage smoothly

---

## 📊 Category Tags Reference

**Web Design**

- UI/UX, Figma, Adobe XD, Wireframing, Prototyping, User Research

**Web Development**

- React, Next.js, TypeScript, Tailwind CSS, Node.js, API Integration

**Branding & Visual Identity**

- Logo Design, Brand Guidelines, Illustrator, Typography, Color Systems

**Content Creation**

- Video Editing, Photography, Premiere Pro, After Effects, Social Media

**Automation & AI**

- AI Integration, Workflow Automation, Python, GPT, Process Optimization

---

## 🎯 Homepage Featured Projects

**Selection Criteria** (keep only 3-4 on homepage):

1. **Best quality work** - Your strongest pieces
2. **Variety** - Mix of categories (not all web design)
3. **Recency** - Prioritize newer projects
4. **Impact** - Projects with measurable results

**Not Featured?** Still add to `projectsData` - they'll appear on `/work` page

---

## 📝 Example Complete Project

```typescript
"read-ai-website": {
  title: "Read AI - Product Website Redesign",
  category: "Web Design",
  tags: ["UI/UX", "Figma", "Landing Page", "SaaS"],
  description: "Redesigned the marketing website for an AI meeting assistant tool, focusing on conversion optimization and modern aesthetics.",
  year: "2024",

  challenge: `
    Read AI needed a website that could clearly communicate their complex AI product to non-technical users while maintaining a modern, trustworthy brand presence. The existing site had low conversion rates and unclear value proposition.
  `,

  solution: `
    I redesigned the entire marketing site with a focus on clarity and conversion. The new design features simplified messaging, interactive product demos, clear pricing tiers, and social proof throughout. Built in Figma with a component-based system for easy handoff to developers.
  `,

  outcome: `
    The redesign increased homepage conversion by 35% and reduced bounce rate by 20%. Client feedback praised the clean aesthetic and improved user flow.
  `,

  media: [
    "/assets/images/read-ai-webdesign1.png",
    "/assets/images/read-ai-webdesign2.png",
    "/assets/images/read-ai-prototype1.png",
    "/assets/images/readai-figma1.png",
  ],

  links: {
    case_study: "/projects/read-ai-website",
  },

  relatedProjects: ["sp-madrid-ai-multimedia", "covid-health-declaration"],
},
```

---

## 🚀 Quick Commands

After adding a project:

```bash
# Test locally
npm run dev

# Build for production
npm run build

# Commit changes
git add .
git commit -m "Add [Project Name] to portfolio"
git push
```

---

## 📚 Related Documentation

- `.github/copilot-instructions.md` - Code patterns and architecture
- `.github/design-portfolio-guide.md` - Portfolio strategy
- `.github/PORTFOLIO_CATEGORIES.md` - Category definitions
