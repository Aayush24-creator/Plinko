class Ground {
    constructor(x,y,w,h){
        var options={
            isStatic:true
        }
        this.x=x;
        this.y=y;
        this.width=w;
        this.height=h;
        this.ground=Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.ground);
    }
    display(){
        fill(white);
        rectMode(CENTER);
        var posi = this.ground.position;
        rectangle(posi.x,posi.y,this.width,this.height);
    }
}