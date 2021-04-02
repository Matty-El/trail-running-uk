
/* --------------------------- MAP */

/* --------------------------- REGIONAL TRAIL RUNNING LOCATIONS */


function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        center: {
            lat: 52.48142,
            lng: -1.89983
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 51.572475, lng: -0.869078 },
        { lat: 51.385941, lng: -0.739907 }
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' })

}

/* --------------------------- RUNNING CLUBS NEARBY - search based on users location*/


/* --------------------------- SPORTS SHOPS NEARBY - search based on users location*/





