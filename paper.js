class paper{
    constructor(x,y,r){
        var options={
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x,y,r,options)
        this.radius=r;
        World.add(world,this.body);
    }
    display(){
        var angle=this.body;
        push()
        rotate(angle)
        translate(this.body.position.x,this.body.position.y);
        ellipseMode(RADIUS);
        fill("white");
        ellipse(0,0,this.radius)
        pop()
    }
}