// Add 'nav-link' class to your navigation links in HTML
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

function removeActive() {
  navLinks.forEach(link => link.parentElement.classList.remove('active'));
}

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop - 80,
      behavior: 'smooth'
    });

    removeActive();
    link.parentElement.classList.add('active');
  });
});

window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY + 100;

  sections.forEach(section => {
    if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      removeActive();
      const activeLink = document.querySelector(`.ul-list li a[href="#${section.id}"]`);
      if (activeLink) activeLink.parentElement.classList.add('active');
    }
  });

  // Optimize performance: remove undefined variables that were throwing errors
});

// Video Optimization: Play/Pause based on viewport visibility
document.addEventListener("DOMContentLoaded", function () {
  const videos = document.querySelectorAll('.lazy-video');

  if ('IntersectionObserver' in window) {
    const videoObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.play();
        } else {
          entry.target.pause();
        }
      });
    }, { rootMargin: "0px 0px 200px 0px" });

    videos.forEach(video => {
      videoObserver.observe(video);
    });
  } else {
    // Fallback for older browsers
    videos.forEach(video => video.play());
  }
});