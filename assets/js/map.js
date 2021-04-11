
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

function initMap() {

    // empty array to avoid duplication of markers when click The Best Trails button again 
    
    $("#information").empty().append(
        `<div>
            <h2>The Best Trails in the UK</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?.</p>
        </div>`
    );

    markers = []

    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        center: {
            lat: 54.167826761718715,
            lng: -4.455684560864738
        }
    });

    for (var i = 0; i < locations.length; i++) {
        var trails = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][2], locations[i][3]),
            map: map
        });
        markers.push(trails);

    }

    // cluster markers for improved user experience
    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

}

/* --------------------------- LOCAL RUNNING CLUBS */

let pos;
let bounds;
let infoWindow;
let currentInfoWindow;
let service;
let infoPane;
function localClubs() {

    $("#information").empty().append(
        `<div>
            <h2>Running Clubs</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
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
        infoWindow.setContent('Your location');
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
    pos = {lat: 53.365816267881975, lng: -1.4922523393807863};
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
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
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
        infoWindow.setContent('Your location');
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
    pos = {lat: 53.365816267881975, lng: -1.4922523393807863};
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
        'website', 'photos']
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
