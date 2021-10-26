

// Đăng nhập
var navLogin = document.querySelector('.nav-login');
var modal = document.querySelector('.modal');
var modalContent = document.querySelector('.modal-content');


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

