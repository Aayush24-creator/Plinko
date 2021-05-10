var Bodies = Matter.Bodies;
var Engine = Matter.Engine;
var World = Matter.World;
var Body = Matter.Body;

var engine, world;
var division1,division2,division3,division4,division5,division6,division7,division8;
var ground;

function setup(){
  createCanvas(800,600);
  engine=Engine.create();
  world=engine.world;
}

function draw(){
  background("black");
  division1 = new Divisions (0,550,15,70);
  
  
    ground=new Ground (400,600,20,400);

    drawSprites();
}
  
