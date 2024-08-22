function main() {
  let nIntervId;

  function clickButton(selector) {
    const button = document.querySelector(selector);
    if (!button) return;
    setTimeout(() => {
      button.click();
      console.log("Skip button clicked");
    }, 5600);
  }

  clickButton(".ytp-skip-ad-button");
  clickButton(".ytp-ad-skip-button-modern");
}

main();
