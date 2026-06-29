const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.activeElement.blur();
  });
});

const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('Danke! Deine Nachricht wurde nicht gesendet, da dies nur eine Demo-Seite ist.');
  });
}
