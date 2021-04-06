
// headline and tagline text animation

$(document).ready(function () {

    $("#title").fadeIn(1000);
    $("#title-p").fadeIn(2000)
});


// why trail running text hide / show
$(document).ready(function () {

    $('#freedom').click(function () {
        $("#freedom-p").slideToggle(750)
    });
    $('#mind').click(function () {
        $("#mind-p").slideToggle(750)
    });
    $('#body').click(function () {
        $("#body-p").slideToggle(750)
    });
    $('#challenge').click(function () {
        $("#challenge-p").slideToggle(750)
    });
    $('#community').click(function () {
        $("#community-p").slideToggle(750)
    });
    $('#peace').click(function () {
        $("#peace-p").slideToggle(750)
    });
});

// smooth scrolling for website
$(document).ready(function () {
    $('a[href^="#"]').on('click', function (e) {

        e.preventDefault();

        var target = this.hash;

        var $target = $(target);

        $('html, body').animate({
            'scrollTop': $target.offset().top
        }, 1000, 'swing')
    });
});

// button to scroll back to top of web page
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('#top').fadeIn();
        }
        else {
            $('#top').fadeOut();
        }
    });
    $('#top').click(function () {
        $('body, html').animate({ scrollTop: 0 }, 500);
    });
})