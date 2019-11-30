$(document).ready(function(){
    $('#exCollapsingNavbar .nav-item.dropdown').hover(function() {
        $(this).addClass('open');
    }, function() {
        $(this).removeClass('open');
    });
});