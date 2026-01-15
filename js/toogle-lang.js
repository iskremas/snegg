"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const langButton = document.querySelectorAll(".header__lang-btn");

  // 1. Добавляем всем кнопкам no-active
  langButton.forEach(function (btn) {
    btn.classList.add("no-active");
  });

  // 2. Первой кнопке убираем no-active (делаем активной)
  if (langButton[0]) {
    langButton[0].classList.remove("no-active");
  }

  // 3. Обработчик клика
  langButton.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      // Убираем no-active у всех
      langButton.forEach(function (b) {
        b.classList.add("no-active");
      });
      // Добавляем no-active только НЕ выбранной кнопке
      langButton.forEach(function (b) {
        if (b !== btn) {
          b.classList.add("no-active");
        } else {
          b.classList.remove("no-active");
        }
      });
    });
  });
});
