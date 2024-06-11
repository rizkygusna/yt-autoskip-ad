function clickButton(selector) {
  const button = document.querySelector(selector);
  if (!button) return;
  button.click();
  console.log("Skip button clicked");
}

function main() {
  clickButton(".ytp-skip-ad-button");
  clickButton(".ytp-ad-skip-button-modern");
}

setInterval(main, 500);
