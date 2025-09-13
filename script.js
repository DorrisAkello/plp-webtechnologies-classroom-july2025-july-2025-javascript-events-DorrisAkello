// script.js

// 1. Interactive Feature: Dynamic Greeting
const nameInput = document.getElementById("nameInput");
const greetingMessage = document.getElementById("greetingMessage");

nameInput.addEventListener("input", () => {
  const name = nameInput.value.trim();
  greetingMessage.textContent = name 
    ? `👋 Hello, ${name}! Welcome to the page.` 
    : "";
});

// 2. Interactive Feature: Toggle Extra Info
const toggleBtn = document.getElementById("toggleBtn");
const extraInfo = document.getElementById("extraInfo");

toggleBtn.addEventListener("click", () => {
  extraInfo.classList.toggle("hidden");
  toggleBtn.textContent = extraInfo.classList.contains("hidden")
    ? "Show More Info"
    : "Hide Info";
});

// 3. Custom Form Validation
const signupForm = document.getElementById("signupForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const formFeedback = document.getElementById("formFeedback");

// Regex for email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

signupForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop form submission
  let valid = true;

  // Validate email
  if (!emailRegex.test(email.value.trim())) {
    emailError.textContent = "Please enter a valid email address.";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Validate password (min 6 chars, at least 1 number)
  if (password.value.length < 6 || !/\d/.test(password.value)) {
    passwordError.textContent = "Password must be at least 6 characters and contain a number.";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  // Show feedback
  if (valid) {
    formFeedback.textContent = "✅ Form submitted successfully!";
    formFeedback.style.color = "green";
    signupForm.reset();
  } else {
    formFeedback.textContent = "❌ Please fix the errors above.";
    formFeedback.style.color = "red";
  }
});
