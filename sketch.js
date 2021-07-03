const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var bn1
var bn2

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

  var options={
    restitution:0.95
  }
  ball=Bodies.circle(200,100,20,options)
  World.add(world,ball);

  bn1 =createImg('right.png')
  bn1.position(220,30)
  bn1.size(50,50)
  bn1.mouseClicked(Hforce)
  bn2 =createImg('up.png')
  bn2.position(20,30)
  bn2.size(50,50)
  bn2.mouseClicked(Vforce)
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function Hforce(){
  Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}

function Vforce(){
  Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}


function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20)
}

