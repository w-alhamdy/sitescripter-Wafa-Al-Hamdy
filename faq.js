
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".faq-question");

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const answer = btn.nextElementSibling;
      const isOpen = btn.classList.contains("active");

      document.querySelectorAll(".faq-question").forEach(function (b) {
        b.classList.remove("active");
        b.setAttribute("aria-expanded", "false");
        b.nextElementSibling.style.maxHeight = null;
      });

      if (!isOpen) {
        btn.classList.add("active");
        btn.setAttribute("aria-expanded", "true");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
});

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
