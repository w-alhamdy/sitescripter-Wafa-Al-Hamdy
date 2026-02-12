const banner = document.getElementById("cookieBanner");

const acceptBtn = document.getElementById("acceptAll");
const essentialBtn = document.getElementById("essentialOnly");
const declineBtn = document.getElementById("declineAll");

function setConsent(type) {
  localStorage.setItem("cookieConsent", type);
  banner.style.display = "none";

  // Example: enable tracking only if accepted
  if (type === "all") {
    enableAnalytics();
  }
}

function enableAnalytics() {
  console.log("Analytics enabled");
  // Add Google Analytics or tracking scripts here
}

// Show banner only if no choice yet
if (!localStorage.getItem("cookieConsent")) {
  banner.style.display = "flex";
} else {
  banner.style.display = "none";
}

acceptBtn.onclick = () => setConsent("all");
essentialBtn.onclick = () => setConsent("essential");
declineBtn.onclick = () => setConsent("none");

