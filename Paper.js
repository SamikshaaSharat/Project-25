class Paper{
    constructor(x,y,width,height){
        var options={
            isStatic: false,
            'restitution': 0.3,
            'friction': 0.5,
            'density': 1.2
        
        }
        this.body = Bodies.circle(x,y,5,options);
        this.image = loadImage("paper.js");
        World.add(world, this.body);
        
    }
    display(){
        var pos=this.body.position;

        ellipseMode(RADIUS);
        fill("blue");
        ellipse(0,0,this.width,this.height);
        
    }

}