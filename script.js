// Function to insert the site-wide header
function loadHeader() {
    document.getElementById("header").innerHTML = `
        <h1 class="title">TutorTree - Expert Tutoring for High School Students</h1>
        <div id="navbar">
            <button class="menu-toggle" aria-label="Toggle navigation">&#9776;</button> <nav class="nav-links"> <a href="index.html">Home</a>
                <a href="about.html">About</a>
                <a href="services.html">Tutoring Services</a>
                <a href="testimonials.html">Testimonials</a>
                <a href="contact.html">Contact</a>
            </nav>
        </div>
    `;
    // Add event listener after the header content is loaded
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Optional: Close menu when a link is clicked (useful for single-page apps or smooth UX)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) { // Only close on mobile
                    navLinks.classList.remove('active');
                }
            });
        });
    }
}

// Function to insert the site-wide footer
function loadFooter() {
    document.getElementById("footer").innerHTML = `
        <p>&copy; 2025 TutorTree. All rights reserved.</p>
    `;
}

// Function to insert the 'how it works' section
function loadAbout() {
    document.getElementById("about-section").innerHTML = `
        <section class="about-grid-section">
            <div class="grid-area purple-section">
                <img src="../assets/tutortree-prep-logo-square.png" alt="TutorTree Logo" class="logo-on-purple">
            </div>
            <div class="grid-area green-section">
                    <a href="#" class="cta-button">Learn More</a>
            </div>
            <div class="grid-area yellow-section">

                <section class="about-section-polished">
                    <div class="about-content-wrapper">
                        <h2>About TutorTree</h2>

                        <div class="about-key-points">
                            <div class="key-point-item">
                                <img src="../assets/bookmark_star_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="Excellence Icon" class="about-icon">
                                <p>Dedicated to helping high school students <strong>excel in their studies</strong>.</p>
                            </div>
                            <div class="key-point-item">
                                <img src="../assets/double_arrow_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="Confidence Icon" class="about-icon">
                                <p><strong>Confidence and consistency</strong> for a strong foundation.</p>
                            </div>
                            <div class="key-point-item">
                                <img src="../assets/school_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="Subjects Icon" class="about-icon">
                                <p>Support for <strong>Math, Science, and other subjects</strong>.</p>
                            </div>
                        </div>

                        <div class="cta-button-wrapper"> <img src="../assets/phone_enabled_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="Phone Icon" class="about-icon cta-icon"> <a href="contact.html" class="cta-button-about">Enquire Now</a>
                        </div>
                    </div>
                </section>

            </div>
            <div class="grid-area blue-section">
                <div class="white-box">
                    <h2>Founded by Lucien</h2>
                    <img src="../assets/IMG20250215165523small.jpeg" alt="Photo of Lucien" class="small-luci">
                    <p>With a background in <strong>maths, science and English</strong> - and a commitment to <strong>student success</strong>, Lucien curates a boutique and <strong>personalised tutoring experience</strong> tailored to his students.</p>
                    <p>10+ years experience with students aged 6-18, including students with <strong>special needs</strong> such as <strong>ADHD, ASD and profound giftedness</strong>.</p>
                    <p><strong>Home-schooled</strong> 4 individual students at primary and high school levels.</p>
                </div>
            </div>
        </section>
    `;
}

// Function to insert the 'how it works' section
function loadHow() {
    document.getElementById("how-it-works").innerHTML = `
        <section class="how-it-works-grid-container">
            <div class="grid-area blue-section">
                <div class="white-box">
                    <h2>How It Works</h2>
                    <p>TutorTree offers a simple process to get started.</p> </div>
                </div>
            <div class="grid-area yellow-section">
                <a href="#" class="cta-button">Learn More</a>
                </div>
            <div class="grid-area green-section">
                <div class="white-box">
                    <h3>1. Book a consultation</h3>
                    <p>Discuss your needs with our team.</p>
                    <h3>2. Receive a personalised learning plan</h3>
                    <p>We find the perfect tutor for you.</p>
                    <h3>3. Start improving your grades!</h3>
                    <p>Experience personalized tutoring sessions.</p> </div>
                </div>
            <div class="grid-area purple-section">
                <img src="../assets/tutortree-prep-logo-square.png" alt="TutorTree Logo" class="logo-on-purple">
            </div>
        </section>
    `;
}

// Function to insert the 'how it works' section
function loadReviews() {
    document.getElementById("reviews").innerHTML = `
        <section class="google-reviews-section">
            <div class="reviews-content-wrapper">
                <h2>What Our Students Say</h2>
                <p class="section-description">Hear directly from the high school students and parents we've helped succeed.</p>

                <div class="google-reviews-widget-container">
                    <!-- Elfsight Google Reviews | Untitled Google Reviews -->
                    <script src="https://static.elfsight.com/platform/platform.js" async>
                    </script>
                    <div class="elfsight-app-d57eb0c5-bee5-4ab6-a33b-10a8ec45b671" data-elfsight-app-lazy>
                    </div>
                </div>

                <a href="https://g.co/kgs/gcJGd1n" target="_blank" class="cta-button reviews-button">Read All Reviews on Google</a>
            </div>
        </section>
    `;
}

// Call functions when the page loads
document.addEventListener("DOMContentLoaded", function() {
    loadHeader();
    loadFooter();
    loadHow();
    loadAbout();
    loadReviews();
});