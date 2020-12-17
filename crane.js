class crane {
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:180,
            stiffness:1
        }
        this.crane=Constraint.create(options);
        World.add(world,this.crane)
    }
    display(){
       line(this.crane.bodyA.position.x,this.crane.bodyA.position.y,
            this.crane.pointB.x,this.crane.pointB.y)
    }
}