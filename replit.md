# Overview

This is a modern developer portfolio application built with React/TypeScript frontend and Express.js backend. The application showcases a Full-Stack JavaScript Developer's (Manou RAKOTOARIVELO) work, skills, and experience through an elegant, responsive interface. It features a contact form system, internationalization support (English/French), dark/light theme switching, and a comprehensive portfolio structure including sections for projects, experience, and personal information.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend is built using React with TypeScript, leveraging modern development patterns and libraries:

- **Component Architecture**: Modular component structure using React functional components with hooks
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design system
- **State Management**: React Context API for theme and language state management
- **Routing**: Wouter for lightweight client-side routing
- **Animation**: Framer Motion for smooth micro-interactions and page transitions
- **Form Handling**: React Hook Form with Zod validation for type-safe form management
- **Data Fetching**: TanStack Query (React Query) for server state management and API interactions

## Backend Architecture
The backend uses Express.js with TypeScript following RESTful API principles:

- **Web Framework**: Express.js with TypeScript for type safety
- **API Structure**: RESTful endpoints for contact form submissions
- **Middleware**: Custom logging middleware for API request monitoring
- **Error Handling**: Centralized error handling middleware for consistent error responses
- **Storage Abstraction**: Interface-based storage system allowing for multiple implementations (currently in-memory, designed for database integration)

## Data Storage Solutions
The application implements a flexible storage architecture:

- **Current Implementation**: In-memory storage using Maps for development/demo purposes
- **Database Ready**: Drizzle ORM with PostgreSQL schema definitions prepared for production deployment
- **Schema Management**: Type-safe database schemas using Drizzle with Zod validation
- **Migration Support**: Drizzle Kit configured for database migrations

## Development and Build System
Modern development tooling and build configuration:

- **Build Tool**: Vite for fast development and optimized production builds
- **TypeScript**: Full TypeScript support across frontend and backend with shared types
- **Development Server**: Vite dev server with HMR and Express API proxy
- **Code Quality**: ESLint and Prettier configuration for consistent code formatting
- **Path Aliases**: Configured import aliases for clean import statements
- **Asset Optimization**: Vite handles asset optimization, code splitting, and bundling

## Internationalization
Comprehensive i18n implementation supporting multiple languages:

- **Language Support**: English and French translations with persistent language selection
- **Translation System**: Custom translation hook with type-safe translation keys
- **Context Management**: Language context provider for global language state
- **Content Localization**: All user-facing content localized including navigation, headings, and form labels

## UI/UX Design System
Consistent design implementation using modern UI patterns:

- **Design System**: shadcn/ui components with Radix UI primitives for accessibility
- **Theme System**: Dark/light mode with system preference detection and manual toggle
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **Animation Strategy**: Subtle animations using Framer Motion respecting user motion preferences

# External Dependencies

## UI and Styling
- **@radix-ui/react-***: Accessible component primitives for complex UI components
- **tailwindcss**: Utility-first CSS framework for rapid styling
- **framer-motion**: Animation library for smooth micro-interactions
- **lucide-react**: Icon library for consistent iconography
- **class-variance-authority**: Utility for managing component variants

## Data Management
- **@tanstack/react-query**: Server state management and caching
- **react-hook-form**: Form state management and validation
- **@hookform/resolvers**: Validation resolvers for React Hook Form
- **zod**: TypeScript-first schema validation
- **drizzle-orm**: Type-safe SQL ORM for database operations
- **drizzle-zod**: Integration between Drizzle ORM and Zod validation

## Database and Infrastructure
- **@neondatabase/serverless**: Serverless PostgreSQL database driver
- **connect-pg-simple**: PostgreSQL session store for Express
- **postgresql**: Database dialect configuration for Drizzle

## Development Tools
- **vite**: Fast build tool and development server
- **@vitejs/plugin-react**: React plugin for Vite
- **wouter**: Lightweight React router
- **date-fns**: Date manipulation and formatting library
- **clsx**: Utility for constructing className strings conditionally