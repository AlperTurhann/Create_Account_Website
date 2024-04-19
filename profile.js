document.addEventListener("DOMContentLoaded", function() {
    if (sessionStorage.getItem('Name') && sessionStorage.getItem("Mail")) {
        var nameSurname = sessionStorage.getItem('Name').trim().split(' ');
        var name = nameSurname[0];
        for (let i = 1; i < nameSurname.length - 1; i++) {
            name += nameSurname[i];
        }
        var surname = nameSurname[nameSurname.length - 1];
        var mail = sessionStorage.getItem('Mail');

        document.getElementById("name").innerHTML = name;
        document.getElementById("surname").innerHTML = surname;
        document.getElementById("mail").innerHTML = mail;
    } else {
        window.location.href = "index.html";
    }

    /*
    var params = new URLSearchParams(window.location.search);
    if (params.size > 0) {
        var nameSurname = params.get('name').trim().split(' ');
        var name = nameSurname[0];
        for (let i = 1; i < nameSurname.length - 1; i++) {
            name += nameSurname[i];
        }
        var surname = nameSurname[nameSurname.length - 1];
        var mail = params.get('mail');

        document.getElementById("name").innerHTML = name;
        document.getElementById("surname").innerHTML = surname;
        document.getElementById("mail").innerHTML = mail;
    } else {
        window.location.href = "index.html";
    }
*/
});