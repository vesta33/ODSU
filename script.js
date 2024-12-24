document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    alert(`Thank you, ${name}! We will get back to you shortly.`);
  });
  