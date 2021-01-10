
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

groundSprite=createSprite(400,650,800,20);
groundSprite.shapeColor=color("yellow");


box1=createSprite(600,642,140,20);
box1.shapeColor=color("white");


box2=createSprite(536,600,20,80);
box2.shapeColor=color("white");

box3=createSprite(668,600,20,80);
box3.shapeColor=color("white");

	

	//Create the Bodies Here.

 paper=new Paper(100,620,40)
	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  background(0);
  paper.display();


keyPressed();
  drawSprites();
}

function keyPressed(){
if(keyCode===UP_ARROW) {
	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:85})
}	
}