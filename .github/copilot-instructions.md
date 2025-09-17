# Copilot Instructions for Reymar Portfolio

## Overview

This project is a portfolio website built using [Next.js](https://nextjs.org) and styled with [Tailwind CSS](https://tailwindcss.com). It follows a modular structure with reusable components and sections. The project is designed to be easily extendable and maintainable.

## Key Directories and Files

- **`src/app/`**: Contains the main application files, including the entry point (`page.tsx`) and subpages like `about` and `projects`.
- **`src/components/`**: Houses reusable UI components such as buttons, icons, and project details.
- **`src/sections/`**: Contains larger sections of the website like the header, footer, and hero section.
- **`tailwind.config.ts`**: Configuration file for Tailwind CSS.
- **`next.config.mjs`**: Configuration file for Next.js.

## Developer Workflows

### Running the Development Server

To start the development server, use one of the following commands:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

The server will be available at [http://localhost:3000](http://localhost:3000).

### Building the Project

To build the project for production:

```bash
npm run build
```

### Linting and Formatting

- **Linting**: Run `npm run lint` to check for code quality issues.
- **Formatting**: This project uses Prettier for code formatting. Ensure your changes adhere to the Prettier configuration in `prettier.config.js`.

## Project-Specific Conventions

- **Component Structure**: Components are organized by functionality. Icons are further grouped under `src/components/icons/`.
- **Styling**: Tailwind CSS is used for styling. Utility classes are preferred over custom CSS.
- **Routing**: Next.js file-based routing is used. Dynamic routes (e.g., `projects/[id]/page.tsx`) are implemented for project details.

## Integration Points

- **External Fonts**: The project uses the `next/font` package to optimize and load fonts.
- **Images**: Static assets like images are stored in `public/assets/images/`.

## Examples

### Adding a New Section

1. Create a new file in `src/sections/` (e.g., `NewSection.tsx`).
2. Import and use the section in the appropriate page (e.g., `app/page.tsx`).

### Adding a New Icon

1. Add the SVG file to `src/assets/icons/`.
2. Create a corresponding React component in `src/components/icons/`.
3. Export the new icon from `src/components/icons/index.ts`.

## Notes for AI Agents

- Focus on reusability and modularity when creating new components or sections.
- Adhere to the existing conventions for file organization and naming.
- Use Tailwind CSS utility classes for styling unless absolutely necessary to write custom CSS.

For any questions or clarifications, refer to the `README.md` or consult the project maintainers.
