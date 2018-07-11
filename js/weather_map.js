    "use strict";

    var daysShown = $('#daysToShow').val();
    var lat = '';
    var lng = '';


    function initMap() {
        var mapCanvas = document.getElementById('map-canvas');
        var geocoder = new google.maps.Geocoder();
        var infowindow = new google.maps.InfoWindow;
        var mapOptions = {
            zoom: 10,
            center: {
                lat: 29.4958247,
                lng: -98.5352398
            }
        };
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var marker = new google.maps.Marker({
            position:  {
                lat: 29.4958247,
                lng: -98.5352398
            },
            map: map,
            draggable:true
        });

        // Dragging functionality

        google.maps.event.addDomListener(window, 'load', initMap);
        google.maps.event.addListener(marker, 'dragend', function(event){
            $.ajax("http://api.openweathermap.org/data/2.5/forecast?lat="+event.latLng.lat().toFixed(3)+"&lon="+event.latLng.lng().toFixed(3)+"&APPID=027a0cfc318b8db92387b938997021b0").done(function (data) {
                weatherApp(data);
                lat = marker.getPosition().lat();
                lng = marker.getPosition().lng();
                geocodeLatLng(geocoder, map, infowindow, data);
            });
        });
        google.maps.event.addListener(marker, 'dragstart', function(){
            $('#chosenCity').innerHTML = '<p>Currently dragging marker...</p>';
        });
        marker.addListener('click', function() {
            map.setZoom(12);
            map.setCenter(marker.getPosition());
        });


        // $('#submitBtn').click(function () {
        //     geocodeAddress(geocoder, map);
        // });

        // function geocodeAddress(geocoder, resultsMap) {
        //     var address = $('#searchInput').val();
        //     geocoder.geocode({'address': address}, function(results, status) {
        //         if (status === 'OK') {
        //             resultsMap.setCenter(results[0].geometry.location);
        //             var marker = new google.maps.Marker({
        //                 map: resultsMap,
        //                 position: results[0].geometry.location,
        //                 draggable:true
        //             });
        //              lat = marker.getPosition().lat();
        //              lng = marker.getPosition().lng();
        //             $.ajax("http://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lng+"&APPID=027a0cfc318b8db92387b938997021b0").done(function (data) {
        //                weatherApp(data)
        //                // geocodeLatLng(geocoder, map, infowindow, data);
        //             });
        //         } else {
        //             alert('Geocode was not successful for the following reason: ' + status);
        //         }
        //     });
        // }
        //
        // function geocodeLatLng(geocoder, map, infowindow, data) {
        //     var latlng = {lat: lat, lng: lng};
        //     geocoder.geocode({'location': latlng}, function(results, status) {
        //         if (status === 'OK') {
        //             if (results[0]) {
        //                 map.setZoom(9);
        //                 var marker = new google.maps.Marker({
        //                     position: latlng,
        //                     map: map,
        //                     draggable:true
        //                 });
        //                 infowindow.setContent(weatherMarkerInfo(data));
        //                 infowindow.open(map, marker);
        //             } else {
        //                 window.alert('No results found');
        //             }
        //         } else {
        //             window.alert('Geocoder failed due to: ' + status);
        //         }
        //     });
        // }

        lat = marker.getPosition().lat();
        lng = marker.getPosition().lng();
        $('#daysToShow').change(function () {
            $.ajax("http://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lng+"&APPID=027a0cfc318b8db92387b938997021b0").done(function (data) {
            weatherApp(data);
            });
        });

    }


    $.ajax("http://api.openweathermap.org/data/2.5/forecast?id=4726206&APPID=027a0cfc318b8db92387b938997021b0").done(function (data) {
        weatherApp(data)
    });


    function weatherApp(data) {
        var arrDays = [];
        var listDays = data.list;
        var daysShown = $('#daysToShow').val();
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
            output += '<div class="col forecastColor border border-dark p-0">';
            output += '<p class="m-2">Day: ' + (i+1) + '</p><br>';
            output += Math.round(((data.main.temp_min-273.15)*1.8)+32);
            output += '/' + Math.round(((data.main.temp_max-273.15)*1.8)+32);
            $.each(data.weather, function (i, item) {
                output += '<br><img src="http://openweathermap.org/img/w/'+ item.icon + '.png">';
                output += '<br><strong>' + item.main + '</strong>: ';
                output +=  item.description;
            });
            output += '<br><strong>Humidity</strong>: ' + data.main.humidity;
            output += '<br><strong>Wind</strong>: ' + data.wind.speed;
            output += '<br><strong>Pressure</strong> ' + data.main.pressure;
            output += '</div>';
            $("#forecast").append(output);
        });

        $("#forecast").html(output);
    }

    function weatherMarkerInfo(data) {
        var output = '';
        output += '<p>' + Math.round(((data.list[0].main.temp_min-273.15)*1.8)+32);
        output += '/' + Math.round(((data.list[0].main.temp_max-273.15)*1.8)+32)+'</p>';
        $.each(data.list[0].weather, function (i, item) {
            output += '<br><img src="http://openweathermap.org/img/w/'+ item.icon + '.png">';
            output += '<br><p><strong>' + item.main + '</strong>: ';
            output +=  item.description + '</p>';
        });
        output += '<br><strong>Humidity</strong>: ' + data.list[0].main.humidity;
        output += '<br><strong>Wind</strong>: ' + data.list[0].wind.speed;
        output += '<br><strong>Pressure</strong> ' + data.list[0].main.pressure;
        return output
    }


