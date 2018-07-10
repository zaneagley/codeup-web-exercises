    "use strict";

    var daysShown = $('#daysToShow').val();


    function initMap() {
        var mapCanvas = document.getElementById('map-canvas');
        // Must have map configuration of zoom and location.
        var mapOptions = {
            zoom: 10,
            center: {
                lat: 29.4958247,
                lng: -98.5352398
            }
        };

        var map = new google.maps.Map(mapCanvas, mapOptions);
        google.maps.event.addDomListener(window, 'load', initMap);
        var marker = new google.maps.Marker({
            position:  {
                lat: 29.4958247,
                lng: -98.5352398
            },
            map: map,
            draggable:true
        });


        var lat = '';
        var lng = '';

        google.maps.event.addListener(marker, 'dragend', function(event){
            $.ajax("http://api.openweathermap.org/data/2.5/forecast?lat="+event.latLng.lat().toFixed(3)+"&lon="+event.latLng.lng().toFixed(3)+"&APPID=027a0cfc318b8db92387b938997021b0").done(function (data) {
                lat = event.latLng.lat().toFixed(3);
                lng = event.latLng.lng().toFixed(3);
                weatherApp(data);
            });
        });
        google.maps.event.addListener(marker, 'dragstart', function(){
            $('#chosenCity').innerHTML = '<p>Currently dragging marker...</p>';
        });
        marker.addListener('click', function() {
            map.setZoom(12);
            map.setCenter(marker.getPosition());
        });




        $('#daysToShow').change(function () {
            $.ajax("http://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lng+"&APPID=027a0cfc318b8db92387b938997021b0").done(function (data) {
            weatherApp(data)
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
        console.log(daysShown);
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
        arrDays.forEach(function (data) {
            output += '<div class="col border border-dark bg-light p-0">';
            output += Math.round(((data.main.temp_min-273.15)*1.8)+32);
            output += '/' + Math.round(((data.main.temp_max-273.15)*1.8)+32);
            $.each(data.weather, function (i, item) {
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


