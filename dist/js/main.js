$(function () {
    $('a.up__link').click( function(){ // ловим клик по ссылке с классом 
        var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 4000); // анимируем скроолинг к элементу scroll_el
        }
        return false; // выключаем стандартное действие
    }); 

    $('a.header__title_button').click( function(){ // ловим клик по ссылке с классом 
        var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 4000); // анимируем скроолинг к элементу scroll_el
        }
        return false; // выключаем стандартное действие
    });

    $('a.link__law').click( function(){ // ловим клик по ссылке с классом 
        var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 3000); // анимируем скроолинг к элементу scroll_el
        }
        return false; // выключаем стандартное действие
    });
});