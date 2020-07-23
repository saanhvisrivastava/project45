var form,player;
var gameState=0;
var gunman;
var bg,bg1;
var player1,girl;
var sand,pyramid,pyramid2,pyramid3;
var palmtree,palmtree2,palmtree3;
var score,coin,grass;

function preload(){
  girl=loadAnimation("images/girl1.png","images/girl2.png");
  sand=loadImage("images/desertimg.jpg");
  pyramidImg=loadImage("images/pyramid.png");
  palmtreeImg=loadImage("images/palmtree.png");
  gunmanImg=loadAnimation("images/gunman.png","images/gunman2.png");
  grassImg=loadImage("images/grass.png");
  
}

function setup(){
  createCanvas(displayWidth,displayHeight-30);
  bg=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight-30);
 score=0;

  bg1=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight-30);
   bg1.addImage("background",grassImg);
   bg1.scale=4;
   bg1.visible=false;


   pyramid=createSprite(600,displayHeight-350,50,50);
   pyramid.addImage("obstacle",pyramidImg);
   pyramid2=createSprite(200,displayHeight-300,60,60);
   pyramid2.addImage("obstacle2",pyramidImg);
   pyramid2.scale=2
   pyramid3=createSprite(1000,displayHeight-200,70,70);
   pyramid3.addImage("obstacle3",pyramidImg);
   pyramid3.scale=2;
   palmtree=createSprite(70,displayHeight-450,10,10);
   palmtree.addImage("tree",palmtreeImg);
   palmtree.scale=1.5;
   palmtree2=createSprite(1100,displayHeight-450,40,40);
   palmtree2.addImage("tree2",palmtreeImg);
   palmtree2.scale=1.5;
   palmtree3=createSprite(1300,displayHeight-450,50,50);
   palmtree3.addImage("tree3",palmtreeImg);
   palmtree3.scale=2;

   coin=createSprite(displayWidth-100,displayHeight/2);

   bg.scale=5;
  bg.addImage("background",sand);
   player1=createSprite(30,displayHeight-100,20,60);
   player1.addAnimation("girl1",girl);
   player1.scale=2;

   gunman=createSprite(player1.x-100,displayHeight-100,20,60);
   //gunman.addAnimation("enemy",gunmanImg);
   gunman.scale=2;
   console.log(gunman);

   






 form=new Form();

}
function draw(){
  background("pink");
  if(gameState===1){
    
   drawSprites();
   textSize=20;
   fill(0);
   text("The score="+ score,displayWidth-300,30);

   if(player1.isTouching(coin)){
     gameState=2;
     bg.destroy();
     pyramid.destroy();
     pyramid2.destroy();
     pyramid3.destroy();
     palmtree.destroy();
     palmtree2.destroy();
     palmtree3.destroy();
     coin.destroy();
    // player1.destroy();
   }
    }
    if(gameState===2){
      //var bg1=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight-30);
     // bg1.addImage("background",grassImg);
     // bg1.scale=4;
     bg1.visible=true;
     // player1=createSprite(30,displayHeight-100,20,60);
     // player1.addAnimation("girl1",girl);
      //player1.scale=2;
      drawSprites();
    }

  gunman.x=player1.x-100;
  gunman.y=player1.y;
   
  if(keyIsDown(RIGHT_ARROW)){
    player1.x=player1.x+5;
  }

   
  if(keyIsDown(LEFT_ARROW)){
    player1.x=player1.x-5;
  }
  
   
  if(keyIsDown(UP_ARROW)){
    player1.y=player1.y-5;
  }
  
   
  if(keyIsDown(DOWN_ARROW)){
    player1.y=player1.y+5;
  }
 
  
  

form.display();
}


