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

            /* Airport Locations */

            /* International */
            var AMS = { lat: 52.3105386, lng: 4.7682744 }
            var CDG = { lat: 49.0096906, lng: 2.5479245, }
            var EZE = { lat: -34.8150044, lng: -58.5370171}
            var FRA = { lat: 50.037936, lng: 8.5599578 }
            var GOT = { lat: 57.6688018, lng: 12.29012 }
            var HKG = { lat: 22.2976146, lng: 113.9301244 }
            var HND = { lat: 35.5493932, lng: 139.7798386 }
            var KEF = { lat: 63.9868067, lng: -22.6279668 }
            var MEX = { lat: 19.4360812, lng: -99.0741023 }
            var MUC = { lat: 48.3536656, lng: 11.7728339 }
            var SJD = { lat: 23.1455358, lng: -109.7204552}
            var UIO = { lat: -0.1225821, lng: -78.3607524 }
            var YVR = { lat: 49.1966948, lng: -123.1837063}

            var markerAMS = new google.maps.Marker({
                position: AMS,
                title: "AMS - Amsterdam, Netherlands",
                /* icon: image, */
                map: map
            });

            var markerCDG = new google.maps.Marker({
                position: CDG,
                title: "CDG - Paris, France",
                /* icon: image, */
                map: map
            });

            var markerEZE = new google.maps.Marker({
                position: EZE,
                title: "EZE - Buenos Aires, Argentina",
                /* icon: image, */
                map: map
            });

            var markerFRA = new google.maps.Marker({
                position: FRA,
                title: "FRA - Frankfurt, Germany",
                map: map
            });

            var marker = new google.maps.Marker({
                position: GOT,
                title: "GOT - Gothenburg, Sweden",
                map: map
            });

            var markerHKG = new google.maps.Marker({
                position: HKG,
                title: "HKG - Hong Kong, China",
                map: map
            });

            var markerHND = new google.maps.Marker({
                position: HND,
                title: "HND - Tokyo, Japan",
                map: map
            });

            var markerKEF = new google.maps.Marker({
                position: KEF,
                title: "KEF - Keflavik, Iceland",
                map: map
            });

            var markerMEX = new google.maps.Marker({
                position: MEX,
                title: "MEX - Mexico City, Mexico",
                map: map
            });

            var markerMUC = new google.maps.Marker({
                position: MUC,
                title: "MUC - Munich, Germany",
                map: map
            });

            var markerSJD = new google.maps.Marker({
                position: SJD,
                title: "SJD - Los Cabos, Mexico",
                map: map
            });

            var markerUIO = new google.maps.Marker({
                position: UIO,
                title: "UIO - Quito, Ecuador",
                map: map
            });

            var markerYVR = new google.maps.Marker({
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
            var FAI = { lat: 64.8164163, lng: -147.8635168}
            var GEG = { lat: 47.6217172, lng: -117.5370055 }
            var HLN = { lat: 46.6100257, lng: -111.989929 }
            var HNL = { lat: 21.3211849, lng: -157.9307321 }
            var KOA = { lat: 19.736916, lng: -156.0451186}
            var KTN = { lat: 55.3554136, lng: -131.7127544 }
            var IAH = { lat: 29.9902245, lng: -95.336782 }
            var JFK = { lat: 40.6413111, lng: -73.7803278 }
            var LAS = { lat: 36.0840041, lng: -115.1559329 }
            var OAK = { lat: 37.7125689, lng: -122.2197428}
            var LAX = { lat: 33.9414147, lng: -118.4105475 }
            var OGG = { lat: 20.8967924, lng: -156.4351319}
            var ORD = { lat: 41.9741665, lng: -87.9095154 }
            var PDX = { lat: 45.5897694, lng: -122.5972882 }
            var RDM = { lat: 44.2494909, lng: -121.1640929 }
            var RNO = { lat: 39.4995907, lng: -119.7680951}
            var SEA = { lat: 47.4502499, lng: -122.3110105 }
            var SAN = { lat: 32.7338006, lng: -117.1954978 }
            var SFO = { lat: 37.6213129, lng: -122.3811494 }
            var SLC = { lat: 40.7899404, lng: -111.9790706}
            var SMF = { lat: 38.6950854, lng: -121.5900648 }
            var SNA = { lat: 33.6761945, lng: -117.8696646}
            var STS = { lat: 38.4267288, lng: -122.9112976,}
            var TUS = { lat: 32.1145102, lng: -110.9414156 }

            /* Markers */
            var markerABQ = new google.maps.Marker({
                position: ABQ,
                title: "ABQ - Albuquerque, New Mexico",
                map: map
            });

            var markerANC = new google.maps.Marker({
                position: ANC,
                title: "ANC - Anchorage, Alaska",
                map: map
            });

            var markerATL = new google.maps.Marker({
                position: ATL,
                title: "ATL - Atlanta, Georgia",
                map: map
            });

            var markerAUS = new google.maps.Marker({
                position: AUS,
                title: "AUS - Austin, Texas",
                map: map
            });

            var markerBOI = new google.maps.Marker({
                position: BOI,
                title: "BOI - Boise, Idaho",
                map: map
            });

            var markerBUR = new google.maps.Marker({
                position: BUR,
                title: "BUR - Burbank, California",
                map: map
            });

            var markerDEN = new google.maps.Marker({
                position: DEN,
                title: "DEN - Denver, Colorado",
                map: map
            });

            var markerDFW = new google.maps.Marker({
                position: DFW,
                title: "DFW - Dallas, Texas",
                map: map
            });

            var markerEWR = new google.maps.Marker({
                position: EWR,
                title: "EWR - Newark, New Jersey",
                map: map
            });

            var markerFAI = new google.maps.Marker({
                position: FAI,
                title: "FAI - Fairbanks, Alaska",
                map: map
            });

            var markerGEG = new google.maps.Marker({
                position: GEG,
                title: "GEG - Spokane, Washington",
                map: map
            });

            var markerHLN = new google.maps.Marker({
                position: HLN,
                title: "HLN - Helena, Montana",
                map: map
            });

            var markerHNL = new google.maps.Marker({
                position: HNL,
                title: "HNL - Honolulu, Hawaii",
                map: map
            });

            var markerKOA = new google.maps.Marker({
                position: KOA,
                title: "KOA - Kona, Hawaii",
                map: map
            });

            var markerKTN = new google.maps.Marker({
                position: KTN,
                title: "KTN - Ketchikan, Alaska",
                map: map
            });

            var markerIAH = new google.maps.Marker({
                position: IAH,
                title: "IAH - Houston, Texas",
                map: map
            });

            var markerJFK = new google.maps.Marker({
                position: JFK,
                title: "JFK - New York City, New York",
                map: map
            });

            var markerLAS = new google.maps.Marker({
                position: LAS,
                title: "LAS - Las Vega, Nevada",
                map: map
            });

            var markerOAK = new google.maps.Marker({
                position: OAK,
                title: "OAK - Oakland, California",
                map: map
            });

            var markerLAX = new google.maps.Marker({
                position: LAX,
                title: "LAX - Los Angeles, California",
                map: map
            });

            var markerOGG = new google.maps.Marker({
                position: OGG,
                title: "OGG - Maui, Hawaii",
                map: map
            });

            var markerORD = new google.maps.Marker({
                position: ORD,
                title: "ORD - Chicago, Illinois",
                map: map
            });

            var markerPDX = new google.maps.Marker({
                position: PDX,
                title: "PDX - Portland, Oregon",
                map: map
            });

            var markerSAN = new google.maps.Marker({
                position: SAN,
                title: "SAN - San Diego, California",
                map: map
            });

            var markerRDM = new google.maps.Marker({
                position: RDM,
                title: "RDM - Remond, Oregon",
                map: map
            });

            var markerRNO = new google.maps.Marker({
                position: RNO,
                title: "RNO - Reno, Nevada",
                map: map
            });

            var markerSEA = new google.maps.Marker({
                position: SEA,
                title: "SEA - Seattle, Washington",
                map: map
            });

            var markerSFO = new google.maps.Marker({
                position: SFO,
                title: "SFO - San Francisco, California",
                map: map
            });

            var markerSLC = new google.maps.Marker({
                position: SLC,
                title: "SLC - Salt Lake City Utah",
                map: map
            });

            var markerSMF = new google.maps.Marker({
                position: SMF,
                title: "SMF - Sacramento, California",
                map: map
            });

            var markerSNA = new google.maps.Marker({
                position: SNA,
                title: "SNA - Santa Ana, California",
                map: map
            });

            var markerSTS = new google.maps.Marker({
                position: STS,
                title: "STS - Santa Rosa, California",
                map: map
            });

            var markerTUS = new google.maps.Marker({
                position: TUS,
                title: "TUS - Tuscon, Arizona",
                map: map
            });

        /* Flight Paths */
            var redColor = '#FF0000';
            var blueColor = '#0080ff';
            var greenColor = '#00ff80';
            var SEA_AMS = [
                SEA, AMS
            ];

            var SEA_AMS_FP = new google.maps.Polyline({
                path: SEA_AMS,
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var ANC_KOA = [
                ANC, KOA
            ];

            var ANC_KOA_FP = new google.maps.Polyline({
                path: ANC_KOA,
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var SEA_HNL = [
                SEA, HNL
            ];

            var SEA_HNL_FP = new google.maps.Polyline({
                path: SEA_HNL,
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var SEA_ANC = [
                SEA, ANC
            ];

            var SEA_ANC_FP = new google.maps.Polyline({
                path: SEA_ANC,
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var SEA_KTN = [
                SEA, KTN
            ];

            var SEA_KTN_FP = new google.maps.Polyline({
                path: SEA_KTN,
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var SEA_OGG = [
                SEA, OGG
            ];

            var SEA_OGG_FP = new google.maps.Polyline({
                path: SEA_OGG,
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var SEA_KOA = [
                SEA, KOA
            ];

            var SEA_KOA_FP = new google.maps.Polyline({
                path: SEA_KOA,
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var SEA_YVR = [
                SEA, YVR
            ];

            var SEA_YVR_FP = new google.maps.Polyline({
                path: SEA_YVR,
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var SEA_PDX = [
                SEA, PDX
            ];

            var SEA_PDX_FP = new google.maps.Polyline({
                path: SEA_PDX,
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var SEA_BUR = [
                SEA, BUR
            ];

            var SEA_BUR_FP = new google.maps.Polyline({
                path: SEA_BUR,
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var PDX_BUR = [
                PDX, BUR
            ];

            var PDX_BUR_FP = new google.maps.Polyline({
                path: PDX_BUR,
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var SEA_LAX = [
                SEA, LAX
            ];

            var SEA_LAX_FP = new google.maps.Polyline({
                path: SEA_LAX,
                geodesic: true,
                strokeColor: blueColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var SEA_GEG = [
                SEA, GEG
            ];

            var SEA_GEG_FP = new google.maps.Polyline({
                path: SEA_GEG,
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            }); 

            var SEA_HLN = [
                SEA, HLN
            ];

            var SEA_HLN_FP = new google.maps.Polyline({
                path: SEA_HLN,
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var SEA_SFO = [
                SEA, SFO
            ];

            var SEA_SFO_FP = new google.maps.Polyline({
                path: SEA_SFO,
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var SEA_SMF = [
                SEA, SMF
            ];

            var SEA_SMF_FP = new google.maps.Polyline({
                path: SEA_SMF,
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var SEA_RNO = [
                SEA, RNO
            ];

            var SEA_RNO_FP = new google.maps.Polyline({
                path: SEA_RNO,
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var SEA_BOI = [
                SEA, BOI
            ];

            var SEA_BOI_FP = new google.maps.Polyline({
                path: SEA_BOI,
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var SEA_LAS = [
                SEA, LAS
            ];

            var SEA_LAS_FP = new google.maps.Polyline({
                path: SEA_LAS,
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var SEA_SLC = [
                SEA, SLC
            ];

            var SEA_SLC_FP = new google.maps.Polyline({
                path: SEA_SLC,
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var SEA_DEN = [
                SEA, DEN
            ];

            var SEA_DEN_FP = new google.maps.Polyline({
                path: SEA_DEN,
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var SEA_ABQ = [
                SEA, ABQ
            ];

            var SEA_ABQ_FP = new google.maps.Polyline({
                path: SEA_ABQ,
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var SEA_TUS = [
                SEA, TUS
            ];

            var SEA_TUS_FP = new google.maps.Polyline({
                path: SEA_TUS,
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var SEA_DFW = [
                SEA, DFW
            ];

            var SEA_DFW_FP = new google.maps.Polyline({
                path: SEA_DFW,
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var SEA_AUS = [
                SEA, AUS
            ];

            var SEA_AUS_FP = new google.maps.Polyline({
                path: SEA_AUS,
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var SEA_ORD = [
                SEA, ORD
            ];

            var SEA_ORD_FP = new google.maps.Polyline({
                path: SEA_ORD,
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var SEA_EWR = [
                SEA,EWR
            ];

            var SEA_EWR_FP = new google.maps.Polyline({
                path: SEA_EWR,
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var SEA_JFK = [
                SEA,JFK
            ];

            var SEA_JFK_FP = new google.maps.Polyline({
                path: SEA_JFK,
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var SEA_SAN = [
                SEA, SAN
            ];

            var SEA_SAN_FP = new google.maps.Polyline({
                path: SEA_SAN,
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var SEA_ATL = [
                SEA, ATL
            ];

            var SEA_ATL_FP = new google.maps.Polyline({
                path: SEA_ATL,
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var PDX_ORD = [
                PDX, ORD
            ];

            var PDX_ORD_FP = new google.maps.Polyline({
                path: PDX_ORD,
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var ABQ_DFW = [
                ABQ, DFW
            ];

            var ABQ_DFW_FP = new google.maps.Polyline({
                path: ABQ_DFW,
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var LAS_IAH = [
                LAS, IAH
            ];

            var LAS_IAH_FP = new google.maps.Polyline({
                path: LAS_IAH,
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var IAH_UIO = [
                IAH, UIO
            ];

            var IAH_UIO_FP = new google.maps.Polyline({
                path: IAH_UIO,
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var ATL_MEX_FP = new google.maps.Polyline({
                path: [ATL, MEX],
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var MEX_UIO_FP = new google.maps.Polyline({
                path: [MEX, UIO],
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var SAN_SJD_FP = new google.maps.Polyline({
                path: [SAN, SJD],
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var LAX_SJD_FP = new google.maps.Polyline({
                path: [LAX, SJD],
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var HKG_YVR_FP = new google.maps.Polyline({
                path: [HKG, YVR],
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var HKG_SFO_FP = new google.maps.Polyline({
                path: [HKG, SFO],
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var SEA_KEF_FP = new google.maps.Polyline({
                path: [SEA, KEF],
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var SEA_FRA_FP = new google.maps.Polyline({
                path: [SEA, FRA],
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var KEF_MUC_FP = new google.maps.Polyline({
                path: [KEF, MUC],
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var FRA_MUC_FP = new google.maps.Polyline({
                path: [FRA, MUC],
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var AMS_GOT_FP = new google.maps.Polyline({
                path: [AMS, GOT],
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var EWR_LAX_FP = new google.maps.Polyline({
                path: [LAX, EWR],
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var LAX_HND_FP = new google.maps.Polyline({
                path: [LAX, HND],
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var HND_CDG_FP = new google.maps.Polyline({
                path: [HND, CDG],
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var CDG_EZE_FP = new google.maps.Polyline({
                path: [CDG, EZE],
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var SEA_FAI_FP = new google.maps.Polyline({
                path: [SEA, FAI],
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var SEA_SNA_FP = new google.maps.Polyline({
                path: [SEA, SNA],
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var SNA_STS_FP = new google.maps.Polyline({
                path: [SNA, STS],
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var STS_LAX_FP = new google.maps.Polyline({
                path: [STS, LAX],
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var SEA_OAK_FP = new google.maps.Polyline({
                path: [SEA, OAK],
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var ATL_EZE_FP = new google.maps.Polyline({
                path: [ATL, EZE],
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var SFO_RDM_FP = new google.maps.Polyline({
                path: [SFO, RDM],
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var SEA_RDM_FP = new google.maps.Polyline({
                path: [SEA, RDM],
                geodesic: true,
                strokeColor: redColor,
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            LAX_HND_FP.setMap(map);
            HND_CDG_FP.setMap(map);
            CDG_EZE_FP.setMap(map);

            ABQ_DFW_FP.setMap(map);

            ANC_KOA_FP.setMap(map);

            SAN_SJD_FP.setMap(map);

            /* Seattle */
            SEA_AMS_FP.setMap(map);
            SEA_HNL_FP.setMap(map);
            SEA_ANC_FP.setMap(map);
            SEA_KTN_FP.setMap(map);
            SEA_OGG_FP.setMap(map);
            SEA_KOA_FP.setMap(map);
            SEA_YVR_FP.setMap(map);
            SEA_PDX_FP.setMap(map);
            SEA_BUR_FP.setMap(map);
            SEA_LAX_FP.setMap(map);
            SEA_GEG_FP.setMap(map);
            SEA_HLN_FP.setMap(map);
            SEA_SFO_FP.setMap(map);
            SEA_SMF_FP.setMap(map);
            SEA_RNO_FP.setMap(map);
            SEA_BOI_FP.setMap(map);
            SEA_LAS_FP.setMap(map);
            SEA_SLC_FP.setMap(map);
            SEA_DEN_FP.setMap(map);
            SEA_ABQ_FP.setMap(map);
            SEA_TUS_FP.setMap(map);
            SEA_DFW_FP.setMap(map);
            SEA_AUS_FP.setMap(map);
            SEA_ORD_FP.setMap(map);
            SEA_EWR_FP.setMap(map);
            SEA_JFK_FP.setMap(map);
            SEA_SAN_FP.setMap(map);
            SEA_ATL_FP.setMap(map);
            SEA_KEF_FP.setMap(map);
            SEA_FRA_FP.setMap(map);
            SEA_FAI_FP.setMap(map);
            SEA_SNA_FP.setMap(map);
            SEA_OAK_FP.setMap(map);
            SEA_RDM_FP.setMap(map);

            SNA_STS_FP.setMap(map);
            STS_LAX_FP.setMap(map);
            
        

            PDX_BUR_FP.setMap(map);
            PDX_ORD_FP.setMap(map);

            LAS_IAH_FP.setMap(map);
            LAX_SJD_FP.setMap(map);

            IAH_UIO_FP.setMap(map);
            HKG_SFO_FP.setMap(map);
            HKG_YVR_FP.setMap(map);

            ATL_MEX_FP.setMap(map);
            MEX_UIO_FP.setMap(map);

            KEF_MUC_FP.setMap(map);
            FRA_MUC_FP.setMap(map);
            AMS_GOT_FP.setMap(map);
            EWR_LAX_FP.setMap(map);
            ATL_EZE_FP.setMap(map);
            SFO_RDM_FP.setMap(map);
           



       


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





             
    }


