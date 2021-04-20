/* --------------------------- GENERAL */

/* Scroll to top on load */

$(document).ready(function() {
  $(this).scrollTop(0);
});

/* hero section fade on scroll - https://stackoverflow.com/questions/51118337/how-do-i-make-an-image-fade-out-but-stay-in-place-on-scroll/ */

$(window).scroll(function() {
  $("#hero-image").css("opacity", 0.65 - $(window).scrollTop() / 500);
});


/* --------------------------- WHY TRAIL RUNNING SECTION */

/* --------------------------- SLIDES */

//Sourced from http://www.javascriptbook.com/

$('.slider').each(function() { // For every slider
  var $this = $(this); // Current slider
  var $group = $this.find('.slide-group'); // Get the slide-group (container)
  var $slides = $this.find('.slide'); // Create jQuery object to hold all slides
  var buttonArray = []; // Create array to hold navigation buttons
  var currentIndex = 0; // Hold index number of the current slide
  var timeout; // Sets gap between auto-sliding

  function move(newIndex) { // Creates the slide from old to new one
    var animateLeft, slideLeft; // Declare variables

    advance(); // When slide moves, call advance() again

    // If it is the current slide / animating do nothing
    if ($group.is(':animated') || currentIndex === newIndex) {
      return;
    }

    buttonArray[currentIndex].removeClass('active'); // Remove class from item
    buttonArray[newIndex].addClass('active'); // Add class to new item

    if (newIndex > currentIndex) { // If new item > current
      slideLeft = '100%'; // Sit the new slide to the right
      animateLeft = '-100%'; // Animate the current group to the left
    } else { // Otherwise
      slideLeft = '-100%'; // Sit the new slide to the left
      animateLeft = '100%'; // Animate the current group to the right
    }
    // Position new slide to left (if less) or right (if more) of current
    $slides.eq(newIndex).css({
      left: slideLeft,
      display: 'block'
    });

    $group.animate({
      left: animateLeft
    }, function() { // Animate slides and
      $slides.eq(currentIndex).css({
        display: 'none'
      }); // Hide previous slide
      $slides.eq(newIndex).css({
        left: 0
      }); // Set position of the new item
      $group.css({
        left: 0
      }); // Set position of group of slides
      currentIndex = newIndex; // Set currentIndex to the new image
    });
  }

  function advance() { // Used to set
    clearTimeout(timeout); // Clear previous timeout
    timeout = setTimeout(function() { // Set new timer
      if (currentIndex < ($slides.length - 1)) { // If slide < total slides
        move(currentIndex + 1); // Move to next slide
      } else { // Otherwise
        move(0); // Move to the first slide
      }
    }, 4000); // Milliseconds timer will wait
  }

  $.each($slides, function(index) {
    // Create a button element for the button
    var $button = $('<button type="button" class="slide-btn">&bull;</button>');
    if (index === currentIndex) { // If index is the current item
      $button.addClass('active'); // Add the active class
    }
    $button.on('click', function() { // Create event handler for the button
      move(index); // It calls the move() function
    }).appendTo('.slide-buttons'); // Add to the buttons holder
    buttonArray.push($button); // Add it to the button array
  });

  advance(); // Script is set up, advance() to move it

});

/* --------------------------- QUOTES */

function quote() {

  var quotes = [
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

    $("#quote").fadeOut(2000, function() {
      $("#quote").fadeIn(2000).html(quotes[quotesIndexNo]);
    });

  }

  setInterval(newQuote, 15000);

}

$("document").ready(function() {
  quote();
});

/* --------------------------- RACE SELECTOR */

// Adapted from https://www.w3schools.com/howto/howto_js_cascading_dropdown.asp

window.onload = function() {

  var regions = {
    'Europe': ['Marathon du Mont Blanc', 'London Marathon', 'Wokingham Half Marathon'],
    'North America': ['Badwater'],
    'South America': ['Rio Marathon'],
    'Africa': ['Marathon des Sables'],
    'Asia': ['Delhi Marathon']
  }

  var regionSel = document.getElementById("region");
  var raceSel = document.getElementById("race");
  for (var x in regions) {
    regionSel.options[regionSel.options.length] = new Option(x, x);
  }
  regionSel.onchange = function() {
    //empty Chapters- and Topics- dropdowns
    raceSel.length = 1;
    //display correct values
    var z = regions[this.value];
    for (var i = 0; i < z.length; i++) {
      raceSel.options[raceSel.options.length] = new Option(z[i], z[i]);
    }
  };
};

/* --------------------------- RACE INFORMATION */


$("#race").change(function() {
  if ($(this).val() == 'Marathon du Mont Blanc')
    $("#race-information").empty().append(
      `<div>
        <h2>Marathon du Mont Blanc</h2>
        <p>Country: France<br>Marathon du Mont Blanc is a well established montain ultra marathon event. A stunning route through the French Alps<br>Difficulty Rating : 10<br>Website: <a href="https://www.marathonmontblanc.fr/en/" target="_blank">Marathon du Mont Blanc</a></p>
      </div>`
    );
  else if ($(this).val() == 'Badwater')
    $("#race-information").empty().append(
      `<div>
      <h2>Badwater</h2>
      <p>Country: US<br>Badwater is one of the toughest races in the world.<br>Difficulty Rating : 10<br>Website: <a href="https://www.badwater.com" target="_blank">Badwater</a></p>
      </div>`
    );
});