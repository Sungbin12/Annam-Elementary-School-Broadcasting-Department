function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    var validUsername = 'bangsongbu';
    var validPassword = 'admin';
    
    if (username === validUsername && password === validPassword) {
        alert('로그인이 완료되었습니다.\n사용 완료 후에는 로그아웃 부탁드립니다.\n-Annam Elementary School Broadcasting Department-');
        window.location.href = 'Annam Elementary School Broadcasting Department 전체/화면 선택.html';
    } else {
        alert('아이디 또는 비밀번호가 올바르지 않습니다.\n다시 시도 해주십시오.');
    }
}