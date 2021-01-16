class Dustbin{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            'restitution':0,
            'friction':1,
            'density':0.1,
}
       this.image=loadImage("dustbingreen.png")
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;

        World.add(world,this.body);

    }
    display(){
       
        rectMode(CENTER);
        var pos = this.body.position;

        fill("red");
        
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        push();

        imageMode(CENTER)
        image(this.image,610,600,150,150);
        pop();


    }
};