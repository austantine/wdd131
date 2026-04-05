// Insert current year dynamically
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Insert last modified date dynamically
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

// Simple JavaScript to demonstrate external file usage
document.addEventListener("DOMContentLoaded", () => {
    console.log("Website Planning Document loaded successfully!");

    // Example: Highlight wireframe boxes when clicked
    const wireframes = document.querySelectorAll(".wireframe");
    wireframes.forEach(box => {
        box.addEventListener("click", () => {
            box.style.backgroundColor = "#e6f7ff"; // Light blue highlight
        });
    });
});