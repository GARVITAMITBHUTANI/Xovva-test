import './style.css'

const canvas = document.getElementById('scroll-canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const frameCount = 300;
const currentFrame = index => (
  `/images/ezgif-frame-${index.toString().padStart(3, '0')}.jpg`
);

const images = [];
const imageSeq = {
  frame: 0
};

// Preload images
for (let i = 1; i <= frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  images.push(img);
}

// Draw the first frame when it loads
images[0].onload = render;

function render() {
  // Use cover strategy for canvas
  const img = images[imageSeq.frame];
  if (!img || !img.complete) return;

  const hRatio = canvas.width / img.width;
  const vRatio = canvas.height / img.height;
  const ratio = Math.max(hRatio, vRatio);
  const centerShift_x = (canvas.width - img.width * ratio) / 2;
  const centerShift_y = (canvas.height - img.height * ratio) / 2;

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(
    img, 
    0, 0, img.width, img.height,
    centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
  );
}

// Scroll interaction
const app = document.getElementById('app');
const heroText = document.getElementById('hero-text');

window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop;
  
  // Calculate max scroll for the app container
  const maxScrollTop = app.offsetHeight - window.innerHeight;
  
  // Clamp scrollFraction between 0 and 1
  const scrollFraction = Math.max(0, Math.min(1, scrollTop / maxScrollTop));
  
  // Fade out hero text over the first 30% of scroll
  let opacity = 1 - (scrollFraction / 0.3);
  heroText.style.opacity = Math.max(0, opacity);
  
  const frameIndex = Math.min(
    frameCount - 1,
    Math.floor(scrollFraction * frameCount)
  );

  requestAnimationFrame(() => {
    imageSeq.frame = frameIndex;
    render();
  });
});

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});
