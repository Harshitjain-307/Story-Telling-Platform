// Slideshow functionality
let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
const dots = document.getElementsByClassName("dot");

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }    
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";  
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
}

document.addEventListener('DOMContentLoaded', showSlides);

// Search functionality (only search story cards with data-title)
document.getElementById('searchBtn').addEventListener('click', function() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const allStories = document.querySelectorAll('.story-card[data-title]');
  allStories.forEach(card => {
    const title = card.getAttribute('data-title').toLowerCase();
    card.style.display = (title.indexOf(query) !== -1) ? "block" : "none";
  });
});

// "View More" toggle for Trending Stories
document.getElementById('viewMoreTrending').addEventListener('click', function(e) {
  e.preventDefault();
  const extraCards = document.querySelectorAll('.trending-extra');
  let isVisible = false;
  extraCards.forEach(card => {
    if(card.style.display === 'block') { isVisible = true; }
  });
  if(isVisible) {
    extraCards.forEach(card => { card.style.display = 'none'; });
    this.querySelector('.more-text').textContent = '+ View More';
  } else {
    extraCards.forEach(card => { card.style.display = 'block'; });
    this.querySelector('.more-text').textContent = '- View Less';
  }
});
