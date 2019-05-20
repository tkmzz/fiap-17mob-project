


firebase.auth().onAuthStateChanged(function (User) {
    if (User) {
        sessionStorage.setItem('User', JSON.stringify(User))
        window.location.href = 'main.html'
    } else {
        // User is signed out.
        // ...
    }
});


document.getElementById("login").addEventListener("click", function (event) {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    event.preventDefault()

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function (User) {
            sessionStorage.setItem('User', JSON.stringify(User))
            window.location.href = 'main.html'
        })
        .catch(function (error) {
            console.error(error);
        });
});

/*var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();*/