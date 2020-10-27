class Slingshot{
    constructor(body, pointB){
        var options = {
            bodyA: body,
            pointB: pointB,
            stiffness: 0.03,
            length: 1
        }
        this.bodyA=body;
        this.pointB = pointB;
        this.slings = Constraint.create(options);
        World.add(world, this.slings);
    }
    attach(body){
        this.slings.bodyA = body;
    }
    fly(){
        this.slings.bodyA = null;
    }

   

    display(){
        if(this.slings.bodyA){
            var pointA = this.bodyA.position;
            var pointB = this.pointB;
           
            push();
            strokeWeight(4);
            stroke("Black");	
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();
        }
    }
    }
    
