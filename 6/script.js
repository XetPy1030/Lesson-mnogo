const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", async function (event) {
  if (event.keyCode == 32) {
    await jump();
  }
});
document.addEventListener("keyup", function (event) {
  if (event.keyCode == 32) {
    stopJump();
  }
});

let isJump = false;
let speedJump = 0;
let strengthJump = 14;
let gravity = 1;
let isGameOver = false;

async function jump() {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

  if ( dinoTop == 150 ) {
    speedJump = strengthJump;
    isJump = true;
  }
}

function doingJump() {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  if (speedJump > 0) {
    if (isJump) {
      dino.style.top = `${dinoTop-speedJump}px`;
      speedJump -= gravity;
    } else {
      speedJump = 0;
    }
  }
  else if (speedJump <= 0) {
    if (dinoTop < 150) {
      dino.style.top = `${dinoTop-speedJump}px`;
      speedJump -= gravity;
    } else {
      dino.style.top = `${150}px`;
      speedJump = 0;
    }
  }
}
setInterval(doingJump, 25)

async function stopJump() {
  isJump = false;
}

let isAlive = setInterval(function () {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );
  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 150) {
    if (!isGameOver) {
      isGameOver = true;
      alert("Game over");

      setTimeout(function() {isGameOver = false}, 500);
    }
  }
}, 10);
