class Chain{
constructor(BodyA, BodyB){
    var options = {
        BodyA: BodyA,
        BodyB: BodyB,
        stiffness: 0.04,
        length: 10
    }
    
    var chain = Constraint.create(options);
    World.add(world, chain)
}

display(){
    var PointA= this.chain.BodyA.position;
    var PointB= this.chain.BodyB.position;
    strokeWeight(5);
    line(PointA.x,PointA.y ,PointB.x,  PointB.y)
}
}