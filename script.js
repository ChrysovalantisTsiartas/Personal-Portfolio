document.addEventListener('DOMContentLoaded', function () {

    /* ─── Theme Switcher ─── */
    const switcher = document.getElementById('theme-switcher');
    const body = document.body;
    const sunIcon = document.getElementById('theme-icon-sun');
    const moonIcon = document.getElementById('theme-icon-moon');

    function setTheme(theme) {
        body.classList.remove('light-theme', 'dark-theme');
        body.classList.add(theme + '-theme');
        localStorage.setItem('theme', theme);
        if (sunIcon && moonIcon) {
            sunIcon.style.display = theme === 'light' ? 'block' : 'none';
            moonIcon.style.display = theme === 'dark' ? 'block' : 'none';
        }
    }

    setTheme(localStorage.getItem('theme') || 'dark');

    if (switcher) {
        switcher.addEventListener('click', () => {
            const current = body.classList.contains('dark-theme') ? 'dark' : 'light';
            setTheme(current === 'dark' ? 'light' : 'dark');
        });
    }

    /* ─── Mobile Menu Toggle ─── */
    const menuBtn = document.querySelector('.menu-toggle');
    const navGroup = document.querySelector('.nav-group');
    if (menuBtn && navGroup) {
        menuBtn.addEventListener('click', () => {
            navGroup.classList.toggle('open');
        });
        // Close menu when clicking a link
        navGroup.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => navGroup.classList.remove('open'));
        });
    }

    /* ─── Typing Effect (index page only) ─── */
    const typedEl = document.getElementById('typed-text');
    const dateEl = document.getElementById('typed-date');

    if (typedEl) {
        const phrases = [
            'Chrysovalantis Tsiartas',
            'Developer',
            'Problem Solver',
            'Creative Thinker'
        ];
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const current = phrases[phraseIndex];

            if (isDeleting) {
                typedEl.textContent = current.substring(0, charIndex--);
            } else {
                typedEl.textContent = current.substring(0, charIndex++);
            }

            let delay = isDeleting ? 40 : 80;

            if (!isDeleting && charIndex > current.length) {
                delay = 2200;
                isDeleting = true;
            } else if (isDeleting && charIndex < 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                delay = 400;
            }

            setTimeout(type, delay);
        }

        type();
    }

    if (dateEl) {
        const now = new Date();
        dateEl.textContent = now.toLocaleDateString('en-US', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        });
    }

    /* ─── Copy to Clipboard (contact page) ─── */
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const text = btn.dataset.copy;
            navigator.clipboard.writeText(text).then(() => {
                btn.textContent = 'Copied!';
                btn.classList.add('copied');
                setTimeout(() => {
                    btn.textContent = 'Copy';
                    btn.classList.remove('copied');
                }, 2000);
            });
        });
    });
});
