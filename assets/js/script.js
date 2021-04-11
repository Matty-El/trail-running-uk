

/* --------------------------- GENERAL */

/* mouse pointer effect - https://getbutterfly.com/how-and-why-i-added-a-circle-following-my-mouse-pointer/*/

document.addEventListener('DOMContentLoaded', () => {
    let mousePosX = 0,
        mousePosY = 0,
        mouseCircle = document.getElementById('mouse-circle');

    document.onmousemove = (e) => {
        mousePosX = e.pageX;
        mousePosY = e.pageY;
    }

    let delay = 10,
        revisedMousePosX = 0,
        revisedMousePosY = 0;

    function delayMouseFollow() {
        requestAnimationFrame(delayMouseFollow);

        revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
        revisedMousePosY += (mousePosY - revisedMousePosY) / delay;

        mouseCircle.style.top = revisedMousePosY + 'px';
        mouseCircle.style.left = revisedMousePosX + 'px';
    }
    delayMouseFollow();
});

/* hero section fade on scroll - https://stackoverflow.com/questions/51118337/how-do-i-make-an-image-fade-out-but-stay-in-place-on-scroll/ */

$(window).scroll(function() {
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



/* --------------------------- TRAILS INFORMATION */

function trailsInfo() {
    $("#information").append(
        `<div>
            <h2>The Best Trails in Great Britain</h2>
            <p>Some nice text about the trails in Great Britain</p>
        </div>`
)};



/* --------------------------- WHY TRAIL RUNNING SECTION */
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

/* --------------------------- GENERAL */

// headline and tagline text animation
$(document).ready(function () {

    $("#title").fadeIn(1000);
    $("#title-p").fadeIn(2000)
});

/*// button to scroll back to top of web page - add reference to where sourced code - check code for need for window element
$(document).ready(function () {
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
})*/
