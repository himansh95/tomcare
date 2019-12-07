$(document).ready(function(){
    $('#exCollapsingNavbar .nav-item.dropdown').hover(function() {
        $(this).addClass('open');
    }, function() {
        $(this).removeClass('open');
    });
    $('.card .card-block').accordion({
        collapsible: true,
        active: false,
        heightStyle: "content"
    });
});