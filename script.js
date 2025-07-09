scriptfunction downloadReel() {
  const link = document.getElementById('videoLink').value;
  if (!link) {
    document.getElementById('status').innerText = "❗ Please paste a video link first.";
    return;
  }
  document.getElementById('status').innerText = "🎬 Downloading Reel (short version)...";
  // You’ll add real API here later
}

function downloadFull() {
  const link = document.getElementById('videoLink').value;
  if (!link) {
    document.getElementById('status').innerText = "❗ Please paste a video link first.";
    return;
  }
  document.getElementById('status').innerText = "📽️ Downloading Full Video...";
  // You’ll add real API here later
}
