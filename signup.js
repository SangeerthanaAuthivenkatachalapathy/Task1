// Add event listener to the signup form
document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission
  
    // Get form values
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    // Basic validation
    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }
  
    // Simulate signup process (replace with actual backend logic)
    alert(`Welcome, ${username}! Your account has been created.`);
    // Redirect or perform additional actions
    window.location.href = "welcome.html"; // Example redirect
  });
  