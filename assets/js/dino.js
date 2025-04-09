const canvas = document.getElementById('dinoGame');
const ctx = canvas.getContext('2d');

let dino = { x: 50, y: 100, vy: 0, width: 40, height: 40, jumping:false };
let cactus = { x: canvas.width, y: 110, width: 20, height:40, speed:6 };
let gravity = 0.8;
let score = 0;
let alive = true;

function drawDino() {
  ctx.fillStyle = 'black';
  ctx.fillRect(dino.x, dino.y, dino.width, dino.height);
}

function drawCactus() {
  ctx.fillStyle = 'green';
  ctx.fillRect(cactus.x, cactus.y, cactus.width, cactus.height);
}

function resetGame() {
  cactus.x = canvas.width + Math.random()*100;
  score = 0;
  alive = true;
  dino.y=100;
  dino.vy=0;
  loop();
}

function loop() {
  if (!alive) return;

  requestAnimationFrame(loop);

  ctx.clearRect(0,0,canvas.width,canvas.height);

  // Dino physics
  dino.y += dino.vy;
  dino.vy += gravity;

  if (dino.y > 100) {
    dino.y=100;
    dino.vy=0;
    dino.jumping = false;
  }

  // Move cactus
  cactus.x -= cactus.speed;
  if(cactus.x < -cactus.width){
    cactus.x = canvas.width + Math.random()*300;
    score++;
    document.getElementById('score').innerText = `Score: ${score}`;
  }

  // Collision
  if(dino.x + dino.width > cactus.x && dino.x < cactus.x + cactus.width){
    if(dino.y + dino.height > cactus.y){
      alive = false;
      ctx.fillStyle='red';
      ctx.font='20px sans-serif';
      ctx.fillText('GAME OVER! Press R to Restart.', 150, 80);
      return;
    }
  }

  drawDino();
  drawCactus();
}

document.addEventListener('keydown', e => {
  if ((e.code === 'Space' || e.code==='ArrowUp') && !dino.jumping){
    dino.vy = -12;
    dino.jumping = true;
  }
  if(e.code==='KeyR' && !alive){
    resetGame();
  }
});

// Start game
loop();