
// Add an event listener to the form's submit event
form.addEventListener("submit", handleSubmit);

// Get a reference to the form and the status paragraph
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

// Handle the form submission event
async function handleSubmit(event) {
    event.preventDefault(); // Stop the page from refreshing
    var data = new FormData(event.target);

    try {
        const response = await fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            status.innerHTML = "Thanks! Your message has been sent successfully.";
           // form.reset(); // <--- THIS LINE CLEARS THE FORM FIELDS

getElementById('email').value = '';
getElementById('message').value ='';

        } else {
            // ... error handling code ...
            status.innerHTML = "Oops! There was a problem sending your message.";
        }
    } catch (error) {
        status.innerHTML = "An error occurred. Please try again later.";
    }
}

class MyNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="topnav">
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="showcase.html">Show-case</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </nav>
        `;
    }
}
// This defines the custom HTML tag <my-navbar>
customElements.define('my-navbar', MyNavbar);

const menuHTML = `
<nav class="topnav">
  <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="services.html">Services</a></li>
    <li><a href="showcase.html">Show-case</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
</nav>
`;

const footerHTML = `
<footer class="footer">
    <div class="container footer-content">
        <div class="footer-cta">
            <h3>Ready to grow?</h3>
            <a href="contact.html" class="btn">Get a Quote</a>
        </div>
        <div class="footer-links">
            <p>© 2026 Your Business Name</p>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
        </div>
    </div>
</footer>
`;

document.body.insertAdjacentHTML('afterbegin', menuHTML);
document.body.insertAdjacentHTML('beforeend', footerHTML);

<script>
document.addEventListener("DOMContentLoaded", function() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(function(item) {
    const button = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    button.addEventListener("click", function() {
      // Check if this answer is already open
      const isOpen = answer.style.maxHeight && answer.style.maxHeight !== "0px";

      // Close all answers
      faqItems.forEach(function(i) {
        i.querySelector(".faq-answer").style.maxHeight = "0";
      });

      // Open this answer if it was closed
      if (!isOpen) {
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
});
</script>







