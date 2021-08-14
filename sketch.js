
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1,dustbin2,dustbin3;
var ground;
var ground2;
var ground3;
var ground4;
var crumple;


function preload()
{
	
}

function setup() {
	createCanvas(1050, 450);

	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
  dustbin1=new Dustbin(770,390,200,20);
	dustbin2=new Dustbin(680,330,20,100);
	dustbin3=new Dustbin(860,330,20,100);
	ground  =new Ground(500,420,1100,20);
  ground2 =new Ground(500,20,1100,20);
  ground3 =new Ground(10,415,20,800);
  ground4 =new Ground(1040,415,20,800);
  crumple =new Papper(100,280,40,40);
   

  

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground  .display();
  ground2 .display();
  ground3 .display();
  ground4 .display();
  crumple .display();
  keyPressed();
  drawSprites();

}
function keyPressed(){
  if(keyCode===UP_ARROW){
     Matter.Body.applyForce(crumple.ball,crumple.ball.position,{x:0,y:-5})
         }
  if(keyCode===LEFT_ARROW){
          Matter.Body.applyForce(crumple.ball,crumple.ball.position,{x:-2,y:-5})
              }
              if(keyCode===RIGHT_ARROW){
                Matter.Body.applyForce(crumple.ball,crumple.ball.position,{x:2,y:-5})
                    }            
    }
 


