$(document).ready(function () {
    // Находим элементы 
    const $overlay = $('.modal__overlay');
    const $closeBtn = $('.close-btn');
    const $openBtn = $('.header__content--button');

    // Открытие модалки
    $openBtn.on('click', function (e) {
        e.preventDefault();
        // Блокируем скролл страницы
        $('body').css('overflow', 'hidden');
        // Показываем модалку (добавляем класс visible)
        $overlay.addClass('visible');
    });
    
    // Закрытие модалки
    function closeModal() { 
        // Разблокируем скролл
        $('body').css('overflow', '');
        // Скрываем модалку (убираем класс visible)
        $overlay.removeClass('visible');
    };

    // Закрытие по крестику
    $closeBtn.on("click", closeModal);

    // Закрытие по клику на фон (оверлей)
    $overlay.on('click', function (e) {
        // Если кликнули именно на overlay (фон), а не на его содержимое
        if ($(e.target).is($overlay)) { 
            closeModal();
        };
    });

    // ESC
    $(document).keydown(function (e) { 
        if (e.key === 'Escape' && $overlay.hasClass('visible')) { 
            closeModal();
        };
    });

});