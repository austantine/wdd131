document.addEventListener("DOMContentLoaded", () => {
    // Increment review counter in localStorage
    let count = localStorage.getItem("reviewCount") || 0;
    count++;
    localStorage.setItem("reviewCount", count);
    document.getElementById("reviewCounter").textContent =
        `Total Reviews Submitted: ${count}`;

    // Parse query string values from URL
    const params = new URLSearchParams(window.location.search);

    const productName = params.get("productName");
    const rating = params.get("rating");
    const installDate = params.get("installDate");
    const features = params.getAll("features");
    const reviewText = params.get("reviewText");
    const userName = params.get("userName");

    // Build display HTML
    let output = "<h2>Submitted Details</h2>";
    output += `<p><strong>Product:</strong> ${productName || "N/A"}</p>`;
    output += `<p><strong>Rating:</strong> ${rating ? "★".repeat(rating) : "N/A"}</p>`;
    output += `<p><strong>Date of Installation:</strong> ${installDate || "N/A"}</p>`;
    output += `<p><strong>Useful Features:</strong> ${features.length ? features.join(", ") : "None selected"}</p>`;
    output += `<p><strong>Written Review:</strong> ${reviewText || "No review provided"}</p>`;
    output += `<p><strong>User Name:</strong> ${userName || "Anonymous"}</p>`;

    document.getElementById("submittedData").innerHTML = output;

    // Footer dynamic year and last modified
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

    // Back to Form button functionality
    document.getElementById("backButton").addEventListener("click", () => {
        window.location.href = "form.html";
    });
});