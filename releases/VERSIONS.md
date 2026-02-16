# Changelog

This file contains a summary of all historical changes for versions 1.x and 2.x.

## Version 2.x - Open Source Preparation

This version marked the beginning of the push to make the project open source, focusing on major dependency upgrades, developer experience, and new features like a page builder and improved data fetching.

### v2.0.5 - Final Open Source Preparations
- **Localized Sitemap Generator**: Added a script to automatically generate a localized `sitemap.xml` file.
- **`robots.txt` Generator**: Implemented a generator for the `robots.txt` file.
- **Documentation Updates**: Made significant updates to `README` files across the repository.
- **Design Improvements**: Adjusted the styling for example components to give the starter a more polished look out of the box.
- **Brotli Compression**: Enabled Brotli compression for better performance.

### v2.0.4 - API & Data Fetching Overhaul
- **`populateDeep` Middleware**: Added a `populateDeep` middleware to Strapi to easily fetch deeply nested component data.
- **Public & Private API Clients**: Split the `Strapi` client into `public` and `private` classes to better handle authenticated requests.
- **Enhanced Fetching Logic**: Refactored the API fetching logic on the frontend for improved error handling and reliability.
- **reCAPTCHA Support**: Added functionality for `reCAPTCHA` verification.

### v2.0.3 - Page Builder Components & Preview
- **CKEditor Integration**: Added the CKEditor rich text editor as a new component for both Strapi and the frontend.
- **Strapi Preview**: Implemented a live preview system, allowing content editors to see their changes in real-time.
- **Component Naming Unification**: Refactored page builder components to have a unified naming convention.
- **API Proxy**: Introduced a proxy for Strapi API requests.

### v2.0.2 - Page Builder Foundations
- **Enhanced Page Schema**: Added new fields to the page schema in Strapi to support more complex layouts.
- **Breadcrumb Generation**: Implemented a service in Strapi to automatically generate breadcrumb data based on the page hierarchy.
- **Component Refactoring**: Refactored many core Strapi components and content types for better organization and to support the new page builder functionality.

### v2.0.1 - Developer Experience & CI/CD
- **Lint Job in CI**: Added a dedicated linting job to the GitHub Actions workflow.
- **Environment Setup Script**: Added a new script to help developers easily set up their `.env` files.
- **"Getting Started" Docs**: Added a new "Getting Started" section to the main `README.md` to help new contributors get up to speed quickly.
- **Streamlined Env Variables**: Refactored environment variable handling for clarity and simplicity.

### v2.0.0 - Core Upgrades
- **Next.js 15**: Upgraded the Next.js application to version 15.
- **Node.js 22**: Updated the required Node.js version to 22.
- **Tailwind CSS v4**: Migrated the styling framework to Tailwind CSS v4.
- **Dependency Bumps**: Updated numerous other dependencies to their latest versions.

---

## Version 1.x - Internal Agency Version

This version was for internal agency purposes and laid the groundwork for the project, including the basic structure, core components, and major upgrades like the migration to Strapi v5.

### v1.0.5 - SEO & Metadata Enhancements
- **Enhanced Metadata Fetching**: Refactored the metadata fetching logic to be more robust and structured.
- **ISR Improvements**: Updated documentation and logic related to Incremental Static Regeneration (ISR).
- **Cache Fixes**: Addressed an issue where mutation and authentication-related fetches were being incorrectly cached.

### v1.0.4 - Strapi v5 Upgrade
- **Strapi v5 Migration**: Updated the Strapi application and all related dependencies to version 5.
- **API Type Updates**: Updated the exported Strapi types to be compatible with v5.
- **UI Code Refactoring**: Refactored the frontend code to work with the changes in the Strapi v5 API.
- **Configuration Refactor**: Global hooks in Strapi were refactored into separate files for better organization.

### v1.0.3 - Internationalization (i18n) & Fixes
- **`next-intl` Update**: Reworked the internationalization setup by updating the `next-intl` library.
- **Static Rendering Support**: Added the ability to omit the `Authorization` header in requests to allow for static site generation (SSG).
- **Linting and Formatting**: Fixed various ESLint issues and formatted the codebase for consistency.

### v1.0.2 - Core Components
- **Contact Form**: A new component for handling user contact submissions.
- **Typography Components**: Added `Heading` and `Paragraph` components for consistent text styling.
- **Newsletter Subscription**: A component for capturing user sign-ups for a newsletter.

### v1.0.1 - Sentry Integration
- **Sentry Logging**: Integrated Sentry for both the Strapi backend and Next.js frontend.
- **Error Boundaries**: Added React Error Boundaries to the UI to gracefully handle client-side rendering errors.
- **Sample Rate Adjustments**: Tuned the Sentry `tracesSampleRate` for better performance monitoring.

### v1.0.0 - Initial Project Setup
- **Initial Commit**: The project was born.
- **Basic CI/CD**: A GitHub Actions workflow was set up to handle basic build and test processes.
- **Documentation**: Initial `README.md` files were created to document the project setup.
