# U Hla Tun Hospice Myanmar (Vanilla Static Edition)

[![Version](https://img.shields.io/badge/version-2.0.0-08AA00.svg)](https://semver.org)
[![Tech Stack](https://img.shields.io/badge/tech-HTML5%20%7C%20CSS3%20%7C%20JS-blue.svg)](#technology-stack)
[![License](https://img.shields.io/badge/license-DPS%20%2F%20Non--profit-lightgrey.svg)](#)

A modernized, decoupled, and optimized static recovery of the official website for the **U Hla Tun Hospice (Cancer) Foundation**.

---

## Project Metadata

- **Author:** Caleb Jawa Hkun
- **Date:** November 11, 2026 (2026-11-11)
- **Current Version:** `2.0.0`
- **Upstream / Original Repository:** [https://github.com/dpsmap/uhlatunhospicemyanmar.org-recovery-.git](https://github.com/dpsmap/uhlatunhospicemyanmar.org-recovery-.git)
- **Current Repository:** [https://github.com/dpsmap/uhlatunhospicemyanmar.org_vanilla.git](https://github.com/dpsmap/uhlatunhospicemyanmar.org_vanilla.git)

---

## What the Site Is

The **U Hla Tun Hospice (Cancer) Foundation** is a charitable, non-profit humanitarian organization in Myanmar providing free palliative, medical, nursing, and emotional care for terminal cancer patients regardless of race, religion, or social background. Operating dedicated hospice centers in both **Yangon** and **Mandalay**, the foundation delivers comfort care, pain relief, daily patient activities, and bereavement support.

This website serves as the foundation's primary digital portal, providing public access to:
- **Hospice Admission Guidelines & Criteria:** Transparent eligibility requirements and documentation needed for admission to Yangon and Mandalay centers.
- **Donation & Charity Support:** Step-by-step guidance for donors supporting patient care, medicine, and hospice operational funds.
- **Community Outreach & Volunteers:** Pathways for local and international volunteers, medical exchange, and visitor support.
- **Foundation History & Governance:** Transparent committee structures, annual meeting archives, training programs, and international affiliations.
- **Testimonials & Patient Activities:** Real-world documentation and photo archives illustrating day-to-day hospice care and community compassion.

---

## Technology Stack

The project has been rebuilt as an ultra-fast, zero-dependency, static web platform:

- **HTML5:** Clean, semantic markup fully decoupled from legacy CMS bloat (WordPress/Divi dependencies).
- **CSS3:** Modular, maintainable styles with CSS custom properties (`tokens`), flexbox, and grid layouts.
- **Vanilla JavaScript:** Lightweight native scripts powering navigation menus, dynamic date calculation, dynamic header scroll compression, and lightbox gallery views without jQuery or external framework dependencies.

---

## Project Directory Structure

```text
uhlatunhospicemyanmar.org_vanilla/
├── assets/
│   ├── css/
│   │   ├── theme.css              # Central design tokens, color variables, and global component rules
│   │   ├── header.css             # Modern semantic header, desktop dropdowns, and mobile drawer
│   │   ├── custom.css             # Foundation styles and responsive layout rules
│   │   ├── gallery-lightbox.css   # Interactive lightbox styles
│   │   └── uaf.css                # Base typographic and font definitions
│   ├── images/                    # Site logos, facility images, banners, and photo galleries
│   └── js/
│       ├── main.js                # Core interactive logic (header scroll shrink, drawer toggle, active nav)
│       └── gallery-lightbox.js    # Vanilla lightbox viewer for patient and activity galleries
├── admission.html                 # Patient admission criteria and intake rules
├── annual-meeting.html            # Foundation annual meeting records and reports
├── contact-us.html                # Contact details and hospice locations (Yangon & Mandalay)
├── donate.html                    # Direct financial donation instructions
├── donation.html                  # In-kind donation guidelines and support details
├── history.html                   # Foundation history and origins
├── index.html                     # Homepage with hero slider, key highlights, and social updates
├── international-links.html       # Global affiliations and international partners
├── member.html                    # Executive management committee members
├── member-activity.html           # Committee meetings and operational events
├── patient-activity.html          # Palliative patient engagement and recreation photo journals
├── special-visits.html            # Dignitary and philanthropic visit archives
├── testimonials.html              # Dedicated patient, family, and caregiver stories
├── training-program.html          # Palliative nursing and care training courses
├── volunteer.html                 # Volunteer engagement and inquiry portal
├── updated_design.md              # Current design system, token definitions, and UI specifications
├── OLD_DESIGN.md                  # Archived design system specifications
└── README.md                      # Project documentation and SemVer release history
```

---

## Local Development & Quickstart

Because this project is built entirely on native web standards, it requires no build pipelines, package managers, or compilers.

### Option 1: Live Server (VS Code Extension)
1. Open the repository root in VS Code.
2. Right-click [`index.html`](file:///c:/MINE/IDES/Antigravity/BackdoorCleaning/cleaned/uhlatunhospicemyanmar.org_vanilla/index.html) and select **Open with Live Server**.
3. Access the site at `http://127.0.0.1:5500` or `http://127.0.0.1:5501`.

### Option 2: Python HTTP Server
Run the built-in HTTP server from PowerShell or terminal:
```bash
python -m http.server 8080
```
Open your browser and navigate to `http://localhost:8080`.

---

## Git Reference & Commit Milestones

This versioned static release references the following key Git milestones from the repository history:

| Version | Git Reference / Commit | Description |
| :--- | :--- | :--- |
| **`v2.0.0`** | `Working Tree` / `124dd8e` | Major redesign: semantic header migration, design tokens theme, and legacy CMS purge |
| **`v1.0.0`** | `e6b737e` | Feature enhancements: site assets, custom styling, footer updates, dedicated pages |
| **`v1.0.0-baseline`** | `76c49c0` | Initial baseline commit decoupling from legacy WordPress recovery source |

---

## Changelog

All notable changes to this project are documented here following [Semantic Versioning (SemVer 2.0.0)](https://semver.org) and [Keep a Changelog](https://keepachangelog.com).

### [2.0.0] - 2026-11-11

#### Added
- **Global Design System (`assets/css/theme.css`):** Introduced centralized CSS custom property tokens (`:root`) for colors (hospice green, clinical trust blue, neutrals), typography, shadows, border radii, and spacing scales.
- **Modern Semantic Header (`assets/css/header.css`):** Created a fully accessible, semantic `<header class="site-header" id="main-header">` featuring desktop navigation with dropdown menus and a dedicated mobile navigation drawer.
- **Dynamic Header Scroll Compression:** Added real-time scroll listener (> 40px) in `assets/js/main.js` that triggers a smooth height reduction (`.header-scrolled`) and subtle shadow enhancement.
- **Accessible Mobile Navigation Drawer:** Added hamburger toggle button with full `aria-expanded` support, outside-click backdrop dismissal, and auto-closing on link navigation.
- **Modern Font Loading:** Added Google Fonts preconnect resource hints and integrated `Noto Sans Myanmar` alongside `Open Sans`.

#### Changed
- **Header Architecture Migration:** Migrated all 15 HTML pages from legacy Divi header markup to the new semantic `.site-header` component.
- **Asset Cache Busting:** Standardized asset link references across all site templates with version query parameters (`?v=2.1`).
- **Scoped Action Cards:** Refined homepage quick-action cards (`.et_pb_row_1`) to strictly scope under `.home` and bound them directly to the design system color and elevation variables.
- **Active Navigation Highlighter:** Upgraded active link detection logic in `assets/js/main.js` to natively highlight both modern `.site-nav-link` items and mobile drawer entries.
- **Design Documentation:** Updated `updated_design.md` with complete implementation standards and preserved historical specifications in `OLD_DESIGN.md`.

#### Removed
- **Archival Tracking Scripts:** Completely stripped third-party Internet Archive / Wayback Machine tracking scripts (`archive_analytics.send_pageview`) from all HTML files.
- **Legacy CMS Generator & Pingback Tags:** Removed obsolete WordPress generator meta tags (`WordPress 4.9.x`, `Divi v.3.15`) and `xmlrpc.php` pingback links across all templates.
- **Inline Divi Scripts & Cached CSS Blocks:** Eliminated redundant `et_core_page_resource_fallback` inline script blocks and stripped multi-hundred-line cached inline style declarations (`#et-core-unified-cached-inline-styles`) from page headers.

---

### [1.0.0] - 2026-11-10

#### Added
- Created dedicated [`testimonials.html`](file:///c:/MINE/IDES/Antigravity/BackdoorCleaning/cleaned/uhlatunhospicemyanmar.org_vanilla/testimonials.html) page highlighting patient, family, and caregiver experiences.
- Created dedicated [`volunteer.html`](file:///c:/MINE/IDES/Antigravity/BackdoorCleaning/cleaned/uhlatunhospicemyanmar.org_vanilla/volunteer.html) page for volunteer onboarding and inquiry.
- Added comprehensive project specification document [`DESIGN.md`](file:///c:/MINE/IDES/Antigravity/BackdoorCleaning/cleaned/uhlatunhospicemyanmar.org_vanilla/DESIGN.md) covering design tokens, color palette, and layout principles.
- Added interactive image lightbox module (`gallery-lightbox.css` and `gallery-lightbox.js`) for photo galleries.

#### Changed
- **Navigation Architecture:** Completely revamped header navigation with consistent dropdown menus, active link states, and mobile hamburger drawer across all 15 HTML pages.
- **Facebook Embeds:** Fixed broken Facebook iframe links on [`index.html`](file:///c:/MINE/IDES/Antigravity/BackdoorCleaning/cleaned/uhlatunhospicemyanmar.org_vanilla/index.html); replaced brittle iframes with responsive, styled Facebook cards and direct profile links.
- **URL Routing:** Updated and resolved internal broken URLs referencing the new testimonials and volunteer sections.

#### Removed
- **Author Credits in Footer:** Completely removed extraneous author and agency credit links from the footer across all site templates, replacing them with a clean, dynamic copyright and last-modified stamp.
- **CMS Dependencies:** Removed obsolete legacy WordPress, Divi builder, and unused third-party plugins.

---

## Scalability & SemVer Strategy

To maintain scalability across future iterations:
- **`MAJOR` (X.0.0):** Breaking architectural changes (e.g., complete layout redesigns, migrations to a static site generator or headless CMS).
- **`MINOR` (1.X.0):** Backwards-compatible new features (e.g., adding new section pages, multilingual Myanmar/English switcher, new forms).
- **`PATCH` (1.0.X):** Backwards-compatible bug fixes and content corrections (e.g., fixing typo in contact details, styling patch, image optimization).
