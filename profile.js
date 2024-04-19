const buttonShowMore = document.getElementById("buttonShowMore");
const description = document.getElementById("description");

document.addEventListener("DOMContentLoaded", function() {
    if (sessionStorage.getItem('name') && sessionStorage.getItem("mail")) {
        var nameSurname = sessionStorage.getItem('name').trim().split(' ');
        var name = nameSurname[0];
        for (let namePart = 1; namePart < nameSurname.length - 1; namePart++) {
            name += " " + nameSurname[namePart];
        }
        var surname = nameSurname[nameSurname.length - 1];
        var mail = sessionStorage.getItem('mail');

        for (let userInput = 0; userInput < sessionStorage.length; userInput++) {
            let key = sessionStorage.key(userInput);
            if (key == "name" || key == "mail") continue;
            let content = "";

            if (sessionStorage.getItem(key)) content = sessionStorage.getItem(key);
            else content = "-";

            document.getElementById(key).innerHTML = content;

            if (key == "description") {
                if (!isTextOverflowing(description)) buttonShowMore.remove();
                else buttonShowMore.addEventListener("click", showMoreAndLess);
            }
        }

        document.getElementById("name").innerHTML = name;
        document.getElementById("surname").innerHTML = surname;
        document.getElementById("mail").innerHTML = mail;
        document.getElementById("nameSurname").innerHTML = sessionStorage.getItem('name');
    } else window.location.href = "/Create_Account_Website/index.html";
});

function showMoreAndLess() {
    if (buttonShowMore.innerHTML == "Show More") {
        buttonShowMore.innerHTML = "Show Less";
        description.classList.add("overflow-auto");
        description.classList.remove("overflow-hidden");
    } else {
        buttonShowMore.innerHTML = "Show More";
        description.classList.remove("overflow-auto");
        description.classList.add("overflow-hidden");
    }
}

function isTextOverflowing(element) {
    console.log(element.scrollHeight);
    console.log(element.clientHeight);
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}