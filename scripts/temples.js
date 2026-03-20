// Insert current year dynamically
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Insert last modified date dynamically
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menuButton");
    const navigation = document.querySelector(".navigation");

    menuButton.addEventListener("click", () => {
        navigation.classList.toggle("show");

        // Toggle button symbol between ☰ and X
        if (navigation.classList.contains("show")) {
            menuButton.textContent = "✖"; // X symbol
        } else {
            menuButton.textContent = "☰"; // hamburger symbol
        }
    });
});