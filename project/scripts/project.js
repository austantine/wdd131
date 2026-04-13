// ========================================
// Footer Dynamic Year & Last Modified
// ========================================
document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("currentyear");
    const lastMod = document.getElementById("lastModified");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
    if (lastMod) lastMod.textContent = "Last Modified: " + document.lastModified;
});

// ========================================
// Membership Page Features
// ========================================
document.addEventListener("DOMContentLoaded", () => {
    const membershipMain = document.getElementById("membershipPage");
    if (membershipMain) {
        // Loan eligibility calculator
        const loanInput = document.createElement("input");
        loanInput.type = "number";
        loanInput.placeholder = "Enter loan amount (₦)";
        loanInput.style.margin = "1rem 0";
        membershipMain.appendChild(loanInput);

        const button = document.createElement("button");
        button.className = "btn";
        button.textContent = "Check Loan Eligibility";
        membershipMain.appendChild(button);

        const resultMsg = document.createElement("p");
        resultMsg.style.marginTop = "1rem";
        membershipMain.appendChild(resultMsg);

        const member = { name: "Ada", savings: 5000, loan: 2000 };

        function checkLoanEligibility(amount) {
            return amount <= member.savings * 2
                ? `✅ Eligible for loan of ₦${amount}`
                : "❌ Loan request exceeds eligibility.";
        }

        button.addEventListener("click", () => {
            const amount = parseInt(loanInput.value, 10);
            if (!isNaN(amount)) {
                resultMsg.textContent = checkLoanEligibility(amount);
            } else {
                resultMsg.textContent = "Please enter a valid loan amount.";
            }
        });
    }
});
// ========================================
// News Page Features
// ========================================
document.addEventListener("DOMContentLoaded", () => {
    const newsSection = document.getElementById("newsPage");
    if (newsSection) {
        const newsItems = [
            { title: "Financial Literacy Workshop", date: "2026-04-01", content: "Members learned budgeting and savings strategies." },
            { title: "Community Loan Program", date: "2026-03-15", content: "Small businesses received cooperative loans." }
        ];
        newsItems.forEach(item => {
            const article = document.createElement("article");
            article.className = "grid-item";
            article.innerHTML = `
                <h3>${item.title}</h3>
                <small>${item.date}</small>
                <p>${item.content}</p>
            `;
            newsSection.appendChild(article);
        });
    }
});

// ===============================================
// Gallery Page Features with Slideshow Navigation
// ===============================================
document.addEventListener("DOMContentLoaded", () => {
    const galleryMain = document.getElementById("galleryPage");
    if (galleryMain) {
        const galleryImages = document.querySelectorAll(".gallery img");
        if (!galleryImages.length) return;

        // Create lightbox container
        const lightbox = document.createElement("div");
        lightbox.id = "lightbox";
        document.body.appendChild(lightbox);

        // Add close, prev, next controls
        const closeBtn = document.createElement("span");
        closeBtn.className = "close";
        closeBtn.innerHTML = "&times;";
        const prevBtn = document.createElement("a");
        prevBtn.className = "prev";
        prevBtn.innerHTML = "&#10094;";
        const nextBtn = document.createElement("a");
        nextBtn.className = "next";
        nextBtn.innerHTML = "&#10095;";
        lightbox.appendChild(closeBtn);
        lightbox.appendChild(prevBtn);
        lightbox.appendChild(nextBtn);

        let currentIndex = -1, slideshowInterval;

        // Function to show image with caption
        function showImage(index) {
            if (index < 0 || index >= galleryImages.length) return;
            currentIndex = index;
            lightbox.classList.add("active");

            // Clear previous content except controls
            [...lightbox.querySelectorAll("img, .caption")].forEach(el => el.remove());

            const fullImg = document.createElement("img");
            fullImg.src = galleryImages[index].src;
            fullImg.alt = galleryImages[index].alt;
            fullImg.className = "lightbox-content";

            const caption = document.createElement("p");
            caption.className = "caption";
            caption.textContent = galleryImages[index].dataset.caption || galleryImages[index].alt;

            lightbox.insertBefore(fullImg, closeBtn);
            lightbox.insertBefore(caption, closeBtn);
        }

        // Slideshow functions
        function startSlideshow() {
            slideshowInterval = setInterval(() => {
                showImage((currentIndex + 1) % galleryImages.length);
            }, 4000);
        }
        function stopSlideshow() { clearInterval(slideshowInterval); }

        // Open lightbox on image click
        galleryImages.forEach((img, index) => {
            img.addEventListener("click", () => {
                showImage(index);
                startSlideshow();
            });
        });

        // Close lightbox
        closeBtn.addEventListener("click", () => {
            lightbox.classList.remove("active");
            stopSlideshow();
        });

        // Prev/Next navigation
        prevBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            showImage((currentIndex - 1 + galleryImages.length) % galleryImages.length);
            stopSlideshow();
        });
        nextBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            showImage((currentIndex + 1) % galleryImages.length);
            stopSlideshow();
        });

        // Close when clicking outside content
        lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove("active");
                stopSlideshow();
            }
        });

        // Keyboard navigation
        document.addEventListener("keydown", e => {
            if (!lightbox.classList.contains("active")) return;
            if (e.key === "ArrowRight") {
                showImage((currentIndex + 1) % galleryImages.length);
                stopSlideshow();
            } else if (e.key === "ArrowLeft") {
                showImage((currentIndex - 1 + galleryImages.length) % galleryImages.length);
                stopSlideshow();
            } else if (e.key === "Escape") {
                lightbox.classList.remove("active");
                stopSlideshow();
            }
        });
    }
});
// ========================================
// Contact Page Features
// ========================================
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", e => {
            e.preventDefault();
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();
            let valid = true;

            if (!name) {
                document.getElementById("nameError").textContent = "Name is required.";
                document.getElementById("nameError").style.display = "block";
                valid = false;
            } else document.getElementById("nameError").style.display = "none";

            if (!email.includes("@")) {
                document.getElementById("emailError").textContent = "Enter a valid email.";
                document.getElementById("emailError").style.display = "block";
                valid = false;
            } else document.getElementById("emailError").style.display = "none";

            if (!message) {
                document.getElementById("messageError").textContent = "Message cannot be empty.";
                document.getElementById("messageError").style.display = "block";
                valid = false;
            } else document.getElementById("messageError").style.display = "none";

            if (!valid) return;

            localStorage.setItem("contactName", name);
            localStorage.setItem("contactEmail", email);
            localStorage.setItem("contactMessage", message);

            const successMsg = document.createElement("p");
            successMsg.textContent = `Thank you, ${name}! Your message has been received.`;
            successMsg.style.color = "green";
            form.appendChild(successMsg);

            setTimeout(() => successMsg.remove(), 4000);
            form.reset();
        });

        // Show last message on page load
        const lastMessage = localStorage.getItem("contactMessage");
        if (lastMessage) {
            const info = document.createElement("p");
            info.textContent = `Last message you sent: "${lastMessage}"`;
            form.parentNode.insertBefore(info, form);
        }
    }
});

// ========================================
// Dark Mode Toggle
// ========================================
document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.createElement("button");
    toggleBtn.className = "btn";
    toggleBtn.textContent = "Toggle Dark Mode";
    document.body.appendChild(toggleBtn);

    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});

// ========================================
// Scroll-to-Top Button
// ========================================
document.addEventListener("DOMContentLoaded", () => {
    const scrollBtn = document.createElement("button");
    scrollBtn.textContent = "⬆ Top";
    scrollBtn.className = "btn";
    scrollBtn.style.position = "fixed";
    scrollBtn.style.bottom = "20px";
    scrollBtn.style.right = "20px";
    scrollBtn.style.display = "none";
    document.body.appendChild(scrollBtn);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    });

    scrollBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
// ===============================================
// Membership form submission and email simulation
// ===============================================
document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("currentyear");
    const lastMod = document.getElementById("lastModified");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
    if (lastMod) lastMod.textContent = "Last Modified: " + document.lastModified;

    const form = document.getElementById("membershipForm");
    const successMessage = document.getElementById("successMessage");
    const emailSimulation = document.getElementById("emailSimulation");

    form.addEventListener("submit", e => {
        e.preventDefault();

        const fullname = document.getElementById("fullname").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const address = document.getElementById("address").value.trim();
        const idType = document.getElementById("idType").value;
        const occupation = document.getElementById("occupation").value.trim();

        let valid = true;

        if (!fullname) {
            document.getElementById("nameError").textContent = "Full name is required.";
            document.getElementById("nameError").style.display = "block";
            valid = false;
        } else document.getElementById("nameError").style.display = "none";

        if (!email.includes("@")) {
            document.getElementById("emailError").textContent = "Enter a valid email.";
            document.getElementById("emailError").style.display = "block";
            valid = false;
        } else document.getElementById("emailError").style.display = "none";

        if (!phone) {
            document.getElementById("phoneError").textContent = "Phone number is required.";
            document.getElementById("phoneError").style.display = "block";
            valid = false;
        } else document.getElementById("phoneError").style.display = "none";

        if (!address) {
            document.getElementById("addressError").textContent = "Address is required.";
            document.getElementById("addressError").style.display = "block";
            valid = false;
        } else document.getElementById("addressError").style.display = "none";

        if (!idType) {
            document.getElementById("idError").textContent = "Select an ID type.";
            document.getElementById("idError").style.display = "block";
            valid = false;
        } else document.getElementById("idError").style.display = "none";

        if (!valid) return;

        // Save to localStorage
        localStorage.setItem("memberName", fullname);
        localStorage.setItem("memberEmail", email);
        localStorage.setItem("memberPhone", phone);
        localStorage.setItem("memberAddress", address);
        localStorage.setItem("memberID", idType);
        localStorage.setItem("memberOccupation", occupation);

        successMessage.textContent = `Thank you, ${fullname}! Your membership application has been submitted.`;

        // Simulate confirmation email
        emailSimulation.style.display = "block";
        emailSimulation.innerHTML = `
        <h3>📧 Confirmation Email Prepared</h3>
        <p>Dear ${fullname},</p>
        <p>Your application details have been prepared to send to the cooperative email: <strong>fagcoopmpcs@gmail.com</strong>.</p>
        <p>Please check your email client to complete the process.</p>
      `;

        // Open mail client with pre-filled details
        const mailtoLink = `mailto:fagcoopmpcs@gmail.com?subject=New Membership Application&body=
      Name: ${fullname}%0D%0A
      Email: ${email}%0D%0A
      Phone: ${phone}%0D%0A
      Address: ${address}%0D%0A
      ID Type: ${idType}%0D%0A
      Occupation: ${occupation}`;
        window.location.href = mailtoLink;

        form.reset();
    });
});

// ===============================================
// News Page Dynamic Content and Dark Mode Toggle
// ===============================================

document.addEventListener("DOMContentLoaded", () => {

    // News items array
    const newsItems = [
        {
            title: "Celebration of life Event for Late Executive Member",
            content: "There will be a celebration of life event to honor the late executive member who passed away recently. The event will be held at the cooperative hall on April 15th, 2026.",
            date: "Posted: April 11, 2026"
        },
        {
            title: "Sent-off Ceremony for Old Staff",
            content: "An old staff member was honored for their years of service with a heartfelt send-off ceremony attended by colleagues and community members.",
            date: "Posted: April 9, 2026"
        },
        {
            title: "Annual General Meeting Scheduled",
            content: "The cooperative will hold its AGM on May 20th, 2026. Members are encouraged to attend and participate in decision-making.",
            date: "Posted: April 10, 2026"
        },
        {
            title: "New Savings Plan Launched",
            content: "A flexible savings plan with higher interest rates has been introduced to support members’ financial growth.",
            date: "Posted: April 5, 2026"
        },
        {
            title: "Community Outreach Program",
            content: "Volunteers joined hands to provide financial literacy training to local schools in Benin City.",
            date: "Posted: March 28, 2026"
        }
    ];

    // Inject news items into the page
    const newsGrid = document.getElementById("newsGrid");
    if (newsGrid) {
        newsItems.forEach(item => {
            const card = document.createElement("article");
            card.className = "news-card";
            card.innerHTML = `
          <h2>${item.title}</h2>
          <p>${item.content}</p>
          <span class="date">${item.date}</span>
        `;
            newsGrid.appendChild(card);
        });
    }

    // Dark mode toggle
    const toggleBtn = document.getElementById("darkModeToggle");
    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
        });
    }
});

// ===============================================
// Responsive Navigation Menu Toggle
// ===============================================
// Wait until the DOM (page structure) is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {

    // Select the hamburger button (nav-toggle) and the navigation links container (nav-links)
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");

    // Check that both elements exist before attaching event listeners
    if (navToggle && navLinks) {

        // Add a click event listener to the hamburger button
        navToggle.addEventListener("click", () => {

            // Toggle the "show" class on nav-links
            // This will either display or hide the menu depending on its current state
            navLinks.classList.toggle("show");
        });
    }
});