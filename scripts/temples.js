document.addEventListener('DOMContentLoaded', () => {
    const yearElement = document.getElementById('year');
    const lastModifiedElement = document.getElementById('lastModified');

    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;

    const lastModified = document.lastModified;
    lastModifiedElement.textContent = lastModified;

    // Hamburger menu functionality
    const nav = document.querySelector('nav');
    const toggleButton = document.createElement('button');
    toggleButton.textContent = '☰';
    toggleButton.classList.add('hamburger');

    toggleButton.addEventListener('click', () => {
        nav.classList.toggle('open');
        toggleButton.textContent = nav.classList.contains('open') ? '✖' : '☰';
    });

    document.querySelector('header').appendChild(toggleButton);
});
