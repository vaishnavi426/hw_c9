
var box



function setup() {
  createCanvas(1000,600);
  box = createSprite(200,200,50,50);
}

function draw() 
{
  background("white");

  if(keyIsDown(RIGHT_ARROW)) {
    box.position.x = box.position.x + 2;
  }

  if(keyIsDown(LEFT_ARROW)) {
    box.position.x = box.position.x - 2;
  }

  if(keyIsDown(UP_ARROW)) {
    box.position.y = box.position.y - 2;
  }

  if(keyIsDown(DOWN_ARROW)) {
    box.position.y = box.position.y + 2;
  }

  drawSprites();

}




