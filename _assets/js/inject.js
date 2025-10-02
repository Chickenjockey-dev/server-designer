// injector.js

/**
 * Injects HTML content from a file into a specified div.
 * @param {string} filePath - Path to the HTML file to load.
 * @param {string} divId - ID of the div where content will be injected.
 */
function injectHTML(filePath, divId) {
  fetch(filePath)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to load ${filePath}: ${response.status} ${response.statusText}`);
      }
      return response.text();
    })
    .then(html => {
      const container = document.getElementById(divId);
      if (!container) {
        throw new Error(`No element found with id "${divId}"`);
      }
      container.innerHTML = html;
    })
    .catch(error => {
      console.error("Error injecting HTML:", error);
    });
}

/**
 * Clears all content injected into a specified div.
 * @param {string} divId - ID of the div to clear.
 */
function clearInjectedHTML(divId) {
  const container = document.getElementById(divId);
  if (!container) {
    console.error(`No element found with id "${divId}"`);
    return;
  }
  container.innerHTML = "";
}

// Example usage (uncomment to test):
// injectHTML("content.html", "targetDiv");
// clearInjectedHTML("targetDiv");
