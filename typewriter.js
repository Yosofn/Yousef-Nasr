// Typewriter animation for 'Web Developer' and subtitle
const el = document.getElementById('typewriter');
const subtitle = document.getElementById('typewriter-subtitle');
const mainText = 'Software Engineer';
const subText = '.NET  ·  Angular  ·  AI Solutions  ·  Node.js';
let i = 0, j = 0, isErasing = false, isSub = false;

function typeLoop() {
  if (!isSub) {
    if (!isErasing) {
      el.innerText = mainText.slice(0, i + 1);
      if (i < mainText.length - 1) {
        i++;
        setTimeout(typeLoop, 110);
      } else {
        setTimeout(() => { isErasing = true; setTimeout(typeLoop, 1200); }, 500);
      }
    } else {
      el.innerText = mainText.slice(0, i);
      if (i > 0) {
        i--;
        setTimeout(typeLoop, 50);
      } else {
        isErasing = false;
        isSub = true;
        setTimeout(typeLoop, 400);
      }
    }
  } else {
    if (!isErasing) {
      subtitle.innerText = subText.slice(0, j + 1);
      if (j < subText.length - 1) {
        j++;
        setTimeout(typeLoop, 90);
      } else {
        setTimeout(() => { isErasing = true; setTimeout(typeLoop, 1200); }, 500);
      }
    } else {
      subtitle.innerText = subText.slice(0, j);
      if (j > 0) {
        j--;
        setTimeout(typeLoop, 40);
      } else {
        isErasing = false;
        isSub = false;
        setTimeout(typeLoop, 600);
      }
    }
  }
}
if (el && subtitle) typeLoop();
