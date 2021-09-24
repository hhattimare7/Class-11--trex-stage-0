
var trex, trexImg;

function preload(){
trexImg = loadAnimation("trex1.png", "trex3.png", "trex4.png");
}


function setup(){
createCanvas(600,300);

trex = createSprite(50,150,50,50);
trex.addAnimation("trex_running", trexImg);
trex.scale = 0.5;

}

    
function draw(){
background("lightgrey");

if(keyDown("space")){
    trex.velocityY = -10;
}

trex.velocityY = trex.velocityY + 0.5;

drawSprites();
}
