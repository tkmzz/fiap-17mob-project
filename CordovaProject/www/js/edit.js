var user = JSON.parse(sessionStorage.getItem('user'));


document.getElementById('edit').addEventListener('click', function (event) {
    var name = document.getElementById('inputName').value;
    event.preventDefault()
    editName(name)
});


function editName(name) {
    firebase.database().ref('users/' + user.uid).update({
        name: name,
    }).then(function () {
        window.location.href = 'main.html'
    }).catch(function (error) {

    });
}