class Rope{
    constructor(bodyA,pointB)
    {
        var options = 
        {
        bodyA :bodyA,
        pointB : pointB,
        stiffness : 0.6,
        length :450
        }
        this.rope = Matter.Constraint.create(options);
        this.pointB = pointB;
        World.add(world,this.rope);
    }
    display()
    {
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        stroke("red");
        strokeWeight(10);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}