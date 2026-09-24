let totalChannels = 0;
let doneChannels = 0;

document.getElementById("csvFileInput").addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    const lines = event.target.result.split(/\r?\n/);
    const tbody = document.getElementById("tableBody");
    tbody.innerHTML = "";
    
    totalChannels = 0;
    doneChannels = 0;

    lines.forEach((line) => {
      // Matches standard channel and @handle URLs
      const urlMatch = line.match(/https?:\/\/(www\.)?youtube\.com\/(channel\/|@)[^\s",]+/);
      if (urlMatch) {
        totalChannels++;
        const url = urlMatch[0];
        const parts = line.split(",");
        const title = parts[0].replace(/"/g, "").trim() || "YouTube Channel";

        const row = document.createElement("tr");

        // Index number column
        const indexTd = document.createElement("td");
        indexTd.innerText = totalChannels;
        indexTd.style.color = "#888";

        // Channel Name column
        const nameTd = document.createElement("td");
        nameTd.className = "channel-name";
        nameTd.innerText = title;

        // Button column
        const actionTd = document.createElement("td");
        actionTd.style.textAlign = "center";

        const actionBtn = document.createElement("a");
        actionBtn.href = url;
        actionBtn.target = "_blank";
        actionBtn.className = "btn-action btn-unsub";
        actionBtn.innerText = "Subscribe ↗";

        // Click handler: opens channel and turns green
        actionBtn.addEventListener("click", () => {
          if (!actionBtn.classList.contains("btn-done")) {
            actionBtn.classList.remove("btn-unsub");
            actionBtn.classList.add("btn-done");
            actionBtn.innerText = "✓ Opened";
            row.classList.add("is-done");

            doneChannels++;
            updateStats();
          }
        });

        actionTd.appendChild(actionBtn);

        row.appendChild(indexTd);
        row.appendChild(nameTd);
        row.appendChild(actionTd);
        tbody.appendChild(row);
      }
    });

    updateStats();
    document.getElementById("subTable").style.display = "table";
  };
  reader.readAsText(file);
});

function updateStats() {
  const statsEl = document.getElementById("stats");
  statsEl.innerText = `Progress: ${doneChannels} / ${totalChannels} Done`;
}