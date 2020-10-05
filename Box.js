class Box{
    constructor(x,y,width,height){
        var options={
            restitution:0.8,
            friction:0.2

        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;

    World.add(world,this.body)

    }
    
    display(){
        var pos=this.body.position ;
        var angle=this.body.angle;
        //to add a new property or capture new settings
        push();
        //to change the 0 of the axis to a given x and y position 
        translate(pos.x,pos.y);
        rotate(angle)
        rectMode(CENTER);
        fill("pink");
        rect(0,0,this.width,this.height);
        //to revert back to old settings
        pop()
        
    }
}