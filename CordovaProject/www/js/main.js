var user = JSON.parse(sessionStorage.getItem('user'));
console.log(user)


firebase.database().ref('/user/' + user.uid).once('value').then(function (snapshot) {
    document.getElementById("nome").innerHTML = "Nome: " + snapshot.val().name
});


document.getElementById("logout").addEventListener("click", function () {
    firebase.auth().signOut().then(function () {
        window.location.href = 'index.html'
    }, function (error) {
        console.log("error logout")
    });
});