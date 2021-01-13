/*
document.getElementById('button2').addEventListener('click', loadUsers);
document.getElementById('button1').addEventListener('click', loadUser);



function loadUser() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'user.json', true);

    xhr.onload = function () {
        if (this.status == 200) {
            var user = JSON.parse(this.responseText);

            var output = '';


            output += '<ul>' +
                '<li>ID:' + user.id + '</li>' +
                '<li>Name:' + user.name + '</li>' +
                '<li>E-mail:' + user.email + '</li>' +
                '</ul>';
            document.getElementById('user').innerHTML = output;


        }
    }

    xhr.send();

}

function loadUsers() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'users.json', true);

    xhr.onload = function () {
        if (this.status == 200) {
            var users = JSON.parse(this.responseText);

            var output = '';

            for (var i of users) {
                output += '<ul>' +
                    '<li>ID:' + i.id + '</li>' +
                    '<li>Name:' + i.name + '</li>' +
                    '<li>E-mail:' + i.email + '</li>' +
                    '</ul>';

            }
            document.getElementById('users').innerHTML = output;
        }
    }

    xhr.send();

}*/
///////////////////////////////////////////////////////////////////////////

document.getElementById('button').addEventListener('click', getUsers);

function getUsers() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users', true);

    let data = ' ';

    xhr.onload = function () {
        if (this.status == 200) {
            var users = JSON.parse(this.responseText);
            for (let i of users) {
                data += `<div class = "user">
                    <img src="${i.avatar_url}" style="height:70px; width:70px;"></img>
                    <ul>
                    <li>ID:${i.id} </li> 
                    <li>Login:${i.login}</li>
                    </ul>
                   </div>`;

            }
            document.getElementById("users").innerHTML = data;

        }
    }
    xhr.send();
}