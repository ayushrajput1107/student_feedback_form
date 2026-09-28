const form = document.getElementById("feedbackForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    // Get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const course = document.getElementById("course").value;
    const semester = document.getElementById("semester").value;
    const subject = document.getElementById("subject").value.trim();
    const teaching = document.getElementById("teaching").value;
    const content = document.getElementById("content").value;
    const comments = document.getElementById("comments").value.trim();
    const anonymous = document.getElementById("anonymous").checked;

    // Get selected rating
    const ratingElement = document.querySelector(
        'input[name="rating"]:checked'
    );

    const rating = ratingElement ? ratingElement.value : "";

    // Clear previous errors
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";

    let isValid = true;

    // Name validation
    if (name.length < 2) {
        document.getElementById("nameError").textContent =
            "Please enter a valid name.";

        isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent =
            "Please enter a valid email address.";

        isValid = false;
    }

    // Check required fields
    if (
        !course ||
        !semester ||
        !subject ||
        !rating ||
        !teaching ||
        !content
    ) {
        alert("Please complete all required fields.");
        isValid = false;
    }

    // Stop if validation fails
    if (!isValid) {
        return;
    }

    // Create feedback object
    const feedback = {
        name: anonymous ? "Anonymous" : name,
        email: anonymous ? "Hidden" : email,
        course: course,
        semester: semester,
        subject: subject,
        rating: rating,
        teaching: teaching,
        content: content,
        comments: comments,
        anonymous: anonymous,
        submittedAt: new Date().toLocaleString()
    };

    // Save feedback to browser LocalStorage
    let feedbackList =
        JSON.parse(localStorage.getItem("studentFeedback")) || [];

    feedbackList.push(feedback);

    localStorage.setItem(
        "studentFeedback",
        JSON.stringify(feedbackList)
    );

    // Hide form
    form.style.display = "none";

    // Show success message
    successMessage.style.display = "block";

    // Log feedback for testing
    console.log("Feedback submitted:", feedback);
});


// Reset form

form.addEventListener("reset", function () {

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";

});


// Prevent spaces before name

document.getElementById("name").addEventListener("input", function () {

    this.value = this.value.replace(/^\s+/, "");

});


// Prevent spaces before subject

document.getElementById("subject").addEventListener("input", function () {

    this.value = this.value.replace(/^\s+/, "");

});
