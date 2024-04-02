const arrow = document.getElementById('arrow');
let blinkingInterval;

arrow.addEventListener('click', () => {
  if (arrow.classList.contains('blinking')) {
    clearInterval(blinkingInterval);
    arrow.classList.remove('blinking');
    arrow.style.filter = 'grayscale(100%) brightness(0%) sepia(100%) hue-rotate(200deg) saturate(7500%) contrast(100%)';
  } else {
    arrow.classList.add('blinking');
    blinkingInterval = setInterval(() => {
      arrow.style.filter = arrow.style.filter === 'none' ? 'grayscale(100%) brightness(0%) sepia(100%) hue-rotate(200deg) saturate(7500%) contrast(100%)' : 'none';
    }, 1000);
  }
});
function dropdown(){
    var butt3 = document.querySelector(".all")
    butt3.classList.toggle("toggle")
}
