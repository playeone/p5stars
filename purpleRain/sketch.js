var drops = []

function setup() {
    createCanvas(800, 800);
    
    for(var i = 0; i < 500; i++) {
        drops[i] = new Drop();
    }
}

function draw() {
    background(200);
    
    for(var i = 0; i < drops.length; i++) {
        drops[i].update();
        drops[i].show();
        
    }
}