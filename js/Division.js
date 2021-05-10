class Divisions {
    constructor(x,y,w,h){
        var options={
            isStatic:true
        }
        this.x=x;
        this.y=y;
        this.width=w;
        this.height=h
        this.division=Bodies.rectangle(x,y,w,h,options);
        //World.add(world,this.division);
        World.add(world,this.division);
    }
    display(){
        fill(white);
        rectMode(CENTER);
        var pos=this.division.position;
        rectangle(pos.x,pos.y,this.width,this.height);
    }
}