// Toggle project descriptions
function toggleDescription(id) {
  const desc = document.getElementById(id);
  if (desc.style.display === "none" || desc.style.display === "") {
    desc.style.display = "block";
  } else {
    desc.style.display = "none";
  }
}

// Contact form validation
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return false;
  }

  // Simple email pattern check
  const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  alert("Thank you for your message!");
  return true;
}
