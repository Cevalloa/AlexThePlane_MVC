    function initMap() {
            // Styles a map in night mode.
            var map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: 47.606602, lng: -122.5104123 },
                zoom: 2,
                styles: [
                    {
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#f5f5f5"
                            }
                        ]
                    },
                    {
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#616161"
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "color": "#f5f5f5"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.country",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#3ecde3"
                            },
                            {
                                "weight": 2
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.land_parcel",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#bdbdbd"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.province",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#3ecde3"
                            },
                            {
                                "weight": 1
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#eeeeee"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#757575"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#e5e5e5"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#9e9e9e"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#757575"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#dadada"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#616161"
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#9e9e9e"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.line",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#e5e5e5"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.station",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#eeeeee"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#c9c9c9"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#9e9e9e"
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

            /* Airport Locations */

            /* International */
            var AMS = { lat: 52.3105386, lng: 4.7682744 }
            var FRA = { lat: 50.037936, lng: 8.5599578 }
            var GOT = { lat: 57.6688018, lng: 12.29012 }
            var HKG = { lat: 22.2976146, lng: 113.9301244 }
            var KEF = { lat: 63.9868067, lng: -22.6279668 }
            var MEX = { lat: 19.4360812, lng: -99.0741023 }
            var MUC = { lat: 48.3536656, lng: 11.7728339 }

            var marker = new google.maps.Marker({
                position: AMS,
                title: "AMS - Amsterdam, Netherlands",
                /* icon: image, */
                map: map
            });

            var marker = new google.maps.Marker({
                position: FRA,
                title: "FRA - Frankfurt, Germany",
                map: map
            });

            var marker = new google.maps.Marker({
                position: GOT,
                title: "GOT - Gothenburg, Sweden",
                map: map
            });

            var marker = new google.maps.Marker({
                position: HKG,
                title: "HKG - Hong Kong, China",
                map: map
            });

            var marker = new google.maps.Marker({
                position: KEF,
                title: "KEF - Keflavik, Iceland",
                map: map
            });

            var marker = new google.maps.Marker({
                position: MEX,
                title: "MEX - Mexico City, Mexico",
                map: map
            });

            var marker = new google.maps.Marker({
                position: MUC,
                title: "MUC - Munich, Germany",
                map: map
            });

            /* Domestic */
            var ABQ = { lat: 35.0433377, lng: -106.6151025 };

            /* Markers */
            var marker = new google.maps.Marker({
                position: ABQ,
                title: "ABQ!",
                scaledSize: new google.maps.Size(50, 50),
                map: map
            });

 /*       var image = {
            url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
            // This marker is 20 pixels wide by 32 pixels high.
            size: new google.maps.Size(15, 20),
            // The origin for this image is (0, 0).
            origin: new google.maps.Point(0, 0),
            // The anchor for this image is the base of the flagpole at (0, 32).
            anchor: new google.maps.Point(0, 32)
        };
        */




            flightPath.setMap(map);

             
    }


