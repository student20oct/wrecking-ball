const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var b1,b2,b3,ball,crane1,b4
var ground
var engine,world
function setup() {
	engine=Engine.create()
	world=engine.world
	

	createCanvas(600,600)
b1=new building(350,550,20,50)
b2=new building(350,500,20,50)
b3=new building(350,450,20,50)
b4=new building(200,100,20,20)
crane1=new crane(b4.body,{x:200,y:400})
var ground_options={
	isStatic:true
}
ground= Bodies.rectangle(300,590,600,20,ground_options)
	World.add(world,ground)
}
function draw() {
background("yellow")
Engine.update(engine)
b1.display();
	b3.display();
	b2.display();
	b4.display();
	crane1.display();
	rectMode(CENTER)
rect(this.ground.position.x,this.ground.position.y,600,20)

}
function mouseDragged() {
	Matter.Body.setPosition(b4.body,{x:mouseX,y:mouseY})
	
}