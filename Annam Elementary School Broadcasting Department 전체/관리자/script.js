const users = [
  { username: 'bangsongbu-admin', password: 'admin', name: '관리자1' },
  { username: 'bangsongbu-admin-2', password: 'admin', name: '관리자2(임시)' },
  // 추가적인 사용자 정보들을 원한다면 여기에 추가해주세요.
];

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const authenticatedUser = authenticateUser(username, password, name);
  if (authenticatedUser) {
      alert(`${authenticatedUser.name}님, 관리자 시스템에 접속하신걸 환영합니다.`);
      window.location.href = 'location.html';
  } else {
      alert('로그인에 실패하였습니다.\n다시 시도 하십시오.');
  }
});

function authenticateUser(username, password) {
  const user = users.find(user => user.username === username && user.password === password);
  return user;
}