// Product array provided
const products = [
    { id: "p1", name: "Laptop" },
    { id: "p2", name: "Smartphone" },
    { id: "p3", name: "Tablet" },
    { id: "p4", name: "Smartwatch" },
    { id: "p5", name: "Headphones" },
    { id: "p6", name: "Pointer" }
];

document.addEventListener("DOMContentLoaded", () => {
    // Populate product select options dynamically
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
    const defaultStarColor = "#004466";       // matches CSS default
    const selectedStarColor = "#ffcc00";   // gold when selected

    ratingRadios.forEach(radio => {
        radio.addEventListener("change", () => {
            const selectedValue = parseInt(radio.value);

            // Reset all labels to default gray
            document.querySelectorAll('fieldset label').forEach(label => {
                label.style.color = defaultStarColor;
            });

            // Highlight labels up to selected value
            for (let i = 1; i <= selectedValue; i++) {
                const starLabel = document.querySelector(`label[for="rating${i}"]`);
                if (starLabel) {
                    starLabel.style.color = selectedStarColor;
                }
            }
        });
    });
});