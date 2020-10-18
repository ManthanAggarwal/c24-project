
var eng,wr,ground



function setup() {
	createCanvas(800, 600);


	eng = Matter.Engine.create();
	console.log(eng);
    wr = eng.world

	//Create the Bodies Here.
	ground = Matter.Bodies.rectangle(400,590,800,20,{isStatic:true});
	Matter.World.add(wr,ground);

	console.log(ground);
  
  leftside = new Dustbin(500,525,20,110);
  rightside = new Dustbin(650,525,20,110);
  bottomside = new Dustbin(575,570,130,20);
  paper = new Paper(55,580,20);

}


function draw() {
  background(0);
  Matter.Engine.update(eng);
  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  leftside.show();
  rightside.show();
  bottomside.show();
  paper.show();
  }





  function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body, paper.body.position, {x:90, y:-70});

  }
  
  }



