# Design Theme & System Specification: U Hla Tun (Cancer) Hospice Myanmar

> **Source**: Inspected live from `http://uhlatunhospicemyanmar.org/` and `http://uhlatunhospicemyanmar.org/donation.html` (Divi 3.15 / WordPress 4.9.x architecture converted to clean static/vanilla CSS).  
> **Brand**: U Hla Tun (Cancer) Hospice Foundation (Yangon & Mandalay, Myanmar)  
> **Category**: Humanitarian Healthcare / Palliative Cancer Care Non-Profit

---

## 1. Visual Identity & Design Principles

The design of the U Hla Tun Hospice Myanmar website conveys **compassion, dignity, clinical trustworthiness, and warmth**. As a 100% free charitable hospice caring for terminally ill cancer patients ("poorest of the poor"), the aesthetic balances humanitarian warmth with clarity and simplicity.

### Core Visual Pillars:
1. **Boxed Elevation**: A centered 1200px boxed canvas sitting on a soft, warm neutral stone background (`#edede3`), framed with subtle depth shadows (`rgba(0,0,0,0.2) 0px 0px 10px`).
2. **Medical & Hope Accents**:
   - **Vibrant Growth Green** (`#10c900` / `#08aa00` / `#00cc00`): Signifies life, healing, relief, and active community charity.
   - **Compassionate Royal Blue** (`#002a9e` / `#0c71c3`): Communicates institutional credibility, serenity, and dignity.
3. **Dual-Language Accessibility**: Full typography support for Latin (`Open Sans`) and Myanmar Unicode (`Noto Sans Myanmar`, `Pyidaungsu`), maintaining balanced vertical rhythm and line heights for complex Myanmar script diacritics.

---

## 2. Design Tokens & Color Palette

### 2.1 CSS Variables / Design Tokens

```css
:root {
  /* Brand Primary Colors */
  --color-primary-green: #10c900;
  --color-primary-green-dark: #08aa00;
  --color-primary-green-accent: #00cc00;
  --color-primary-blue: #002a9e;
  --color-primary-blue-deep: #001aaf;
  --color-primary-blue-light: #2ea3f2;
  --color-divider-blue: #0c71c3;
  --color-facebook-blue: #1877f2;
  --color-facebook-hover: #166fe5;

  /* Neutrals & Surfaces */
  --color-bg-body: #edede3;           /* Warm stone/parchment background */
  --color-bg-surface: #ffffff;        /* Pure white boxed container & cards */
  --color-bg-dark: #222222;           /* Deep charcoal footer */
  --color-bg-footer-bar: rgba(0, 0, 0, 0.32);
  --color-border-light: rgba(0, 0, 0, 0.08);

  /* Typography Colors */
  --color-text-primary: #333333;      /* Headings & prominent text */
  --color-text-secondary: #666666;    /* Body text & descriptors */
  --color-text-muted: #65676b;        /* Subtitles & metadata */
  --color-text-white: #ffffff;        /* White text for dark surfaces */
  --color-text-link: #2ea3f2;         /* Interactive links */
  --color-text-link-hover: #00cc00;   /* Accent link hover */

  /* Shadows & Elevations */
  --shadow-boxed-layout: 0px 0px 10px rgba(0, 0, 0, 0.2);
  --shadow-header: 0px 1px 0px rgba(0, 0, 0, 0.1);
  --shadow-dropdown: 0px 2px 5px rgba(0, 0, 0, 0.1);
  --shadow-card: 0px 4px 18px rgba(0, 106, 193, 0.3);
  --shadow-card-hover: 0px 8px 24px rgba(0, 106, 193, 0.5);
  --shadow-card-legacy: 0px 0px 18px 0px rgba(0, 106, 193, 0.59);
  --shadow-fb-card: 0 4px 20px rgba(0, 0, 0, 0.08);
  --shadow-fb-hover: 0 8px 26px rgba(0, 0, 0, 0.14);

  /* Spacing Tokens */
  --space-xxs: 4px;
  --space-xs: 8px;
  --space-sm: 12px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;

  /* Typography System */
  --font-family-sans: 'Open Sans', 'Noto Sans Myanmar', 'Pyidaungsu', 'Myanmar Text', sans-serif;
  --font-size-body: 14px;
  --line-height-body: 1.7; /* 23.8px */
}
```

### 2.2 Color Swatch Reference Table

| Role | Color Name | Hex / Value | Usage |
| :--- | :--- | :--- | :--- |
| **Page Canvas** | Warm Cream Neutral | `#edede3` | Full-viewport body background behind boxed layout |
| **Surface** | Pure White | `#ffffff` | Boxed container, cards, modal, dropdown menus |
| **Brand Green** | Vivid Leaf Green | `#10c900` | Header background in standard mobile Divi theme |
| **Accent Green** | Emerald Accent | `#00cc00` | Top borders on CTA cards, hover states, badges |
| **Dark Green** | Deep Spruce Green | `#08aa00` | Mobile header background, footer bottom bar |
| **Brand Blue** | Hospice Royal Blue | `#002a9e` | Section titles, card titles, quotes, headings |
| **Accent Blue** | Cyan / Sky Blue | `#2ea3f2` | Primary interactive text link color |
| **Divider Blue** | Cobalt Blue | `#0c71c3` | Dashed section divider line (`3px dashed #0c71c3`) |
| **Text Primary** | Dark Neutral Charcoal | `#333333` | Headings (H2, H3), bold titles |
| **Text Secondary** | Medium Charcoal | `#666666` | Paragraph body text, list items, copyright |
| **Footer Base** | Deep Ebony | `#222222` | Footer background container |
| **Social** | Facebook Official Blue | `#1877f2` | Verified badges, hybrid Facebook action buttons |

---

## 3. Typography System

### 3.1 Font Families
- **Primary English**: `'Open Sans'`, weights: `300 (Light)`, `400 (Regular)`, `600 (Semi-Bold)`, `700 (Bold)`, `800 (Extra-Bold)`.
- **Primary Myanmar (Unicode)**: `'Noto Sans Myanmar'`, `'Pyidaungsu'`, `'Myanmar Text'`.
- **Fallbacks**: Standard sans-serif system stack.

### 3.2 Typographic Hierarchy & Scale

| Level | Tag / Element | Size | Weight | Line Height | Color | Style & Notes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Page Title / H1** | `h1` | `31px` - `47px` | `700` | `1.2 - 1.3` | `#002a9e` / `#333` | Hero titles, slider titles |
| **Section Header** | `h2` | `26px` | `700` | `1.2 - 1.4` | `#333333` | E.g., *"Special Features of the Hospice"*, bottom pad `10px` |
| **Module Header** | `h3` | `20px` - `22px` | `700` | `1.3 - 1.4` | `#002a9e` / `#333` | Donor headings, card titles, branch names |
| **Sub-Header / Caption**| `h4` | `18px` | `600` | `1.4` | `#333333` / `#1c1e21`| Donor image descriptions, contact names |
| **Sign-off / Attrib** | `h5` | `16px` | `600` | `1.4` | `#333333` | Right-aligned sign-offs (*"Yours in Hospice"*) |
| **Card Header Links** | `.item-header a` | `20px` | `700` | `1.3` | `#002a9e` | Italic bold uppercase (*"DONATE TODAY!"*) |
| **Body Paragraph** | `p` | `14px` | `400 - 500`| `23.8px` (~1.7)| `#666666` | Justified or left text, `margin-bottom: 14px` |
| **Unordered List** | `li` | `14px` | `400 - 500`| `23.8px` | `#666666` | Feature list items with disc bullets |
| **Navigation Link** | `#top-menu a` | `14px` - `17px` | `600 - 700`| `1.0` | `#2ea3f2` / `#fff` | Navigation items, padding `0 0 33px` |
| **Footer Info** | `#footer-info` | `14px` | `400 - 500`| `1.7` | `#666666` | Centered/left copyright text |

---

## 4. Grid, Layout & Spatial Architecture

### 4.1 Boxed Container Geometry
- **Overall Layout**: Boxed format (`et_boxed_layout`).
- **Maximum Width**: `1200px`.
- **Centering**: `margin: 0 auto`.
- **Surrounding Canvas**: Background color `#edede3`.
- **Container Shadow**: `0 0 10px rgba(0, 0, 0, 0.2)`.
- **Interior Canvas**: Pure White `#ffffff`.

### 4.2 Divi Grid Columns & Layout Patterns
1. **Full-width Row (`.et_pb_row_fullwidth`)**:
   - `width: 100%`, `padding: 0`. Used for the Smart Slider 3 carousel.
2. **4-Column Quick Actions (`.et_pb_column_1_4` x 4)**:
   - Width: ~`21.25%` each with proportional gutters.
   - Houses the 4 primary CTA cards (*Admission, Donate, Testimonials, Volunteer*).
3. **2-Column Split Presentation (`.et_pb_column_1_2` x 2)**:
   - Width: ~`47.5%` each with `5%` gutter.
   - Houses the dual-branch modules: Yangon Hospice and Mandalay Hospice (Facebook feeds, contact directories).
4. **3-Column Photo Gallery (`.et_pb_column_1_3` x 3)**:
   - Width: ~`29.6%` each with standard gutters (`et_pb_gutters3`).
   - Used on `donation.html` for donor photo ceremony records.
5. **Full-width Content (`.et_pb_column_4_4`)**:
   - Width: `100%`.
   - Used for the Hospice Feature List, dashed dividers, and certificate galleries.

---

## 5. UI Components & Elements

### 5.1 Header & Main Navigation Bar
- **Header Element**: `<header id="main-header">`
- **Default Height**: `66px` to `80px` fixed/sticky header (`et_fixed_nav`).
- **Logo**: Positioned left, max height `78%` of header height (`logo.png`).
- **Nav Menu (`#top-menu`)**:
  - Horizontal menu aligned to the right.
  - Links: `Home`, `History`, `Donation`, `Activities` (with dropdown caret/flyout), `Member`, `Contact Us`.
  - Link style: `font-size: 14px - 17px`, bold, letter-spacing normal.
  - Active Menu Indicator: Highlighting via `#ffffff` (when on green bar) or `#2ea3f2` (when on white bar).
- **Sub-Menu Dropdown (`.sub-menu`)**:
  - Absolute positioning, `width: 240px`, `background: #ffffff`, `box-shadow: 0px 2px 5px rgba(0,0,0,0.1)`.
  - Padding: `20px 0`.
  - Links: `International Link`, `Annual Meeting`, `Member Activity`, `Patient Activity`, `Training Program`, `Special Visits`.
- **Search Widget**: Magnifying glass trigger icon opening expandable search field `.et_search_outer`.
- **Mobile Menu**: Collapses to hamburger trigger icon `.mobile_menu_bar_toggle` with "Select Page" indicator below `980px`.

### 5.2 Hero Carousel (Smart Slider 3)
- **Container**: `#n2-ss-2`, fixed height `500px` on desktop, `350px` on tablet, `220px` on mobile.
- **Imagery**: 5 banner visuals (`1.png` - `5.png`) showcasing hospice facilities, patients, medical staff, and tranquil gardens.
- **Navigation Controls**: Left/Right semi-transparent arrow buttons (`#n2-ss-2-arrow-previous`, `#n2-ss-2-arrow-next`), vertically centered (`top: 50%; transform: translateY(-50%)`), `25px` inset from edges.
- **Behavior**: Auto-advancing slides with swipe/touch support and smooth fade/slide transitions.

### 5.3 Quick Action / Call-to-Action (CTA) Cards
- **Location**: `.et_pb_row_1` directly beneath the hero slider.
- **4 Action Cards**:
  1. **ADMISSION & CRITERIAR** (`admission.html`)
  2. **DONATE TODAY!** (`donate.html`)
  3. **TESTIMONIALS** (`testimonials.html`)
  4. **VOLUNTEER NOW!** (`volunteer.html`)
- **Card Specifications**:
  ```css
  .et_pb_row_1 .et_pb_module.et_pb_text {
    background: #ffffff;
    border-radius: 10px;
    border-top: 4px solid #00cc00;
    box-shadow: 0px 4px 18px 0px rgba(0, 106, 193, 0.3);
    padding: 20px 14px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .et_pb_row_1 .et_pb_module.et_pb_text:hover {
    transform: translateY(-4px);
    box-shadow: 0px 8px 24px 0px rgba(0, 106, 193, 0.5);
  }
  .et_pb_row_1 .item-header a {
    color: #002a9e;
    font-weight: 700;
    font-style: italic;
    text-decoration: none;
    display: block;
    transition: color 0.2s ease;
  }
  .et_pb_row_1 .item-header a:hover {
    color: #00cc00;
  }
  ```

### 5.4 Feature Highlights List (Hospice Services)
- **Heading**: `<h2><strong>Special Features of the Myanmar Humanitarian Hospice</strong></h2>`
- **List Styling**: Generously spaced bullet list (`<ul><li>...</li></ul>`), line-height `1.7`, text-align justified.
- **12 Core Tenets**: Covers palliative pain control (morphine/codeine), non-opioids, spiritual facilities (Buddhist Prayer Rooms, Christian Chapel, monk visits, novitiation ceremonies), attendant accommodation, full funeral/bereavement coverage, body/retina donation facilitation, and music therapy.

### 5.5 Section Dividers
- **Dashed Brand Divider**:
  ```css
  .et_pb_divider_0 {
    height: 23px;
  }
  .et_pb_divider_0:before {
    border-top-color: #0c71c3;
    border-top-style: dashed;
    border-top-width: 3px;
  }
  ```

### 5.6 Social / Facebook Integration Cards
- Modern hybrid cards replacing slow external iframe dependencies:
  - **Cover Photo**: `140px` height with gradient overlay (`linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.45) 100%)`).
  - **Avatar**: `80x80px` rounded circle, `-42px` offset, `4px solid #ffffff`, box shadow `0 3px 10px rgba(0,0,0,0.16)`.
  - **Verified Badge**: Small circular badge with Facebook svg logo.
  - **Title**: `18px` bold `#1c1e21`. Subtitle: `14px` `#65676b`.
  - **Button**: `#1877F2` blue button (`padding: 10px 24px`, `border-radius: 6px`, text: "Visit Facebook Page").

---

## 6. Donation Forms, Galleries & Appeal Boxes

### 6.1 Donor Photo Gallery (`donation.html`)
- **Structure**:
  - Title: Centered H3 bold underlined: `SELFLESS DONATIONS BY WELLWISHERS`.
  - Section 1: `Yangon` (8+ donation ceremony handover photographs in a 3-column responsive grid).
  - Section 2: `Mandalay` (4+ donation ceremony handover photographs).
- **Image Presentation**:
  - Encased in `.et_pb_image_wrap` with lightbox anchor `.et_pb_lightbox_image`.
  - Responsive dimensions: `max-width: 100%`, border-radius `4px` or `0px`, subtle hover transition.
  - Captions: Centered H4 or paragraph below each image identifying high-ranking donors, patron families, and date of donation.
- **Certificate Gallery**:
  - Images `donation1.png` to `donation21.png` showcasing formal donation receipt certificates and appreciation letters.

### 6.2 Donation Appeal Box (`donate.html`)
- **Layout**: Two columns (`.et_pb_column_1_2` x 2).
- **Left Column**: Historical photograph of Founder U Hla Tun (`1963.jpg`).
- **Right Column**: Manifesto & Appeal:
  - Quotes: `“OUR DUTY IS TO CARE”`, `“CARE IS TO SHARE”`, `“HUMAN DIGNITY”` in H2 bold.
  - Message: *"Our Dedicated Selfless Charitable and Humanitarian Services are for the Poorest of the Poor to enable them to move on with 'HUMAN DIGNITY'... A 100% Charitable Foundation."*
  - Sign-off: Right-aligned H5 *"Yours in Hospice / Founder, Chairman and Hospice Family"* with hospice logo mark.
- **Direct Donation Routing Details**:
  - Prominent box listing official contact persons for cash/bank remittances:
    - **Yangon Hospice**: U Pyone (Admin Director) – `0973063943`
    - **Mandalay Hospice**: Daw Khin Aye Myint (Admin Director) – `092005762`
    - **Yangon Address**: No.(2), Highway Road, East Dagon Township, Yangon (`09421151535`) & Shwegon Plaza, Bahan Township (`+951-541495`).
    - **Mandalay Address**: Mandalay Yankin Taung Road, East Moat, Patheingyi Township (`09664052631`, `09441040649`).

---

## 7. Footer Architecture

- **Main Footer Container (`#main-footer`)**:
  - Background: Deep Charcoal `#222222`.
- **Bottom Bar (`#footer-bottom`)**:
  - Background: Semi-transparent black `rgba(0, 0, 0, 0.32)` or Deep Spruce Green `#08aa00`.
  - Padding: `15px 0px 5px`.
  - Content: Flexbox or clearfix container with social icons and copyright info.
- **Copyright Text (`#footer-info`)**:
  - Text: `Copyright © 2019 By U Hla Tun, Hospice (Cancer) Foundation. Designed by DPS.`
  - Color: `#666666` or `#ffffff` with bold designer link.

---

## 8. Responsive Design & Breakpoints

| Breakpoint Range | Device Class | Layout & Styling Adjustments |
| :--- | :--- | :--- |
| **≥ 1350px** | Large Desktop | Maximum content width capped at `1200px`. Optimized row padding (`13px 0`). Side margins centered. |
| **981px – 1349px** | Standard Desktop | Boxed width active (`width: 963px` - `1200px`). Navigation full inline menu. 4-column cards intact. |
| **601px – 980px** | Tablet Portrait | Top navigation collapses to hamburger menu bar `.mobile_menu_bar_toggle`. Slider height decreases to `350px`. 4-column cards reflow into 2x2 grid. H2 drops to `26px`, H3 drops to `22px`. |
| **≤ 600px** | Mobile Smartphone | Slider height adapts to `220px`. All multi-column rows (`1/4`, `1/3`, `1/2`) stack vertically into single 100% width columns. Card touch targets increased (`min-height: 48px`). Facebook hybrid cards width adapts to `100%`. Text alignment shifts to center or left-aligned for high readability. |

---

## 9. Imagery & Media Assets Index

| Asset Path | Context & Purpose | Dimensions / Specs |
| :--- | :--- | :--- |
| `assets/images/logo.png` | Main Brand Logo in Header | Transparent PNG, height ~66px |
| `assets/images/cropped-Hospice-logo-new-192x192.jpg` | Favicon / App Icon | Square 192x192 JPG |
| `assets/images/1.png` - `5.png` | Smart Slider 3 Carousel Banners | 1200x500px, Landscape, Hospice grounds & care |
| `assets/images/1963.jpg` | Founder U Hla Tun Portrait on `donate.html` | Archival portrait photo |
| `assets/images/logo1-300x200.jpg` | Secondary Logo / Seal on Appeal Page | 300x200 JPG emblem |
| `assets/images/20160505_115107.jpg` | Prime Minister U Myint Swe Yangon Visit | High-res ceremony photo |
| `assets/images/d2.jpg` - `d12.jpg` | Donor Ceremony Handover Galleries | High-res photos for Yangon & Mandalay donors |
| `assets/images/donation1.png` - `donation21.png` | Certificates of Appreciation & Letters | Official scan certificates |
| `assets/images/UHlaTun_Yangon_bg.jpg` / `_pfp.jpg` | Yangon Facebook Hybrid Card Assets | Card cover (140px h) and avatar (80x80px) |
| `assets/images/UHlatun_Mondalay_bg.jpg` / `_pfp.jpg`| Mandalay Facebook Hybrid Card Assets | Card cover (140px h) and avatar (80x80px) |
