class Box{
  constructor(x, y, width, height) {
      var options = {
         
        'restitution':0.5,
        'friction':0.5,
        'density':0.5
         
      }
      this.visibility = 255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      
    }
    Score(){
      if(this.visibility<0 && this.visibility >-10){
        score = score +20;
      }
    }
    display(){
      console.log(this.body.speed);
      if(this.body.speed <8){
      var angle = this.body.angle;
      var pos= this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(1);
      stroke(0);
      rect(0,0,this.width, this.height);
      pop();
    }else{
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility -2;
      pop();
      
    }
  }
}