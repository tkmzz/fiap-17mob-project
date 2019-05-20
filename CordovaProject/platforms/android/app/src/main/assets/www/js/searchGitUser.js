document.getElementById("search").addEventListener("click", function () {
    var name = document.getElementById("userId").value;
    console.log("User" + name);

    var xhr;
    xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open("GET", 'https://api.github.com/users/' + name, true);


    xhr.onreadystatechange = function (e) {
        if (xhr.readyState == 4) {
            document.getElementById("username").textContent = xhr.response.name;
            document.getElementById("camera").src = xhr.response.avatar_url;

        }
    }
    xhr.send();
});