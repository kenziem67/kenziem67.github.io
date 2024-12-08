function setup(){
    createCanvas(windowWidth, windowHeight);
    noLoop();
    constellation = [];
}

function draw() {
    let c = document.getElementById('time').value;
    print(c);
    background(c*2, c, c*3); 
    noStroke();
    for (i = 0; i <stars.length; i++){
        fill(255, 255, 255, random(200, 255)); 

        ellipse(stars[i].x, stars[i].y, stars[i].size);
    }

    stroke(255, 200); 
    strokeWeight(2);
    noFill();
    beginShape();
    for (let point of constellation) {
        vertex(point.x, point.y);
    }
    endShape();
    
}

function generateStars(density) {
    stars = [];
    background(0);
    for (let i = 0; i < density; i++) {
        stars.push({
            x: random(width),
            y: random(height),
            size: random(1, 3),
            // twinkle: random(0.5, 1.5),
        });
    }
    constellation = [];
}

function keyPressed() {
    if (key === ' ') { 
        constellation = [];
        redraw();
    }
    if(keyValue().equals(16) ) {
        // PointerEvent.none();
        constellation = [];
        redraw();
    }
}

document.getElementById('generate').addEventListener('click', () => {
    density = document.getElementById('density').value;
    if(density > 1000){
        density = 1000;
    }
    if(density < 1) {
        density = 1;
    }
    generateStars(density);
    redraw();
});

function mousePressed() {
    if(mouseY < height *0.05) {
        constellation.push({});
    }else{
        constellation.push({ x: mouseX, y: mouseY });
        redraw(); 
    }   
}


