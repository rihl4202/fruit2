const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

function preload(){
  bgImg = loadImage("images/background.png")
  fruitImg = loadImage("images/melon.png")
  rabbitImg = loadImage("images/Rabbit-01.png")
}

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;

  rope = new Rope(6,{x:250,y:30})
  fruit = Bodies.circle(250,200,20)
  Composite.add(rope.body,fruit)
  link = new Link(rope,fruit)
  rabbit = createSprite(250,550)
  rabbit.addImage(rabbitImg)
  rabbit.scale = 0.2
  btn = createImg("images/cut_btn.png")
  btn.position(230,20)
  btn.size(50,50)
  btn.mouseClicked(function(){
    rope.break()
    link.break()
  })
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
}

function draw() 
{
  background(bgImg);
  Engine.update(engine);
  rope.display()
  push()
  imageMode(CENTER)
  image(fruitImg,fruit.position.x,fruit.position.y,60,60)
  pop()
  drawSprites()
}




