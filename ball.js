class Ball {
    constructor(x, y, r) {
        var options = {
            resitution: 0.04,
            density: 1
        }
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
           
        World.add(world, this.body);   
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipse(pos.x, pos.y, this.r, this.r);
        ellipseMode(CENTER);
        pop();
    }
}