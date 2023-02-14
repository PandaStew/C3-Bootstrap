const form = document.getElementById("personalForm");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const password2 = document.getElementById("password2").value;
  
  if (!name || !email || !password || !password2) {
    alert("All fields are required");
    return false;
  }
  
  if (password !== password2) {
    alert("Passwords do not match");
    return false;
  }
  
  alert("Form submitted successfully");
});