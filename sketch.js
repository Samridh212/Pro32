const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var paper, ground1, ground2, ground3;
var hexagon, sling;
var box1,box2,box3,box4,box5,box6,box7;
var box8,box9,box10,box11,box12;
var box13,box14,box15;
var box16;
var box17,box18,box19,box20,box21;
var box22,box23,box24;
var box25;
var score = 0;
var nb;
var bg = "light.jpg";
var backgroundImg;

function preload(){
  Backimg();
  
}

function setup() {
  createCanvas(1000, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	hexagon = new Ball(50,200);
	
	sling = new Slingshot(hexagon.body,{x:100, y:200});

	ground1 = new Ground(390,305,225,15);
  ground2 = new Ground(690,205,165,15);
  ground3 = new Ground(500,600,10000,15);

  
	box1 = new Box(300,275,30,40);
	box2 = new Box(330,275,30,40);
	box3 = new Box(360,275,30,40);
	box4 = new Box(390,275,30,40);
	box5 = new Box(420,275,30,40);
	box6 = new Box(450,275,30,40);
	box7 = new Box(480,275,30,40);

	box8 = new Box(330,235,30,40);
	box9 = new Box(360,235,30,40);
	box10 = new Box(390,235,30,40);
	box11 = new Box(420,235,30,40);
	box12 = new Box(450,235,30,40);
  
	box13 = new Box(360,195,30,40);
	box14 = new Box(390,195,30,40);
	box15 = new Box(420,195,30,40);
  
	box16 = new Box(390,155,30,40);

	box17 = new Box(630,165,30,40);
	box18 = new Box(660,165,30,40);
	box19 = new Box(690,165,30,40);
	box20 = new Box(720,165,30,40);
	box21 = new Box(750,165,30,40);	

	box22 = new Box(660,125,30,40);
	box23 = new Box(690,125,30,40);
	box24 = new Box(720,125,30,40);
	
	box25 = new Box(690,85,30,40);

	Engine.run(engine);
  
}


function draw() {
  if(backgroundImg)
  background(backgroundImg);
  
  rectMode(CENTER);
 Engine.update(engine);

  noStroke();
  textSize(20)
  fill("white")
  text("Drag the hexagonal stone and release it, to launch it towards the blocks",100, 50)
  text("Score: "+score,20,45)
  drawSprites();
  ground1.display();
  ground2.display();
  ground3.display();
  hexagon.display();
  sling.display();
  fill("red");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  fill("yellow");
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  fill("pink");
  box13.display();
  box14.display();
  box15.display();
  fill("blue");
  box16.display();
  fill("green")
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  fill("blue")
  box22.display();
  box23.display();
  box24.display();
  fill("red")
  box25.display();

  box1.Score();
  box2.Score();
  box3.Score();
  box4.Score();
  box5.Score();
  box6.Score();
  box7.Score();
  box8.Score();
  box9.Score();
  box10.Score();
  box11.Score();
  box12.Score();
  box13.Score();
  box14.Score();
  box15.Score();
  box16.Score();
  box17.Score();
  box18.Score();
  box19.Score();
  box20.Score();
  box21.Score();
  box22.Score();
  box23.Score();
  box24.Score();
  box25.Score();



}

function mouseDragged(){
    Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    sling.fly();
}
function keyPressed(){
  if(keyCode === 32 && hexagon.body.speed < 3){
      sling.attach(hexagon.body);
      Matter.Body.setPosition(hexagon.body,{x:50,y:200});
  }
}
async function Backimg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11, 13);
  //console.log(hour);

  if (hour >= 06 && hour <= 18) {
    bg = "light.jpg";
  } else {
    bg = "dark.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}

  
