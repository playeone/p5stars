function Drop() {
    this.x = random(width);
    this.y = 0;
    this.z = random(0.2, 10);
    this.yspeed = map(this.z, 0, 10, 1, 10);
    this.a = 0.01;
    this.len = 1;
    this.wei = 1;
    
    
    this.update = function() {
        this.y = this.y + this.yspeed;
        this.yspeed = this.yspeed + this.a;
        
        this.a = map(this.y/this.z, 0, height, 0.01, 0.1);
        this.len = map(this.y/this.z, 0, height, 3, 30);
        this.wei = map(this.z, 0, 1, 3, 1);

        
        if (this.y >= height) {
            this.yspeed = map(this.z, 0, 5, 1, 10);
            this.y = random(-200, -100);
            this.x = random(width);
            this.z = random(0.2, 10);
        }
    }
    
    this.show = function() {
        strokeWeight(this.wei);
        stroke(153, 42, 221);
        line(this.x, this.y, this.x, this.y + this.len);
    }
}