document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the entered username and password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Check if the login credentials are correct (Dummy check)
    if (username === "student" && password === "password") {
      // Redirect to another web page (replace "target-page.html" with your desired page)
      window.location.href = "target-page.html";
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });
  