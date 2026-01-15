document.addEventListener("DOMContentLoaded", () => {
  const burgerBtn = document.querySelector(".header__burger");
  const dropdownMenu = document.querySelector(".header__dropdown-nenu--block");
  const dropdownMenuClose = document.querySelector(
    ".header__nav-button--close"
  );

  burgerBtn.addEventListener("click", function (e) {
    e.preventDefault();
    dropdownMenu.classList.add("active");
    document.body.style.overflow = "hidden"; 
  });

  dropdownMenuClose.addEventListener("click", function (e) {
    e.preventDefault();
    dropdownMenu.classList.remove("active");
    document.body.style.overflow = ""; 
  });

  document.addEventListener("click", function (e) {
    if (
      !e.target.closet(".header__dropdown-nenu--block") &&
      !e.target.closet(".header__burger") &&
      dropdownMenu.classList.contains("active")
    ) {
      e.preventDefault();
      dropdownMenu.classList.remove("active");
    }
  });
});
