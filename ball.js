class Ball{
    constructor(x,y,radius){
        this.object=Bodies.circle(x,y,radius,{isStatic:false,restitution:0.3,friction:0.5,density:1.2})
        this.radius=radius;

        World.add(world, this.body);
    }

    display(){
        push();
        translate(this.object.position.x,this.object.position.y);
        rectMode(CENTER);
        fill("pink");
        rect(0, 0, this.width, this.height);
        pop();
    }
}
