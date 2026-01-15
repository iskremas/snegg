"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const backToTopBtn = document.getElementById("back-top");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("active");
    }
    else {
      backToTopBtn.classList.remove("active");
    }
  });

  backToTopBtn.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  });
});