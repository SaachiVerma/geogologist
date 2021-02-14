
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer, ground;
var stone, rubber;

function preload(){
	
}

function setup() {
	var canvas =createCanvas(1200,400);
	engine = Engine.create();
	world = engine.world;

	hammer = new Hammer(600,200,100,30);
    ground = new ground(900,hieght,800,20)
	stone = new stone(700,320,70,70);
	rubber = new rubber(920,320,70,70)
	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);
  
  ground.display();
  hammer.display();
  stone.display();
  rubber.display();
  drawSprites();
}



