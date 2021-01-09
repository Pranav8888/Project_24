class Paper {
    constructor(x, y, radius) {
        
        //Other Stuff
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.x = x;
        this.y = y;
        this.radius = radius;

        //Creating the body.
        this.body = Bodies.circle(this.x, this.y, this.radius/2, options);
        
        //Adds body to the world
        World.add(world,this.body);
    }

    display() {

        //Makes life easier!
        var pos = this.body.position;
        
        push();

        translate(pos.x, pos.y);
        rectMode(CENTER);

        //Colors
        strokeWeight(3);
        stroke('blue');
        fill('red');
        
        //The Body
        ellipse(0, 0, this.radius, this.radius);

        pop();
        
    }
}