const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Body=Matter.Body
var engine,world,ball
var ground,rightSide,leftSide
function setup(){
createCanvas(1200,700)
    engine=Engine.create()
    world=engine.world
    var ball_options={
        restitution:0.5,
        frictionAir:0.01,
        density:1.2
    }
    ball=Bodies.circle(100,10,20,ball_options)
    World.add(world,ball)

    var ground_options={
    isStatic:true

    }
    ground=Bodies.rectangle(600,690,1200,15,ground_options)
    World.add(world,ground)
    leftSide=Bodies.rectangle(900,630,5,100,ground_options);
    rightSide=Bodies.rectangle(1100,630,5,100,ground_options)
    World.add(world,leftSide);
    World.add(world,rightSide)
    rectMode(CENTER)
    ellipseMode(RADIUS)
}
function draw(){
    background("blue")
    Engine.update(engine)
    ellipse(ball.position.x,ball.position.y,20)
    rect(ground.position.x,ground.position.y,1200,15)
    rect(leftSide.position.x,leftSide.position.y,5,100);
    rect(rightSide.position.x,rightSide.position.y,5,100);

}
function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:90,y:-70})

  }



}