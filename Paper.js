class Paper{
    consructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Matter.Bodies.circle(x,y,radius,options)
        this.body.radius = radius;
        World.add(world,this.body)
    }
}

