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
                { lat: 47.4502499, lng: -122.3088165 },
                { lat: 52.3105419, lng: 4.7660804 }
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
            var UIO = { lat: -0.1225821, lng: -78.3607524 }
            var YVR = { lat: 49.1966948, lng: -123.1837063}

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

            var marker = new google.maps.Marker({
                position: UIO,
                title: "UIO - Quito, Ecuador",
                map: map
            });

            var marker = new google.maps.Marker({
                position: YVR,
                title: "YVR - Vancouver, Canada",
                map: map
            });


            /* Domestic */
            var ABQ = { lat: 35.0433377, lng: -106.6151025 }
            var ANC = { lat: 61.1758889, lng: -149.9922731 }
            var ATL = { lat: 33.6407326, lng: -84.4298941 }
            var AUS = { lat: 30.1974338, lng: -97.6684998 }
            var BOI = { lat: 43.565827, lng: -116.22451 }
            var BUR = { lat: 34.1983166, lng: -118.3595976 }
            var DEN = { lat: 39.8561004, lng: -104.6759316 }
            var DFW = { lat: 32.8998136, lng: -97.0425292}
            var EWR = { lat: 40.6884175, lng: -74.175133 }
            var GEG = { lat: 47.6217172, lng: -117.5370055 }
            var HLN = { lat: 46.6100257, lng: -111.989929 }
            var HNL = { lat: 21.3211849, lng: -157.9307321 }
            var KOA = { lat: 19.736916, lng: 156.0451186}
            var KTN = { lat: 55.3554136, lng: -131.7127544 }
            var IAH = { lat: 29.9902245, lng: -74.1073455 }
            var LAS = { lat: 36.0840041, lng: -115.1559329 }
            var LAX = { lat: 33.9414147, lng: -118.4105475 }
            var OGG = { lat: 20.8967924, lng: -156.4351319}
            var ORD = { lat: 41.9741665, lng: -87.9095154 }
            var PDX = { lat: 45.5897694, lng: -122.5972882 }
            var SEA = { lat: 47.4502499, lng: -122.3110105 }
            var SAN = { lat: 32.7338006, lng: 117.1954978 }
            var SFO = { lat: 37.6213129, lng: -122.3811494 }
            var SMF = { lat: 38.6950854, lng: -121.5900648 }

            /* Markers */
            var marker = new google.maps.Marker({
                position: ABQ,
                title: "ABQ - Albuquerque, New Mexico",
                map: map
            });

            var marker = new google.maps.Marker({
                position: ANC,
                title: "ANC - Anchorage, Alaska",
                map: map
            });

            var marker = new google.maps.Marker({
                position: ATL,
                title: "ATL - Atlanta, Georgia",
                map: map
            });

            var marker = new google.maps.Marker({
                position: AUS,
                title: "AUS - Austin, Texas",
                map: map
            });

            var marker = new google.maps.Marker({
                position: BOI,
                title: "BOI - Boise, Idaho",
                map: map
            });

            var marker = new google.maps.Marker({
                position: BUR,
                title: "BUR - Burbank, California",
                map: map
            });

            var marker = new google.maps.Marker({
                position: DEN,
                title: "DEN - Denver, Colorado",
                map: map
            });

            var marker = new google.maps.Marker({
                position: DFW,
                title: "DFW - Dallas, Texas",
                map: map
            });

            var marker = new google.maps.Marker({
                position: EWR,
                title: "EWR - Newark, New Jersey",
                map: map
            });

            var marker = new google.maps.Marker({
                position: GEG,
                title: "GEG - Spokane, Washington",
                map: map
            });

            var marker = new google.maps.Marker({
                position: HLN,
                title: "HLN - Helena, Montana",
                map: map
            });

            var marker = new google.maps.Marker({
                position: HNL,
                title: "HNL - Honolulu, Hawaii",
                map: map
            })

            var marker = new google.maps.Marker({
                position: HNL,
                title: "KOA - Kona, Hawaii",
                map: map
            })

            var marker = new google.maps.Marker({
                position: KTN,
                title: "KTN - Ketchikan, Alaska",
                map: map
            })

            var marker = new google.maps.Marker({
                position: IAH,
                title: "IAH - Houston, Texas",
                map: map
            })

            var marker = new google.maps.Marker({
                position: LAS,
                title: "LAS - Las Vega, Nevada",
                map: map
            })

            var marker = new google.maps.Marker({
                position: LAX,
                title: "LAX - Los Angeles, California",
                map: map
            })

            var marker = new google.maps.Marker({
                position: OGG,
                title: "OGG - Maui, Hawaii",
                map: map
            })

            var marker = new google.maps.Marker({
                position: ORD,
                title: "ORD - Chicago, Illinois",
                map: map
            })

            var marker = new google.maps.Marker({
                position: PDX,
                title: "PDX - Portland, Oregon",
                map: map
            })

            var marker = new google.maps.Marker({
                position: SAN,
                title: "SAN - San Diego, California",
                map: map
            })

            var marker = new google.maps.Marker({
                position: SEA,
                title: "SEA - Seattle, Washington",
                map: map
            })

            var marker = new google.maps.Marker({
                position: SFO,
                title: "SFO - San Francisco, California",
                map: map
            })

            var marker = new google.maps.Marker({
                position: SFO,
                title: "SFO - San Francisco, California",
                map: map
            })





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


