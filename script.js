function generatePalette() {
  const palette = document.getElementById('palette');
  palette.innerHTML = ''; // clear old colors

  for (let i = 0; i < 5; i++) {
    const color = getRandomColor();
    const box = document.createElement('div');
    box.classList.add('color-box');
    box.style.background = color;
    box.innerText = color;
    box.onclick = () => copyColor(color, box);
    palette.appendChild(box);
  }
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function copyColor(color, box) {
  navigator.clipboard.writeText(color);
  box.innerText = "Copied!";
  setTimeout(() => box.innerText = color, 1000);
}

// Generate first palette automatically
generatePalette();
