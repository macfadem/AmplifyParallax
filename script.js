let layers = document.querySelectorAll('.parallax-layer');
let initialMarginTops = Array.from(layers).map(layer => parseFloat(getComputedStyle(layer).marginTop));
let scaleFactors = [0.00002, 0.0012, 0.0014, 0.0016, 0.0018, 0.0021, 0.0024, 0.0027];
const stopScrollPosition = 1300; 

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  if (value <= stopScrollPosition) {
    layers.forEach((layer, index) => {
      if (index === 0) {
        layer.style.transform = `scale(${1 + value * scaleFactors[index] * 0.5})`;
        layer.style.marginTop = value + "px";
      } else {
        layer.style.marginTop = (initialMarginTops[index] + value * (index) * 0.2) * 0.2 + value * 1.2 + "px";
        layer.style.transform = `scale(${1 + value * scaleFactors[index] * 0.5}) translateX(${1 + value * scaleFactors[index] * -200}px)`;
      }
    });
  }
  
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navigation a");
  
  sections.forEach((section, index) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    
    if (index === sections.length - 1) {
      const contactHeight = document.querySelector("#contact").offsetHeight;
      if (value >= top - contactHeight && value < top + height) {
        navLinks.forEach(navLink => navLink.classList.remove("active"));
        navLinks[index].classList.add("active");
      }
    } else {
      if (value >= top && value < top + height) {
        navLinks.forEach(navLink => navLink.classList.remove("active"));
        navLinks[index].classList.add("active");
      }
    }
  });
});


document.addEventListener('DOMContentLoaded', function() {
    const navigationLinks = document.querySelectorAll('.navigation a');
  
    navigationLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        removeActiveClass();
        link.classList.add('active');
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  
    function removeActiveClass() {
      navigationLinks.forEach(function(link) {
        link.classList.remove('active');
      });
    }
});
