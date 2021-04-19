/* --------------------------- MAP */

/* --------------------------- REGIONAL TRAIL RUNNING LOCATIONS */

var markers = []

const locations = [
  ['Southeast', 'High Weald', 51.02787314336581, 0.3734717804453655],
  ['Southeast', 'Chilterns', 51.6681096004447, -0.7743232134019301],
  ['Southeast', 'South Downs', 50.95214083721415, -0.6925098417338073],
  ['Southeast', 'North Wessex Downs', 51.38516490600341, -1.510644638186808],
  ['Southeast', 'Surrey Hills', 51.252823094129695, -0.3845060456802069],
  ['Southeast', 'Cotswolds', 51.86319394737067, -1.7729290033170904],
  ['Southwest', 'East Devon', 50.69004181691729, -3.2047462530625044],
  ['Southwest', 'The Lizard Heritage Coast', 49.999702394076664, -5.1709975883522485],
  ['Southwest', 'Penwith Heritage Coast', 50.062721773964256, -5.70658104145264],
  ['Southwest', 'National Trust Godrevy', 50.23743406580533, -5.3898239328110025],
  ['Southwest', 'St Agnes Heritage Coast', 50.30359504038075, -5.221595763388491],
  ['Southwest', 'Trevose Head Heritage Coast', 50.5365625661654, -5.017662051591915],
  ['Southwest', 'Pentire Point', 50.58236462592478, -4.902992259724462],
  ['Southwest', 'Tamar Valley', 50.493664608995715, -4.163990045610946],
  ['Southwest', 'Dartmoor', 50.61951880071906, -3.866672517632982],
  ['Southwest', 'South Devon', 50.292519765851196, -3.8941383357406942]
];

/* --------------------------- THE BEST TRAILS */

$(document).ready(function() {
  document.getElementById("best-trails").addEventListener("click", initMap);
  document.getElementById("local-stores").addEventListener("click", localStores);
  document.getElementById("local-clubs").addEventListener("click", localClubs);
})

var map, eventMap;

function initMap() {

  // empty array to avoid duplication of markers when click The Best Trails button again
  $("#information").empty().append(
    `<div>
            <h2>The Best Trails in the UK</h2>
            <p>The UK has some of the best trails running locations in the world. From the rugged and stunning trails of the Lake District to the coastal paths of the South East there is something for everyone.  Whether you prefer to run in the mountains, by the sea, or through your favourite woodland you are spoilt for choice, and being a relatively small country these places are accessible to all.</p>
            <p>Some of the pioneers of trail runnning have emerged from the UK.  With a proud history of producing great fell runners the UK has seen some of the all time great trail running athletes.  From Joss Naylor in the 1980's, Steve Birkenshaw in the late 90's and for the next 2 decades and more recently the likes of Paul Tierney, Damian Hall and Carla Molinaro, these individuals have set some incredible markers in the world of ultra distance trail running. If you feel the desire to follow in the footsteps of these great athletes just look up their achievements and set yourself your next challenge.</p>
            <p>Get out there and explore our beautiful trails and reap the benefits of what this amazing sport has to offer.</p>
        </div>`
  );

  $("#race-information").empty().append(
    `<div>
            <h2>The Best Races Around the World</h2>
            <p>If you are ready for a challange there are some amazing events around the world. </p>
            <p>More text relating to the events</p>
            <p>Select a region and an event to find out more.</p>
        </div>`
  );

  var mapOptions = {
    zoom: 5,
    center: new google.maps.LatLng(53.365816267881975, -1.4922523393807863),
  }
  map = new google.maps.Map(document.getElementById("map"), mapOptions);

  raceMap = new google.maps.Map(document.getElementById("race-map"), mapOptions);

  markers = []

  for (var i = 0; i < locations.length; i++) {
    var trails = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][2], locations[i][3]),
      map: map
    });
    markers.push(trails);

  }

  // cluster markers for improved user experience
  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
  });

}

/* --------------------------- EVENT MAP */


/* --------------------------- LOCAL RUNNING CLUBS */

let pos, bounds, infoWindow, currentInfoWindow, service, infoPane;

function localClubs() {

  $("#information").empty().append(
    `<div>
            <h2>Running Clubs</h2>
            <p>Joining a club is one of the best things you can do to progress your running, so with this in mind, we’ve compiled a list of the reasons why:
            You are your environment.  By joining a club and surrounding yourself with experienced, enthusiastic people, you’re more likely to run long-term, instead of depending solely on your own motivation.  Seeing what others who started off just like you have achieved will inspire you to keep training.
            Running clubs will encourage you to vary your training. Clubs usually work with coaches and long term members to organise different sessions; e.g. Monday night – trail running, Tuesday night – medium length run, Thursday night – speed work, Sunday morning – long run.  Training by yourself means it’s easy to get in a rut of the same routes at the same old pace – inevitably your running progress will plateau unless you change it up a bit.</p>
        </div>`
  );

  // Initialize variables
  bounds = new google.maps.LatLngBounds();
  infoWindow = new google.maps.InfoWindow;
  currentInfoWindow = infoWindow;

  // Try HTML5 geolocation
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      map = new google.maps.Map(document.getElementById('map'), {
        center: pos,
        zoom: 15
      });
      bounds.extend(pos);

      infoWindow.setPosition(pos);
      infoWindow.setContent('Your are here');
      infoWindow.open(map);
      map.setCenter(pos);

      getLocalClubs(pos);

    }, () => {
      // Browser supports geolocation, but user has denied permission
      handleLocationError(true, infoWindow);
    });
  } else {
    // Browser doesn't support geolocation
    handleLocationError(false, infoWindow);
  }
}

// Handle a geolocation error
function handleLocationError(browserHasGeolocation, infoWindow) {
  // Set default location to Sheffield, UK
  pos = {
    lat: 53.365816267881975,
    lng: -1.4922523393807863
  };
  map = new google.maps.Map(document.getElementById('map'), {
    center: pos,
    zoom: 15
  });

  // Display an InfoWindow at the map center
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Geolocation permissions denied. Using default location.' :
    'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
  currentInfoWindow = infoWindow;

  getLocalClubs(pos);

}

/* --------------------------- LOCAL RUNNING CLUBS SEARCH*/

function getLocalClubs(position) {
  let request = {
    location: position,
    rankBy: google.maps.places.RankBy.DISTANCE,
    keyword: 'running clubs'
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, nearbyCallback);
}

/* --------------------------- LOCAL SPORTS STORES */

function localStores() {

  $("#information").empty().append(
    `<div>
            <h2>Good Sports Stores</h2>
            <p>You don't need much gear to start running.  However, a good pair of running shoes is essential and will ensure you get the best from your running and remain injury free.</p>
            <p>The best thing to do is to head down to your local friendly running shop and get some advice on the best shoes for you.  Everyone is different and finding the running shoes that are best suited to you will make your experience all the better</p>
            <p>Find the right shoes, throw on a t-shirt and some shorts and head out onto the trails to explore.</p>
        </div>`
  );

  // Initialize variables
  bounds = new google.maps.LatLngBounds();
  infoWindow = new google.maps.InfoWindow;
  currentInfoWindow = infoWindow;

  // Try HTML5 geolocation
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      map = new google.maps.Map(document.getElementById('map'), {
        center: pos,
        zoom: 15
      });
      bounds.extend(pos);

      infoWindow.setPosition(pos);
      infoWindow.setContent('You are here');
      infoWindow.open(map);
      map.setCenter(pos);

      getLocalStores(pos);

    }, () => {
      // Browser supports geolocation, but user has denied permission
      handleLocationError(true, infoWindow);
    });
  } else {
    // Browser doesn't support geolocation
    handleLocationError(false, infoWindow);
  }
}

// Handle a geolocation error
function handleLocationError(browserHasGeolocation, infoWindow) {
  // Set default location to Sheffield, UK
  pos = {
    lat: 53.365816267881975,
    lng: -1.4922523393807863
  };
  map = new google.maps.Map(document.getElementById('map'), {
    center: pos,
    zoom: 15
  });

  // Display an InfoWindow at the map center
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Geolocation permissions denied. Using default location.' :
    'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
  currentInfoWindow = infoWindow;

  getLocalStores(pos);
}

/* --------------------------- LOCAL SPORTS STORES SEARCH*/

function getLocalStores(position) {
  let request = {
    location: position,
    rankBy: google.maps.places.RankBy.DISTANCE,
    keyword: 'sports stores'
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, nearbyCallback);
}


/* --------------------------- LOCAL SEARCH CALLBACK*/

// Handle the results (up to 20) of the Nearby Search
function nearbyCallback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    createMarkers(results);
  }
}

/* --------------------------- CREATE MARKERS AND INFOWINDOWS*/

function createMarkers(places) {
  places.forEach(place => {
    let marker = new google.maps.Marker({
      position: place.geometry.location,
      map: map,
      title: place.name
    });

    google.maps.event.addListener(marker, 'click', () => {
      let request = {
        placeId: place.place_id,
        fields: ['name', 'formatted_address', 'geometry', 'rating',
          'website', 'photos'
        ]
      };

      /* Only fetch the details of a place when the user clicks on a marker.
       * If we fetch the details for all place results as soon as we get
       * the search response, we will hit API rate limits. */
      service.getDetails(request, (placeResult, status) => {
        showDetails(placeResult, marker, status)
      });
    });

    // Adjust the map bounds to include the location of this marker
    bounds.extend(place.geometry.location);
  });
  /* Once all the markers have been placed, adjust the bounds of the map to
   * show all the markers within the visible area. */
  map.fitBounds(bounds);
}

function showDetails(placeResult, marker, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    let placeInfowindow = new google.maps.InfoWindow();
    placeInfowindow.setContent('<div><strong>' + placeResult.name +
      '</strong><br>' + 'Rating: ' + placeResult.rating + '</div>');
    placeInfowindow.open(marker.map, marker);
    currentInfoWindow.close();
    currentInfoWindow = placeInfowindow;
    showPanel(placeResult);
  } else {
    console.log('showDetails failed: ' + status);
  }
}

function showPanel(placeResult) {
  // If infoPane is already open, close it
  if (infoPane.classList.contains("open")) {
    infoPane.classList.remove("open");
  }

  // Clear the previous details
  while (infoPane.lastChild) {
    infoPane.removeChild(infoPane.lastChild);
  }

  /* TODO: Step 4E: Display a Place Photo with the Place Details */
  // Add the primary photo, if there is one
  if (placeResult.photos) {
    let firstPhoto = placeResult.photos[0];
    let photo = document.createElement('img');
    photo.classList.add('hero');
    photo.src = firstPhoto.getUrl();
    infoPane.appendChild(photo);
  }

  // Add place details with text formatting
  let name = document.createElement('h1');
  name.classList.add('place');
  name.textContent = placeResult.name;
  infoPane.appendChild(name);
  if (placeResult.rating) {
    let rating = document.createElement('p');
    rating.classList.add('details');
    rating.textContent = `Rating: ${placeResult.rating} \u272e`;
    infoPane.appendChild(rating);
  }
  let address = document.createElement('p');
  address.classList.add('details');
  address.textContent = placeResult.formatted_address;
  infoPane.appendChild(address);
  if (placeResult.website) {
    let websitePara = document.createElement('p');
    let websiteLink = document.createElement('a');
    let websiteUrl = document.createTextNode(placeResult.website);
    websiteLink.appendChild(websiteUrl);
    websiteLink.title = placeResult.website;
    websiteLink.href = placeResult.website;
    websitePara.appendChild(websiteLink);
    infoPane.appendChild(websitePara);
  }

  // Open the infoPane
  infoPane.classList.add("open");
}

/* --------------------------- RACES AROUND THE WORLD */

// Race details
function raceLocation(raceLat, raceLng) {

    raceMap.setCenter({
      lat: raceLat,
      lng: raceLng,
    });
    raceMap.setZoom(7);
    var marker = new google.maps.Marker({
      position: {
        lat: raceLat,
        lng: raceLng
      },
      map: raceMap
    });
    markers.push(marker);
}

$("#race").change(function () {
  if ($(this).val() == 'Marathon du Mont Blanc')
    raceLocation(45.91924995448426, 6.865826926381162);
    /*raceSummary()*/
    else if ($(this).val() == 'Badwater')
      raceLocation(36.23131057832886, -116.7660672234456);
      /*raceSummary()*/
});

$("document").ready(function() {
  document.getElementById("best-trails").addEventListener("click", initMap);
  document.getElementById("local-stores").addEventListener("click", localStores);
  document.getElementById("local-clubs").addEventListener("click", localClubs);
})