document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.querySelector('input[type="password"]').value;

    if (password === "1234") {
        // correct password
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("username", username);

        alert("Login successful!");
        window.location.href = "index.html";
    } else {
        // wrong password
        alert("Login failed! Incorrect password.");
    }
});
