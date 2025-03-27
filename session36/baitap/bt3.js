function backgroundColor(color) {
    console.log("Changing background color to:");
    document.getElementById("backgroundContainer").style.background = color;
    localStorage.setItem("backgroundColor", color);
}

// Load the saved background color when the page loads
document.addEventListener("DOMContentLoaded", function () {
    const savedColor = localStorage.getItem("backgroundColor");
    if (savedColor) {
        document.getElementById("backgroundContainer").style.background = savedColor;
    }   
});
