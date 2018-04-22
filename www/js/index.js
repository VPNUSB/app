function setOptions(srcType) {
    var options = {
        // Some common settings are 20, 50, and 100
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        // In this app, dynamically set the picture source, Camera or photo gallery
        sourceType: srcType,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE,
        allowEdit: true,
        correctOrientation: true  //Corrects Android orientation quirks
    }
    return options;
}

window.addEventListener("batterystatus", onBatteryStatus, false);

function onBatteryStatus(status) {
    alert("Level: " + status.level + " isPlugged: " + status.isPlugged);
}



function openCamera(selection) {
 
    var srcType = Camera.PictureSourceType.CAMERA;
    var options = setOptions(srcType);
    var func = createNewFileEntry;
 
    navigator.camera.getPicture(function cameraSuccess(imageUri) {
        alert("Usucess")
        displayImage(imageUri);
        // You may choose to copy the picture, save it somewhere, or upload.
        //func(imageUri);
 
    }, function cameraError(error) {
        alert("Unable to obtain picture: " + error);
 
    }, options);
}

function displayImage(imgUri) {
 
    var elem = document.getElementById('imageFile');
    elem.src = imgUri;
}