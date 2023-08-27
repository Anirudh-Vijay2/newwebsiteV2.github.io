document.addEventListener('DOMContentLoaded', function () {
 function revealSections() {
      let sections = document.querySelectorAll('section')
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight - 100) {
        //   section.classList.add('revealed');
        }
      });
    }
    
    // Initial reveal when the page loads
    revealSections();
    
    // Reveal sections on scroll
    window.addEventListener('scroll', revealSections);
  });
  
