$(document).ready(function() {
    $('.dashtab a').click(function(event) {
        event.preventDefault();
        var thisid = $(this).attr('href');
        $(".dashtab a").removeClass('active');
        $(this).addClass('active');
        $('.dashtabdiv').css('display', 'none');
        $(thisid).css('display', 'block');
    });
});

$(document).ready(function () {
    // $("#manage").attr("class", "active");
     $("#wallet").attr("class", "active");
     $("#wallet").attr("href", "#");
 });