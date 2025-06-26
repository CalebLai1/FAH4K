document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  const navMenu = document.getElementById('nav-menu');
  const navToggle = document.getElementById('nav-toggle');
  const navClose = document.querySelectorAll('.nav__link');

  navToggle?.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
  });

  navClose.forEach(n => n.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  }));

  // Countdown
  const countdownElement = document.getElementById('countdown');
  const eventDate = new Date('July 29, 2025 10:00:00').getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) {
      countdownElement.innerHTML = "<h3>The event has started!</h3>";
      clearInterval(countdownInterval);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `
      <div class="countdown-item"><span>${days}</span><p>Days</p></div>
      <div class="countdown-item"><span>${hours}</span><p>Hours</p></div>
      <div class="countdown-item"><span>${minutes}</span><p>Minutes</p></div>
      <div class="countdown-item"><span>${seconds}</span><p>Seconds</p></div>
    `;
  }

  const countdownInterval = setInterval(updateCountdown, 1000);
  updateCountdown();

  // Reveal on scroll
  const revealElements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => observer.observe(el));
});