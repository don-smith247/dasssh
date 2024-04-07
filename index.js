const arrow = document.getElementById('arrow');
const blinkButton = document.getElementById('blinkButton');
const minedCoinsDisplay = document.getElementById('minedCoins');
let blinkingInterval;
let miningInterval;
let minedCoins = 0;
let elapsedTimeInSeconds = 0;
let isMining = false;

function startMining() {
  if (!isMining) {
    isMining = true;
    arrow.classList.add('blinking');
    miningInterval = setInterval(() => {
      elapsedTimeInSeconds++;
      updateMinedCoins();
      if (elapsedTimeInSeconds >= 3600) {
        stopMining();
        if (minedCoins >= 0.5) {
          blinkButton.disabled = false;
        }
      }
    }, 1000);
  }
}

function stopMining() {
  clearInterval(blinkingInterval);
  clearInterval(miningInterval);
  isMining = false;
}

function updateMinedCoins() {
  const hours = Math.floor(elapsedTimeInSeconds / 3600);
  const minutes = Math.floor((elapsedTimeInSeconds % 3600) / 60);
  const seconds = elapsedTimeInSeconds % 60;
  minedCoins = (hours * 0.5) + (minutes * (0.5 / 60)) + (seconds * (0.5 / 3600));
  minedCoinsDisplay.textContent = minedCoins.toFixed(4);
}

blinkButton.addEventListener('click', () => {
  if (!isMining) {
    startMining();
    blinkButton.disabled = true;
  }
});
function dropdown(){
    var butt3 = document.querySelector(".all")
    butt3.classList.toggle("toggle")
}
