document.addEventListener("DOMContentLoaded", function() {
    const loadingBar = document.getElementById("loadingBar");

    function updateLoadingBar(progress) {
        loadingBar.style.width = `${progress}%`;
    }

    function redirectToLink() {
        window.location.href = "update-ok.html"; // 원하는 링크로 변경
    }

    function startLoading(startTime, endTime) {
        const interval = setInterval(function() {
            const currentTime = new Date();
            const elapsed = currentTime - startTime;
            const totalDuration = endTime - startTime;
            const progress = (elapsed / totalDuration) * 100;

            updateLoadingBar(progress);

            if (progress >= 100) {
                clearInterval(interval);
                redirectToLink();
            }
        }, 100);
    }

    // 시작 시간 설정
    const startYear = 2023;
    const startMonth = 10; // 1월부터 12월까지 1부터 12까지 숫자로 표현
    const startDay = 31;
    const startHour = 08;
    const startMinute = 00;

    // 종료 시간 설정
    const endYear = 2023;
    const endMonth = 11;
    const endDay = 01;
    const endHour = 08;
    const endMinute = 00;

    const startTime = new Date(startYear, startMonth - 1, startDay, startHour, startMinute);
    const endTime = new Date(endYear, endMonth - 1, endDay, endHour, endMinute);

    startLoading(startTime, endTime);
});