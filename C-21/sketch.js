var speed, weight, thickness
var bullet, wall


function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
  bullet = createSprite(50,200,50,50)
  wall = createSprite(1200,200,thickness,height/2)
  wall.shapeColor=color(80,80,80)
  speed=random(55,90) 
  weight=random(400,1500)
  thickness=random(22,85)
}

function draw() {
  background(255,255,255); 
  bullet.velocityX=speed

if (hasCollided(bullet,wall)){
bullet.velocityX=0
    var damage=0.5*weight*speed*speed/(50*50*50);
    console.log(damage)
    if (damage>10){
      wall.shapeColor=color(255,0,0)
    }
    if (damage<10){
      wall.shapeColor=color(0,255,0) 
    }
  }
  drawSprites();
}

function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width
  wallLeftEdge=wall.x
  if (bulletRightEdge>=wallLeftEdge){
  return true
}
return false
}
