# 📺 YouTube Sub Transfer

> A simple, lightweight Chrome Extension to backup your YouTube subscriptions to CSV and restore them safely through an interactive visual checklist.

![Author: yape2077](https://img.shields.io/badge/Author-yape2077-black?style=flat&logo=github)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![Manifest-V3](https://img.shields.io/badge/Chrome-Manifest--V3-success)
![Terms Safe](https://img.shields.io/badge/YouTube%20Terms-100%25%20Safe-brightgreen)

Developed by **[@yape2077](https://github.com/yape2077)**.

---

## ⚡ Why Use This?

Transferring subscriptions between YouTube accounts is annoying because YouTube has no "Import" button. Most online tools either:
- Use auto-click bots that get your account temporarily banned or rate-limited.
- Require full access to your Google account login.

**YouTube Sub Transfer** fixes this by:
1. Exporting your subscribed channels directly into a standard `.csv` file.
2. Generating a clean, interactive dashboard in a new tab.
3. Letting you click to subscribe manually with visual tracking, keeping your account **100% safe**.

---

## ✨ Features

- **🛡️ 100% Terms-Compliant:** No auto-clicking scripts. You click the buttons yourself, so YouTube never flags your account for bot behavior.
- **🔒 Private & Local:** Runs entirely inside your browser. No external servers, no tracking, and no logins required.
- **📋 Interactive Checklist Dashboard:**
  - 🔴 **Red Button (`Subscribe ↗`):** Shows channels you haven't opened yet.
  - 🟢 **Green Button (`✓ Opened`):** Automatically changes color and strikes through the channel name once clicked.
  - 📊 **Live Counter:** Tracks your completed subscriptions in real time.
- **📂 Universal CSV Support:** Works with exports made by this extension as well as official [Google Takeout](https://takeout.google.com) subscription files.

---

## 🛠️ Installation

1. **Download the project:**
   - Click the green **Code** button at the top of this repository and select **Download ZIP**.
   - Extract the `.zip` file on your computer.

2. **Add to Google Chrome:**
   - Open Chrome and navigate to: `chrome://extensions/`
   - Turn **ON** the **Developer mode** toggle in the top-right corner.
   - Click the **Load unpacked** button in the top-left corner.
   - Select the extracted folder containing the extension files.

3. **Pin it:**
   - Click the **puzzle piece icon** (Extensions) in your browser toolbar.
   - Click the **Pin** icon next to **YouTube Sub Transfer** for quick access.

---

## 🚀 How to Use

### 1. Export Subscriptions (Old Account)
1. Sign in to your **old** YouTube account in Chrome.
2. Go to: [youtube.com/feed/channels](https://www.youtube.com/feed/channels).
3. Scroll all the way down until your entire list of channels has loaded on screen.
4. Click the extension icon in your toolbar and press **Export to CSV**.
5. Save the downloaded `youtube_subscriptions.csv` file.

### 2. Import Subscriptions (New Account)
1. Sign in to your **new** YouTube account in Chrome.
2. Click the extension icon and select **Open Sub Table** (this opens your checklist dashboard in a new tab).
3. Click **Choose your CSV file** and select the `.csv` file you exported earlier.
4. Go down the list:
   - Click the red **Subscribe ↗** button to open the channel in a new tab.
   - Click **Subscribe** on the YouTube page.
   - The button in your checklist will turn green (**✓ Opened**), strike through the channel name, and update your progress counter.

---

## ❓ Frequently Asked Questions (FAQ)

#### Will this get my YouTube account banned or rate-limited?
**No.** Automated bots that click hundreds of times in seconds trigger YouTube's rate limits. Because this extension lets you open and click each subscription yourself, YouTube treats it as normal human browsing.

#### Does this send my data anywhere?
**No.** All file parsing and exports happen strictly inside your local browser memory. Nothing is transmitted over the internet.

---

## 🔒 Permissions Used

| Permission | Reason |
| :--- | :--- |
| `activeTab` & `scripting` | Reads channel titles and URLs only when you are on `youtube.com/feed/channels`. |
| `downloads` | Saves the `.csv` backup file to your computer. |
| `tabs` | Opens the checklist dashboard in a clean tab. |

---

## 👤 Author

Created and maintained by **[@yape2077](https://github.com/yape2077)**.

---

## 📄 License

This project is open-source and licensed under the [MIT License](LICENSE).
