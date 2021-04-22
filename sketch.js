var PLAY = 1;
var END = 0;
var gameState = PLAY;


function preload(){
  swordImage=loadImage("sword.png")
  
  fruitImage=loadImage("fruit1.png")
  
  
  
 
}


function setup() {
  createCanvas(600, 200);
  
  
  sword=createSprite(40,200,20,20)
  sword.addImage(swordImage);
  sword.scale=0.7
  
  sword.addImage(gameOverImage)
  sword.x=200;
  sword.y=200;
}
function Draw(){
  fruits();
  enemy();
  
  sword.y=World.mouseY;
  sword.x=World.mouseY;
  
  elseif (gameState === PLAY){
    if(fruitGroup.isTouching(sword)){
     fruitGroup.destroyEach();
      score=score+2;
        
    }
     

}

function Enemy(){
 if(World.frame.count%200===0){
  monster=createSprite(400,200,20,20) 
   monster.addAnimation("moving",monsterImage)
   monster.y=Math.round(randon(100,300));
   monster.velocityX=-8
   monster.setLifetime=50;
   
   enemyGroup.add(monster);
 }
  
  function fruits(){
   if(World.frame.count%200===0){
  fruit=createSprite(400,200,20,20) 
      fruit.scale=0.2;
      //fruit.debug=true;
   r=Math.round(random(1,4));
     if(r == 1) {
       fruit.addImage(fruit1){
         else if (r == 2) {
      fruit.addImage(fruit2)
           else if (r == 3){
        fruit.addImage(fruit3)     
           }else {
             fruit.addImage(fruit4)
           }
           
           fruit.y=Math.round(random(50,340))
           
              fruit.velocityX=-8
              fruit.setLifetime=50;
           
           fruitGroup.add(fruit);
         }
       
       
     
       
    
   
  

       