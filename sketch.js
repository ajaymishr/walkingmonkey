
var monkey , monkey_running;
var banana ,bananaimage, obstacle, obstacleimage;
var foodgroup, obstaclegroup;
var score=0;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaimage = loadImage("banana.png");
  obstacleimage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(550,400);
  ground=createSprite(400,390,800,10)
  monkey=createSprite(75,353,20,20)
  monkey.addAnimation("monkeymove",monkey_running)
  monkey.scale = 0.11;
  obstaclegroup = new Group();
  foodgroup = new Group();
  
}

function draw() {
  background("lightgreen");
  
  textSize(25);
  fill("blue");
  text("Survival Time = " +score,200,25 )
  
  score=score+Math.round(getFrameRate()/61);
  
  monkey.collide(ground);
  if(keyDown("space")&&monkey.y>=337){
    monkey.velocityY = -22;
  }
    monkey.velocityY = monkey.velocityY+1;
  
  ground.velocityX=-8;
  
  if(ground.x<200){
    ground.x = ground.width/2;
  }
  
  spawnobstacles();
  spawnfood();
  
  drawSprites();
  
}
function spawnobstacles(){
  if(frameCount%300===0){
    obstacle=createSprite(560,365,20,40)
  obstacle.addImage(obstacleimage)
  obstacle.scale = 0.11;
  obstacle.velocityX = -8;
    obstacle.lifetime = 90;
    obstaclegroup.add(obstacle);
  }
}
function spawnfood(){
  if(frameCount%80===0){
    banana=createSprite(560,random(120,200),20,40)
  banana.addImage("bananafood",bananaimage);
  banana.scale = 0.08;
  banana.velocityX = -8;
    banana.lifetime = 90;
    foodgroup.add(banana);
  }
}




