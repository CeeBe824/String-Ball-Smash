class Block {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1,
     
      }
      this.body = Bodies.rectangle(x, y, 30, 40, options);
      this.width = 30;
      this.height = 40;
      this.Visiblity = 255;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
  
      if(this.body.speed < 3){
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("white");
        fill("cyan");
        rect(0, 0, this.width, this.height);
        pop();
      }
        else{
      World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        pop();
        }
       
      }
      
    }
      