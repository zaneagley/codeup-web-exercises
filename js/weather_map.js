    "use strict";

    var daysShown = $('#daysToShow').val();
    var lat = '';
    var lng = '';
    var marker = '';


        // Original setting Map and Marker

    function initMap() {
        var mapCanvas = document.getElementById('map-canvas');
        var geocoder = new google.maps.Geocoder();
        var infowindow = new google.maps.InfoWindow;
        var mapOptions = {
            zoom: 10,
            center: {
                lat: 29.419434,
                lng: -98.494694
            }

        };
        var input = document.getElementById('searchInput');
        new google.maps.places.Autocomplete(input)
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var marker = new google.maps.Marker({
            position: {
                lat: 29.419434,
                lng: -98.494694
            },
            map: map,
            draggable: true
        });

        // Dragging functionality

        google.maps.event.addDomListener(window, 'load', initMap);
        google.maps.event.addListener(marker, 'dragend', function (event) {
            $.ajax("http://api.openweathermap.org/data/2.5/forecast?lat=" + event.latLng.lat().toFixed(3) + "&lon=" + event.latLng.lng().toFixed(3) + "&APPID=027a0cfc318b8db92387b938997021b0").done(function (data) {
                lat = marker.getPosition().lat();
                lng = marker.getPosition().lng();
                geocodeLatLng(geocoder, map, infowindow, data);
            });
        });
        google.maps.event.addListener(marker, 'dragstart', function () {
            $('#chosenCity').innerHTML = '<p>Currently dragging marker...</p>';
        });
        marker.addListener('click', function () {
            map.setCenter(marker.getPosition());
        });

        // Submits the address/place tracking input

        $('#submitBtn').click(function () {
            enterBtn()
        });

        // Enables pressing Enter key to submit

        $('#searchInput').keyup(function (event) {
            if (event.keyCode === 13) {
                enterBtn()
            }
        })

        // Grabs the location that was double clicked, moving the marker
        // and cycling through the weather data.

        google.maps.event.addListener(map,'dblclick',function(event) {
            var doubleClickPos = event.latLng;
            marker.setPosition(doubleClickPos);
            lat = marker.getPosition().lat();
            lng = marker.getPosition().lng();
            $.ajax("http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lng + "&APPID=027a0cfc318b8db92387b938997021b0").done(function (data) {
                geocodeLatLng(geocoder, map, infowindow, data);
            });
        });

        // When pressing the submit button for search input
        // cycles through the weatherApp function and scrolls
        // down to the map.

        function enterBtn(){
                geocodeAddress(geocoder, map);
                $('html, body').animate({
                    scrollTop: $('#map-canvas').offset().top + 'px'
                }, 'fast');
            };



        function geocodeAddress(geocoder, resultsMap) {
            var address = $('#searchInput').val();
            geocoder.geocode({'address': address}, function (results, status) {
                if (status === 'OK') {
                    resultsMap.setCenter(results[0].geometry.location);
                    marker.setPosition(results[0].geometry.location);
                    lat = marker.getPosition().lat();
                    lng = marker.getPosition().lng();
                    $.ajax("http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lng + "&APPID=027a0cfc318b8db92387b938997021b0").done(function (data) {
                        geocodeLatLng(geocoder, map, infowindow, data);
                    });
                } else {
                    alert('Geocode was not successful for the following reason: ' + status);
                }
            });
        }

        function geocodeLatLng(geocoder, map, infowindow, data) {
            var latlng = {lat: lat, lng: lng};
            geocoder.geocode({'location': latlng}, function (results, status) {
                if (status === 'OK') {
                    if (results[0]) {
                        marker.setPosition(latlng);
                        infowindow.setContent(weatherMarkerInfo(data));
                        infowindow.open(map, marker);
                        weatherApp(data);
                    } else {
                        window.alert('No results found');
                    }
                } else {
                    window.alert('Geocoder failed due to: ' + status);
                }
            });
        }

        lat = marker.getPosition().lat();
        lng = marker.getPosition().lng();
        $('#daysToShow').change(function () {
            $.ajax("http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lng + "&APPID=027a0cfc318b8db92387b938997021b0").done(function (data) {
                weatherApp(data);
            });
        });
    }

    //       /\
    //       |    All Google Maps and API related functions
    //       |


    // Original output for the page

    $.ajax("http://api.openweathermap.org/data/2.5/forecast?id=4726206&APPID=027a0cfc318b8db92387b938997021b0").done(function (data) {
        weatherApp(data)
    });


    // Main Function
    // Creates an empty array, cycles through the 40 available
    // forecast arrays, and outputs depending on selected checkboxes

    function weatherApp(data) {
        var arrDays = [];
        var listDays = data.list;
        var daysShown = $('#daysToShow').val();
        const getMinMaxDayTemp = (data, day) => {
            const temps = data.list.slice(day * 8 - 8, day * 8)
                .reduce((prev, curr) => {
                prev.push(curr.main.temp);
            return prev;
        }, []).sort();
            return {min: temps.shift(), max: temps.pop()};
        };
        daysShown = parseInt(daysShown);
        $('#chosenCity').html(data.city.name);
        switch (daysShown) {
            case 1:
                arrDays.push(listDays[0]);
                break;
            case 2:
                arrDays.push(listDays[0],listDays[8]);
                break;
            case 3:
                arrDays.push(listDays[0],listDays[8],listDays[16]);
                break;
            case 4:
                arrDays.push(listDays[0],listDays[8],listDays[16], listDays[24]);
                break;
            case 5:
                arrDays.push(listDays[0],listDays[8],listDays[16], listDays[24], listDays[32]);
                break;
            default:
                arrDays.push(listDays[0],listDays[8],listDays[16]);
                break;
        }
        var output = '';
        var min_max = [];

        // Per the above getMinMaxDayTemp, need i to start at 1
        // to enable the getMinMaxDayTemp to accumilate properly

        for (var i = 1; i<=arrDays.length; i++){
           var temps = getMinMaxDayTemp(data, i)
            min_max.push(temps)
        }

        // Grabs the images for the background depending
        // on the weather conditions

        if (data.list[0].weather[0].main == "Rain") {
            $('body').css('background-image', 'url("http://www.gifimili.com/gif/2018/03/pluie-dessin-parapluie.gif")')
        }
        else if (data.list[0].weather[0].main == "Clouds") {
            $('body').css('background-image', 'url("https://orig00.deviantart.net/11fe/f/2010/034/8/0/sea_of_clouds___iv_by_mattthesamurai.gif")')
        }
        else if (data.list[0].weather[0].main == "Clear") {
            $('body').css('background-image', 'url("images/clear-bg.jpg")')
        }
        arrDays.forEach(function (data, i) {

            output += '<div class="col-xs-12 col-md forecastColor border border-dark p-0">';
            output += '<p class="mt-2">Day: ' + (i+1) + '</p><br>';
            if (document.getElementById("temperature").checked === true) {
                output += '<p class="temperatureInfo m-0">' + Math.round(((min_max[i].min - 273.15) * 1.8) + 32);
                output += '°/' + Math.round(((min_max[i].max - 273.15) * 1.8) + 32) + '°</p>';
            }
            $.each(data.weather, function (i, item) {
                if (document.getElementById("icon").checked === true) {
                    output += '<img class="iconInfo m-0" src="http://openweathermap.org/img/w/' + item.icon + '.png">';
                }
                if (document.getElementById("conditions").checked === true) {
                    output += '<p class="conditionsInfo m-0"><strong>' + item.main + '</strong>: ';
                    output += item.description + '</p>';
                }
            });
            if (document.getElementById("humidity").checked === true) {
                output += '<p class="humidityInfo m-0"><strong>Humidity</strong>: ' + data.main.humidity + '</p>';
            }
            if (document.getElementById("wind").checked === true) {
                output += '<p class="windInfo m-0"><strong>Wind</strong>: ' + data.wind.speed + '</p>';
            }
            if (document.getElementById("pressure").checked === true) {
                output += '<p class="pressureInfo m-0"><strong>Pressure</strong> ' + data.main.pressure + '</p>';
            }

            output += '</div>';
            $("#forecast").append(output);
        });

        $("#forecast").html(output);
    }


    // Marker Info Window

    function weatherMarkerInfo(data) {
        var output = '';
        if (document.getElementById("temperature").checked === true) {
            output +=  '<p><strong>' + data.city.name + '</strong></p>';
            output += '<p class="temperatureInfo m-0 info-window">' + Math.round(((data.list[0].main.temp_min - 273.15) * 1.8) + 32);
            output += '°/' + Math.round(((data.list[0].main.temp_max - 273.15) * 1.8) + 32) + '°</p>';
        }
        $.each(data.list[0].weather, function (i, item) {
            if (document.getElementById("icon").checked === true) {
                output += '<br><img class="iconInfo m-0" src="http://openweathermap.org/img/w/' + item.icon + '.png">';
            }
            if (document.getElementById("conditions").checked === true) {
                output += '<p class="conditionsInfo m-0 info-window"><strong>' + item.main + '</strong>: ';
                output += item.description + '</p>';
            }
        });
        if (document.getElementById("humidity").checked === true) {
            output += '<br><p class="humidityInfo m-0 info-window"><strong>Humidity</strong>: ' + data.list[0].main.humidity + '</p>';
        }
        if (document.getElementById("wind").checked === true) {
            output += '<br><p class="windInfo m-0 info-window"> <strong>Wind</strong>: ' + data.list[0].wind.speed + '</p>';
        }
        if (document.getElementById("pressure").checked === true) {
            output += '<br><p class="pressureInfo m-0 info-window"><strong>Pressure</strong> ' + data.list[0].main.pressure + '</p>';
        }
        return output
    }






    // Display/Hide Checkboxes

    $('#temperature').change(function () {
        $('.temperatureInfo').toggleClass('hideTemp');
    });
    $('#icon').change(function () {
        $('.iconInfo').toggleClass('hideIcon');
    });
    $('#conditions').change(function () {
        $('.conditionsInfo').toggleClass('hideCon');
    });
    $('#humidity').change(function () {
        $('.humidityInfo').toggleClass('hideHum');
    });
    $('#wind').change(function () {
        $('.windInfo').toggleClass('hideWind');
    });
    $('#pressure').change(function () {
        $('.pressureInfo').toggleClass('hidePres');
    });
