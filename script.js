document.addEventListener('DOMContentLoaded', function () {
    const themeSwitcherButton = document.getElementById('themeSwitcher');
    const body = document.body;

    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        themeSwitcherButton.innerText = 'Light Mode';
    }

    themeSwitcherButton.addEventListener('click', function () {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
            themeSwitcherButton.innerText = 'Dark Mode';
        } else {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
            themeSwitcherButton.innerText = 'Light Mode';
        }
    });

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    const heartContainer = document.getElementById('heartContainer');

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";

        const isDarkMode = document.body.classList.contains('dark-mode');

        if (isDarkMode) {
            heart.innerText = '💜';
        } else {
            heart.innerText = '❤️';
        }

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 300);
});

function revealOnScroll() {
    var elements = document.querySelectorAll('.fade-in');

    elements.forEach(function (element) {
        var windowHeight = window.innerHeight;
        var elementTop = element.getBoundingClientRect().top;
        var distanceFromTop = elementTop - windowHeight + 20;

        if (distanceFromTop < 0) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    });
}

// bron: ChatGpt. heeft de code samengevoegd.
//dark mode bron: ChatGpt
// https://www.freecodecamp.org/news/scroll-animations-with-javascript-intersection-observer-api/
//https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
//