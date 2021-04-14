/* --------------------------- TRAILS INFORMATION */

/* --------------------------- GENERAL */

/* Scroll to top on load */

$(document).ready(function () {
    $(this).scrollTop(0);
});

/* hero section fade on scroll - https://stackoverflow.com/questions/51118337/how-do-i-make-an-image-fade-out-but-stay-in-place-on-scroll/ */

$(window).scroll(function () {
    $(".hero-section").css("opacity", 0.65 - $(window).scrollTop() / 500);
});


/* --------------------------- WHY TRAIL RUNNING SECTION */

/* --------------------------- SLIDES */

/* fix pictures disappearing https://stackoverflow.com/questions/37651880/slideshow-picture-disappears*/

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    var selectors = document.getElementsByClassName("selector");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < selectors.length; i++) {
        selectors[i].className = selectors[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    selectors[slideIndex - 1].className += " active";
}


/* --------------------------- QUOTES */

function quote() {

    const quotes = [
        "'I’ll be happy if running and I can grow old together' - HARUKI MURAKAMI, WHAT I TALK ABOUT WHEN I TALK ABOUT RUNNING",
        "'Only those who will risk going too far can possibly find out how far they can go.' - T. S. ELIOT",
        "'Ability is what you are capable of doing. Motivation determines what you do. Attitude determines how well you do it.' - LOU HOLTZ",
        "'Challenges are what makes life interesting; overcoming them is what makes life meaningful.' - JOSHUA J. MARINE",
        "'The harder the hill, the steeper the climb, the better the view from the finishing line.' - PAUL NEWMAN",
        "'That’s what running does to lives. It’s not just exercise. It’s not just achievement. It’s a daily discipline that has nothing to do with speed, weight, social status, sexual orientation, political affiliation, where you live, what car you drive, or whether anyone anywhere loves you. It’s about the slow and painful process of being the best you can be.' - MARTIN DUGARD"
    ];

    // Display last quote when page loads
    $("#quote").html(quotes[quotes.length - 1]);

    var quotesIndexNo = -1;

    function newQuote() {
        ++quotesIndexNo;
        if (quotesIndexNo >= quotes.length) {
            quotesIndexNo = 0;
        }

        $("#quote").fadeOut(2000, function () {
            $("#quote").fadeIn(2000).html(quotes[quotesIndexNo]);
        });

    }

    setInterval(newQuote, 15000);

}

$("document").ready(function () {
    quote();
});
