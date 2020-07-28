
var fixedRect,movingRect;

function setup() {
  createCanvas(1200,600);
fixedRect=createSprite(200, 200, 50, 80);
fixedRect.shapeColor='green';
movingRect=createSprite(400,200,80,50);
movingRect.shapeColor='green'
}

function draw() {
  background(0);
  movingRect.y=mouseY;
  movingRect.x=mouseX; 
  
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
   && fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2
   && fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2
   && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 ){
     movingRect.shapeColor='red';
     fixedRect.shapeColor='red';
   }
  else{
    movingRect.shapeColor='green';
    fixedRect.shapeColor='green';
  }


  drawSprites();
}