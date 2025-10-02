const input = document.getElementById("smalltext-inputText");
const output = document.getElementById("smalltext-outputText");

input.addEventListener("input", () => {
  const text = input.value;
  output.value = toSmallText(text);
});

function toSmallText(str) {
  const map = {
    a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ",
    h: "ʜ", i: "ɪ", j: "ᴊ", k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ",
    o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ѕ", t: "ᴛ", u: "ᴜ",
    v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
  };

  return str
    .split("")
    .map(char => {
      const lower = char.toLowerCase();
      return map[lower] || char;
    })
    .join("");
}


const copyBtn = document.getElementById('smalltextcopybutton');
const textarea = document.getElementById('smalltext-outputText');

copyBtn.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(textarea.value);
        showToast('test')
    } catch (err) {
        showToast('Failed to copy: ', err);
    }
});
