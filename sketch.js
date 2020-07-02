const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var divisionHeight=300;
var ground;

//var plinkos;
var engine,world;

var particles = [];
var plinkos = [];
var divisions = [];
function setup() {
  createCanvas(480,800);
  
  engine = Engine.create();
    world = engine.world;

    for(var j = 40; j <=width; j=j+50)
    {
      plinkos.push(new Plinko(j,75));
    }
    for(var j = 15; j <=width-10; j=j+50)
    {
      plinkos.push(new Plinko(j,175));
    }

    for(var j = 40; j <=width; j=j+50)
    {
      plinkos.push(new Plinko(j,275));
    }
    for(var j = 15; j <=width-10; j=j+50)
    {
      plinkos.push(new Plinko(j,375));
    }

   

    for (var k = 0; k <=width; k = k + 80) {
      divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
    }
  
  ground = new Ground(400,790,800,20);

  /*particle1 = new Particle(200,10,10);
  particle2 = new Particle(200,60,10);
  particle3 = new Particle(200,90,10);
  particle4 = new Particle(200,120,10);
  particle5 = new Particle(200,150,10);*/

  Engine.update(engine); 
}

function draw() {
  background(0); 
  Engine.update(engine); 

  for(i=0;i<plinkos.length;i++)
  {
    plinkos[i].display();
  }

  if(frameCount%90===0){
    particles.push(new Particle(random(width/2+10), 10,10));
  }

  for(i=0;i<particles.length;i++)
  {
    particles[i].display();
  }
  for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }
 
  ground.display();

  /*particle1.display();
  particle2.display();
  particle3.display();
  particle4.display();
  particle5.display();*/
}