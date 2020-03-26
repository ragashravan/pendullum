const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball; 
var holder;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
   // ball = ellipse;
    var ball_options ={
    'restitution':0.2,
    'density':1.0,
    'friction':1.0
    }
    ball = Bodies.circle(130,200,20,ball_options)
    World.add(world,ball)
    
    var holder_options ={
      isStatic:true
    }
  holder = Bodies.rectangle(200,100,200,20,holder_options)
    World.add(world,holder)
    
    
     var options ={
      bodyA:ball,
      bodyB:holder,
     stiffness: 0.04,
     length: 100
    } 
    var string = Constraint.create(options);  
    World.add(world,string)
}

function draw(){
  background("yellow");
  Engine.update(engine);
fill("blue");
 ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,20);
 rectMode(CENTER);
 rect(holder.position.x,holder.position.y,200,20);
//ball.y = mouse.y;
//ball.x = mouse.x;
//ball.display();
//holder.display();

strokeWeight(3);
stroke("red")
line(ball.position.x,ball.position.y,holder.position.x,holder.position.y)
if(keyCode === 32){
  ball.position.x = mouseX;
  ball.position.y = mouseY;
}
}
