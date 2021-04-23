/* --------------------------- GENERAL */

/* Scroll to top on load */

// https://stackoverflow.com/questions/40481874/scroll-to-top-on-page-load-html

$(window).on("beforeunload", function() {
  $("body").hide();
  $(window).scrollTop(0);
});

/* hero section fade on scroll - https://stackoverflow.com/questions/51118337/how-do-i-make-an-image-fade-out-but-stay-in-place-on-scroll/ */

$(window).scroll(function() {
  $("#hero-image").css("opacity", 1.0 - $(window).scrollTop() / 500);
});

/* Scroll to top button */

// Adapted from https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

//Get the button
var toTop = document.getElementById("top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollToTop();
};

function scrollToTop() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
document.getElementById("top").addEventListener("click", function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
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

  // Display quote
  $("#quote").html(quotes[quotes.length - 1]);

  var quotesIndexNum = -1;

  function newQuote() {
    ++quotesIndexNum;
    if (quotesIndexNum >= quotes.length) {
      quotesIndexNum = 0;
    }

    $("#quote").fadeOut(2000, function() {
      $("#quote").fadeIn(2000).html(quotes[quotesIndexNum]);
    });
  }

  setInterval(newQuote, 15000);
}

$("document").ready(function() {
  quote();
});

/* --------------------------- RACE SELECTOR */

// Adapted from https://www.w3schools.com/howto/howto_js_cascading_dropdown.asp

$(document).ready(function() {

  var regions = {
    "Europe": ["Marathon du Mont Blanc", "Eiger Ultra Trail", "Spartathlon"],
    "North America": ["Badwater 135"],
    "South America": ["Atacama Crossing"],
    "Africa": ["Marathon des Sables"],
    "Asia and Australasia": ["Ultra-Trail Australia (UTA)"],
    "Middle East": ["Ultra X Jordan"]
  };

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
});

/* --------------------------- RACE INFORMATION */

const races = [{
    name: "Marathon du Mont Blanc",
    location: "France / Switzerland",
    distance: "171km",
    elevation: "10,300m",
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
    elevation: "4,450m",
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
    elevation: "5,815m",
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
        <h2 class="race-information">${race.name}</h2>
        <p><b>LOCATION</b>: ${race.location}</p>
        <p>${race.description}</p>
        <p><b>DISTANCE:</b> ${race.distance} <b>ELEVATION: </b>${race.elevation}</p>
        <p><b>TERRAIN</b>: ${race.terrain} <b>DIFFICULTY: </b>: ${race.difficulty}</p>
        <p><a href="${race.website}" target="_blank">WEBSITE</a></p>
      </div>`
  );
});

/* --------------------------- NEWSLETTER */

// Clear form when submitted / closed

$("#newsletter-form").on("hidden.bs.modal", function () {
    $(this).find("newsletter-form").trigger("reset");
  })
