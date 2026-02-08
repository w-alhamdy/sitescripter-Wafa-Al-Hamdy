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
