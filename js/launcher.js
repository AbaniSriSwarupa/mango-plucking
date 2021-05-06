class launcher{
    constructor(body,anchor){
        var options = {
            bodyA:body,
            pointB:anchor,
            stiffness:0.005,
            lenght:10

        }  
                this.launcher = Constraint.create (options)
        World.add(world,this.launcher)
      }
fly(){
    this.launcher.bodyA = null;
}
attach(body){
    this.launcher.bodyA = body;
}
    display() {
         if(this.launcher.bodyA) {
              var pointA=this.launcher.bodyA.position;
               var pointB=this.launcher.pointB;
                strokeWeight(2); 
               line(pointA.x,pointA.y,pointB.x,pointB.y);
             } 
            }

    
}

