
// убираем скролл при загрузке страницы
document.body.style.overflow='hidden';

// полная загрузка страницы
$(window).on('load', function () {
    $('#preloader').fadeOut(500); // убираем прелоадер
    document.body.style.overflow='visible'; // показываем скролл
});
