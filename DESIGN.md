# Design System & Theme Specification: U Hla Tun Hospice Myanmar
**Version:** 1.0 (Vanilla Static Recovery)  
**Base Source:** Decoupled WordPress / Divi 3.15 + Custom Clean CSS  
**Target URL:** `http://127.0.0.1:5501/`  
**Host Architecture:** Boxed Layout (1200px container) on Warm Tinted Canvas  

---

## 1. Design Philosophy & Brand Identity

The U Hla Tun Hospice (Cancer) Foundation website conveys **compassion, medical credibility, human dignity, and civic charity**. 
The visual identity relies on three core tenets:
1. **Hospice Green (`#08AA00` / `#00CC00`):** Symbolizes healing, life, hope, and humanitarian service. Prominently grounds the top navigation header and bottom footer.
2. **Clinical Trust Blue (`#002A9E` / `#2F4F8F` / `#2EA3F2` / `#1877F2`):** Communicates institutional reliability, structure, and active community outreach. Used for key callouts, table headers, interactive links, and social integrations.
3. **Warm Calming Backdrop (`#EDEDE3`):** Frames the boxed layout with a soothing, non-glare neutral cream/beige, creating an inviting, respectful aesthetic suited for palliative hospice care.

---

## 2. Design Tokens

### 2.1 Color Palette

| Token Name | Hex Code | RGB | Role / Usage |
| :--- | :--- | :--- | :--- |
| `--color-brand-primary` | `#08AA00` | `rgb(8, 170, 0)` | Primary brand green. Main header BG, footer bottom BG. |
| `--color-brand-accent-green`| `#00CC00` | `rgb(0, 204, 0)` | Vibrant accent green. Callout card top border, hover link highlights. |
| `--color-canvas-bg` | `#EDEDE3` | `rgb(237, 237, 227)` | Outer viewport background (boxed layout canvas). |
| `--color-surface-white` | `#FFFFFF` | `rgb(255, 255, 255)` | Page container, cards, active nav text, table text. |
| `--color-surface-subtle` | `#EEEEEE` | `rgb(238, 238, 238)` | Form input background, table container borders. |
| `--color-surface-card-gray` | `#F0F2F5` | `rgb(240, 242, 245)` | Avatar placeholder background, card cover base (`#E4E6EB`). |
| `--color-text-main` | `#666666` | `rgb(102, 102, 102)` | Default paragraph and descriptive body text. |
| `--color-text-dark` | `#333333` | `rgb(51, 51, 51)` | Section headings (H1, H2, H3), subheaders. |
| `--color-text-black` | `#000000` | `rgb(0, 0, 0)` | Inactive nav links, footer credits, high-contrast headings. |
| `--color-text-fb-title` | `#1C1E21` | `rgb(28, 30, 33)` | Facebook card titles and prominent card headers. |
| `--color-text-fb-muted` | `#65676B` | `rgb(101, 103, 107)` | Facebook card subtext, secondary captions. |
| `--color-cta-blue` | `#002A9E` | `rgb(0, 42, 158)` | Action card link titles, contact address section titles. |
| `--color-table-header` | `#2F4F8F` | `rgb(47, 79, 143)` | Management committee data table header background. |
| `--color-table-border` | `#9AA6C1` | `rgb(154, 166, 193)` | Data table inner cell borders (`th`, `td`). |
| `--color-accent-blue` | `#2EA3F2` | `rgb(46, 163, 242)` | Contact form submit button border/text (classic Divi accent). |
| `--color-social-fb` | `#1877F2` | `rgb(24, 119, 242)` | Official Facebook button background. |
| `--color-social-fb-hover` | `#166FE5` | `rgb(22, 111, 229)` | Facebook button hover state. |

---

### 2.2 Typography System

#### Font Families
* **English Typography:** `'Open Sans', sans-serif`
  * Subsets: `latin`, `latin-ext`
  * Weights: `300` (Light), `400` (Regular), `600` (Semi-Bold), `700` (Bold), `800` (Extra-Bold)
* **Myanmar / Burmese Typography (Unicode):** `'Noto Sans Myanmar', 'Pyidaungsu', 'Myanmar Text', sans-serif`
  * Weights: `300`, `400`, `500`, `600`, `700`
  * Loaded via `@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Myanmar:wght@300;400;500;600;700&display=swap');`
* **Fallback Typography:** `Arial, sans-serif`

#### Typographic Scale

| Element / Class | Font Size | Weight | Line Height | Style / Transform | Color |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Page Title (H1)** | `31px` (desktop)<br>`26px` (mobile) | `500` / `700` | `31px` (1.0) | Normal / Centered | `#333333` / `#000000` |
| **Section Heading (H2)** | `26px` | `500` / `700` | `26px` (1.0) | Normal / Left or Centered | `#333333` |
| **Subsection (H3)** | `20px` - `22px` | `500` | `22px` (1.0 - 1.1) | Normal / Center or Left | `#000000` / `#333333` |
| **Component Header (H4)** | `18px` | `700` | `23.4px` (1.3) | Normal | `#1C1E21` |
| **Body Text (`p`, `li`)** | `14px` | `500` | `23.8px` (1.7) | Normal | `#666666` / `#000000` |
| **Main Navigation Link** | `17px` | `700` | `14px` | Italic / Normal Case | Inactive: `#000000`<br>Active: `#FFFFFF` |
| **Action CTA Links** | `20px` | `500` | `20px` (1.0) | Bold / Italicized | `#002A9E` (Hover: `#00CC00`) |
| **Table Header (`th`)** | `16px` | `700` | `23.8px` | Normal / Centered | `#FFFFFF` |
| **Table Data (`td`)** | `16px` | `500` | `23.8px` | Normal / Centered | `#666666` |
| **Facebook Card Subtitle**| `14px` | `400` / `500` | `21px` (1.5) | Myanmar Unicode | `#65676B` |
| **Form Submit Button** | `20px` | `500` | `34px` | Normal | `#2EA3F2` |
| **Footer Info Text** | `14px` | `500` | `23.8px` | Normal / Centered | `#000000` |

---

### 2.3 Spacing, Radii & Shadows

#### Spatial System
* **Boxed Page Width:** `max-width: 1200px;` (centered horizontally with auto margin).
* **Section Padding:**
  * Desktop (`> 1350px`): `0px 0;` (rows handle internal rhythm `13px 0`).
  * Tablet/Mobile (`<= 980px`): `15px 0;`
* **Row Margins (CTA Row):** `margin-top: 25px; margin-bottom: 25px;`
* **Card Paddings:**
  * Callout Cards: `padding: 20px 14px;`
  * Facebook Cards: `padding: 0 20px 22px 20px;`
  * Form Textarea: `padding: 16px;`
  * Table Cells (`th`, `td`): `padding: 10px;`

#### Border Radii
* **Pill / Soft Rounding:** `12px` (Facebook cards `.fb-card`, `.fb-hybrid-container`).
* **Medium Card Rounding:** `10px` (Action Callout Cards `.et_pb_row_1 .et_pb_text`).
* **Button Rounding:** `6px` (`.fb-btn`), `3px` (Form submit button).
* **Circular Badges & Avatars:** `50%` (`.fb-avatar`, `.fb-badge`).

#### Elevation & Shadows
* **Page Framing:** `box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);`
* **Header Baseline:** `box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.1);`
* **Callout Card Resting:** `box-shadow: 0px 4px 18px 0px rgba(0, 106, 193, 0.3);`
* **Callout Card Hover:** `box-shadow: 0px 8px 24px 0px rgba(0, 106, 193, 0.5); transform: translateY(-4px);`
* **Facebook Card Resting:** `box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.08); border: 1px solid rgba(0, 0, 0, 0.08);`
* **Facebook Card Hover:** `box-shadow: 0px 8px 26px 0px rgba(0, 0, 0, 0.14); transform: translateY(-3px);`
* **Avatar Shadow:** `box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.16);`
* **Social Button Shadow:** `box-shadow: 0px 2px 6px 0px rgba(24, 119, 242, 0.3);` (Hover: `0px 4px 14px 0px rgba(24, 119, 242, 0.45);`)

---

## 3. Layout Architecture & Responsive Breakpoints

```
+-------------------------------------------------------------------------+
| Viewport Background: #EDEDE3 (Beige Canvas)                             |
|                                                                         |
|   +-----------------------------------------------------------------+   |
|   | #page-container (max-width: 1200px, bg: #FFF, shadow: 0 0 10px) |   |
|   |                                                                 |   |
|   |   [ Header: #08AA00, h: 80px | Logo | Nav Menu / Mobile Nav ]    |   |
|   |   [ Hero Banner / Smart Slider 3 (h: 500px / 350px / 220px) ]   |   |
|   |   [ 4 Callout Action Cards (Admission, Donate, Test, Vol) ]     |   |
|   |   [ Main Content / Special Features (Bulleted List) ]           |   |
|   |   [ Branch Cards: Yangon & Mandalay Hybrid FB Cards ]           |   |
|   |   [ Contact Info & Telephone Links (Dashed Divider) ]           |   |
|   |   [ Footer Bottom Bar: #08AA00 | Copyright & DPS Attribution ]  |   |
|   |                                                                 |   |
|   +-----------------------------------------------------------------+   |
+-------------------------------------------------------------------------+
```

### 3.1 Breakpoint Rules
1. **Desktop (`> 980px`):**
   * `#page-container`: `max-width: 1200px`, margin auto.
   * Desktop horizontal navigation displayed (`#top-menu`).
   * 4-column callout row (`et_pb_column_1_4`).
   * 2-column branch section (`et_pb_column_1_2`).
   * Slider height: `500px`.
2. **Tablet (`<= 980px`):**
   * Desktop menu hides; hamburger menu toggle (`.mobile_nav`) activates.
   * Expanded mobile drawer `#mobile_menu` opens vertically with `#08aa00` background.
   * Grid columns collapse to 100% width stacked.
   * Slider height drops to `350px`.
3. **Mobile Phone (`<= 600px`):**
   * Slider height scales down to `220px`.
   * Action buttons stack with generous vertical touch targets (`margin-bottom: 15px`).
   * Facebook card width adapts to viewport (`max-width: 100%`).

---

## 4. Component Library & Specifications

### 4.1 Header & Navigation
* **Element:** `#main-header`
* **Background:** `#08AA00` (fallback `#10C900`)
* **Height:** `80px` fixed height with `padding: 0`
* **Logo (`#logo`):** `173px` x `43px`, vertical alignment center. Displays text badge: *"HOSPICE AWARENESS - A PILGRIMAGE TO HUMANITY"*.
* **Menu Links (`#top-menu > li > a`):**
  * Typography: `17px`, bold (`700`), italic, font `'Open Sans'`.
  * Inactive state: `#000000` text color.
  * Active state (`.current-menu-item > a`, `.current_page_item > a`): `#FFFFFF !important;`
  * Padding: `0 0 33px 0;` (aligns baseline with 80px bar).
* **Dropdown Submenu (`.sub-menu`):**
  * Border-top: `3px solid #000000`.
  * Background: `#10C900` / `#08AA00`.
  * Items: 14px bold, with white active state.

### 4.2 Hero Slider (Smart Slider 3 Decoupled)
* **Element:** `#n2-ss-2`
* **Container:** `max-width: 1200px`, `position: relative`, `overflow: hidden`.
* **Slides:** Full cover background images (`background-size: cover; background-position: center;`).
* **Navigation Arrows (`#n2-ss-2-arrow-previous`, `#n2-ss-2-arrow-next`):**
  * Positioned absolutely `top: 50%; transform: translateY(-50%);`
  * Left arrow: `left: 25px;`
  * Right arrow: `right: 25px;`
  * Z-index: `20`.

### 4.3 Action Callout Cards (Grid of 4)
* **Elements:**
  1. ADMISSION & CRITERIAR (`admission.html`)
  2. DONATE TODAY! (`donate.html`)
  3. TESTIMONIALS (`testimonials.html`)
  4. VOLUNTEER NOW! (`volunteer.html`)
* **Styling (`.et_pb_row_1 .et_pb_module.et_pb_text`):**
  * Background: `#FFFFFF`
  * Border-radius: `10px`
  * Border-top: `4px solid #00CC00`
  * Box-shadow: `0px 4px 18px 0px rgba(0, 106, 193, 0.3)`
  * Padding: `20px 14px`
  * Text Alignment: `center`
  * Transition: `transform 0.3s ease, box-shadow 0.3s ease`
* **Interactive Hover State:**
  * `transform: translateY(-4px)`
  * `box-shadow: 0px 8px 24px 0px rgba(0, 106, 193, 0.5)`
* **Typography:**
  * Link color: `#002A9E` (Italic uppercase)
  * Link hover color: `#00CC00`

### 4.4 Facebook Hybrid Branch Cards (Yangon & Mandalay)
* **Container (`.fb-hybrid-container`):** `max-width: 440px; margin: 15px auto 0;`
* **Card (`.fb-card`):**
  * Background: `#FFFFFF`
  * Border-radius: `12px`
  * Border: `1px solid rgba(0, 0, 0, 0.08)`
  * Box-shadow: `0 4px 20px rgba(0, 0, 0, 0.08)`
  * Hover: `transform: translateY(-3px); box-shadow: 0 8px 26px rgba(0, 0, 0, 0.14);`
* **Cover Banner (`.fb-cover`):** `height: 140px;` with subtle gradient overlay `linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.45) 100%)`.
* **Avatar (`.fb-avatar`):**
  * `width: 80px; height: 80px; border-radius: 50%;`
  * Border: `4px solid #FFFFFF`
  * Shadow: `0 3px 10px rgba(0, 0, 0, 0.16)`
  * Offset: `margin-top: -42px; margin-bottom: 10px;`
* **Verified Facebook Badge (`.fb-badge`):** `24px x 24px` circular badge at bottom-right corner of avatar.
* **Button (`.fb-btn`):**
  * Background: `#1877F2` (Hover: `#166FE5`)
  * Color: `#FFFFFF`
  * Font-size: `14px; font-weight: 600;`
  * Padding: `10px 24px`
  * Border-radius: `6px`
  * Box-shadow: `0 2px 6px rgba(24, 119, 242, 0.3)`

### 4.5 Data Tables (Member & Committee Rosters)
* **Element:** `table`
* **Table Wrapper:** `border: 1px solid #EEEEEE; margin-bottom: 15px;`
* **Header Row (`tr` on `thead`):** `background-color: #2F4F8F; color: #FFFFFF;`
* **Header Cell (`th`):** `padding: 10px; font-weight: 700; border: 1px solid #9AA6C1; text-align: center;`
* **Data Cell (`td`):** `padding: 10px; font-size: 16px; color: #666666; border: 1px solid #9AA6C1; text-align: center;`

### 4.6 Contact Us Form & Controls
* **Form Container:** Centered / 50% max-width on desktop.
* **Input Fields & Textarea:**
  * Background: `#EEEEEE`
  * Padding: `16px`
  * Border: `0px` or `1px solid #BBBBBB`
  * Text Color: `#000000` / Placeholder: `#999999`
* **Math Verification Captcha:** Lightweight math challenge (e.g. `2 + 10 = [ ]`) ensuring human interaction without external third-party tracker dependencies.
* **Submit Button (`button`, `input[type="submit"]`):**
  * Border: `2px solid #2EA3F2`
  * Background: `transparent` (fills on hover)
  * Color: `#2EA3F2` (Hover: `#FFFFFF`)
  * Font size: `20px`
  * Padding: `6px 20px`
  * Border-radius: `3px`

### 4.7 Footer & Attribution Bar
* **Element:** `#footer-bottom`
* **Background:** `#08AA00` (matching header)
* **Padding:** `15px 0px 5px`
* **Text (`#footer-info`):**
  * Color: `#000000`
  * Font size: `14px; font-weight: 500;`
  * Text Alignment: `center`
  * Content: *"Copyright © 2019 By U Hla Tun, Hospice (Cancer) Foundation. Designed by DPS."*

---

## 5. Bilingual & Myanmar Unicode Typography Strategy

A critical achievement of the local vanilla recovery is eliminating legacy encoding conflicts:
* **Legacy Issue on Live Site:** Relied on `zawgyi` font declarations (`bodyFont: "zawgyi"`), resulting in broken text rendering on modern devices adhering to ISO Myanmar Unicode.
* **Modernized Solution in `uaf.css`:**
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Myanmar:wght@300;400;500;600;700&display=swap');

  body, h1, h2, h3, h4, h5, h6, p, blockquote, li, a {
    font-family: 'Open Sans', 'Noto Sans Myanmar', 'Pyidaungsu', 'Myanmar Text', sans-serif !important;
  }
  ```
* **Result:** Pristine, standardized Burmese text rendering across Windows, Android, iOS, and macOS without requiring custom user font installations.
