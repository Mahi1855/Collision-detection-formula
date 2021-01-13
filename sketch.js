var fixedRekt,movingRekt






function setup() {
  createCanvas(800,400);
fixedRekt = createSprite(400,200,50,70);
movingRekt = createSprite(400,300,70,50);
movingRekt.shapeColor = "green"
fixedRekt.shapeColor = "green"
}

function draw() {
  background(0);  
  movingRekt.y = mouseY
  movingRekt.x = mouseX
  if (movingRekt.x - fixedRekt.x < fixedRekt.width/2 + movingRekt.width/2
    && fixedRekt.x - movingRekt.x <fixedRekt.width/2 + movingRekt.width/2
    && movingRekt.y - fixedRekt.y < fixedRekt.height/2 + movingRekt.height/2
    &&fixedRekt.y - movingRekt.y <fixedRekt.height/2 + movingRekt.height/2
    ){
    movingRekt.shapeColor = "red"
    fixedRekt.shapeColor = "red"
  }
  else{
console.log(movingRekt.x)
    movingRekt.shapeColor = "green"
    fixedRekt.shapeColor = "green"
  }
  drawSprites();
}