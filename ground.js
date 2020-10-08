class Ground {
    constructor(x,y,width,height){

        var options = {
            isStatic: true
        } 
        this.object=Bodies.rectangle(x,y,width,height,options);
        World.add(world, this.ob);
        this.width=width;
        this.height=heightWorld.add(world, this.object);
    
    display();
        push();
        translate(this.object.position.x, this.object.position.y);
    }

}
