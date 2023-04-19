let zombie = document.querySelector('#zmb');
let up = document.querySelector('#up');
let down = document.querySelector('#down');
let left = document.querySelector('#left');
let right = document.querySelector('#right');

up.addEventListener("click", goUp);
down.addEventListener("click", goDown);
left.addEventListener("click", goLeft);
right.addEventListener("click", goRight);

document.addEventListener("keydown",function(e){
    if (e.key === "ArrowUp"){
        goUp();
        checkPosition()
    }
    else if(e.key === "ArrowDown"){
        goDown();
        checkPosition()
    }
    else if(e.key === "ArrowLeft"){
        goLeft();
        checkPosition()
    }
    else if(e.key === "ArrowRight"){
        goRight();
        checkPosition()
    }
});

let topPosition = 0;
let leftPosition = 0;

function goUp() {
    if (topPosition > 1) {
      topPosition -= 40;
      zombie.style.top = topPosition + "px";
    }
  }
  
  function goDown() {
    if (topPosition < 480) {
      topPosition += 40;
      zombie.style.top = topPosition + "px";
    }
  }
  
  function goLeft() {
    if (leftPosition >= 1) {
      leftPosition -= 40;
      zombie.style.left = leftPosition + "px";
    }
  }
  
  function goRight() {
    if (leftPosition <= 1140) {
      leftPosition += 40;
      zombie.style.left = leftPosition + "px";
    }
  }
  
  function checkPosition() {
    if (topPosition > 460 && leftPosition > 510 && leftPosition <650 ) {
      let finish = document.querySelector("#fin");
      finish.style.display = "block";
      zombie.style.display = "none"
      document.body.style.backgroundImage = 'url(https://pngimg.com/d/zombie_PNG25.png)';
    }
  }






