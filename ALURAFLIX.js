const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

let x = canvas.width/2;
let y = canvas.height-30;   

let dx = 2;
let dy = -2;
let paddleHeight = 10;
let paddleWidth = 75;
let paddleX = (canvas.width-paddleWidth)/2;   


function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI*2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height-paddleHeight,   
 paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();   

}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();
  x += dx;
  y += dy;
  // ... (implementar   
 colisões, movimentação da raquete, etc.)
}

setInterval(draw, 10);const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

let x = canvas.width/2;
let y = canvas.height-30;   

let dx = 2;
let dy = -2;
let paddleHeight = 10;
let paddleWidth = 75;
let paddleX = (canvas.width-paddleWidth)/2;   


function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI*2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height-paddleHeight,   
 paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();   

}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();
  x += dx;
  y += dy;
  // ... (implementar   
 colisões, movimentação da raquete, etc.)
}

setInterval(draw, 10)