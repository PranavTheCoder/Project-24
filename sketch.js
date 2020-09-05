
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

	ground = new Ground(10,10,800,10);
	ground.shapeColor = "yellow";

	paper = new Paper(100,200,10);
	paper.shapeColor = color(0,255,0);

	dustbin1 = new Dustbin(500,375,100,20);
	dustbin1.shapeColor = "red";

	dustbin2 = new Dustbin(400,375,20,75);
	dustbin2.shapeColor = "red";

	dustbin3 = new Dustbin(300,375,20,75);
	dustbin3.shapeColor = "red";

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin1.display();

}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}



