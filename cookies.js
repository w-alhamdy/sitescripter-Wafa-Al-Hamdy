// Check if user already closed the banner
if (!localStorage.getItem("cookieConsent")) {
  document.querySelector(".cookie-bar").classList.remove("hide");
} else {
  document.querySelector(".cookie-bar").classList.add("hide");
}

// When user clicks the "x"
document.querySelector(".close-cb").addEventListener("click", function() {
  document.querySelector(".cookie-bar").classList.add("hide");
  localStorage.setItem("cookieConsent", "true"); // remember user choice
});

.cookie-bar {
  transform: translateY(-100%);
  animation: slideDown 0.5s forwards;
}

@keyframes slideDown {
  from { transform: translateY(-100%); }
  to { transform: translateY(0); }
}
document.addEventListener("DOMContentLoaded", function() {
  const cookieBar = document.querySelector(".cookie-bar");
  const acceptBtn = document.getElementById("accept-all");
  const essentialBtn = document.getElementById("essential-only");
  const declineBtn = document.getElementById("decline");

  // Show banner if no choice saved
  if (!localStorage.getItem("cookieConsent")) {
    cookieBar.style.display = "flex";
  } else {
    cookieBar.style.display = "none";
  }

  // Accept all cookies
  acceptBtn.addEventListener("click", function() {
    localStorage.setItem("cookieConsent", "all");
    cookieBar.style.display = "none";
    console.log("Visitor accepted all cookies");
    // Here you can load analytics scripts if needed
  });

  // Essential only
  essentialBtn.addEventListener("click", function() {
    localStorage.setItem("cookieConsent", "essential");
    cookieBar.style.display = "none";
    console.log("Visitor accepted essential only");
    // Block analytics scripts
  });

  // Decline all
  declineBtn.addEventListener("click", function() {
    localStorage.setItem("cookieConsent", "decline");
    cookieBar.style.display = "none";
    console.log("Visitor declined all cookies");
    // Block analytics scripts
  });
});



