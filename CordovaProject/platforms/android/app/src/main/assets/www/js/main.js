var user = JSON.parse(sessionStorage.getItem('users'));


firebase.database().ref('/users/' + user.uid).once('value').then(function (snapshot) {
    document.getElementById("name").innerHTML = "Name: " + snapshot.val().name
});


document.getElementById("logout").addEventListener("click", function () {
    firebase.auth().signOut().then(function () {
        window.location.href = 'index.html'
    }, function (error) {
        console.log("error logout")
    });
});