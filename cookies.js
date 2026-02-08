document.addEventListener("DOMContentLoaded", function() {
  const cookieBar = document.querySelector(".cookie-bar");
  const acceptBtn = document.getElementById("accept-all");
  const essentialBtn = document.getElementById("essential-only");
  const declineBtn = document.getElementById("decline");

  // Show banner if no choice saved
  if (!localStorage.getItem("cookieConsent")) {
    cookieBar.classList.add("show"); // slide up
  }

  function hideBanner(choice) {
    cookieBar.classList.remove("show"); // slide down
    localStorage.setItem("cookieConsent", choice);
    console.log("Visitor choice:", choice);
  }

  acceptBtn.addEventListener("click", () => hideBanner("all"));
  essentialBtn.addEventListener("click", () => hideBanner("essential"));
  declineBtn.addEventListener("click", () => hideBanner("decline"));
});
