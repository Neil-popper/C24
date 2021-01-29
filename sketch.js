const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(660,750,70,70);
    box2 = new Box(800,750,70,70);
    box3 = new Box(660,600,70,70);
    box4 = new Box(800,600,70,70);
    pig = new Pig(730,750)
    pig2 = new Pig(730,600)
    ground = new Ground(600,height,1200,20)
    log1 = new Log(730,650,210,PI/2)
    log2 = new Log(730,530,210,PI/2)
    bird = new Bird(10,10)
    box5 = new Box(730,450,70,70);
    log3 = new Log(800,450,125,-PI/7)
    log4 = new Log(660,450,125,PI/7)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    pig.display();
    box1.display();
    box2.display();
    ground.display();
    log1.display();
    bird.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
}