# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with React, TypeScript, and Vite. The site showcases projects, skills, work experience, and education of R Charan Bhardhwaj, a Robotics Engineer. It features a responsive design with dark/light mode support, project detail pages, and interactive components.

## Development Commands

### Starting the Development Server
```bash
npm run dev
```

### Building for Production
```bash
npm run build
```

### Previewing the Production Build
```bash
npm run preview
```

### Running Linting
```bash
npm run lint
```

### Deploying to GitHub Pages
```bash
npm run deploy
```

## Project Structure and Architecture

### Core Technologies
- React with TypeScript
- Vite as the build tool
- Tailwind CSS for styling with dark mode support
- React Router for client-side routing
- Lucide React for icons
- React Markdown for rendering project descriptions

### Key Components and Files

#### Main Application (`src/App.tsx`)
- Single-page application with smooth scrolling navigation
- Responsive design with mobile menu sidebar
- Sections for:
  - Hero/introduction
  - Work experience and education
  - Projects showcase with horizontal scrolling
  - Skills display organized by category
  - Affiliations with interactive cards
  - Hobbies
  - Contact information

#### Project Detail Pages (`src/ProjectDetail.tsx`)
- Dynamic routes for individual project pages
- Detailed project descriptions with markdown support
- Image galleries for each project
- Links to GitHub repositories

#### Dark Mode System
- Context provider in `src/contexts/DarkModeContext.tsx`
- Toggle component in `src/components/DarkModeToggle.tsx`
- Uses localStorage to persist user preference
- Respects system preference by default

#### Interactive Components
- `src/components/AffiliationsSection.tsx` - Interactive cards with hover/click animations
- Responsive design that adapts to mobile and desktop views

### Data Organization
Project data, skills, work experience, and other content are stored as constants within the React components rather than in external files. This makes it easy to update content directly in the code.

### Routing
Uses React Router with HashRouter for GitHub Pages compatibility. Main route displays the portfolio, and project detail routes follow the pattern `/projects/:id`.

### Styling
Tailwind CSS with a dark mode class-based system. All styling is done through Tailwind utility classes with minimal custom CSS.

## Common Development Tasks

### Adding a New Project
1. Add project data to the PROJECTS constant in `src/App.tsx`
2. Add detailed project information to the PROJECTS record in `src/ProjectDetail.tsx`
3. Ensure all image assets are properly referenced

### Modifying Content
Most content is stored as JavaScript constants in `src/App.tsx` and `src/ProjectDetail.tsx`. Modify these constants directly to update the site content.

### Adding New Sections
Create new components in the `src/components/` directory and import them into `src/App.tsx`. Add corresponding navigation entries in both mobile and desktop navigation sections.

### Working with Dark Mode
The dark mode system is implemented with React Context. Use the `useDarkMode()` hook to access the current mode and toggle function. All Tailwind classes should support both light and dark variants.

## Deployment
The site is configured for deployment to GitHub Pages:
1. Build the site with `npm run build`
2. Deploy with `npm run deploy`
3. The homepage is set in package.json to match the GitHub Pages URL structure