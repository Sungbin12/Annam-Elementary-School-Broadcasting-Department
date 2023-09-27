document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // 사용자가 입력한 값 가져오기
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // 여기에서 실제 로그인 로직을 구현합니다.
    // 예를 들어, 간단한 체크를 통해 사용자를 인증할 수 있습니다.
    if (username === "bangsongbu" && password === "admin") {
        // 로그인 성공 시 알림 창 띄우기
        alert("로그인에 성공하였습니다.\n나갈 때는 로그아웃을 해주시기 바랍니다.");

        // 다른 페이지로 이동
        window.location.href = "../Annam Elementary School Broadcasting Department 전체/화면 선택.html"; // 이동할 페이지 URL로 변경하세요.
    } else {
        document.getElementById("login-message").innerHTML = "아이디 또는 비밀번호를 잘못 입력하셨습니다.<br>다시 확인해주세요.";
    }
});
