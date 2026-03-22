# ☕ chai CSS

A warm, lightweight utility CSS library - **no stylesheets, no build step, no npm required**.  
Just drop one `<script>` tag in your HTML, add `chai-` classes to your elements, and styles get injected directly via JavaScript.

---

## How it works

chai CSS works by scanning the DOM for any element that has a `chai-` class, looking it up in an internal style map, and writing it directly to `element.style`. No external CSS file is ever created or loaded.

```
HTML element with chai- class
        ↓
chai.js scans DOM on DOMContentLoaded
        ↓
Matches class name in styleMap
        ↓
Injects CSS string into element.style
```

---

## Quick Start

**Option 1 - Local file**

Download `chai.js`, place it next to your HTML file, and add:

```html
<script src="./chai.js"></script>
```

<!-- **Option 2 - CDN (once published)**

```html
<script src="https://unpkg.com/chai-css/dist/chai.min.js"></script>
``` -->

Then just use classes in your HTML - no other setup needed:

```html
<div class="chai-card chai-text-center chai-p-6">
  <h1 class="chai-text-xl chai-font-bold chai-text-dark">Hello ☕</h1>
  <p class="chai-text-muted chai-text-sm">Koi CSS file nahi. Sirf vibes.</p>
</div>
```

---

## All Classes

### 📐 Page & Base

| Class | CSS Applied |
|---|---|
| `chai-body` | background `#fdf6ec`, system font, margin/padding 0 |
| `chai-container` | max-width 900px, centered, 24px horizontal padding |
| `chai-section` | padding 72px top and bottom |
| `chai-full-center` | min-height 100vh, flex column, centered |
| `chai-w-full` | width 100% |
| `chai-w-half` | width 50% |
| `chai-h-screen` | height 100vh |

---

### 🧱 Flexbox & Layout

| Class | CSS Applied |
|---|---|
| `chai-flex` | display flex |
| `chai-inline-flex` | display inline-flex |
| `chai-flex-col` | flex-direction column |
| `chai-flex-row` | flex-direction row |
| `chai-flex-wrap` | flex-wrap wrap |
| `chai-flex-1` | flex 1 |
| `chai-justify-center` | justify-content center |
| `chai-justify-between` | justify-content space-between |
| `chai-justify-start` | justify-content flex-start |
| `chai-justify-end` | justify-content flex-end |
| `chai-items-center` | align-items center |
| `chai-items-start` | align-items flex-start |
| `chai-items-end` | align-items flex-end |

---

### 📏 Gap

| Class | CSS Applied |
|---|---|
| `chai-gap-1` | gap 4px |
| `chai-gap-2` | gap 8px |
| `chai-gap-3` | gap 12px |
| `chai-gap-4` | gap 16px |
| `chai-gap-6` | gap 24px |
| `chai-gap-8` | gap 32px |

---

### 📦 Padding

| Class | CSS Applied |
|---|---|
| `chai-p-1` | padding 4px |
| `chai-p-2` | padding 8px |
| `chai-p-3` | padding 12px |
| `chai-p-4` | padding 16px |
| `chai-p-5` | padding 20px |
| `chai-p-6` | padding 24px |
| `chai-p-8` | padding 32px |
| `chai-p-10` | padding 40px |
| `chai-px-3` | padding-left + right 12px |
| `chai-px-4` | padding-left + right 16px |
| `chai-px-6` | padding-left + right 24px |
| `chai-py-2` | padding-top + bottom 8px |
| `chai-py-3` | padding-top + bottom 12px |
| `chai-py-4` | padding-top + bottom 16px |
| `chai-py-6` | padding-top + bottom 24px |

---

### 📦 Margin

| Class | CSS Applied |
|---|---|
| `chai-m-auto` | margin auto |
| `chai-mx-auto` | margin-left + right auto |
| `chai-m-2` | margin 8px |
| `chai-m-4` | margin 16px |
| `chai-mb-1` | margin-bottom 4px |
| `chai-mb-2` | margin-bottom 8px |
| `chai-mb-3` | margin-bottom 12px |
| `chai-mb-4` | margin-bottom 16px |
| `chai-mb-6` | margin-bottom 24px |
| `chai-mb-8` | margin-bottom 32px |
| `chai-mt-2` | margin-top 8px |
| `chai-mt-4` | margin-top 16px |
| `chai-mt-6` | margin-top 24px |
| `chai-ml-2` | margin-left 8px |
| `chai-mr-2` | margin-right 8px |

---

### 🎨 Backgrounds

| Class | Color |
|---|---|
| `chai-bg-cream` | `#fdf6ec` - page default |
| `chai-bg-warm` | `#f5e6d0` - light tan |
| `chai-bg-brown` | `#7c4a1e` - primary brown |
| `chai-bg-dark-brown` | `#2c1a0e` - deep brown |
| `chai-bg-white` | `#ffffff` |
| `chai-bg-light` | `#fefaf5` - near white |
| `chai-bg-muted` | `#f0e4d4` - muted beige |
| `chai-bg-transparent` | transparent |

---

### 🖊️ Text Colors

| Class | Color |
|---|---|
| `chai-text-dark` | `#2c1a0e` - near black |
| `chai-text-brown` | `#7c4a1e` - primary brown |
| `chai-text-muted` | `#a07850` - muted brown |
| `chai-text-light` | `#d4a574` - light tan |
| `chai-text-cream` | `#fdf6ec` - cream (use on dark bg) |
| `chai-text-white` | `#ffffff` |
| `chai-text-gray` | `#6b7280` |
| `chai-text-danger` | `#dc2626` - red |
| `chai-text-success` | `#16a34a` - green |

---

### 🔠 Typography

**Font sizes**

| Class | Size | Line Height |
|---|---|---|
| `chai-text-xs` | 11px | 1.4 |
| `chai-text-sm` | 13px | 1.5 |
| `chai-text-base` | 16px | 1.6 |
| `chai-text-md` | 18px | 1.6 |
| `chai-text-lg` | 24px | 1.4 |
| `chai-text-xl` | 36px | 1.2 |
| `chai-text-2xl` | 52px | 1.1 |

**Font weights**

| Class | Weight |
|---|---|
| `chai-font-light` | 300 |
| `chai-font-normal` | 400 |
| `chai-font-medium` | 500 |
| `chai-font-semibold` | 600 |
| `chai-font-bold` | 700 |

**Text utilities**

| Class | CSS Applied |
|---|---|
| `chai-text-center` | text-align center |
| `chai-text-left` | text-align left |
| `chai-text-right` | text-align right |
| `chai-uppercase` | text-transform uppercase |
| `chai-capitalize` | text-transform capitalize |
| `chai-italic` | font-style italic |
| `chai-underline` | text-decoration underline |
| `chai-no-underline` | text-decoration none |
| `chai-tracking-wide` | letter-spacing 0.08em |
| `chai-leading-tight` | line-height 1.2 |
| `chai-leading-loose` | line-height 1.8 |

---

### 🔲 Border & Radius

**Border radius**

| Class | Radius |
|---|---|
| `chai-rounded-xs` | 4px |
| `chai-rounded-sm` | 8px |
| `chai-rounded-md` | 12px |
| `chai-rounded-lg` | 20px |
| `chai-rounded-xl` | 28px |
| `chai-rounded-full` | 999px (pill) |

**Borders**

| Class | CSS Applied |
|---|---|
| `chai-border` | 1px solid `#e8d5bc` |
| `chai-border-2` | 2px solid `#e8d5bc` |
| `chai-border-brown` | 1px solid `#7c4a1e` |
| `chai-border-none` | border none |
| `chai-border-b` | border-bottom 1px solid `#e8d5bc` |
| `chai-border-t` | border-top 1px solid `#e8d5bc` |

---

### 🌥️ Shadows

| Class | CSS Applied |
|---|---|
| `chai-shadow-sm` | subtle warm shadow |
| `chai-shadow` | medium warm shadow |
| `chai-shadow-lg` | large warm shadow |
| `chai-shadow-none` | box-shadow none |

---

### 📺 Display & Position

| Class | CSS Applied |
|---|---|
| `chai-block` | display block |
| `chai-inline` | display inline |
| `chai-inline-block` | display inline-block |
| `chai-hidden` | display none |
| `chai-relative` | position relative |
| `chai-absolute` | position absolute |
| `chai-fixed` | position fixed |
| `chai-sticky` | position sticky, top 0 |
| `chai-overflow-hidden` | overflow hidden |

---

### 🖱️ Cursor, Opacity & Z-index

| Class | CSS Applied |
|---|---|
| `chai-cursor-pointer` | cursor pointer |
| `chai-cursor-default` | cursor default |
| `chai-cursor-not-allowed` | cursor not-allowed |
| `chai-select-none` | user-select none |
| `chai-opacity-50` | opacity 0.5 |
| `chai-opacity-75` | opacity 0.75 |
| `chai-z-10` | z-index 10 |
| `chai-z-50` | z-index 50 |

---

### ✨ Transitions

| Class | CSS Applied |
|---|---|
| `chai-transition` | transition all 0.2s ease |
| `chai-transition-slow` | transition all 0.4s ease |
| `chai-transition-fast` | transition all 0.1s ease |

---

### 🧩 Pre-built Components

**Cards**

| Class | Description |
|---|---|
| `chai-card` | White card, warm shadow, rounded corners |
| `chai-card-warm` | Cream-tinted card, warm border |

```html
<div class="chai-card chai-p-6">
  Card content
</div>
```

**Tags & Badges**

| Class | Description |
|---|---|
| `chai-tag` | Soft pill - light brown bg, brown text |
| `chai-badge` | Bold pill - brown bg, cream text, uppercase |
| `chai-badge-warm` | Soft badge - cream bg, brown text |

```html
<span class="chai-tag">JavaScript</span>
<span class="chai-badge">New</span>
```

**Buttons**

Use `chai-btn` as the base, then add a variant:

| Class | Description |
|---|---|
| `chai-btn` | Base button - padding, radius, cursor |
| `chai-btn-primary` | Brown background, white text |
| `chai-btn-outline` | Transparent, brown border and text |
| `chai-btn-ghost` | No border, no bg, brown text |
| `chai-btn-sm` | Smaller padding and font |
| `chai-btn-lg` | Larger padding and font |
| `chai-btn-danger` | Red background, white text |

```html
<button class="chai-btn chai-btn-primary chai-transition">Click me</button>
<button class="chai-btn chai-btn-outline chai-transition">Secondary</button>
```

**Form Elements**

| Class | Description |
|---|---|
| `chai-input` | Full-width styled text input |
| `chai-textarea` | Full-width styled textarea |
| `chai-label` | Small bold label above an input |

```html
<label class="chai-label">Your name</label>
<input type="text" class="chai-input" placeholder="Enter name..." />
```

**Other**

| Class | Description |
|---|---|
| `chai-divider` | 1px horizontal rule, warm color |
| `chai-avatar` | 48×48 circular image |
| `chai-avatar-lg` | 80×80 circular image |
| `chai-code` | Inline code snippet style |

---

### 🌙 Dark Mode

chai CSS does not auto-detect dark mode. Dark mode is meant to be toggled manually via JavaScript using `chai.extend()` to swap color values in the styleMap, then `chai.scan()` to re-apply.

Built-in dark utility classes:

| Class | CSS Applied |
|---|---|
| `chai-dark-bg` | background `#1a0f07` |
| `chai-dark-card` | background `#2c1a0e`, dark border |
| `chai-dark-text` | color `#fdf6ec` |
| `chai-dark-muted` | color `#c8956a` |

**Recommended dark mode toggle pattern:**

```js
const darkOverrides = {
  "chai-text-dark":  "color: #fdf6ec",
  "chai-text-brown": "color: #e8b48a",
  "chai-text-muted": "color: #c8956a",
  "chai-bg-cream":   "background-color: #1a0f07",
  "chai-bg-warm":    "background-color: #2c1a0e",
};

function enableDark() {
  chai.extend(darkOverrides);

  // Reset all inline styles so new values take effect
  document.querySelectorAll('[class*="chai-"]').forEach(el => {
    el.style.cssText = "";
  });

  document.body.classList.add("chai-dark-bg");
  document.querySelectorAll(".chai-card").forEach(el => {
    el.classList.add("chai-dark-card");
  });

  chai.scan();
}
```

> **Why reset `style.cssText`?**  
> chai CSS writes styles directly to `element.style`. Since inline styles are additive, the old color stays locked in even after calling `chai.extend()`. Clearing `cssText` first gives you a clean slate before re-scanning.

---

### 🔧 Misc

| Class | CSS Applied |
|---|---|
| `chai-list-none` | list-style none, padding 0, margin 0 |
| `chai-truncate` | single line truncation with ellipsis |

---

## JavaScript API

chai CSS exposes a global `window.chai` object with four methods.

### `chai.scan(root?)`

Scans the DOM for all elements with `chai-` classes and applies their styles.  
Called automatically on `DOMContentLoaded`. Call it manually after adding dynamic content.

```js
// Scan full document (default)
chai.scan();

// Scan only inside a specific element
chai.scan(document.getElementById("my-modal"));
```

---

### `chai.apply(element)`

Apply chai styles to a single element manually.

```js
const el = document.getElementById("my-div");
chai.apply(el);
```

---

### `chai.extend(map)`

Add your own custom classes to the styleMap at runtime.  
Also used to override existing classes (e.g. for dark mode color swaps).

```js
chai.extend({
  "chai-my-hero": "background: linear-gradient(135deg, #7c4a1e, #2c1a0e); color: white; padding: 80px",
  "chai-glass":   "background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2)",
});

// Don't forget to re-scan after extending
chai.scan();
```

---

### `chai.list()`

Returns an array of all registered class names - useful for debugging or building a playground.

```js
const allClasses = chai.list();
console.log(allClasses.length); // e.g. 120
console.log(allClasses);        // ["chai-body", "chai-container", ...]
```

---

## index.html - Landing Page

The included `index.html` is a demo landing page for chai CSS. It is itself styled entirely using `chai-` classes - no other CSS.

### Sections

| Section | Description |
|---|---|
| **Navbar** | Sticky top bar with links and dark mode toggle |
| **Hero** | Title, tagline, CTA buttons, and a code snippet preview |
| **How it works** | Three-step explanation - script, classes, style |
| **All Classes** | Full class reference organized by category |
| **Live Playground** | Type any `chai-` class, see it applied live on a preview box |
| **Extend API** | Example showing `chai.extend()` usage |
| **Footer** | Simple dark footer |

### Dark Mode Toggle

The toggle button at the top right swaps between light and dark mode.  
It works by:

1. Calling `chai.extend()` with dark/light color overrides
2. Resetting all `element.style.cssText` to clear old injected values
3. Adding/removing `chai-dark-bg` and `chai-dark-card` classes
4. Calling `chai.scan()` to re-apply everything fresh

### Live Playground

The playground lets you type any `chai-` classes (space separated) into an input and immediately see them applied to a preview box. Quick preset buttons are also provided for common patterns.

```
Input:  chai-bg-brown chai-text-white chai-p-6 chai-rounded-lg
Result: Preview box updates live with those styles
```

---

## Project Structure

```
chai-css/
├── src/
│   └── chai.js       ← source file (readable, commented)
├── dist/
│   └── chai.min.js   ← minified build for production
├── index.html        ← demo landing page
├── package.json      ← npm package config
└── README.md         ← you are here
```

---

## Caveats

**Inline styles have high specificity.**  
Since chai CSS injects styles directly via `element.style`, they will override any styles coming from a regular stylesheet. This is intentional - chai CSS is designed to be the single source of truth for styling when you use it.

**No hover or focus states.**  
Pseudo-classes like `:hover` and `:focus` cannot be applied via `element.style`. If you need hover effects, handle them with JS event listeners or write a small `<style>` block for those specific cases.

**Dark mode requires a full reset.**  
Because inline styles are additive, toggling dark mode requires clearing `style.cssText` on all chai elements before re-scanning. The recommended pattern is shown in the dark mode section above.

---

## License

MIT - free to use, modify, and share. ☕