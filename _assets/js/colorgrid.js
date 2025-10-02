document.addEventListener('click', async (e) => {
  const el = e.target.closest('.colorbox');
  if (!el) return;
  let bg = el.style.backgroundColor || getComputedStyle(el).backgroundColor;
  const text = `style="background-color: ${bg};"`;
  try {
    await navigator.clipboard.writeText(text);
    showToast('Copied:', text);
  } catch (err) {
    showToast('Copy failed', err);
    console.error('Copy failed', err);
  }
});