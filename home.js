// ======================
// Run JS After Page Load
// ======================
document.addEventListener("DOMContentLoaded", function () {

  // ======================
  // Portfolio Tab Switching
  // ======================
  const buttons = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".tab-content");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {

      // Remove active state
      buttons.forEach(b => b.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));

      // Add active state
      btn.classList.add("active");
      document.getElementById(btn.dataset.target).classList.add("active");

    });
  });


  // ======================
  // Contact Form Validation
  // ======================
  const contactForm = document.querySelector(".contact-form");

  if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();

      let isValid = true;
      let errorMessage = "";

      // Name validation
      if (name === "") {
        isValid = false;
        errorMessage += "Please enter your name.\n";
        highlightField("name", true);
      } else {
        highlightField("name", false);
      }

      // Email validation
      if (email === "") {
        isValid = false;
        errorMessage += "Please enter your email address.\n";
        highlightField("email", true);
      } 
      else if (!isValidEmail(email)) {
        isValid = false;
        errorMessage += "Please enter a valid email address.\n";
        highlightField("email", true);
      } 
      else {
        highlightField("email", false);
      }

      // Message validation
      if (message === "") {
        isValid = false;
        errorMessage += "Please enter your message.\n";
        highlightField("message", true);
      } 
      else {
        highlightField("message", false);
      }

      if (isValid) {
        simulateFormSubmission(name, email, subject, message);
      } 
      else {
        alert("Please correct the following errors:\n\n" + errorMessage);
      }

    });


    // ======================
    // Real Time Validation
    // ======================
    const formFields = document.querySelectorAll(".form-control");

    formFields.forEach(field => {

      field.addEventListener("blur", function () {
        validateField(this);
      });

      field.addEventListener("input", function () {
        if (this.classList.contains("error")) {
          this.classList.remove("error");
        }
      });

    });

  }


  // ======================
  // Social Icon Hover
  // ======================
  const socialIcons = document.querySelectorAll(".social-icon");

  socialIcons.forEach(icon => {

    icon.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-3px)";
    });

    icon.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });

  });

});


// ======================
// Helper Functions
// ======================

// Email validation
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


// Validate individual field
function validateField(field) {

  const value = field.value.trim();

  switch (field.id) {

    case "name":
      if (value === "") {
        highlightField(field.id, true);
        return false;
      }
      break;

    case "email":
      if (value === "" || !isValidEmail(value)) {
        highlightField(field.id, true);
        return false;
      }
      break;

    case "message":
      if (value === "") {
        highlightField(field.id, true);
        return false;
      }
      break;

  }

  highlightField(field.id, false);
  return true;

}


// Highlight field
function highlightField(fieldId, isError) {

  const field = document.getElementById(fieldId);

  if (isError) {

    field.classList.add("error");
    field.style.borderColor = "#e74c3c";
    field.style.boxShadow = "0 0 0 2px rgba(231, 76, 60, 0.2)";

  } 
  else {

    field.classList.remove("error");
    field.style.borderColor = "#ddd";
    field.style.boxShadow = "none";

  }

}


// Simulate form submission
function simulateFormSubmission(name, email, subject, message) {

  const submitBtn = document.querySelector(".submit-btn");
  const originalText = submitBtn.innerHTML;

  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  submitBtn.disabled = true;

  setTimeout(() => {

    alert(`Thank you, ${name}! Your message has been sent successfully.`);

    document.querySelector(".contact-form").reset();

    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;

  }, 2000);

}


// ======================
// Dynamic CSS
// ======================
const style = document.createElement("style");

style.textContent = `
.form-control.error {
  border-color:#e74c3c !important;
  box-shadow:0 0 0 2px rgba(231,76,60,0.2) !important;
}

.submit-btn:disabled {
  opacity:0.7;
  cursor:not-allowed;
  transform:none !important;
}

.fa-spin {
  animation: fa-spin 1s infinite linear;
}

@keyframes fa-spin {
  0% {transform:rotate(0deg);}
  100% {transform:rotate(360deg);}
}
`;

document.head.appendChild(style);