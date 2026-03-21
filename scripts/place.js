document.addEventListener("DOMContentLoaded", () => {
    // Insert current year dynamically
    const yearEl = document.getElementById("currentyear");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Insert last modified date dynamically
    const lastModEl = document.getElementById("lastModified");
    if (lastModEl) lastModEl.textContent = "Last Modified: " + document.lastModified;

    // Wind chill formula (°F and mph)
    function calculateWindChill(tempF, speedMph) {
        return (
            35.74 +
            0.6215 * tempF -
            35.75 * Math.pow(speedMph, 0.16) +
            0.4275 * tempF * Math.pow(speedMph, 0.16)
        ).toFixed(1);
    }

    // Heat index formula (°F and % humidity)
    function calculateHeatIndex(tempF, humidity) {
        return (
            -42.379 +
            2.04901523 * tempF +
            10.14333127 * humidity -
            0.22475541 * tempF * humidity -
            0.00683783 * tempF * tempF -
            0.05481717 * humidity * humidity +
            0.00122874 * tempF * tempF * humidity +
            0.00085282 * tempF * humidity * humidity -
            0.00000199 * tempF * tempF * humidity * humidity
        ).toFixed(1);
    }

    // Get values directly from HTML by ID
    const temperature = parseFloat(document.getElementById("temperature").textContent.match(/\d+/)[0]);
    const windSpeed = parseFloat(document.getElementById("windSpeed").textContent.match(/\d+/)[0]);
    const humidity = parseFloat(document.getElementById("humidity").textContent.match(/\d+/)[0]);

    let feelsLike = temperature + " °F"; // default
    let icon = ""; // will hold ☀️ or ❄️

    const feelsLikeSpan = document.getElementById("feelsLike");

    if (temperature <= 50 && windSpeed > 3) {
        feelsLike = calculateWindChill(temperature, windSpeed) + " °F (Wind Chill)";
        icon = "❄️";
        if (feelsLikeSpan) feelsLikeSpan.style.color = "#007bff"; // blue for cold
    } else if (temperature >= 80 && humidity >= 40) {
        feelsLike = calculateHeatIndex(temperature, humidity) + " °F (Heat Index)";
        icon = "☀️";
        if (feelsLikeSpan) feelsLikeSpan.style.color = "#d9534f"; // red for hot
    }

    if (feelsLikeSpan) {
        feelsLikeSpan.textContent = icon + " " + feelsLike;
        feelsLikeSpan.style.fontWeight = "bold";
        feelsLikeSpan.style.fontSize = "1.2em";
        feelsLikeSpan.style.padding = "2px 6px";
        feelsLikeSpan.style.borderRadius = "4px";
        feelsLikeSpan.style.backgroundColor = "#f9e2e2";
    }
});

// Gallery auto-scroll functionality
document.addEventListener("DOMContentLoaded", () => {
    const galleryGrid = document.querySelector(".gallery-grid");
    if (!galleryGrid) return;

    function autoScroll() {
        galleryGrid.scrollBy({ left: 1, behavior: "auto" });
        if (galleryGrid.scrollLeft >= galleryGrid.scrollWidth - galleryGrid.clientWidth) {
            galleryGrid.scrollLeft = 0;
        }
    }

    setInterval(autoScroll, 20);

    // Optional: add left/right scroll buttons
    const scrollLeftBtn = document.createElement("button");
    scrollLeftBtn.textContent = "◀";
    const scrollRightBtn = document.createElement("button");
    scrollRightBtn.textContent = "▶";

    scrollLeftBtn.style.margin = "0 5px";
    scrollRightBtn.style.margin = "0 5px";

    const gallerySection = document.querySelector(".gallery");
    if (gallerySection) {
        gallerySection.insertBefore(scrollLeftBtn, galleryGrid);
        gallerySection.appendChild(scrollRightBtn);

        scrollLeftBtn.addEventListener("click", () => {
            galleryGrid.scrollBy({ left: -200, behavior: "smooth" });
        });

        scrollRightBtn.addEventListener("click", () => {
            galleryGrid.scrollBy({ left: 200, behavior: "smooth" });
        });
    }
});