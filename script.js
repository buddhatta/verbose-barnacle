document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("message").textContent = "Thank you for contacting us!";
  this.reset();
});