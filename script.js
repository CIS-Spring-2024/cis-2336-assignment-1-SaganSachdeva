// Get modal elements
var loginModal = document.getElementById("loginModal");
var registerModal = document.getElementById("registerModal");

// Get button elements that open the modals
var loginBtn = document.querySelector(".login-btn");
var registerBtn = document.querySelector(".register-btn");

// Get all close buttons within the modals
var closeButtons = document.querySelectorAll(".close");

// Open the login modal when the login button is clicked
loginBtn.onclick = function() {
  loginModal.style.display = "block";
}

// Open the registration modal when the register button is clicked
registerBtn.onclick = function() {
  registerModal.style.display = "block";
}

// Close the respective modals when the close buttons are clicked
closeButtons.forEach(function(btn) {
  btn.onclick = function() {
    loginModal.style.display = "none";
    registerModal.style.display = "none";
  }
});

// Close the modals if the user clicks outside the modal content
window.onclick = function(event) {
  if (event.target == loginModal || event.target == registerModal) {
    loginModal.style.display = "none";
    registerModal.style.display = "none";
  }
}
