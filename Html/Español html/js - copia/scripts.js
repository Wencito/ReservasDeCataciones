let currentIndex = 0;

function moveSlide(n) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    
    currentIndex += n;
    
    if (currentIndex >= totalItems) {
        currentIndex = 0;
    }
    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    }
    
    const newTransformValue = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${newTransformValue}%)`;
}
