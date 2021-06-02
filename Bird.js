class Bird {
    constructor(x,y){
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':20,
    }
    this.body = Bodies.rectangle(x, y, 30, 40, options);
    this.width = 30;
    this.height = 40;
    this.image = loadImage("polygon.png");
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    
    push();
    translate(pos.x, pos.y);
    imageMode(CENTER);
    strokeWeight(4);
    stroke("white");
    fill("cyan");
    image(this.image,0, 0, this.width, this.height);
    pop();
  }
}
  
    
  
  