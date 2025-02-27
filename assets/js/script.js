const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const html = document.documentElement;
    
function updateThemeIcon(theme) {

    themeIcon.textContent = '';
    
    
    const iconClass = theme === 'dark' ? 'fa-moon' : 'fa-sun';
    const icon = document.createElement('i');
    icon.className = `fas ${iconClass}`; 
    themeIcon.appendChild(icon);
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    html.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});