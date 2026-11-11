# Design System & Theme Specification: U Hla Tun Hospice Myanmar

> **Source**: Extracted via live browser inspection from `http://uhlatunhospicemyanmar.org/`, `http://uhlatunhospicemyanmar.org/donation.html`, `http://uhlatunhospicemyanmar.org/donate.html`, and `http://uhlatunhospicemyanmar.org/contact-us.html`.  
> **Brand**: U Hla Tun (Cancer) Hospice Foundation (Yangon & Mandalay, Myanmar)  
> **Category**: Humanitarian Palliative Care / Non-Profit Charity  
> **Exclusion Notice**: `http://uhlatunhospicemyanmar.org/history.html` is strictly **excluded** from this specification as it represents an outdated legacy implementation.

---

## 1. Visual Identity & Brand Philosophy

The design of the U Hla Tun Hospice Myanmar website conveys **compassion, medical trustworthiness, human dignity, and civic charity**. As Myanmar's first 100% free palliative care hospice catering to terminally ill cancer patients ("the poorest of the poor"), the visual architecture balances serene warmth with clinical credibility and effortless readability.

### Core Visual Tenets:
1. **Warm Elevated Canvas**: A centered, boxed 1200px container (`#page-container`) floating on a soothing warm neutral cream/taupe backdrop (`#edede3`), framed with soft atmospheric elevation (`0 0 10px rgba(0, 0, 0, 0.2)`).
2. **Clinical Trust & Accent Palette**:
   - **Hospice Leaf Green** (`#08aa00` / `#00cc00` / `#10c900`): Symbolizes life, hope, renewal, and compassionate hospice care. Grounds the top header banner and card accents.
   - **Compassionate Royal Blue** (`#002a9e` / `#0c71c3`): Communicates institutional credibility, serenity, and dignity. Used for section headings, quotes, and primary links.
   - **Vibrant Interactive Cyan/Sky Blue** (`#2ea3f2`): The core interactive accent for active navigation indicators, link hover states, and button borders.
3. **Dual-Language Accessibility**: Standardized Latin typography (`Open Sans`) paired with modern Myanmar Unicode fonts (`Noto Sans Myanmar`, `Pyidaungsu`), replacing obsolete Zawgyi encoding while preserving balanced line height (`1.7`) for Myanmar script diacritics.

---

## 2. Design Tokens (:root CSS Custom Properties)

Production-ready vanilla CSS custom properties normalized for the static codebase:

```css
:root {
  /* ==========================================================================
     Brand & Accent Colors
     ========================================================================== */
  --color-brand-green-primary: #08aa00;       /* Core hospice green */
  --color-brand-green-light: #10c900;         /* Bright mobile header accent */
  --color-brand-green-accent: #00cc00;        /* Card top accent border & highlights */
  
  --color-brand-blue-deep: #002a9e;          /* Institutional dark blue (titles, quotes) */
  --color-brand-blue-accent: #2ea3f2;        /* Interactive link & button cyan blue */
  --color-brand-blue-divider: #0c71c3;       /* Dashed section divider blue */
  --color-social-facebook: #1877f2;          /* Verified social button blue */
  --color-social-facebook-hover: #166fe5;

  /* ==========================================================================
     Neutrals & Surface Backgrounds
     ========================================================================== */
  --color-bg-canvas: #edede3;                 /* Warm ivory/parchment outer viewport */
  --color-bg-surface: #ffffff;                /* Main white container, cards, menus */
  --color-bg-input: #eeeeee;                  /* Clean form field background */
  --color-bg-input-focus: #f7f7f7;
  --color-bg-footer: #222222;                 /* Primary dark charcoal footer */
  --color-bg-footer-bar: rgba(0, 0, 0, 0.32); /* Bottom copyright strip overlay (#1f1f1f) */

  /* ==========================================================================
     Typography Colors
     ========================================================================== */
  --color-text-heading: #333333;             /* Primary headings (H1–H6), CTA titles */
  --color-text-body: #666666;                /* Body paragraphs, lists, footer text */
  --color-text-muted: #999999;               /* Form placeholders, secondary captions */
  --color-text-white: #ffffff;               /* High-contrast text on dark backgrounds */
  --color-text-link: #2ea3f2;                /* Interactive hyperlinked text */
  --color-text-link-hover: #00cc00;          /* Secondary interactive hover highlight */

  /* ==========================================================================
     Borders & Dividers
     ========================================================================== */
  --color-border-subtle: rgba(0, 0, 0, 0.1);  /* 1px section & table dividers (#eeeeee) */
  --border-radius-sm: 3px;                    /* Standard buttons */
  --border-radius-md: 6px;                    /* Social cards & badges */
  --border-radius-lg: 10px;                   /* CTA action cards & gallery images */
  --border-radius-circle: 50%;                /* Avatars & round icon badges */

  /* ==========================================================================
     Elevation & Shadows
     ========================================================================== */
  --shadow-boxed-layout: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  --shadow-header-fixed: 0 1px 0 rgba(0, 0, 0, 0.08);
  --shadow-header-scrolled: 0 2px 10px rgba(0, 0, 0, 0.08);
  --shadow-dropdown: 0 4px 16px rgba(0, 0, 0, 0.1);
  --shadow-card-action: 0 2px 8px rgba(0, 0, 0, 0.05);
  --shadow-card-action-hover: 0 6px 16px rgba(0, 42, 158, 0.1);
  --shadow-card-subtle: 0 4px 16px rgba(0, 0, 0, 0.08);

  /* ==========================================================================
     Layout & Geometry
     ========================================================================== */
  --layout-max-width: 1200px;
  --header-desktop-height: 70px;
  --header-scrolled-height: 56px;
  --header-mobile-height: 64px;
  --slider-desktop-height: 500px;
  --slider-tablet-height: 350px;
  --slider-mobile-height: 220px;

  /* ==========================================================================
     Spacing Scale
     ========================================================================== */
  --space-xxs: 4px;
  --space-xs: 8px;
  --space-sm: 12px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;

  /* ==========================================================================
     Typography Tokens
     ========================================================================== */
  --font-family-primary: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  --font-family-myanmar: 'Noto Sans Myanmar', 'Pyidaungsu', 'Myanmar Text', sans-serif;
  
  --font-size-h1: 30px;
  --font-size-h2: 26px;
  --font-size-h3: 22px;
  --font-size-h4: 18px;
  --font-size-h5: 16px;
  --font-size-h6: 14px;
  --font-size-body: 14px;
  --font-size-button: 20px;
  --font-size-nav: 14px;

  --line-height-heading: 1.25;
  --line-height-body: 1.7;                    /* ~23.8px */
  --line-height-nav: 47px;                    /* Touch/click target */
}
```

---

## 3. Comprehensive Color Palette & Swatch Reference

| Role | Color Name | Hex Code | RGB / RGBA | Verified Live Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Viewport Canvas** | Warm Cream Neutral | `#edede3` | `rgb(237, 237, 227)` | Outer body backdrop framing the boxed 1200px canvas |
| **Container Surface** | Pure White | `#ffffff` | `rgb(255, 255, 255)` | Main page container, dropdown menus, white cards |
| **Brand Primary Green**| Deep Spruce Green | `#08aa00` | `rgb(8, 170, 0)` | Top header bar, mobile nav strip, card accent borders |
| **Brand Accent Green** | Emerald Accent | `#00cc00` | `rgb(0, 204, 0)` | Top 4px card borders, interactive hover highlight |
| **Brand Vivid Green** | Leaf Green | `#10c900` | `rgb(16, 201, 0)` | Mobile brand header banner |
| **Clinical Royal Blue**| Trust Blue | `#002a9e` | `rgb(0, 42, 158)` | Section titles, card titles, quotes, appeals |
| **Interactive Cyan Blue**| Sky Blue | `#2ea3f2` | `rgb(46, 163, 242)` | Active navigation link, button borders, hover states |
| **Dashed Divider Blue**| Cobalt Divider | `#0c71c3` | `rgb(12, 113, 195)` | Prominent 3px dashed section divider line |
| **Heading Text** | Dark Charcoal | `#333333` | `rgb(51, 51, 51)` | Primary headings (H1–H6), bold card headers |
| **Body Text** | Medium Neutral Charcoal | `#666666` | `rgb(102, 102, 102)` | Paragraphs, list items, copyright disclaimer |
| **Field Surface** | Neutral Light Gray | `#eeeeee` | `rgb(238, 238, 238)` | Contact form input fields & message textarea |
| **Field Placeholder** | Muted Gray | `#999999` | `rgb(153, 153, 153)` | Form field placeholder text |
| **Footer Base** | Deep Ebony | `#222222` | `rgb(34, 34, 34)` | Primary footer block container |
| **Footer Bottom Strip**| Dark Overlay | `#1f1f1f` | `rgba(0, 0, 0, 0.32)` | Sub-footer copyright strip |
| **Social Blue** | Facebook Blue | `#1877f2` | `rgb(24, 119, 242)` | Facebook follow buttons and badges |

---

## 4. Typography Hierarchy & Specification

### 4.1 Font Families
- **Primary English**: `'Open Sans'`, weights: `300 (Light)`, `400 (Regular)`, `600 (Semi-Bold)`, `700 (Bold)`, `800 (Extra-Bold)`.
- **Primary Myanmar (Unicode standard)**: `'Noto Sans Myanmar'`, `'Pyidaungsu'`, `'Myanmar Text'`. (Replaces legacy non-Unicode `Zawgyi.woff` font).
- **Icons**: Clean inline SVG icons replacing legacy `ETmodules` icon font.

### 4.2 Typographic Scale Table

| Element / Level | Font Size | Weight | Line Height | Color | Spacing & Style |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Title / H1** | `30px` - `32px` | `700` | `1.2` (`36px`) | `#333333` / `#002a9e` | Bottom padding `10px` |
| **Section Header / H2**| `26px` | `700` | `1.25` (`32.5px`)| `#333333` | Bottom padding `10px`, bold |
| **Card / Subtitle / H3**| `22px` | `700` | `1.3` (`28.6px`) | `#002a9e` / `#333333` | Uppercase or Title Case, bottom pad `10px` |
| **Caption / H4** | `18px` | `600` - `700` | `1.4` (`25.2px`) | `#333333` | Donor captions, contact names |
| **Sign-off Quote / H5**| `16px` | `500` - `600` | `1.4` (`22.4px`) | `#333333` | Italic (*"Yours in Hospice"*), right-aligned |
| **Sub-Label / H6** | `14px` | `600` | `1.4` (`19.6px`) | `#333333` | Metadata labels, small badges |
| **Main Navigation** | `14px` | `600` | `47px` | `#666666` (Hover: `#2ea3f2`)| Letter spacing `0.5px`, uppercase/title |
| **Body Paragraphs** | `14px` | `400` | `1.7` (`23.8px`) | `#666666` | Justified on feature lists; margin bottom `14px` |
| **Unordered Lists** | `14px` | `400` | `1.7` (`23.8px`) | `#666666` | Disc bullets, padding left `20px` |
| **Contact Inputs** | `14px` | `400` | `1.0` | `#333333` | Padding `12px 16px` |
| **Submit Button** | `20px` | `500` | `1.0` | `#2ea3f2` | Letter spacing normal, uppercase or title |
| **Footer Info** | `14px` | `400` | `1.7` (`23.8px`) | `#666666` | Centered/left copyright credits |

---

## 5. Layout Architecture & Spatial Grid

### 5.1 Boxed Viewport Container
- **Geometry**: Center-aligned boxed canvas (`et_boxed_layout`).
- **Maximum Width**: `1200px` (`width: 90%` fluid at smaller desktop screens, centered with `margin: 0 auto`).
- **Outer Backdrop**: Hex `#edede3`.
- **Canvas Shadow**: `box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2)`.
- **Interior Surface**: Pure White `#ffffff`.

### 5.2 Responsive Column Patterns
1. **4-Column Quick Action Row (`.et_pb_column_1_4` x 4)**:
   - Width: `25%` (or ~`235px` with internal column padding).
   - Used for the 4 core CTA cards: *Admission, Donate, Testimonials, Volunteer*.
2. **3-Column Photo & Certificate Gallery (`.et_pb_column_1_3` x 3)**:
   - Width: ~`33.33%` (or ~`280px` for donor photos, ~`245px` for certificates with ~`82px` horizontal gutters).
   - Used on `donation.html` for donor photo handovers and certificates.
3. **2-Column Split Presentation (`.et_pb_column_1_2` x 2)**:
   - Width: ~`50%` (or ~`445px` with ~`50px` gutter).
   - Used on `donate.html` (Founder portrait + Manifesto appeal) and Home (Yangon & Mandalay branch cards).
4. **Full-width Row (`.et_pb_column_4_4`)**:
   - Width: `100%` (~`942px` - `1048px` interior content width).
   - Used for feature lists, dashed dividers, and contact textareas.

---

## 6. Core UI Component Specifications

### 6.1 Header & Sticky Navigation (`#main-header`)
- **Desktop Dimensions**: Default height `70px`, background `#ffffff`, fixed navigation with subtle border/shadow `0 1px 0 rgba(0, 0, 0, 0.08)`.
- **Dynamic Scroll Reduction**: When the page is scrolled past `40px` (`window.scrollY > 40`), the header compresses dynamically to `56px`, and the logo scales from `44px` to `34px` with a smooth CSS transition.
- **Logo Presentation**:
  - Rendered Dimensions: Default height `44px` (shrinking to `34px` on scroll), proportional width. On mobile viewports: `42px` height.
  - Image Source: `assets/images/logo.png`.
- **Navigation Bar (`#top-menu`)**:
  - Links: `Home`, `Donation`, `Activities` (dropdown), `Member`, `Contact Us`.
  - Alignment: Right-aligned (`margin-left: auto; display: flex; align-items: center`).
  - Item spacing: `margin-left: 20px`.
  - Line height: Matches header height (`70px` default, `56px` scrolled).
  - Active Menu Indicator: Font color `#2ea3f2` (`.current-menu-item a`).
- **Sub-Menu Dropdown (`.sub-menu`)**:
  - Position: `position: absolute !important; top: 100% !important; left: 0 !important;` directly beneath the "Activities" item, completely unobstructed by the top viewport.
  - Width: `230px`, background `#ffffff`.
  - Border: Subtle `1px` border plus top border `3px solid #2ea3f2`.
  - Box Shadow: `0 4px 16px rgba(0, 0, 0, 0.1)`.
  - Links: `International Link`, `Annual Meeting`, `Member Activity`, `Patient Activity`, `Training Program`, `Special Visits`.
- **Mobile Menu**: Below `980px`, desktop navigation (`#top-menu-nav`) is strictly hidden (`display: none !important`), leaving only the prominent `42px` logo (with Divi's `max-width: 50%` constraint neutralized) and the right-aligned hamburger toggle on a clean white header `#ffffff`. The hamburger is a bulletproof pure CSS 3-bar icon (independent of external font loading) with smooth color transitions. The mobile menu dropdown opens as a clean white card with smooth slide and sky-blue active indicator.

### 6.2 Hero Carousel (Smart Slider 3 on Home)
- **Container**: Full-width slider, height `500px` on desktop, `350px` on tablet, `220px` on mobile.
- **Imagery**: 5 banner visuals (`1.png` - `5.png`) showcasing patients, dedicated nurses, and hospice facilities.
- **Controls**:
  - Chevron Arrows: Left & Right circular touch targets (`32px × 32px`).
  - Icons: White SVGs with `opacity: 0.8` on hover.

### 6.3 Quick Action Call-to-Action (CTA) Cards (Home Page Strictly Scoped)
Located directly below the hero carousel in a 4-column layout on the Home page (strictly scoped to prevent styling leakage to other subpages):
```css
.home .et_pb_row_1 .et_pb_column .et_pb_module.et_pb_text,
.action-card {
  background-color: #ffffff;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-top: 2px solid #00cc00;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  padding: 16px 12px;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.home .et_pb_row_1 .et_pb_column .et_pb_module.et_pb_text:hover,
.action-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 42, 158, 0.1);
  border-color: rgba(46, 163, 242, 0.35);
}

.home .et_pb_row_1 .item-header a,
.action-card .card-title a {
  color: #002a9e;
  font-family: 'Open Sans', sans-serif;
  font-size: 17px;
  font-weight: 700;
  font-style: italic;
  text-decoration: none;
  display: block;
  letter-spacing: 0.3px;
  transition: color 0.2s ease;
}

.home .et_pb_row_1 .item-header a:hover,
.action-card .card-title a:hover {
  color: #2ea3f2;
}
```

### 6.4 Section Dividers
- **Subtle Content Divider**:
  ```css
  .section-divider-subtle {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    margin: 30px 0;
    width: 100%;
  }
  ```
- **Brand Dashed Divider**:
  ```css
  .section-divider-brand {
    border-top: 3px dashed #0c71c3;
    margin: 30px 0;
    width: 100%;
  }
  ```

### 6.5 Donation Appeal Box (`donate.html`)
- **Layout**: 2 columns (`445px` each).
- **Left Column**: High-resolution historical portrait of Founder U Hla Tun (`1963.jpg`).
- **Right Column**:
  - Core Slogans: `“OUR DUTY IS TO CARE”`, `“CARE IS TO SHARE”`, `“HUMAN DIGNITY”` in `H2` bold (`26px`).
  - Body Text: Centered, italic appeal for the *"Poorest of the Poor"* to enable them to move on with dignity.
  - Sign-off: Right-aligned `H5` italic *"Yours in Hospice / Founder, Chairman and Hospice Family"*.
  - Dove Seal Emblem: `logo1-300x200.jpg` (`148px × 98px`).
- **Direct Remittance Directory Box**:
  - Yangon Hospice Admin Director: U Pyone (`09-73063943`)
  - Mandalay Hospice Admin Director: Daw Khin Aye Myint (`09-2005762`)
  - Yangon Facility: No.(2), Highway Road, East Dagon Township (`09-421151535`)
  - Mandalay Facility: Mandalay Yankin Taung Road, East Moat, Patheingyi Township (`09-664052631`)

### 6.6 Donor Photo & Certificate Galleries (`donation.html`)
- **Donor Photos**:
  - 3 columns, cards width ~`280px`.
  - Image styling: `border-radius: 10px`, smooth zoom hover effect.
  - Captions: `14px` bold `#333333` detailing ceremony dates and patron names.
- **Certificate Scans**:
  - 3 columns, cards width ~`245px`.
  - Scans `donation1.png` to `donation21.png` displaying official receipts.

### 6.7 Contact Us Form & Inputs (`contact-us.html`)
- **Banner Header**: `contact.jpg` (`731px × 336px`) titled *"HOSPICE AWARENESS A PILGRIMAGE TO HUMANITY IN MYANMAR"*.
- **Form Field Specifications**:
  ```css
  .contact-input,
  .contact-textarea {
    width: 100%;
    background-color: #eeeeee;
    border: none;
    border-radius: 0px;
    color: #333333;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    padding: 14px 16px;
    margin-bottom: 16px;
    transition: background-color 0.2s ease;
  }

  .contact-input:focus,
  .contact-textarea:focus {
    background-color: #f7f7f7;
    outline: 2px solid #2ea3f2;
  }

  .contact-input::placeholder,
  .contact-textarea::placeholder {
    color: #999999;
  }

  .contact-submit-btn {
    display: inline-block;
    background-color: #ffffff;
    border: 2px solid #2ea3f2;
    border-radius: 3px;
    color: #2ea3f2;
    cursor: pointer;
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
    font-weight: 500;
    padding: 10px 24px;
    text-align: center;
    transition: background-color 0.2s ease, color 0.2s ease;
  }

  .contact-submit-btn:hover {
    background-color: #2ea3f2;
    color: #ffffff;
  }
  ```

### 6.8 Footer Architecture (`#main-footer`)
- **Main Footer Container**: Deep charcoal `#222222`, padding `30px 0`.
- **Bottom Bar (`#footer-bottom`)**: Dark strip `rgba(0, 0, 0, 0.32)` / `#1f1f1f`, padding `15px 0 5px`.
- **Copyright Text**: `Copyright © 2019 By U Hla Tun, Hospice (Cancer) Foundation. Designed by DPS.`
- **Typography & Links**: Font size `14px`, color `#666666`, link hover `#2ea3f2`.

---

## 7. Responsive Breakpoint Matrix

| Viewport Range | Device Class | Responsive Layout Behavior |
| :--- | :--- | :--- |
| **≥ 981px** | Desktop (Standard & Wide) | Fixed boxed layout (`1200px` max, `90%` width). Horizontal desktop menu bar (`80px` height). Hero slider at `500px`. 4-column CTA cards row. |
| **768px – 980px** | Tablet (Portrait / Landscape) | Boxed layout fluid. Top nav collapses to mobile hamburger bar with brand green strip. Hero slider height drops to `350px`. 4-column CTA cards reflow into a 2×2 grid. Gallery columns reduce to 2 columns. |
| **≤ 767px** | Mobile Smartphone | Full fluid width (`100%`). Hero slider height adapts to `220px`. All multi-column rows (`1/4`, `1/3`, `1/2`) stack vertically into 100% width cards. Contact form inputs and submit button scale to full width. Text padding adjusted for mobile readability (`16px` gutters). |

---

## 8. Media Assets Registry

| Asset Path / File | Dimensions | Role / Usage Context |
| :--- | :--- | :--- |
| `assets/images/logo.png` | `172.75 × 43.19 px` | Header main brand logo |
| `assets/images/contact.jpg` | `731 × 336 px` | Contact Us page banner with dove sculpture |
| `assets/images/logo1-300x200.jpg` | `148 × 98.66 px` | Dove sculpture seal badge on Appeal page |
| `assets/images/1963.jpg` | `445 × 668 px` | Archival portrait of Founder U Hla Tun |
| `assets/images/1.png` - `5.png` | `1200 × 500 px` | Smart Slider 3 carousel banners |
| `assets/images/20160505_115107.jpg` | High-res ceremony | Prime Minister U Myint Swe Yangon Hospice visit |
| `assets/images/d2.jpg` - `d12.jpg` | ~`280 × 190 px` | Yangon & Mandalay donor ceremony handover photographs |
| `assets/images/donation1.png` - `donation21.png`| ~`245 × 164 px` | Donor certificates of appreciation & official receipts |
| `assets/images/cropped-Hospice-logo-new-192x192.jpg`| `192 × 192 px` | Website favicon and bookmark icon |
| `assets/images/UHlaTun_Yangon_bg.jpg` / `_pfp.jpg` | `140px h` / `80x80px` | Yangon branch social card assets |
| `assets/images/UHlatun_Mondalay_bg.jpg` / `_pfp.jpg`| `140px h` / `80x80px` | Mandalay branch social card assets |
