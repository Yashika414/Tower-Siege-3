const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myWorld,myEngine
var ground, ground1 ,ground2
var block1,block2,block3,block4,block5,block6,block7,block8,block9
var polygon,connect
var backgroundi

function setup() {

  createCanvas(800,400);

  myEngine = Engine.create(); 
  myWorld = myEngine.world; 

 ground = new Ground(400,390,800,10)
 ground1 = new Ground(400,250,180,10)
 block1 = new Block (400,240,30,30)
 block2 = new Block (435,240,30,30)
 block3 = new Block (365,240,30,30)
 block4 = new Block (325,240,30,30)
 block5 = new Block (470,240,30,30)
 block6 = new Block (400,200,30,30)
 block7 = new Block (435,200,30,30)
 block8 = new Block (365,200,30,30)
 block9 = new Block (400,150,30,30)

 polygon = new Polygon(150,250,30,30)
 connect = new Connection(polygon.polygon,{x : 150, y : 250})

}

function preload() {

  decidebackgroundimage ()
  
  }
  
function draw() {
  Engine.update(myEngine)
  if(backgroundi)
  {
    background(backgroundi) 
  }
  
 
  ground.display()
  ground1.display()
  polygon.display()
  connect.display() 
  fill ("pink")
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  fill ("yellow")
  block6.display()
  block7.display()
  block8.display()
  fill ("blue")
  block9.display()

}

function mouseDragged()
{
 Matter.Body.setPosition(polygon.polygon,{x:mouseX,y:mouseY})
}
function mouseReleased()
{
  connect.breaktheconnection()
}
async function decidebackgroundimage ()
{
 var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
 var data = await response.json()
var time = data.datetime
var hour = time.slice(11,13)
console.log(hour)
if (hour >= 6 && hour <= 15)
{
 backgroundi = "lightyellow"
}
else 
{
  backgroundi = "darkblue"
}
}
