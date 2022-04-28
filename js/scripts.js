$(document).ready(function() {
    // Content switch based on nav clicks
    $('#content-nav .nav-button').click(function() {
        $('.content-section').hide();
        $('#'+$(this).attr("target")+'.content-section').show();
    });

    $('#project-nav .nav-button').click(function() {
        $('.project-section').hide();
        $('#'+$(this).attr("target")+'.project-section').show();
    });
});