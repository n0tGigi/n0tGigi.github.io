const music = document.getElementById('bgMusic');
const toggle = document.getElementById('musicToggle');

let isPlaying = false;

window.addEventListener('load', () => {
  music.volume = 0.4;
  music.play();
  isPlaying = true;
});

toggle.addEventListener('click', () => {
  if (isPlaying) {
    music.pause();
    toggle.textContent = '🔇 Music: Off';
  } else {
    music.play();
    toggle.textContent = '🔊 Music: On';
  }
  isPlaying = !isPlaying;
});
