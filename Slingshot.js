class Slingshot {
    constructor (bodyA,bodyB){
        var options= {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.sling= Constraint.create(options)
        World.add(world,this.sling)
    }
    display(){
        var pointA= this.sling.bodyA.postion
        var pointB= this.sling.bodyB.postion
        strokeWeight(3)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}