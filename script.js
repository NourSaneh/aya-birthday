// Animate mouth loading bar
const mouthLoading = document.querySelector('.mouth-loading');
const content = document.querySelector('.content');

// Simulate loading
setTimeout(() => {
  mouthLoading.style.width = '40px'; // Match the nose width
}, 500);

// After load, reveal content and smile
setTimeout(() => {
  mouthLoading.style.borderRadius = '0 0 10px 10px'; // Smile curve
  mouthLoading.style.height = '5px'; // Thicker smile
  content.classList.add('show');
}, 3500);

// Confetti effect
document.getElementById('confetti-btn').addEventListener('click', () => {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6    }
  });
});