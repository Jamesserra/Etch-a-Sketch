const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');
const { width, height } = canvas;

ctx.lineWidth = 10;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

ctx.lineTo(200, 200)
ctx.stroke();