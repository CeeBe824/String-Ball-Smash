const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var hexegon,ground1,ground2,block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,
block12,block13,block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25,
block26,block27,hexegon,slingshot;

var gameState = "onSling"

function preload() {

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    ground1 = new Ground(400,275,300,10);
    ground2  = new Ground(825,200,300, 10);
    block1 = new Block(282,265);
    block2 = new Block(310,265);
    block3 = new Block(340,265);
    block4 = new Block(370,265);
    block5 = new Block(400,265);
    block6 = new Block(430,265);
    block7 = new Block(460,265);
    block8 = new Block(490,265);
    block9 = new Block(520,265);
    block10 = new Block(310,225);
    block11 = new Block(340,225);
    block12 = new Block(370,225);
    block13 = new Block(400,225);
    block14 = new Block(430,225);
    block15 = new Block(460,225);
    block16 = new Block(490,225);
    block17 = new Block(340,160);
    block18 = new Block(370,160);
    block19 = new Block(400,160);
    block20 = new Block(430,160);
    block21 = new Block(460,160);
    block22 = new Block(780,175);
    block23 = new Block(810,175);
    block24 = new Block(840,175);
    block25 = new Block(870,175);
    block26 = new Block(810,145);
    block27 = new Block(840,145);
    hexegon = new Bird(100,200);
    slingshot = new Rope(hexegon.body,{x:100, y:100});

    
}

function draw(){
Engine.update(engine);
background("black");
    

ground.display();
ground1.display();
ground2.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
block22.display();
block23.display();
block24.display();
block25.display();
block26.display();
block27.display();
hexegon.display();
slingshot.display();



    
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(hexegon.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}
function keyPressed(){
    if(keyCode === 32){
        hexegon.trajectory = [];
        Matter.Body.setPosition(hexegon.body, {x: 100 , y: 100});
       slingshot.attach(hexegon.body);
       gameState = "onSling";
    
    }
}
/*I can't figure out how to make the boxes vanish
and how to give the player multiple shots with the hexegon.*/ 