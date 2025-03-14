// // Mobile Navigation Toggle
// document.addEventListener('DOMContentLoaded', function() {
//     // Add mobile navigation functionality if needed
    
//     // Smooth scrolling for anchor links
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//       anchor.addEventListener('click', function(e) {
//         e.preventDefault();
        
//         const targetId = this.getAttribute('href');
//         if (targetId === '#') return;
        
//         const targetElement = document.querySelector(targetId);
//         if (targetElement) {
//           targetElement.scrollIntoView({
//             behavior: 'smooth'
//           });
//         }
//       });
//     });
    
//     // Add active class to navigation items based on scroll position
//     const sections = document.querySelectorAll('section');
//     const navItems = document.querySelectorAll('.nav__link');
    
//     window.addEventListener('scroll', function() {
//       let current = '';
      
//       sections.forEach(section => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.clientHeight;
        
//         if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
//           current = section.getAttribute('id');
//         }
//       });
      
//       navItems.forEach(item => {
//         item.classList.remove('active');
//         if (item.getAttribute('href') === `#${current}`) {
//           item.classList.add('active');
//         }
//       });
//     });
//   });


$('.owl-carousel').owlCarousel({
  loop:true,
  margin: 0,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 5000,
//   autoplayHoverPause: true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:2
      }
  }
})


