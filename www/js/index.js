document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    navigator.camera.getPicture(onSuccess, onFail, { quality: 50, 
    destinationType: Camera.DestinationType.DATA_URL});
function onSuccess(imageData){
    var image = document.getElementById('imageFile');
    image.src = "data:image/jpeg;base64," +imageData;
    alert("image updated");
}
function onFail(message){
    alert("fail " + message);
}
}
