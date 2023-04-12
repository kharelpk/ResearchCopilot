const textContent = document.body.innerText;
chrome.runtime.sendMessage({ action: "textContent", content: textContent });
