let layers = document.querySelectorAll('.parallax-layer');
let initialMarginTops = Array.from(layers).map(layer => parseFloat(getComputedStyle(layer).marginTop));
let scaleFactors = [0.00002, 0.0020, 0.0021, 0.0022, 0.0023, 0.0024, 0.0025, 0.0026];

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  layers.forEach((layer, index) => {
    if (index === 0) {
      layer.style.transform = `scale(${1 + value * scaleFactors[index] * 0.5})`;
      layer.style.marginTop = value + "px";
    } else {
      layer.style.marginTop = (initialMarginTops[index] + value * (index) * 0.2) * 0.2 + value * 1.2 + "px";
      layer.style.transform = `scale(${1 + value * scaleFactors[index] * 0.5})`;
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
  