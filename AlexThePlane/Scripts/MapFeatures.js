﻿    function initMap() {
            // Styles a map in night mode.
            var map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: 47.606602, lng: -122.5104123 },
                zoom: 2,
                styles: [
                    {
        "elementType": "geometry",
                        "stylers": [
                            {
        "color": "#ebe3cd"
                            }
                        ]
                    },
                    {
        "elementType": "labels.text.fill",
                        "stylers": [
                            {
        "color": "#523735"
                            }
                        ]
                    },
                    {
        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
        "color": "#f5f1e6"
                            }
                        ]
                    },
                    {
        "featureType": "administrative",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
        "color": "#c9b2a6"
                            }
                        ]
                    },
                    {
        "featureType": "administrative.land_parcel",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
        "color": "#dcd2be"
                            }
                        ]
                    },
                    {
        "featureType": "administrative.land_parcel",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
        "color": "#ae9e90"
                            }
                        ]
                    },
                    {
        "featureType": "landscape.natural",
                        "elementType": "geometry",
                        "stylers": [
                            {
        "color": "#dfd2ae"
                            }
                        ]
                    },
                    {
        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [
                            {
        "color": "#dfd2ae"
                            }
                        ]
                    },
                    {
        "featureType": "poi",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
        "color": "#93817c"
                            }
                        ]
                    },
                    {
        "featureType": "poi.park",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
        "color": "#a5b076"
                            }
                        ]
                    },
                    {
        "featureType": "poi.park",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
        "color": "#447530"
                            }
                        ]
                    },
                    {
        "featureType": "road",
                        "elementType": "geometry",
                        "stylers": [
                            {
        "color": "#f5f1e6"
                            }
                        ]
                    },
                    {
        "featureType": "road.arterial",
                        "elementType": "geometry",
                        "stylers": [
                            {
        "color": "#fdfcf8"
                            }
                        ]
                    },
                    {
        "featureType": "road.highway",
                        "elementType": "geometry",
                        "stylers": [
                            {
        "color": "#f8c967"
                            }
                        ]
                    },
                    {
        "featureType": "road.highway",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
        "color": "#e9bc62"
                            }
                        ]
                    },
                    {
        "featureType": "road.highway.controlled_access",
                        "elementType": "geometry",
                        "stylers": [
                            {
        "color": "#e98d58"
                            }
                        ]
                    },
                    {
        "featureType": "road.highway.controlled_access",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
        "color": "#db8555"
                            }
                        ]
                    },
                    {
        "featureType": "road.local",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
        "color": "#806b63"
                            }
                        ]
                    },
                    {
        "featureType": "transit.line",
                        "elementType": "geometry",
                        "stylers": [
                            {
        "color": "#dfd2ae"
                            }
                        ]
                    },
                    {
        "featureType": "transit.line",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
        "color": "#8f7d77"
                            }
                        ]
                    },
                    {
        "featureType": "transit.line",
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
        "color": "#ebe3cd"
                            }
                        ]
                    },
                    {
        "featureType": "transit.station",
                        "elementType": "geometry",
                        "stylers": [
                            {
        "color": "#dfd2ae"
                            }
                        ]
                    },
                    {
        "featureType": "water",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
        "color": "#b9d3c2"
                            }
                        ]
                    },
                    {
        "featureType": "water",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
        "color": "#92998d"
                            }
                        ]
                    }
                ]
        });

            var flightPlanCoordinates = [
                { lat: 37.772, lng: -122.214 },
                { lat: 21.291, lng: -157.821 },
                { lat: -18.142, lng: 178.431 },
                { lat: -27.467, lng: 153.027 }
            ];
            var flightPath = new google.maps.Polyline({
                path: flightPlanCoordinates,
                geodesic: true,
                strokeColor: '#FF0000',
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var uluru = { lat: -25.363, lng: 131.044 };

            var marker = new google.maps.Marker({
                position: uluru,
                map: map
            });

            flightPath.setMap(map);

             
    }

