// Product array provided
const products = [
    { id: "p1", name: "Laptop" },
    { id: "p2", name: "Smartphone" },
    { id: "p3", name: "Tablet" },
    { id: "p4", name: "Smartwatch" },
    { id: "p5", name: "Headphones" }
];

// Populate product select options dynamically
document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("productName");
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;          // value is product id
        option.textContent = product.name;  // display name
        productSelect.appendChild(option);
    });

    // Footer dynamic year and last modified
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

    // ⭐ Star rating enhancement
    const ratingRadios = document.querySelectorAll('input[name="rating"]');
    ratingRadios.forEach(radio => {
        radio.addEventListener("change", () => {
            const selectedValue = parseInt(radio.value);
            // Reset all stars to gray
            document.querySelectorAll('fieldset label span').forEach(span => {
                span.style.color = "#999";
            });
            // Highlight stars up to selected value
            for (let i = 1; i <= selectedValue; i++) {
                const starSpan = document.querySelector(`#rating${i} + span`);
                if (starSpan) {
                    starSpan.style.color = "#ffcc00"; // gold
                }
            }
        });
    });
});