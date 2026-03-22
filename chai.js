/**
 *  ☕ chai.js
 *  A warm little utility CSS library — no stylesheets, just vibes.
 *  Drop this script in your HTML and use chai- classes directly.
 */

(() => {

  // ─────────────────────────────────────────
  //  THE STYLE MAP  —  class name → css string
  // ─────────────────────────────────────────
  let styleMap = {

    // ── Page & Base ────────────────────────
    "chai-body":          "background-color: #fdf6ec; font-family: system-ui, sans-serif; margin: 0; padding: 0",
    "chai-container":     "max-width: 900px; margin: 0 auto; padding: 0 24px",
    "chai-section":       "padding: 72px 0",
    "chai-full-center":   "min-height: 100vh; display: flex; justify-content: center; align-items: center; flex-direction: column",
    "chai-w-full":        "width: 100%",
    "chai-w-half":        "width: 50%",
    "chai-h-screen":      "height: 100vh",

    // ── Flexbox ────────────────────────────
    "chai-flex":              "display: flex",
    "chai-inline-flex":       "display: inline-flex",
    "chai-flex-col":          "flex-direction: column",
    "chai-flex-row":          "flex-direction: row",
    "chai-flex-wrap":         "flex-wrap: wrap",
    "chai-justify-center":    "justify-content: center",
    "chai-justify-between":   "justify-content: space-between",
    "chai-justify-end":       "justify-content: flex-end",
    "chai-justify-start":     "justify-content: flex-start",
    "chai-items-center":      "align-items: center",
    "chai-items-start":       "align-items: flex-start",
    "chai-items-end":         "align-items: flex-end",
    "chai-flex-1":            "flex: 1",

    // ── Gap ────────────────────────────────
    "chai-gap-1":  "gap: 4px",
    "chai-gap-2":  "gap: 8px",
    "chai-gap-3":  "gap: 12px",
    "chai-gap-4":  "gap: 16px",
    "chai-gap-6":  "gap: 24px",
    "chai-gap-8":  "gap: 32px",

    // ── Padding ────────────────────────────
    "chai-p-1":   "padding: 4px",
    "chai-p-2":   "padding: 8px",
    "chai-p-3":   "padding: 12px",
    "chai-p-4":   "padding: 16px",
    "chai-p-5":   "padding: 20px",
    "chai-p-6":   "padding: 24px",
    "chai-p-8":   "padding: 32px",
    "chai-p-10":  "padding: 40px",
    "chai-px-3":  "padding-left: 12px; padding-right: 12px",
    "chai-px-4":  "padding-left: 16px; padding-right: 16px",
    "chai-px-6":  "padding-left: 24px; padding-right: 24px",
    "chai-py-2":  "padding-top: 8px; padding-bottom: 8px",
    "chai-py-3":  "padding-top: 12px; padding-bottom: 12px",
    "chai-py-4":  "padding-top: 16px; padding-bottom: 16px",
    "chai-py-6":  "padding-top: 24px; padding-bottom: 24px",

    // ── Margin ─────────────────────────────
    "chai-m-auto":  "margin: auto",
    "chai-mx-auto": "margin-left: auto; margin-right: auto",
    "chai-m-2":     "margin: 8px",
    "chai-m-4":     "margin: 16px",
    "chai-mb-1":    "margin-bottom: 4px",
    "chai-mb-2":    "margin-bottom: 8px",
    "chai-mb-3":    "margin-bottom: 12px",
    "chai-mb-4":    "margin-bottom: 16px",
    "chai-mb-6":    "margin-bottom: 24px",
    "chai-mb-8":    "margin-bottom: 32px",
    "chai-mt-2":    "margin-top: 8px",
    "chai-mt-4":    "margin-top: 16px",
    "chai-mt-6":    "margin-top: 24px",
    "chai-ml-2":    "margin-left: 8px",
    "chai-mr-2":    "margin-right: 8px",

    // ── Backgrounds ────────────────────────
    "chai-bg-cream":       "background-color: #fdf6ec",
    "chai-bg-warm":        "background-color: #f5e6d0",
    "chai-bg-brown":       "background-color: #7c4a1e",
    "chai-bg-dark-brown":  "background-color: #2c1a0e",
    "chai-bg-white":       "background-color: #ffffff",
    "chai-bg-light":       "background-color: #fefaf5",
    "chai-bg-muted":       "background-color: #f0e4d4",
    "chai-bg-transparent": "background-color: transparent",

    // ── Text Colors ────────────────────────
    "chai-text-white":   "color: #ffffff",
    "chai-text-brown":   "color: #7c4a1e",
    "chai-text-dark":    "color: #2c1a0e",
    "chai-text-muted":   "color: #a07850",
    "chai-text-light":   "color: #d4a574",
    "chai-text-cream":   "color: #fdf6ec",
    "chai-text-gray":    "color: #6b7280",
    "chai-text-danger":  "color: #dc2626",
    "chai-text-success": "color: #16a34a",

    // ── Typography ─────────────────────────
    "chai-text-xs":       "font-size: 11px; line-height: 1.4",
    "chai-text-sm":       "font-size: 13px; line-height: 1.5",
    "chai-text-base":     "font-size: 16px; line-height: 1.6",
    "chai-text-md":       "font-size: 18px; line-height: 1.6",
    "chai-text-lg":       "font-size: 24px; line-height: 1.4",
    "chai-text-xl":       "font-size: 36px; line-height: 1.2",
    "chai-text-2xl":      "font-size: 52px; line-height: 1.1",
    "chai-font-light":    "font-weight: 300",
    "chai-font-normal":   "font-weight: 400",
    "chai-font-medium":   "font-weight: 500",
    "chai-font-semibold": "font-weight: 600",
    "chai-font-bold":     "font-weight: 700",
    "chai-text-center":   "text-align: center",
    "chai-text-left":     "text-align: left",
    "chai-text-right":    "text-align: right",
    "chai-uppercase":     "text-transform: uppercase",
    "chai-capitalize":    "text-transform: capitalize",
    "chai-italic":        "font-style: italic",
    "chai-underline":     "text-decoration: underline",
    "chai-no-underline":  "text-decoration: none",
    "chai-tracking-wide": "letter-spacing: 0.08em",
    "chai-leading-tight": "line-height: 1.2",
    "chai-leading-loose": "line-height: 1.8",

    // ── Border & Radius ────────────────────
    "chai-rounded-xs":   "border-radius: 4px",
    "chai-rounded-sm":   "border-radius: 8px",
    "chai-rounded-md":   "border-radius: 12px",
    "chai-rounded-lg":   "border-radius: 20px",
    "chai-rounded-xl":   "border-radius: 28px",
    "chai-rounded-full": "border-radius: 999px",
    "chai-border":       "border: 1px solid #e8d5bc",
    "chai-border-2":     "border: 2px solid #e8d5bc",
    "chai-border-brown": "border: 1px solid #7c4a1e",
    "chai-border-none":  "border: none",
    "chai-border-b":     "border-bottom: 1px solid #e8d5bc",
    "chai-border-t":     "border-top: 1px solid #e8d5bc",

    // ── Shadows ────────────────────────────
    "chai-shadow-sm":   "box-shadow: 0 2px 8px rgba(124,74,30,0.08)",
    "chai-shadow":      "box-shadow: 0 4px 16px rgba(124,74,30,0.12)",
    "chai-shadow-lg":   "box-shadow: 0 8px 32px rgba(124,74,30,0.18)",
    "chai-shadow-none": "box-shadow: none",

    // ── Display & Position ─────────────────
    "chai-block":           "display: block",
    "chai-inline":          "display: inline",
    "chai-inline-block":    "display: inline-block",
    "chai-hidden":          "display: none",
    "chai-relative":        "position: relative",
    "chai-absolute":        "position: absolute",
    "chai-fixed":           "position: fixed",
    "chai-sticky":          "position: sticky; top: 0",
    "chai-overflow-hidden": "overflow: hidden",

    // ── Cursor & Selection ─────────────────
    "chai-cursor-pointer":     "cursor: pointer",
    "chai-cursor-default":     "cursor: default",
    "chai-cursor-not-allowed": "cursor: not-allowed",
    "chai-select-none":        "user-select: none",

    // ── Opacity & Z-index ──────────────────
    "chai-opacity-50":  "opacity: 0.5",
    "chai-opacity-75":  "opacity: 0.75",
    "chai-z-10":        "z-index: 10",
    "chai-z-50":        "z-index: 50",

    // ── Transitions ────────────────────────
    "chai-transition":      "transition: all 0.2s ease",
    "chai-transition-slow": "transition: all 0.4s ease",
    "chai-transition-fast": "transition: all 0.1s ease",

    // ── Pre-built Components ───────────────
    "chai-card":       "background: #ffffff; padding: 28px; border-radius: 16px; box-shadow: 0 4px 20px rgba(124,74,30,0.10); border: 1px solid #f0dfc8",
    "chai-card-warm":  "background: #fff8f0; padding: 28px; border-radius: 16px; border: 1px solid #e8d0b0",
    "chai-tag":        "background: #f5e6d0; color: #7c4a1e; padding: 4px 12px; border-radius: 999px; font-size: 13px; font-weight: 500; display: inline-block",
    "chai-badge":      "background: #7c4a1e; color: #fdf6ec; padding: 3px 10px; border-radius: 999px; font-size: 11px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; display: inline-block",
    "chai-badge-warm": "background: #f5e6d0; color: #7c4a1e; padding: 3px 10px; border-radius: 999px; font-size: 11px; font-weight: 700; display: inline-block",
    "chai-divider":    "height: 1px; background-color: #f0dfc8; border: none; margin: 16px 0",
    "chai-avatar":     "width: 48px; height: 48px; border-radius: 50%; object-fit: cover",
    "chai-avatar-lg":  "width: 80px; height: 80px; border-radius: 50%; object-fit: cover",
    "chai-code":       "background: #f5e6d0; color: #7c4a1e; padding: 2px 8px; border-radius: 6px; font-family: monospace; font-size: 13px",

    // ── Buttons ────────────────────────────
    "chai-btn":         "padding: 10px 22px; border-radius: 10px; border: none; cursor: pointer; font-size: 14px; font-weight: 600; display: inline-block; transition: all 0.2s ease",
    "chai-btn-primary": "background-color: #7c4a1e; color: #ffffff",
    "chai-btn-outline": "background-color: transparent; border: 2px solid #7c4a1e; color: #7c4a1e",
    "chai-btn-ghost":   "background-color: transparent; color: #7c4a1e; border: none",
    "chai-btn-sm":      "padding: 6px 14px; font-size: 12px; border-radius: 8px",
    "chai-btn-lg":      "padding: 14px 32px; font-size: 16px; border-radius: 12px",
    "chai-btn-danger":  "background-color: #dc2626; color: #ffffff",

    // ── Form Elements ──────────────────────
    "chai-input":    "padding: 10px 14px; border: 1px solid #e8d5bc; border-radius: 10px; font-size: 14px; outline: none; background: #fff8f0; color: #2c1a0e; width: 100%; box-sizing: border-box",
    "chai-textarea": "padding: 10px 14px; border: 1px solid #e8d5bc; border-radius: 10px; font-size: 14px; outline: none; background: #fff8f0; color: #2c1a0e; width: 100%; box-sizing: border-box; resize: vertical",
    "chai-label":    "font-size: 13px; font-weight: 600; color: #7c4a1e; display: block; margin-bottom: 6px",

    // ── Dark Mode ──────────────────────────
    "chai-dark-bg":    "background-color: #1a0f07",
    "chai-dark-card":  "background-color: #2c1a0e; border-color: #4a2e1a",
    "chai-dark-text":  "color: #fdf6ec",
    "chai-dark-muted": "color: #c8956a",

    // ── Misc ───────────────────────────────
    "chai-list-none": "list-style: none; padding: 0; margin: 0",
    "chai-truncate":  "white-space: nowrap; overflow: hidden; text-overflow: ellipsis",
  };

  // ─────────────────────────────────────────
  //  CORE ENGINE
  // ─────────────────────────────────────────

  function applyStyles(el) {
    const classes = Array.from(el.classList);
    let styles = "";

    classes.forEach(cls => {
      if (!cls.startsWith("chai-")) return;

      if (styleMap[cls]) {
        styles += styleMap[cls] + "; ";
      } else {
        console.warn(`☕ chai.js — unknown class: "${cls}"`);
      }
    });

    if (styles) el.style.cssText += styles;
  }

  function scan(root = document) {
    root.querySelectorAll('[class*="chai-"]').forEach(el => applyStyles(el));
  }

  // ─────────────────────────────────────────
  //  PUBLIC API
  // ─────────────────────────────────────────

  window.chai = {
    // Add your own custom classes at runtime
    extend(customMap) {
      Object.assign(styleMap, customMap);
      console.log(`☕ chai.js — ${Object.keys(customMap).length} custom class(es) added`);
    },

    // Re-scan DOM (useful after dynamic content)
    scan,

    // Apply styles to one element manually
    apply: applyStyles,

    // See all registered class names
    list() {
      return Object.keys(styleMap);
    },
  };

  // ─────────────────────────────────────────
  //  AUTO INIT
  // ─────────────────────────────────────────

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => scan());
  } else {
    scan();
  }

})();