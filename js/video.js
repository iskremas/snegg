"use strict"; // Строгий режим - предотвращает ошибки
document.addEventListener("DOMContentLoaded", () => {
  // 1. НАХОДИМ ЭЛЕМЕНТЫ НА СТРАНИЦЕ
  const video = document.querySelector(".motion__video--video video");
  const playBtn = document.querySelector(".motion__play--btn");

  // 2. ФУНКЦИЯ ДЛЯ ЗАКРЫТИЯ ПОЛНОЭКРАННОГО РЕЖИМА
  function closeFullscreen() {
    // Ищем полноэкранный контейнер
    const fullscreen = document.querySelector(".fullscreen-video");

    // Если его нет - выходим из функции
    if (!fullscreen) return;

    // Убираем класс 'active' - запускает анимацию закрытия
    fullscreen.classList.remove("active");

    // Ждем 400мс (пока анимация завершится) и удаляем элемент
    setTimeout(() => fullscreen.remove(), 400);

    // Убираем обработчик клавиши ESC
    document.removeEventListener("keydown", handleEscape);
  }

  // 3. ФУНКЦИЯ ДЛЯ КЛАВИШИ ESC
  function handleEscape(e) {
    // Если нажата клавиша Escape - закрываем полноэкранный режим
    if (e.key === "Escape") closeFullscreen();
  }

  // 4. ФУНКЦИЯ ДЛЯ ОТКРЫТИЯ ПОЛНОЭКРАННОГО РЕЖИМА
  function openFullscreen() {
    // Если уже есть открытое полноэкранное видео - выходим
    if (document.querySelector(".fullscreen-video")) return;

    // 4.1. СОЗДАЕМ КЛОН ВИДЕО
    const videoClone = video.cloneNode(true); // true = копируем всё содержимое
    videoClone.controls = true; // Показываем элементы управления
    videoClone.muted = false; // Включаем звук

    // 4.2. СОЗДАЕМ КОНТЕЙНЕР ДЛЯ ПОЛНОЭКРАННОГО ВИДЕО
    const fullscreen = document.createElement("div");
    fullscreen.className = "fullscreen-video"; // Добавляем класс для стилей

    // 4.3. СОЗДАЕМ КНОПКУ ЗАКРЫТИЯ
    const closeBtn = document.createElement("button");
    closeBtn.className = "close-fullscreen"; // Класс для стилей    
    closeBtn.onclick = closeFullscreen; // При клике - закрываем

    // 4.4. ДОБАВЛЯЕМ ВИДЕО И КНОПКУ В КОНТЕЙНЕР
    fullscreen.append(videoClone, closeBtn);

    // 4.5. ДОБАВЛЯЕМ КОНТЕЙНЕР НА СТРАНИЦУ
    document.body.appendChild(fullscreen);

    // 4.6. ЗАПУСКАЕМ АНИМАЦИЮ ОТКРЫТИЯ
    setTimeout(() => {
      // Добавляем класс 'active' - запускает анимацию открытия
      fullscreen.classList.add("active");

      // Пытаемся запустить видео автоматически
      videoClone.play().catch((e) => console.log("Автовоспроизведение:", e));
    }, 10); // Маленькая задержка для стабильности

    // 4.7. ДОБАВЛЯЕМ ОБРАБОТЧИКИ СОБЫТИЙ
    document.addEventListener("keydown", handleEscape); // ESC для закрытия

    // Закрытие по клику на затемненную область вокруг видео
    fullscreen.addEventListener("click", (e) => {
      if (e.target === fullscreen) {
        // Если кликнули именно по контейнеру
        closeFullscreen(); // а не по видео или кнопке
      }
    });
  }

  // 5. ДОБАВЛЯЕМ ОБРАБОТЧИКИ КЛИКА
  playBtn.addEventListener("click", openFullscreen); // Клик по кнопке play
  video.addEventListener("click", openFullscreen); // Клик по самому видео
});
