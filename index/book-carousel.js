// JavaScript for the book carousel

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('book-carousel');
    const items = carousel.querySelectorAll('.carousel-item');
    let currentItem = 0;
    let interval; // Variable to store the interval
  
    function showItem(index) {
      items[currentItem].style.display = 'none';
      items[index].style.display = 'block';
      currentItem = index;
    }
  
    function nextItem() {
      const newIndex = (currentItem + 1) % items.length;
      showItem(newIndex);
    }
  
    function prevItem() {
      const newIndex = (currentItem - 1 + items.length) % items.length;
      showItem(newIndex);
    }
  
    function startAutoPlay() {
      interval = setInterval(nextItem, 3000); // Auto advance every 3 seconds (adjust as needed)
    }
  
    function stopAutoPlay() {
      clearInterval(interval);
    }
  
    // Initialize the carousel
    showItem(currentItem);
  
    // Start auto play
    startAutoPlay();
  
    // Add event listeners for next and previous buttons
    const nextButton = document.createElement('button');
    nextButton.textContent = '下一个';
    nextButton.addEventListener('click', nextItem);
  
    const prevButton = document.createElement('button');
    prevButton.textContent = '上一个';
    prevButton.addEventListener('click', prevItem);
  
    // Add event listeners to pause auto play when using manual navigation
    nextButton.addEventListener('click', stopAutoPlay);
    prevButton.addEventListener('click', stopAutoPlay);
  
    carousel.appendChild(prevButton);
    carousel.appendChild(nextButton);
  });
  