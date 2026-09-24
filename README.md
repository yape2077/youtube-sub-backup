# 📺 YouTube Sub Transfer

> A simple, lightweight Chrome Extension to backup your YouTube subscriptions to CSV and restore them safely through an interactive visual checklist.

![Author: yape2077](https://img.shields.io/badge/Author-yape2077-black?style=flat&logo=github)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![Manifest-V3](https://img.shields.io/badge/Chrome-Manifest--V3-success)
![No Bots](https://img.shields.io/badge/Automation-100%25%20Human%20Safe-orange)

Developed and shared by **[@yape2077](https://github.com/yape2077)**.

---

## 🚨 CRITICAL WARNING & LIABILITY DISCLAIMER

> ### ⚠️ READ BEFORE USE — PROCEED AT YOUR OWN RISK
>
> 1. **USE ENTIRELY AT YOUR OWN RISK:** This tool is an open-source personal project provided on an **"AS IS"** basis, solely for personal backup and educational utility.
> 2. **ZERO LIABILITY:** The author (**yape2077**) assumes **NO RESPONSIBILITY OR LIABILITY** for any actions you take, how you use this software, or any direct/indirect consequences to your accounts. This includes, but is not limited to: account restrictions, rate-limit cooldowns, temporary subscription blocks, channel strikes, or data loss.
> 3. **YOUR SOLE RESPONSIBILITY:** You are 100% responsible for your own browsing behavior and for ensuring your actions adhere to [YouTube's Terms of Service](https://www.youtube.com/t/terms).
> 4. **DO NOT INJECT BOTS OR AUTO-CLICKERS:** 
>    - This tool was deliberately engineered to require **manual human clicks** to prevent bot detection and rate limits.
>    - **DO NOT** edit, automate, or attach external scripts to auto-click links or bulk-subscribe. Automating actions directly violates YouTube's automated queries policy and risks account penalties.
>
> **BY DOWNLOADING, CLONING, OR USING THIS REPOSITORY, YOU EXPLICITLY AGREE TO ASSUME ALL RISKS AND HOLD THE AUTHOR HARMLESS.**

---

## ⚡ Why Use This?

Transferring subscriptions between YouTube accounts is tedious because YouTube provides no direct "Import" button. Most online alternatives either:
- Rely on automated scripts that spam requests and trigger YouTube's rate limits or bot flags.
- Ask for intrusive Google account logins and OAuth permissions.

**YouTube Sub Transfer** keeps things simple and safe:
1. Backs up your public channel links directly into a `.csv` file.
2. Creates an organized, visual checklist in a dedicated browser tab.
3. Lets you click and subscribe manually so your activity looks completely normal and organic.

---

## ✨ Features

- **🛡️ Human-Driven:** No auto-clicking or background scripts. You stay in full control of every click.
- **🔒 Private & Local:** Runs 100% locally in your browser. No analytics, tracking, or third-party servers.
- **📋 Visual Status Tracker:**
  - 🔴 **Red Button (`Subscribe ↗`):** Marks pending channels you have not visited yet.
  - 🟢 **Green Button (`✓ Opened`):** Switches color and strikes through the row immediately upon clicking.
  - 📊 **Live Counter:** Shows completed progress in real time (e.g., `Progress: 15 / 90 Done`).
- **📂 Universal CSV Support:** Reads exports produced by this extension as well as official [Google Takeout](https://takeout.google.com) subscription archives.

---

## 🛠️ Installation

1. **Download the code:**
   - Click the green **Code** button at the top of this GitHub repository and select **Download ZIP**.
   - Extract the `.zip` folder on your computer.

2. **Load into Google Chrome:**
   - Open Chrome and navigate to: `chrome://extensions/`
   - Turn **ON** the **Developer mode** toggle in the top-right corner.
   - Click the **Load unpacked** button in the top-left corner.
   - Select the extracted `yt-sub-transfer` folder.

3. **Pin the extension:**
   - Click the **Extensions** (puzzle piece) icon in your browser toolbar.
   - Click the **Pin** icon next to **YouTube Sub Transfer** for quick access.

---

## 🚀 How to Use

### Step 1: Export Subscriptions (Old Account)
1. Log into your **old** YouTube account in Chrome.
2. Go to: [youtube.com/feed/channels](https://www.youtube.com/feed/channels).
3. Scroll all the way to the bottom of the page until all channels load into view.
4. Click the extension toolbar icon and click **Export to CSV**.
5. Save the downloaded `youtube_subscriptions.csv` file.

### Step 2: Import Subscriptions (New Account)
1. Switch and log into your **new** YouTube account in Chrome.
2. Click the extension icon and select **Open Sub Table** (opens the checklist in a new browser tab).
3. Click **Choose your CSV file** and select the `.csv` file saved in Step 1.
4. Go through the checklist:
   - Click the red **Subscribe ↗** button to open the channel in a new tab.
   - Click **Subscribe** on the YouTube page.
   - The button in your table turns green (**✓ Opened**), strikes through the name, and updates your counter.

---

## 🔒 Permissions Used

| Permission | Purpose |
| :--- | :--- |
| `activeTab` & `scripting` | Reads channel titles and URLs only when you explicitly run the export on `youtube.com/feed/channels`. |
| `downloads` | Saves the generated `.csv` backup file to your computer. |
| `tabs` | Opens the full-page checklist dashboard. |

---

## 👤 Author

Created and maintained by **[@yape2077](https://github.com/yape2077)**.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) with express limitation of liability.
