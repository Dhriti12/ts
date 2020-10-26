const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1;
var polygon, slingShot;

function setup(){
    var canvas = createCanvas(600,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

   block1  = new Box(330,235,30,40);
   block2 = new Box(360,235,30,40);
   block3 = new Box(390,235,30,40);
   block4  = new Box(420,235,30,40);
   block5  = new Box(450,235,30,40);
   block6 = new Box(360,195,30,40);
   block7  = new Box(390,195,30,40);
   block8 = new Box(420,195,30,40);
   block9 = new Box(390,155,30,40);

  fground1 = new Ground(400,260,350, PI/2);

   polygon = new Polygon(50,150);

  slingshot = new SlingShot(polygon.body,{x:50, y:150});
}

function draw(){
    background("pink");
    Engine.update(engine);
  
    polygon.display();

    ground.display();

   fground1.display();

    slingshot.display();    

    strokeWeight(4);
    fill("green");
 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 block8.display();
 block9.display();

textSize(16);
fill ("green")
text ("PRESS SPACE MORE CHANCES",10,15)
textSize(35);

textSize(16);
fill ("green");
text ("SCORE : 0",520,20)
textSize(35);

}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
   slingshot.attach(polygon.body);
  }
}