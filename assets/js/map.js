
/* --------------------------- MAP */

/* --------------------------- REGIONAL TRAIL RUNNING LOCATIONS */


var locations = [
    ['Southeast', 'Chilterns', 51.6681096004447, -0.7743232134019301],
    ['Southeast', 'High Weald', 51.02787314336581, 0.3734717804453655],
    ['Southeast', 'South Downs', 50.95214083721415, -0.6925098417338073],
    ['Southeast', 'North Wessex Downs', 51.38516490600341, -1.510644638186808],
    ['Southeast', 'Surrey Hills', 51.252823094129695, -0.3845060456802069],
    ['Southeast', 'Cotswolds', 51.86319394737067, -1.7729290033170904]
];

function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        center: {
            lat: 51.6681096004447,
            lng: -0.7743232134019301
        }
    });

    var markers = []

    for (var i = 0; i < locations.length; i++) {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][2], locations[i][3]),
            map: map
        });
        markers.push(marker);
    }

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

    var trails = locations[i][1]
    var content = trails

    google.maps.event.addListener(marker, 'click', (function (marker, content, infowindow) {
        return function () {
            infowindow.setContent(content);
            infowindow.open(map, marker);
        };
    })(marker, content, infowindow));

}

/* --------------------------- RUNNING CLUBS NEARBY - search based on users location*/


/* --------------------------- SPORTS SHOPS NEARBY - search based on users location*/

