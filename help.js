// Show/Hide "Back to Top" Button
window.addEventListener('scroll', function () {
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 300) {
      backToTop.style.display = 'block';
    } else {
      backToTop.style.display = 'none';
    }
  });
  
  // Scroll to Top
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  // Handle Contact Form Submission
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }
  
    alert(`Thank you, ${name}! Your message has been sent.`);
  });
  