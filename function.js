function toggleTheme() {
    const themeStyle = document.getElementById('theme-style');

    if (themeStyle.getAttribute('href') === 'style.css') {
        themeStyle.setAttribute('href', 'style-dark.css');
    } else {
        themeStyle.setAttribute('href', 'style.css');
    }
}
