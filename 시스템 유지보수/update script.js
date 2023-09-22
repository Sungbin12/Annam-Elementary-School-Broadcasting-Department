const currentTime = new Date();
const startTime1 = new Date('09/27/2023 08:38:00');
const endTime1 = new Date('09/27/2023 08:58:00');
const startTime2 = new Date('09/27/2023 15:00:00');
const endTime2 = new Date('09/27/2023 18:04:51');
const startTime3 = new Date('09/27/2023 22:00:00');
const endTime3 = new Date('09/28/2023 00:00:00');
const startTime4 = new Date('09/28/2023 05:00:00');
const endTime4 = new Date('09/28/2023 07:59:59');

if ((currentTime >= startTime1 && currentTime < endTime1) ||
    (currentTime >= startTime2 && currentTime < endTime2) ||
    (currentTime >= startTime3 && currentTime < endTime3) ||
    (currentTime >= startTime4 && currentTime < endTime4)) {
    location.href = "index.html"; // 이동하는 코드
}
