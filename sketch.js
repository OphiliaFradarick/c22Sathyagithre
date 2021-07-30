const Engine = Matter.Engine; 
const World = Matter.World;
const Bodies = Matter.Bodies;

function setup(){
  canvas = createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic :true
  }

  ground = Bodies.rectangle(200,380,400,10, options);
  World.add(world, ground);

}

function draw(){
  background(0);
  Engine.update(engine);

  rectMode(CENTER);
  fill("orange");
  rect(ground.position.x, ground.position.y, 400,10);


}


