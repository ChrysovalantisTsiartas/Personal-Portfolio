document.addEventListener('DOMContentLoaded', function () {
    const themeSwitcher = document.getElementById('theme-switcher');
    const body = document.body;

    if (localStorage.getItem('theme') === 'dark') {
        applyDarkTheme();
    } else {
        applyLightTheme();  
    }

    themeSwitcher.addEventListener('click', () => {
        if (body.classList.contains('dark-theme')) {
            applyLightTheme();
            localStorage.setItem('theme', 'light');
        } else {
            applyDarkTheme();
            localStorage.setItem('theme', 'dark');
        }
    });

    function applyDarkTheme() {
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
    }

    function applyLightTheme() {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
    }

    const typedText = document.getElementById('typed-text');
    const typedDate = document.getElementById('typed-date');
    const name = "CHRYSOVALANTIS TSIARTAS";
    const date = "04 DECEMBER 2002";

    function typeEffect(text, element) {
        element.innerHTML = "";
        for (let i = 0; i < text.length; i++) {
            setTimeout(function () {
                element.innerHTML += text[i];
            }, 90 * i);
        }
    }

    typeEffect(name, typedText);

    setTimeout(function () {
        typeEffect(date, typedDate);
    }, 90 * name.length + 1000); //delay of 1000 milliseconds
});
