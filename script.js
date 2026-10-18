const music = document.getElementById('bgMusic');
const musicButton = document.getElementById('musicBtn');
const musicLabel = document.querySelector('.music-label');

function updateMusicControls(isPlaying) {
  musicButton.textContent = isPlaying ? '🔇' : '🎵';
  musicButton.setAttribute('aria-pressed', String(isPlaying));
  musicLabel.textContent = isPlaying ? 'Tắt nhạc' : 'Bật nhạc 🎵';
}

function startMusic() {
  music.play().catch(() => {
    updateMusicControls(false);
    musicLabel.textContent = 'Chạm để bật nhạc 🎵';
  });
}

function toggleMusic() {
  if (music.paused) {
    startMusic();
  } else {
    music.pause();
  }
}

music.addEventListener('play', () => updateMusicControls(true));
music.addEventListener('pause', () => updateMusicControls(false));
musicButton.addEventListener('click', toggleMusic);

music.play().catch(() => {
  updateMusicControls(false);
  musicLabel.textContent = 'Trình duyệt đã chặn tự phát';
});
