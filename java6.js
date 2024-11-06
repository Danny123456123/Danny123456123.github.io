document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents page refresh on form submit

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        interest: document.querySelector('input[name="interest"]:checked')?.value,
        preferredContact: Array.from(document.querySelectorAll('input[name="preferredContact"]:checked')).map(input => input.value),
        message: document.getElementById("message").value
    };

    // Store form data in local storage
    localStorage.setItem("contactFormData", JSON.stringify(formData));
    alert("Form submitted successfully!");

    // Clear form inputs
    document.getElementById("contactForm").reset();
});

