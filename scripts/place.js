// Insert current year dynamically
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Insert last modified date dynamically
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

document.getElementById('learnMoreBtn').addEventListener('click', () => {
    const intro = document.querySelector('.intro p');
    intro.textContent = "Here is more dynamic content added with JavaScript!";
});
// Static values (match your displayed weather section content)
const temperature = 30; // °F
const windSpeed = 10;   // mph

// Wind chill formula (US National Weather Service, °F and mph)
function calculateWindChill(tempF, speedMph) {
    return (
        35.74 +
        0.6215 * tempF -
        35.75 * Math.pow(speedMph, 0.16) +
        0.4275 * tempF * Math.pow(speedMph, 0.16)
    ).toFixed(1); // round to 1 decimal place
}

// Check viability conditions before calculating
let windChillValue = "N/A";
if (temperature <= 50 && windSpeed > 3) {
    windChillValue = calculateWindChill(temperature, windSpeed);
}

// Display result when page loads
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("windChill").textContent = windChillValue;
});

document.addEventListener("DOMContentLoaded", () => {
    const galleryGrid = document.querySelector(".gallery-grid");

    // Continuous auto-scroll
    function autoScroll() {
        galleryGrid.scrollBy({ left: 1, behavior: "auto" }); // move 1px each tick
        // If we've reached the end, reset to start
        if (galleryGrid.scrollLeft >= galleryGrid.scrollWidth - galleryGrid.clientWidth) {
            galleryGrid.scrollLeft = 0;
        }
    }

    // Run autoScroll every 20ms (adjust speed here)
    setInterval(autoScroll, 20);

    // Optional: add left/right scroll buttons
    const scrollLeftBtn = document.createElement("button");
    scrollLeftBtn.textContent = "◀";
    const scrollRightBtn = document.createElement("button");
    scrollRightBtn.textContent = "▶";

    scrollLeftBtn.style.margin = "0 5px";
    scrollRightBtn.style.margin = "0 5px";

    const gallerySection = document.querySelector(".gallery");
    gallerySection.insertBefore(scrollLeftBtn, galleryGrid);
    gallerySection.appendChild(scrollRightBtn);

    scrollLeftBtn.addEventListener("click", () => {
        galleryGrid.scrollBy({ left: -200, behavior: "smooth" });
    });

    scrollRightBtn.addEventListener("click", () => {
        galleryGrid.scrollBy({ left: 200, behavior: "smooth" });
    });
});