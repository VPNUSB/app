
    
$("#getWeather").click(function(){
    var city = $("#city").val();
    var key = '33dbe3b930c23ad2c7a0630b49f3e440';   
    
    $.get('http://api.openweathermap.org/data/2.5/weather', {q:city, appid:key, units: 'metric'},  function(data) {
            var zm = '';
            $.each(data.weather, function(index, val){
                zm += '<p><b>' + data.name + "</b></p>" + data.main.temp + '&deg;C' + '|' + val.main + ", " + val.description
            });
            $("#show").html(zm);
        }, 'json');         
});
      
