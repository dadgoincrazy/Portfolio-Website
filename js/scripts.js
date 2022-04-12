$(document).ready(function() {
    // Content switch based on nav clicks
    $('.nav-button').click(function() {
        $('.content-section').hide();
        $('#'+$(this).attr("target")+'.content-section').show();
    });
});