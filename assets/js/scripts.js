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

//Sourced and adapted from http://www.javascriptbook.com/

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
    'Europe': ['Marathon du Mont Blanc', 'Eiger Ultra Trail', 'Spartathlon'],
    'North America': ['Badwater 135'],
    'South America': ['Atacama Crossing'],
    'Africa': ['Marathon des Sables'],
    'Asia and Australasia': ['Ultra-Trail Australia (UTA)'],
    'Middle East': ['Ultra X Jordan']
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
}

/* --------------------------- RACE INFORMATION */

const races = [
  {
  name: "Marathon du Mont Blanc",
  location: "France / Switzerland",
  distance: "171km",
  elevation: "10,300",
  terrain: "Trail",
  difficulty: "Brutal",
  description: "This one takes place every summer in the French mountain resort of Chamonix and is widely regarded as one of the most difficult ultramarathons in the world. It’s also one of the largest, with more than 2,500 toeing the start line in August. UTMB takes place over 7 days and hosts four other events, ranging from a 50km ultra to a 350km team event. The races have strict entry and qualification requirements. Hopeful participants must accumulate enough race points to qualify, gained in other trail races over the previous two years. As of 2020, you need a minimum of 10 UTMB points (which must come from only two races) to enter the ballot for the main event. While the best runners complete the loop in just over 20 hours, most runners take 32 to 46 hours to reach the finish line. Most runners will also have to run through two nights in order to complete the race.",
  website: "https://www.marathonmontblanc.fr/en/",
  lat: 45.91924995448426,
  lng: 6.865826926381162
  },
  {
  name: "Badwater 135",
  location: "US",
  distance: "217km",
  elevation: "4,450",
  terrain: "Mixed",
  difficulty: "Brutal",
  description: "This race is not for the faint hearted. At 85m below sea level, the start line at Badwater Basin in Death Valley is the lowest elevation in the US. From here, runners travel through places with increasingly foreboding names, such as Furnace Creek, Devil’s Cornfield, Stovepipe Wells and Lone Pine. Covering three mountain ranges, participants climb nearly 4,500m overall, all the way up to the finish line on Mount Whitney, the tallest mountain in continental America. As if climbing from the lowest valley to the highest peak wasn’t enough, Badwater 135 also takes place in the hottest and driest location in North America… in July. The appropriately named Death Valley often reaches temperatures well in excess of 40ºC (and sometimes as high as 50ºC!). Runners have been known to transport ice baths and huge industrial fans to different checkpoints along the route help cool their boiling bodies. Started in 1978, when ultra running was in its true infancy, Badwater 135 is now one of the best-known races in the world, with a cult-like following that often return again and again.",
  website: "https://www.badwater.com/",
  lat: 36.23131057832886,
  lng: -116.7660672234456
  },
  {
  name: "Ultra X Jordan",
  location: "Wadi Rum Desert, Jordan",
  distance: "250km (5 days)",
  elevation: "5,815",
  terrain: "Desert",
  difficulty: "Intermediate",
  description: "Now in it’s 5th year, Ultra X Jordan (previously the Wadi Rum Ultra) takes place in the epic “Valley of the Moon”. The mystical desert course takes competitors past historic sites, into dramatic wadis and over magnificent sand dunes in the land of Lawrence of Arabia. Local Jordanian runner Salameh Al Aqra has never lost a stage of the race but with the event growing each year this is a record which will undoubtedly be broken soon. To mark the 5th anniversary of the race the organisers are planning a few surprises, including the longest long stage in the race’s history. Check out the Ultra X Jordan 2019 documentary.",
  website: "https://ultra-x.co/jordan/",
  lat: 29.568430120523196,
  lng: 35.421942771293224
  },
];

$("#race").change(function() {

    let selRace = document.getElementById("race").value; //if user selects default add a default object so is defined
    console.log(selRace);

    let race = races.find(race => race.name === selRace);

    raceLocation(race.lat, race.lng);

    $("#race-information").empty().append(
      `<div>
        <h2>${race.name}</h2>
        <p><b>LOCATION</b>: ${race.location}</p>
        <p>${race.description}</p>
        <p><b>DISTANCE:</b> ${race.distance} <b>ELEVATION: </b>${race.elevation}</p>
        <p><b>TERRAIN</b>: ${race.terrain} <b>DIFFICULTY: </b>: ${race.difficulty}</p>
        <p><a href="${race.website}" target="_blank">WEBSITE</a></p>
      </div>`
    );
})
