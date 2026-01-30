const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const closeBtn = document.getElementById('closeBtn');
const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    hamburger.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    hamburger.classList.remove('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
        mobileMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});


// about section 

// Auto-download CV functionality with feedback
document.querySelector('.download-cv').addEventListener('click', function (e) {
    // Show brief feedback (optional)
    const originalText = this.textContent;
    this.textContent = 'Downloading...';
    this.style.background = '#28a745';

    setTimeout(() => {
        this.textContent = originalText;
        this.style.background = '';
    }, 1500);
});


// tool section 

// Add "Tools" to your navbar links for smooth scrolling
        // Just add this to your existing navbar:
        // <li><a href="#tools" class="nav-link">Tools</a></li>
        
        // Existing smooth scroll script will automatically work with #tools



        // -------------------------- 

       document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const params = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
        to_email: "rohitshahi540@gmail.com"
    };

    emailjs
        .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", params)
        .then(function () {
            document.getElementById('successMsg').style.display = 'block';
            document.getElementById('errorMsg').style.display = 'none';
            document.getElementById('contactForm').reset();
        })
        .catch(function () {
            document.getElementById('errorMsg').style.display = 'block';
        });
});


        // ------------------------------- 

          // Newsletter form functionality
        document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('.newsletter-input').value;
            alert('Thank you for subscribing! 🎉\nYou will receive updates on new projects and analytics tips.');
            this.reset();
        });

        // Smooth scroll for footer links (add to your existing script)
        document.querySelectorAll('.footer a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    const offsetTop = targetSection.getBoundingClientRect().top + window.pageYOffset - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });