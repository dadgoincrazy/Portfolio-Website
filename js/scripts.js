$(document).ready(function() {
    console.log('Scripts loaded');
    $('.nav-button').click(function() {
        $('.content-section').hide();
        $('#'+$(this).attr("target")+'.content-section').show();
    });
});