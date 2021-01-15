class Box{
    constructor(x, y) {
        var options = {
            'isStatic':false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 30,30, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        rectMode(CENTER);
        fill("red");
        rect(this.body.position.x,this.body.position.y,30,30);
      }
}