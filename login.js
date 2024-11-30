// Add event listener to the form
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission
  
    // Get the input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Basic validation
    if (username === "" || password === "") {
      alert("Please fill in both fields.");
      return;
    }
  
    // Simulate login (replace with actual logic)
    if (username === "admin" && password === "1234") {
      alert("Login successful!");
      // Redirect or perform other actions
      window.location.href = "index.html"; // Example redirect
    } else {
      alert("Invalid username or password.");
    }
  });
  