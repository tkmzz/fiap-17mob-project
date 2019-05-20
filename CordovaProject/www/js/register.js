document.getElementById("register").addEventListener("click", function (event) {
    var name = document.getElementById("inputName").value;
    var email = document.getElementById("inputEmail").value;
    var password = document.getElementById("inputPassword").value;
    event.preventDefault()
    createUser(name, email, password)
});

function createUser(name, email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function (resp) {
        save(resp.user.uid, name)
    }).catch(function (error) {
        var errorMessage = error.message;
        alert(errorMessage)

    });
}

function save(uid, name) {
    firebase.database().ref('users/' + uid).set({
        name: name
    }).then(function () {
        window.location.href = 'main.html'
    }).catch(function (error) {

    });
    console.log(uid);
}
