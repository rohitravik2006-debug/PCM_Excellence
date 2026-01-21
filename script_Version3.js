document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // get values
    const name = document.getElementById("studentName").value.trim();
    const phone = document.getElementById("studentPhone").value.trim();
    const email = document.getElementById("studentEmail").value.trim();
    const message = document.getElementById("studentMessage").value.trim();

    // error elements
    const nameError = document.getElementById("nameError");
    const phoneError = document.getElementById("phoneError");
    const emailError = document.getElementById("emailError");
    const successMessage = document.getElementById("successMessage");

    // clear old messages
    nameError.textContent = "";
    phoneError.textContent = "";
    emailError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;

    /* ---------- NAME ---------- */
    if (name === "") {
        nameError.textContent = "Name is required.";
        isValid = false;
    }

    /* ---------- PHONE ---------- */
    if (phone === "") {
        phoneError.textContent = "Phone number is required.";
        isValid = false;
    } else if (!/^[0-9]+$/.test(phone)) {
        phoneError.textContent = "Phone number should contain only digits.";
        isValid = false;
    } else if (phone.length !== 10) {
        phoneError.textContent = "Phone number must be exactly 10 digits.";
        isValid = false;
    }

    /* ---------- EMAIL (YOUR EXACT REQUIREMENT) ---------- */
    if (email === "") {
        emailError.textContent = "Email is required.";
        isValid = false;
    } 
    // @ missing
    else if (!email.includes("@")) {
        emailError.textContent = "Please include an @ in the email address.";
        isValid = false;
    }
    // @ present but domain invalid (no .com / .in etc)
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (!isValid) return;

    /* ---------- localStorage ---------- */
    localStorage.setItem("contact_name", name);
    localStorage.setItem("contact_email", email);

    successMessage.textContent =
        "Thank you! Your message has been submitted successfully.";

    this.reset();
});
