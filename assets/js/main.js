

// Đăng nhập
var navLogin = document.querySelector('.nav-login');
var modal = document.querySelector('.modal');
var modalContent = document.querySelector('.modal-content');

var inputUsername = document.querySelector('input[id="username"]');
var inputPassword =  document.querySelector('input[id="password"]');



var loginBtn = document.querySelector('.login-btn');


navLogin.addEventListener('click', login);
function login() {
    modal.style.display = 'flex';
}

modal.addEventListener('click', closeLogin);
function closeLogin() {
    modal.style.display = 'none';
}

modalContent.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
})

inputPassword.style.onkeydown = function(e) {
    if(e.keyCode === 13) {
        var formInput = {
            username: inputUsername.value,
            password: inputPassword.value
        }
        console.log(formInput);
        getUsers(function(users) {
            checkLogin(users, formInput);
        });
    }
}

loginBtn.addEventListener('click', function(e) {
    var formInput = {
        username: inputUsername.value,
        password: inputPassword.value
    }
    console.log(formInput);
    getUsers(function(users) {
        checkLogin(users, formInput);
    });
    

})


var userAPI = "http://localhost:3000/users"

function getUsers(callback) {
    fetch(userAPI)
        .then(function(response) {
            return response.json();
        })
        .then(callback)
}


function checkLogin(users, formInput) {
    var find =  users.find(function(user) {
        return user.username == formInput.username && user.password == formInput.password;
    })
    let dung = document.querySelector('.login-status-dung');
    let sai = document.querySelector('.login-status-sai');
    if(find) {
        dung.style.display = 'block';
        sai.style.display = 'none';
    } else {
        dung.style.display = 'none';
        sai.style.display = 'block';
    }
}


// Cuộn slider
var sliderMain = document.querySelector('.slider-main');
var sliderList = document.querySelectorAll('.slider-item');
var sliderLeft = document.querySelector('.slider-left');
var sliderRight = document.querySelector('.slider-right');
var sliderWidth = sliderList[0].offsetWidth;

var positionX = 0;
var index = 0;
sliderRight.addEventListener('click', function() {
    handleSlide(1);
});

sliderLeft.addEventListener('click', function() {
    handleSlide(0);
});

function handleSlide(direnction) {
    if(direnction == 1) {
        if(index==3) return;
        index++;
        positionX = positionX - sliderWidth;
        console.log(positionX);
        sliderMain.style.transform = `translateX(${positionX}px)`;
    } else {
        if(index==0) return;
        index--;
        positionX = positionX + sliderWidth;
        console.log(positionX);
        sliderMain.style = `transform: translateX(${positionX}px)`;
    }
}

