const statusEl = document.getElementById("status");

// Export logic
document.getElementById("exportBtn").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  if (!tab || !tab.url || !tab.url.includes("youtube.com/feed/channels")) {
    statusEl.innerText = "Open youtube.com/feed/channels first!";
    return;
  }

  statusEl.innerText = "Exporting...";

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      const items = document.querySelectorAll("ytd-channel-renderer, ytd-grid-channel-renderer");
      const list = [];
      items.forEach(el => {
        const link = el.querySelector("a#main-link, a#channel-info");
        const title = el.querySelector("#channel-title, #title");
        if (link && title) {
          const href = link.getAttribute("href") || "";
          const fullUrl = href.startsWith("http") ? href : "https://www.youtube.com" + href;
          list.push({ title: title.innerText.trim(), url: fullUrl });
        }
      });
      return list;
    }
  }, (results) => {
    const channels = results && results[0] ? results[0].result : [];
    if (!channels || channels.length === 0) {
      statusEl.innerText = "0 channels found. Scroll down first!";
      return;
    }

    let csv = "Channel Title,Channel Url\n";
    channels.forEach(c => {
      csv += `"${c.title.replace(/"/g, '""')}","${c.url}"\n`;
    });

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const reader = new FileReader();
    reader.onload = () => {
      chrome.downloads.download({
        url: reader.result,
        filename: "youtube_subscriptions.csv",
        saveAs: false
      });
      statusEl.innerText = `Exported ${channels.length} channels!`;
    };
    reader.readAsDataURL(blob);
  });
});

// Opens the full table interface in a new browser tab
document.getElementById("openDashboardBtn").addEventListener("click", () => {
  chrome.tabs.create({ url: chrome.runtime.getURL("table.html") });
});