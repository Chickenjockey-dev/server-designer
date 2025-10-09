const owner = "chjk-studios";
const repo = "server-designer";

fetch(`https://api.github.com/repos/${owner}/${repo}/commits/main`)
  .then(res => res.json())
  .then(data => {
    const sha = data.sha.slice(0, 7);
    const url = data.html_url;
    const el = document.getElementById("commit");
    el.textContent = sha;
    el.href = url;
  })
  .catch(() => {
    document.getElementById("commit").textContent = "unknown";
  });