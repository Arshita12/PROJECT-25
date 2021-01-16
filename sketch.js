
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var bin1,bin2,bin3,binImage;
var ball, ground;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ball= new Ball(100,600,10);

    ground = new Ground(400,680,800,20);

    bin1= new Dustbin(550,620,20,100);
    bin2= new Dustbin(610,660,100,20);
    bin3= new Dustbin(670,620,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  ball.display();

  ground.display();

  bin1.display();
  bin2.display();
  bin3.display();

 

 

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:15,y:-15});
	}

}

