class Particle {
    constructor(x,y,r){
        var options={
            restitution:0.8,
            isStatic:false,
            density:0.2
        }
        this.x=x;
        this.y=y;
        this.radius=r;
        this.particle=Bodies.circle(x,y,r,options);
        World.add(world,this.particle);
    }
    display(){
        var posit=this.particle.position;
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,r,r);
    }
}