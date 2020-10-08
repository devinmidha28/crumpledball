var ball, dustbin, ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	

	engine = Engine.create();
	world = engine.world;

	g1 = new Ground (400,350,800,20);
	ball = new Ball (50,300,20);

	Bin1= new dustbin(500,280);

	




	//Create the Bodies Here.




	



	Engine.run(engine);



  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  ball.display();
  fill (255);


  ground.display();
  fill("red")

  Bin1.display();
  
  drawSprites();

 
}



