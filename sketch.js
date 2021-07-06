var back1,back1_img;
var gameState="play";
var detective,detective_img;
var coinsGroup,coin_image;
var ghostsGroup,ghost_image;
var detective_collided, detective_scare;
var screen=0;
var start_bg;

function preload(){
  back1=loadImage("images/STAIR.png")
  detective_img=loadAnimation("images/DEC.png")
  coin_image=loadImage("images/COIN.png")
  ghost_image=loadImage("images/ghost.gif")
  detective_collided=loadAnimation("images/DECHAP.png");
  detective_scare=loadAnimation("images/DECSCARE.png");
  start_bg=loadImage("images/SCREEN.png")
}

function setup() {
  createCanvas(800,800);
  /*back1_img=createSprite(400,400);
  back1_img.addImage(back1);
  back1_img.scale=0.6
  //back1_img.velocityY=1
 
  detective=createSprite(400,600,50,50);
  detective.addAnimation("happy",detective_img);
  detective.scale=0.5*/

}


function draw() {
  if (screen==0){
    startScreen();
  }
  /*else if(screen==1){
    GameON();
  }*/
  else if(screen==2){
    EndScreen();
  }
}
function startScreen(){
  background(start_bg);
  fill(255);
  textSize(20);
  strokeWeight(2);
  textAlign(CENTER);
  text("explain",width/2,height/2);
  text("click to start",width/2,height/2+20);
  mousePressed();
 // reset();
}
 
 /*function GameON(){

  background(0); 
  if(gameState="play") {
    if( keyDown("left_arrow")){
     detective.x=detective.x-3;
    }
     if( keyDown("right_arrow")){
      detective.x=detective.x+3;
     }
     if( keyDown("up_arrow")){
      detective.velocityY=-10;
     }
    detective.velocityY=detective.velocityY+0.8
    SpawnCoins()
    SpawnGhosts()
  }
  if(back1_img>900){
    back1_img.y=800
  }
  if(coinsGroup.isTouching(detective)){
    detective.addAnimation("happy",detective_collided)
    detective.changeAnimation( "happy"); 
}
if(ghostsGroup.isTouching(detective)){
  detective.addAnimation("scare",detective_scare)
  detective.changeAnimation("scare"); 
}

  
  drawSprites();
}*/
/*function SpawnCoins(){
  if (frameCount %100=== 0) { 
var coin = createSprite(200, -50);
coin.x = Math.round(random(400,400)); 
coin.addImage(coin_image);
coin.velocityY = 5; 
coin.lifetime = 800;
coin.scale=0.2
coinsGroup.add(coin); 
}
}
function SpawnGhosts(){
  if (frameCount %150=== 0) { 
var ghost = createSprite(200, -50);
ghost.x = Math.round(random(200,400)); 
ghost.addImage(ghost_image);
ghost.velocityY = 5; 
ghost.lifetime = 800;
ghost.scale=0.5
ghostsGroup.add(ghost); 
}
}*/
function mousePressed(){
  if ( screen==0){
    screen=1
  }
  else if(screen==2){
    screen=0
  }
}
/*function EndScreen(){
  background(150);
  textAlign(CENTER);
  text("game over",width/2,height/2)
  text("click to play again",width/2,height/2+20);
  mousePressed();
}*/