document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    alert("yo!");
        
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
   


}
var provider = new firebase.auth.GoogleAuthProvider();
var user;
function signIn() {
    firebase.auth().signInWithRedirect(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      user = result.user;
      alert("info" + result.user);
      // ...
    }).catch(function(error) {
        alert("error!" + error.message + " " + error.code);
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });

};