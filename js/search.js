"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.querySelector(".header__search-btn-link"); // Замени класс на свой!
  const searchForm = document.querySelector(".header__search-form");
  const closeBtn = document.querySelector(".header__cloze--search-input");

  // 1. Открываем форму по клику на кнопку
  openBtn.addEventListener("click", (e) => {
    e.preventDefault();
    searchForm.classList.add("active");
  });

  // 2. Закрываем форму по клику на крестик
  closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    searchForm.classList.remove("active");
  });

  // 3. Закрываем форму при клике ВНЕ её области
  document.addEventListener("click", (e) => {
    // Если клик НЕ по форме, НЕ по кнопке открытия и форма открыта
    if (
      !searchForm.contains(e.target) &&
      e.target !== openBtn &&
      searchForm.classList.contains("active")
    ) {
      searchForm.classList.remove("active");
    }
  });
});
