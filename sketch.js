
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint;


var rope1

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	bar1 = new bar(400,100,500,25)
  
	ball1 = new balls(100,500,50)

	ball2 = new balls(200,500,50)

ball3 = new balls(300,500,50)

ball4 = new balls(400,500,50)

ball5 = new balls(500,500,50)

	rope1 = new rope(ball1.body,bar1.body,-200,0)

	rope2 = new rope(ball2.body,bar1.body,-100,0)

	rope3 = new rope(ball3.body,bar1.body,0,0)

	rope4 = new rope(ball4.body,bar1.body,100,0)

	rope5 = new rope(ball5.body,bar1.body,200,0)
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);


bar1.display()

ball1.display()
ball2.display()
ball3.display()
ball4.display()
ball5.display()

rope2.display()
rope1.display()
rope3.display()
rope4.display()
rope5.display()

  drawSprites();
 
}

function keyPressed()
{
	if(keyCode === LEFT_ARROW)
	{
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-1000,y:-10})
	}
}

































































