$(document).ready(function () {
    document.getElementById('best-trails').addEventListener('click', initMap);
    document.getElementById('local-stores').addEventListener('click', localStores);
    document.getElementById('local-clubs').addEventListener('click', localClubs);
});

/* --------------------------- REGIONAL TRAIL RUNNING LOCATIONS */

const locations = [
    ['Southeast', 'High Weald', 51.02787314336581, 0.3734717804453655],
    ['Southeast', 'Chilterns', 51.6681096004447, -0.7743232134019301],
    ['Southeast', 'South Downs', 50.95214083721415, -0.6925098417338073],
    ['Southeast', 'North Wessex Downs', 51.38516490600341, -1.510644638186808],
    ['Southeast', 'Surrey Hills', 51.252823094129695, -0.3845060456802069],
    ['Southeast', 'Cotswolds', 51.86319394737067, -1.7729290033170904],
    ['Southeast', 'Kent Downs', 51.17040679774792, 0.9664870195094897],
    ['Southwest', 'Blackdown Hills', 50.86919361195105, -3.1294952374046834],
    ['Southwest', 'East Devon', 50.69004181691729, -3.2047462530625044],
    ['Southwest', 'The Lizard Heritage Coast', 49.999702394076664, -5.1709975883522485],
    ['Southwest', 'Penwith Heritage Coast', 50.062721773964256, -5.70658104145264],
    ['Southwest', 'National Trust Godrevy', 50.23743406580533, -5.3898239328110025],
    ['Southwest', 'St Agnes Heritage Coast', 50.30359504038075, -5.221595763388491],
    ['Southwest', 'Trevose Head Heritage Coast', 50.5365625661654, -5.017662051591915],
    ['Southwest', 'Pentire Point', 50.58236462592478, -4.902992259724462],
    ['Southwest', 'Tamar Valley', 50.493664608995715, -4.163990045610946],
    ['Southwest', 'Dartmoor', 50.61951880071906, -3.866672517632982],
    ['Southwest', 'South Devon', 50.292519765851196, -3.8941383357406942],
    ['Wales', 'Brecon Beacons', 51.88623976504891, -3.4662578628899654],
    ['Wales', 'Gower Peninsula', 51.59370871526588, -4.183115770719943],
    ['Wales', 'Pembrokeshire Coast', 51.82007603898061, -5.0922344056672335],
    ['Wales', 'Snowdonia National Park', 53.08704385797965, -3.8000479119333517],
    ['West Midlands', 'Wye Valley', 51.83111618944467, -2.656574485625995],
    ['West Midlands', 'Malvern Hills', 52.09927860599068, -2.3461455666100197],
    ['West Midlands', 'Shropshire Hills', 52.48415181226442, -2.8611382980422393],
    ['West Midlands', 'Cannock Chase', 52.759885866956004, -2.0022552758656835],
    ['East Midlands', 'Peak District', 53.336291544041295, -1.7969796113497816],
    ['East Midlands', 'Lincolnshire Wolds', 53.364610263724856, -0.13652761731740984],
    ['Yorkshire & Humber', 'North York Moors', 54.36097075958505, -0.9211368207967316],
    ['Yorkshire & Humber', 'Nidderdale', 54.11565391061401, -1.7277086207580905],
    ['Anglia', 'Norfolk Coast', 52.95955305258289, 0.8431664553346696],
    ['Anglia', 'Thetford Forest Park', 52.456915868052086, 0.6626706108553847],
    ['Anglia', 'Suffolk Coast and Heaths', 52.125367555925635, 1.4682719680020941],
    ['Anglia', 'Dedham Vales', 51.98511849024811, 0.9263442292904297],
    ['Northwest', 'Forest of Bowland', 54.01503157710118, -2.458262287207596],
    ['Northwest', 'Yorkshire Dales', 54.19538677427017, -2.161631438755955],
    ['Northwest', 'Lake District', 54.47083565789139, -3.1174419504334656],
    ['Northeast', 'North Pennines', 54.68097703374515, -2.255015224379619],
    ['Northeast', 'Northumberland National Park', 55.3299255905212, -2.2660015521000507],
    ['Northeast', 'Kielder Forest', 55.23293876672379, -2.5571392366914765],
    ['Scotland', 'Galloway Forest Park', 55.105972244944276, -4.439850418722517],
    ['Scotland', 'Pentland Hills', 55.858665239194174, -3.2315192071299856],
    ['Scotland', 'Clyde Muirshiel Park', 55.82497230294758, -4.776710253448487],
    ['Scotland', 'Loch Lomond & The Trossacs', 56.236460410102005, -4.686699127162885],
    ['Scotland', 'Cairngorms', 57.04782573618609, -3.573834279426089],
    ['Northern Ireland', 'Giant\'s Causeway', 55.240716610084185, -6.5116515009506095],
    ['Northern Ireland', 'Rostrevor Forest', 54.13899738516855, -6.150875314806672],
    ['Northern Ireland', 'Mourne Mountains', 54.15206848753517, -6.062813028122196],
    ['Northern Ireland', 'Torr Head', 55.19473220546214, -6.07311271074085659],
    ['Northern Ireland', 'Denseverick', 55.23778157807357, -6.439597346627253],
    ['Northern Ireland', 'Tollymore Forest Park', 54.22567340554185, -5.940803432686437],
    ['Republic of Ireland', 'Glenveagh National Park', 55.04931671928791, -7.9370742434117405],
    ['Republic of Ireland', 'Ballycroy National Park', 54.02496377992853, -9.736943782680545],
    ['Republic of Ireland', 'Burren National Park', 52.99778977792347, -9.039183198436554],
    ['Republic of Ireland', 'Dromore Woods', 52.93853751586066, -8.958931504738528],
    ['Republic of Ireland', 'Slieve Bloom Mountains', 53.07488325737644, -7.6044374099129115],
    ['Republic of Ireland', 'Brandon Point', 52.28762519287021, -10.170345841823707],
    ['Republic of Ireland', 'Galtymore', 52.20859111740784, -10.054989396785857],
    ['Republic of Ireland', 'Glanteenassig Forest Park', 52.37071104378556, -8.16774421849087],
    ['Republic of Ireland', 'Gleninchaquin Park', 51.80238074185464, -9.663020794225595],
    ['Republic of Ireland', 'Table Mountain', 53.01477155520673, -6.482620384240017],
    ['Republic of Ireland', 'Turlough Hill', 53.024182184694745, -6.414076481283859]
];

/* --------------------------- INITIALIZE MAPS */

var map, raceMap;

function initMap() {

    // Empty array to avoid duplication of markers when click The Best Trails button again
    $('#information').empty().append(
        `<div>
      <h2>The Best Trails in the UK & Ireland</h2>
      <p>The UK has some of the best trails running locations in the world. From the rugged and stunning trails of the Lake District to the coastal paths of the South East there is something for everyone.  Whether you prefer to run in the mountains, by the sea, or through your favourite woodland you are spoilt for choice, and being a relatively small country these places are accessible to all.</p>
      <p>Some of the pioneers of trail runnning have emerged from the UK.  With a proud history of producing great fell runners the UK has seen some of the all time great trail running athletes.  From Joss Naylor in the 1980's, Steve Birkenshaw in the late 90's and for the next 2 decades and more recently the likes of Paul Tierney, Damian Hall and Carla Molinaro, these individuals have set some incredible markers in the world of ultra distance trail running. If you feel the desire to follow in the footsteps of these great athletes just look up their achievements and set yourself your next challenge.</p>
      <p>Get out there and explore our beautiful trails and reap the benefits of what this amazing sport has to offer.</p>
    </div>`
    );

    $('#race-information').empty().append(
        `<div>
      <h2>Races Around the World</h2>
      <p>Due to the explosion in popularity of trail running over the past 15 years more races are added to the race calendar every year. There are some incredible events all over the world.</p>
      <p>There are races on all continents and over all types of terrain - trails, deserts, mountains, jungle or mixed terrains - you will find an event that tests your ability and that provides an incredible experience.</p>
      <p>Select a region and a race to find your next adventure.</p>
    </div>`
    );

    var maps = {
        zoom: 5,
        center: new google.maps.LatLng(53.365816267881975, -1.4922523393807863),
    };

    map = new google.maps.Map(document.getElementById('map'), maps);

    raceMap = new google.maps.Map(document.getElementById('race-map'), maps);

    var infowindow = new google.maps.InfoWindow();
    var markers = [];
    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });

    for (var i = 0; i < locations.length; i++) {

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][2], locations[i][3]),
            map: map,
            title: locations[i][1]
        });

        markerCluster.addMarker(marker);

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(locations[i][1]);
                infowindow.open(map, marker);
            };
        })(marker, i));
    }
}

/* --------------------------- LOCAL RUNNING CLUBS */

let pos, bounds, infoWindow, currentInfoWindow, service;

function localClubs() {

    $('#information').empty().append(
        `<div>
      <h2>Running Clubs</h2>
      <p><br>Joining a club is one of the best things you can do to progress with your running. Joining a club and surrounding yourself with experienced, enthusiastic runners, you're more likely to run long-term instead of relying solely on your own motivation. Seeing what others have achieved will provide you with the inspiration to keep training. <p>Running with a club will encourage you to vary your training which will significantly speed your progress. Clubs quite often work with coaches and established members to organise different types of sessions: e.g. Monday night – interval sessions / speedwork, Tuesday night – trail run, Thursday night – medium length run, Saturday – long run.</p><p>Training can be great fun especially when you have the support and guidance from other enthusiastic club members.</p>
    </div>`
    );

    // Adapted from Google Maps API documentation https://developers.google.com/maps/documentation/javascript/geolocation

    // Initialize variables
    bounds = new google.maps.LatLngBounds();
    infoWindow = new google.maps.InfoWindow();
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

    $('#information').empty().append(
        `<div>
      <h2>Good Sports Stores</h2>
      <p><br>You don't need much gear to start running.  However, a good pair of running shoes is essential and will ensure you get the best from your running and remain injury free.</p>
      <p>The best thing to do is to head down to your local friendly running shop and get some advice on the best shoes for you.  Everyone is different and finding the running shoes that are best suited to you will make your experience all the better</p>
      <p>Find the right shoes, throw on a t-shirt and some shorts and head out onto the trails to explore.</p>
    </div>`
    );

    // Initialize variables
    bounds = new google.maps.LatLngBounds();
    infoWindow = new google.maps.InfoWindow();
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
            '</strong><br>' + 'Rating: ' + placeResult.rating + '<br>' + 'Address: ' + placeResult.formatted_address + '<br>' + '<a target = "_blank" href=" ' + placeResult.website + '">' + 'Website' + '</a></div>');
        placeInfowindow.open(marker.map, marker);
        currentInfoWindow.close();
        currentInfoWindow = placeInfowindow;
    } else {
        console.log('showDetails failed: ' + status);
    }
}

/* --------------------------- RACES AROUND THE WORLD */

// Race map
function raceLocation(raceLat, raceLng, raceName) {

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

    var infowindow = new google.maps.InfoWindow({
        content: raceName
    });

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(raceMap, marker);
    });

}
