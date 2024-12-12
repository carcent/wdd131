document.addEventListener('DOMContentLoaded', function () {
    let reviewCount = localStorage.getItem('reviewCount');
    if (!reviewCount) {
      reviewCount = 0;  
    } else {
      reviewCount = parseInt(reviewCount, 10);
    }
  
 
    document.getElementById('reviewCount').textContent = reviewCount;
  });