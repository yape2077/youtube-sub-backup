# YouTube Subscription Transfer

A lightweight, privacy-focused Chrome Extension (Manifest V3) to backup your YouTube subscriptions to a CSV file and manually re-subscribe through an interactive visual checklist.

---

## Features

- **Safe & Compliant:** Does not use auto-clicking bots. You click to subscribe manually, meaning **0% risk** of YouTube rate-limit bans or Terms of Service violations.
- **Export to CSV:** Scrapes your active subscriptions directly from your browser screen into a clean `.csv` file.
- **Interactive Checklist:**
  - Red buttons for pending channels.
  - Green buttons for opened/completed channels.
  - Real-time progress counter.
- **Compatible with Google Takeout:** Works with both the built-in export CSV and official Google Takeout subscription files.

---

## File Structure

```text
yt-sub-transfer/
├── manifest.json   # Extension configuration
├── popup.html      # Quick menu popup
├── popup.js        # Export logic & dashboard launcher
├── table.html      # Interactive checklist page
├── table.js        # CSV parsing & click tracking
└── README.md