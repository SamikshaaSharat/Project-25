
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var dustbin1,dustbin2;
var dustbin3;
var ground1;
var paperObject;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.


	Engine.run(engine);
  
	paper =new Paper(40,100,5,5);
	
	
	ground1 = new Ground(590,660,2000,20);

	dustbin1=new Dustbin(490,600,20,100);
	dustbin2 = new Dustbin(580,650,200,20);
	dustbin3=new Dustbin(665,590,20,100);
	


	
}


function draw() {
  //rectMode(CENTER);
  background(0);



  paper.display();
  dustbin1.display();
  ground1.display();
  dustbin2.display();
  dustbin3.display();
  
    drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}



