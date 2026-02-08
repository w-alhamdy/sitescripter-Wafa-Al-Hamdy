

  // Accept all cookies
  acceptBtn.addEventListener("click", function() {
    localStorage.setItem("cookieConsent", "accept all");
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



