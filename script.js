// InnovateX 2026 — vanilla JavaScript

// Live countdown: 14 November 2026, 9:00 AM IST
const festDate = new Date("2026-11-14T09:00:00+05:30").getTime();

function updateCountdown() {
  const now = Date.now();
  let difference = festDate - now;

  if (difference <= 0) {
    document.querySelector(".countdown").innerHTML =
      '<div style="min-width:100%;"><strong>LIVE NOW</strong><span>InnovateX 2026 has begun!</span></div>';
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  difference %= 1000 * 60 * 60 * 24;
  const hours = Math.floor(difference / (1000 * 60 * 60));
  difference %= 1000 * 60 * 60;
  const minutes = Math.floor(difference / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Mobile navigation
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("show"));
});

// Expandable event cards
document.querySelectorAll(".event-card").forEach(card => {
  const button = card.querySelector(".expand-btn");
  button.addEventListener("click", () => {
    card.classList.toggle("open");
  });
});

// Registration validation
const form = document.getElementById("registrationForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const eventChoice = document.getElementById("event");
  const success = document.getElementById("successMessage");

  document.querySelectorAll(".error").forEach(el => el.textContent = "");
  success.textContent = "";

  let valid = true;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name.value.trim() === "") {
    document.getElementById("nameError").textContent = "Please enter your name.";
    valid = false;
  }

  if (email.value.trim() === "") {
    document.getElementById("emailError").textContent = "Please enter your email.";
    valid = false;
  } else if (!emailPattern.test(email.value.trim())) {
    document.getElementById("emailError").textContent = "Please enter a valid email.";
    valid = false;
  }

  if (eventChoice.value === "") {
    document.getElementById("eventError").textContent = "Please select an event.";
    valid = false;
  }

  if (!valid) return;

  success.textContent = `You're registered for ${eventChoice.value}! See you at InnovateX 2026.`;
  form.reset();
});
