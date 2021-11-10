const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');
const { width, height } = canvas;
const MOVE_AMOUNT = 10;
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineWidth = MOVE_AMOUNT;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();


function draw({ key }) {
  console.log(key);
  ctx.beginPath();
  ctx.moveTo(x,y);
  
  switch(key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break;
    case "ArrowRight":
      x += MOVE_AMOUNT;
      break;
    case "ArrowDown":
      y += MOVE_AMOUNT;
      break;
    case "ArrowLeft":
      x -= MOVE_AMOUNT;
      break;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}

function handleKey(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault();
    draw({ key: e.key });
  }
}

window.addEventListener('keydown', handleKey);