// Function to insert the navigation bar
function loadNavbar() {
    document.getElementById("navbar").innerHTML = `
        <nav>
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="services.html">Tutoring Services</a>
            <a href="testimonials.html">Testimonials</a>
            <a href="contact.html">Contact</a>
        </nav>
    `;
}

// Function to set the page title dynamically
function setPageTitle(title) {
    document.title = title + " | TutorTree";
    document.getElementById("page-title").textContent = title;
}

// Call functions when the page loads
document.addEventListener("DOMContentLoaded", function() {
    loadNavbar();
});
