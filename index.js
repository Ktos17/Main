const home = document.querySelector('.sidf04-smdif94-sdmfi94-sdf49');

home.addEventListener('click', () => {
    smoothScrollToTop();
});

function smoothScrollToTop() {
    const targetPosition = 0;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 500;

    let startTime;

    function animation(currentTime) {
        if (startTime === undefined) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const easing = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, easing);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}
