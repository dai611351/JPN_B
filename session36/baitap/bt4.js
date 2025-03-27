
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".dark-mode-toggle");
    const modeIcon = document.getElementById("mode-icon");
    const body = document.body;

    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        modeIcon.src = "https://img.icons8.com/ios-filled/50/moon.png";
    }
    
    toggleButton.addEventListener("click", function () {
        if (body.classList.contains("dark-mode")) {
            body.classList.remove("dark-mode");
            localStorage.setItem("darkMode", "disabled");
            modeIcon.src = "https://img.icons8.com/ios-filled/50/sun.png";
        } else {
            body.classList.add("dark-mode");
            localStorage.setItem("darkMode", "enabled");
            modeIcon.src = "https://img.icons8.com/ios-filled/50/moon.png";
        }
    });
});
