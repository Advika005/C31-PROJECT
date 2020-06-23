const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var division1;
var division2;
var division3;
var division4;
var division5;
var division6;
var division7;

var plinko1,plinko2,plinko3,plinko4,plinko5,plinko6,plinko7,plinko8,plinko9,plinko10;
var plinko11,plinko12,plinko13,plinko14,plinko15,plinko16,plinko17,plinko18,plinko19,plinko20;
var plinko21,plinko22,plinko23,plinko24,plinko25,plinko26,plinko27,plinko28,plinko29,plinko30;

var particle1,particle2,particle3,particle4,particle5;

 
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

   

  division1 = new Division(20,750,15,700);
  division2 = new Division(90,750,15,700);
  division3 = new Division(160,750,15,700);
  division4 = new Division(230,750,15,700);
  division5 = new Division(300,750,15,700);
  division6 = new Division(370,750,15,700);
  division7 = new Division(440,750,15,700);
  
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
  
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();

  
  ground.display();

  /*particle1.display();
  particle2.display();
  particle3.display();
  particle4.display();
  particle5.display();*/



}