class building{
    constructor(x,y,w,h){
        var options = {
      restitution:0.2
        }
        this.body=Bodies.rectangle(x,y,w,h,options)
        World.add(world,this.body)
        this.width=w
        this.height=h

    }
    
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop();
      

    }
}