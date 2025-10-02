document.addEventListener('click', async (e) => {
  const el = e.target.closest('.colorbox');
  if (!el) return;

  let bg = el.style.backgroundColor || getComputedStyle(el).backgroundColor;

  // rgb/rgba to hex
  function rgbToHex(rgb) {
    const result = rgb.match(/\d+/g).map(Number).slice(0, 3); // r,g,b
    return (
      "#" +
      result
        .map((x) => x.toString(16).padStart(2, "0"))
        .join("")
        .toUpperCase()
    );
  }

  let hex = bg.startsWith("rgb") ? rgbToHex(bg) : bg; // if its hexcode keep it that 

  try {
    await navigator.clipboard.writeText(hex);
    showToast("Copied:", hex);
  } catch (err) {
    showToast("Copy failed", err);
    console.error("Copy failed", err);
  }
});
