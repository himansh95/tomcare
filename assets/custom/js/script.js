$(document).ready(function(){
    if(screen.width >= 768){
        $('#exCollapsingNavbar .nav-item.dropdown').hover(function() {
            $(this).addClass('open');
        }, function() {
            $(this).removeClass('open');
        });
    } else {
        $('#exCollapsingNavbar .nav-item.dropdown').on('click', function() {
            $(this).parent().toggleClass('open');
        })
        $('#google-form').attr('width', '350');
    }
    $('button.navbar-toggler').click(function() {
        $('ul.nav-dropdown').toggleClass('collapse');
    });
    $('.card .card-block').accordion({
        heightStyle: 'content'
    });
});