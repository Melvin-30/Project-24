
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground1,side1,side2,side3;

function preload()
{
	
}

function setup() {
	createCanvas(800,600);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	ball=new paper(50,500,15);
	side1=new side(540,455,20,100);
	side2=new side(600,495,100,20);
	side3=new side(660,455,20,100);
	ground1=new ground(400,510,800,10)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  ground1.display();
  side1.display();
  side2.display();
  side3.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:35,y:-35})	
		
   }
}