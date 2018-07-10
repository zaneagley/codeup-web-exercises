(function () {
    "use strict"





    $.ajax("http://api.openweathermap.org/data/2.5/forecast?id=4726206&APPID=027a0cfc318b8db92387b938997021b0").done(function (data) {
        weatherApp(data)
    });

    $('#chosenLatLon').click(function () {
        var lat = $('#latitudeInput').val();
        var lon = $('#longitudeInput').val();
        $.ajax("http://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&APPID=027a0cfc318b8db92387b938997021b0").done(function (data) {
          weatherApp(data)
        });

    });


    function weatherApp(data) {
        $('#chosenCity').html(data.city.name);
        var output = '';
        console.log(data);
        output += '<div class="col-sm-4 border border-dark">';
        output += Math.round(((data.list[0].main.temp_min-273.15)*1.8)+32);
        output += '/' + Math.round(((data.list[0].main.temp_max-273.15)*1.8)+32);
        $.each(data.list[0].weather, function (i, item) {
            output += '<br><strong>' + item.main + '</strong>: ';
            //  output += '<br>' + item.icon;
            output +=  item.description;
        });
        output += '<br><strong>Humidity</strong>: ' + data.list[0].main.humidity;
        output += '<br><strong>Wind</strong>: ' + data.list[0].wind.speed;
        output += '<br><strong>Pressure</strong> ' + data.list[0].main.pressure;
        output += '</div>';

        output += '<div class="col-sm-4 border border-dark">';
        output += Math.round(((data.list[7].main.temp_min-273.15)*1.8)+32);
        output += '/' + Math.round(((data.list[7].main.temp_max-273.15)*1.8)+32);
        $.each(data.list[7].weather, function (i, item) {
            output += '<br><strong>' + item.main + '</strong>: ';
            //  output += '<br>' + item.icon;
            output +=  item.description;
        });
        output += '<br><strong>Humidity</strong>: ' + data.list[7].main.humidity;
        output += '<br><strong>Wind</strong>: ' + data.list[7].wind.speed;
        output += '<br><strong>Pressure</strong> ' + data.list[7].main.pressure;
        output += '</div>';

        output += '<div class="col-sm-4 border border-dark">';
        output += Math.round(((data.list[15].main.temp_min-273.15)*1.8)+32);
        output += '/' + Math.round(((data.list[15].main.temp_max-273.15)*1.8)+32);
        $.each(data.list[15].weather, function (i, item) {
            output += '<br><strong>' + item.main + '</strong>: ';
            //  output += '<br>' + item.icon;
            output +=  item.description;
        });
        output += '<br><strong>Humidity</strong>: ' + data.list[15].main.humidity;
        output += '<br><strong>Wind</strong>: ' + data.list[15].wind.speed;
        output += '<br><strong>Pressure</strong> ' + data.list[15].main.pressure;
        output += '</div>';
        $("#forecast").html(output);
    }

})();