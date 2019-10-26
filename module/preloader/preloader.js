
// убираем скролл при загрузке страницы
document.body.style.overflow='hidden';

// полная загрузка страницы (для jquery 3 версии)
$(window).on('load', function () {
    $('#preloader').fadeOut(500); // убираем прелоадер
    document.body.style.overflow='visible'; // показываем скролл
});


