const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const World = Matter.World;
const Engine = Matter.Engine;

var engine,world;
var platform;
var box1,box2,box3,box4,box5,box6,box7,box8,box9;
var polygon,polygonImg;
var slingShot,gameState;

function preload(){
    polygonImg = loadImage("polygonImg.jpg");
}

function setup(){
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    platform = new Ground(800,300,200,15)

    gameState = "attached";
    box1 = new Box(800,277);
    box2 = new Box(830,277);
    box3 = new Box(860,277);
    box4 =  new Box(770,277);
    box5 = new Box(740,277);
    box6 =new Box(770,247);
    box7 = new Box(800,247);
    box8 = new Box(830,247);
    box9 =  new Box(800,217);

    polygon = Bodies.rectangle(600,247,30,30);
    World.add(world,polygon);
    slingShot = new SlingShot(polygon,{x:600,y:247});
}
function draw(){
    background("black");

    platform.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display()
    box7.display()
    box8.display()
    box9.display();

    image(polygonImg,polygon.position.x,polygon.position.y,30,30);
}
function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingShot.fly();
    gameState = "launched";
}