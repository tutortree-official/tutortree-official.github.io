// Function to insert the site-wide header
function loadHeader() {
    document.getElementById("header").innerHTML = `
        <h1 class="title">TutorTree</h1>
        <p class="title">Expert tutoring for high school students</p>
        <div id="navbar">
            <nav>
                <a href="index.html">Home</a>
                <a href="about.html">About</a>
                <a href="services.html">Tutoring Services</a>
                <a href="testimonials.html">Testimonials</a>
                <a href="contact.html">Contact</a>
            </nav>
        </div>
    `;
}

// Function to insert the site-wide footer
function loadFooter() {
    document.getElementById("footer").innerHTML = `
        <p>&copy; 2025 TutorTree. All rights reserved.</p>
    `;
}

// Call functions when the page loads
document.addEventListener("DOMContentLoaded", function() {
    loadHeader();
    loadFooter();
});