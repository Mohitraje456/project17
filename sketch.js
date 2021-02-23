

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}


function setup() {
  createCanvas(600, 200);
   monkey = createSprite(50,180,20,50);
   monkey.addAnimation("moving", monkey_running);
   monkey.scale = 0.10
  
  ground = createSprite(0,190,1200,10);
  ground.x = ground.width /2;
  ground.velocityX = -4
  
 
  
  FoodGroup = new Group();
  obstaclesGroup = new Group();
  
  score = 0;
}

function draw() {
  background("blue");

  
    
    
    if(score >= 0){
      ground.velocityX = -6;
    }
  
    if(keyDown("space") ) {
      monkey.velocityY = -12;
    }
  
    monkey.velocityY = monkey.velocityY + 0.8
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
    monkey.collide(ground);
    
    spawnFood();
    spawnObstacles();
  
   if(obstaclesGroup.isTouching(monkey)){
          obstacleGroup[0].destroy()
gameState=END
     
    } 
   

    if(FoodGroup.isTouching(monkey)){
      score=score +1
  
      FoodGroup[0].destroy()
    }
     
drawSprites();
  text("Score :"+ score,400,80 )

  
  }
  


function spawnFood() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    FoodGroup.add(banana);
  }
  
}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);    
    //generate random obstacles
    var rand = Math.round(random(1,3));
    switch(rand) {

      
    }
          obstacle.addImage(obstacleImage);

    obstacle.velocityX = -(6 + 3*score/100);
    
    obstacle.scale = 0.1
    obstacle.lifetime = 300;
    obstaclesGroup.add(obstacle);
  }
}


  
  
  




