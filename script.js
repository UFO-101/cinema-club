/**
 * script.js
 *
 * Eventually you'll fetch event data from Partiful’s API
 * and build event cards dynamically. For now, just placeholders.
 */

// Pseudocode for fetching Partiful data (adjust as needed):
/*
async function fetchEvents() {
  try {
    const response = await fetch('PARTIFUL_API_ENDPOINT');
    const data = await response.json();
    // data might contain an array of events
    // then construct your HTML for each event card
  } catch (error) {
    console.error('Error fetching events:', error);
  }
}

fetchEvents();
*/

document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const nextButton = document.querySelector('.carousel-button.next');
  const prevButton = document.querySelector('.carousel-button.prev');
  
  let currentIndex = 0;
  let slidesToShow = 1;

  function updateSlidesToShow() {
    slidesToShow = window.innerWidth >= 768 ? 3 : 1;
    // Ensure currentIndex doesn't exceed maximum valid position
    const maxIndex = slides.length - slidesToShow;
    currentIndex = Math.min(currentIndex, maxIndex);
    updateSlidePosition();
  }

  // Initial setup
  updateSlidesToShow();

  // Update on window resize
  window.addEventListener('resize', updateSlidesToShow);

  // Next button click handler
  nextButton.addEventListener('click', () => {
    const maxIndex = slides.length - slidesToShow;
    currentIndex = Math.min(currentIndex + 1, maxIndex);
    updateSlidePosition();
  });

  // Previous button click handler
  prevButton.addEventListener('click', () => {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateSlidePosition();
  });

  // Update the slide position
  function updateSlidePosition() {
    // Each slide should take up 100% / slidesToShow of the container
    const slideWidth = 100 / slidesToShow;
    // Move by full slide widths
    const offset = currentIndex * slideWidth;
    track.style.transform = `translateX(-${offset}%)`;
  }

  // Auto-advance slides every 5 seconds
  setInterval(() => {
    const maxIndex = slides.length - slidesToShow;
    currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
    updateSlidePosition();
  }, 5000);
});
