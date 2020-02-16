
var btn = document.getElementById('rgstr_btn');
var registerbtn = document.getElementById('register');

const users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];

class user {
    constructor(email, password, read, fRead) {
        this.email = email;
        this.password = password;
        this.read = read;
        this.fRead = fRead;
    }
    getemail() {
        return this.email;
    }
    getpw() {
        return this.password;
    }
    getread() {
        return this.read;
    }
    getfRead() {
        return this.fRead;
    }
}

function store(userObj) {
    const userJson = { name: userObj.getemail(), pw: userObj.getpw(), read: userObj.getread(), fRead: userObj.getfRead() }
    users.push(userJson);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loginUser",JSON.stringify(userJson.name));
    alert('Your account has been created');
}


function createUser() {
    var name = document.getElementById('email').value;
    var pw = document.getElementById('pw').value;
    var read = [];
    var fRead = [];
    if (name.length == 0 && pw.length == 0) {
        alert('Please fill in email and password');

    } else if (name.length == 0) {
        alert('Please Enter email');
        return;
    } else if (pw.length == 0) {
        alert('Please fill in password');
        return;
    } else if (!testEmail(name)) {
        alert('Please Enter a valid email');
        return;
    } else if (emailExist(name)) {
        alert('you already have an account');
        return;
    }
    const newUser = new user(name, pw, read, fRead);
    store(newUser);
    var location = window.location.pathname;
    var newLocation = location.replace('/register.html', '/home.html')
    window.location.href = newLocation;
}
function testEmail(value) {
    var pattern = new RegExp('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')
    return pattern.test(value);
}
function emailExist(value) {
    for (var i = 0; i < users.length; i++) {
        if(users[i].name == value) {
            return true;
        }
        return false;
    }
}



function logIn() {
    var users = JSON.parse(localStorage.getItem("users"));
    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    for (const value of users) {
        if (userName.value === value.name && userPw.value === value.pw) {
            var location = window.location.pathname;
            localStorage.setItem("loginUser",JSON.stringify(value.name));
            var newLocation = location.replace('/login.html', '/pages/home.html')
            window.location.href = newLocation;
            return;
        }
    }
    alert('Error on login');
}


function registerPage() {
    location.href = "pages/register.html";
}

if (registerbtn) {
    registerbtn.addEventListener("click", registerPage);
}

