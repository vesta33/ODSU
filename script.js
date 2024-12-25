document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    alert(`Thank you, ${name}! We will get back to you shortly.`);
  });

document.querySelector('.menu-toggle').addEventListener('click', () => {
    const nav = document.querySelector('.mobile-nav');
    nav.classList.toggle('open');
});
