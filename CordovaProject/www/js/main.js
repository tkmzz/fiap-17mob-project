document.getElementById('logout').addEventListener('click', function () {
    firebase.auth().signOut().then(function () {
        window.location.href = 'index.html'
    }, function (error) {
        console.log('error logout')
    });
});

document.getElementById('edit').addEventListener('click', function () {
    window.location.href = 'edit.html'
});

document.getElementById('takePhoto').addEventListener('click', () => {
    let options = {
        quality: 40,
        destinationType: Camera.DestinationType.DATA_URL,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE,
        targetWidth: 720,
        correctOrientation: true
    }

    takePicture(options)
})

document.getElementById('search').addEventListener('click', function () {
    window.location.href = 'searchGitUser.html'
});

var takePicture = (options) => {
    navigator.camera.getPicture((image_data) => {
        var image = document.getElementById('camera');
        image.src = "data:image/jpeg;base64," + image_data;
    },
        (error) => {
            console.log(error)
        }, options)
}

var user = JSON.parse(sessionStorage.getItem('user'));

firebase.database().ref('/users/' + user.uid).once('value').then(function (snapshot) {
    document.getElementById('name').innerHTML = 'Welcome ' + snapshot.val().name
});