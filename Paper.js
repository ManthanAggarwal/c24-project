class Paper {
    constructor(x,y,r){
        var options = {

            restitution: 0.5,
            density: 1.5,
            friction: 0.5,
        }
   this.body = Matter.Bodies.circle(x,y,r,options);
   Matter.World.add(wr,this.body);
   this.radius = r;
    }


    show(){
      push();
      fill("green");
      ellipseMode(CENTER);
      ellipse(this.body.position.x,this.body.position.y,this.radius*2,this.radius*2);
      pop() 
    }
}



















