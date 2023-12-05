window.addEventListener('scroll', function() {
    const banner = document.querySelector('.banner');
    const distanceFromTop = banner.getBoundingClientRect().top;

    if (distanceFromTop < 0) {
        const opacity = 1 - (Math.abs(distanceFromTop) / banner.offsetHeight) * 2;
        document.querySelector('h1').style.opacity = opacity.toFixed(2);
    } else {
        document.querySelector('h1').style.opacity = '1';
    }
});