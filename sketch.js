var car,wall,wall2,wall3,wall4;
var car2,car3,car4;

var weight,speed;
var weight2,speed2;
var weight3,speed3;
var weight4,speed4;
var de,de2,de3,de4;
var le,le2,le3,le4;


function setup() {
  createCanvas(1600,600);

 

  speed = random(30,103);
  speed2 = random(30,103);
  speed3 = random(30,103);
  speed4 = random(30,103);
  weight = random(400,1500);

  car =  createSprite(50, 200, 50, 50);
car.shapeColor = "white"
  car.velocityX = speed;


 
 
  wall = createSprite(1200,200,60,100);
 


}
function draw() {
console.log(de);

console.log(car.x)
  background(0,255,0);
  
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX = 0
     var de = 0.5*speed*speed*weight/22500
     if(de>180){
       car.shapeColor = "red"
     }
     if(de<180 && de<100){
      car.shapeColor = "yellow"
    }
    if(de<100){
      car.shapeColor = "green"
    }
  }
    drawSprites();
  }
