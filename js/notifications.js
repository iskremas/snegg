"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".notifications-toggle");
    
    toggleButton.addEventListener("click", function () {
        this.classList.toggle("active");
    });
});
