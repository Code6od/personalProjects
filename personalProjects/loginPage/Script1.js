function validateForm(event) {
    event.preventDefault(); // Prevent form submission for now

    // Get username and password values
    var username = document.getElementById("u-name").value;
    var password = document.getElementById("p-wrd").value;

    // Simple form validation
    if (username.trim() === "" || password.trim() === "") {
        alert("Please enter both username and password.");
    } else {
        alert("Login successful!"); // You can replace this with your actual login logic
    }
}
