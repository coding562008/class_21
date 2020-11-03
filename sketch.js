var rect1,rect2,rect3

function setup() {
  createCanvas(800,400);
  rect1 =  createSprite(100, 200, 50, 50 );
  rect2 =  createSprite(700, 200, 50, 100);
  rect3 =  createSprite(200, 200, 60, 30 );
 // rect1.velocityX = 5;
  rect2.velocityX = -5;
  rect3.velocityX = 4;
  rect1.debug = true;
  rect2.debug = true;
  rect3.debug = true;
}

function draw() {
  background(255,255,255);

  //bounceOff(rect3, rect2)

  if (isTouching(rect2, rect3) ) {
    rect2.shapeColor = "green"
    rect3.shapeColor = "red"
    

  }
  
   drawSprites();
}
