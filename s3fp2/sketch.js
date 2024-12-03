function setup(){
    createCanvas(windowWidth, windowHeight);
    noLoop();
    constellation = [];
}

function draw() {
    let c = document.getElementById('time').value;
    print(c);
    background(c, c, c*2); 
    noStroke();
    for (i = 0; i <stars.length; i++){
        fill(255, 255, 255, random(200, 255)); 
        ellipse(stars[i].x, stars[i].y, stars[i].size);
    }

    stroke(255, 200); // White, semi-transparent lines
    strokeWeight(2);
    noFill();
    beginShape();
    for (let point of constellation) {
        vertex(point.x, point.y);
    }
    endShape();
    // drawConstellation();
}

function generateStars(density) {
    stars = [];
    background(0);
    for (let i = 0; i < density; i++) {
        stars.push({
            x: random(width),
            y: random(height),
            size: random(1, 3),
            twinkle: random(0.5, 1.5),
        });
    }
    constellation = [];
}

function keyPressed() {
    if (key === ' ') { 
        constellation = [];
        redraw();
    }
}

document.getElementById('generate').addEventListener('click', () => {
    const density = document.getElementById('density').value;
    generateStars(density);
    redraw();
});

function mousePressed() {
    constellation.push({ x: mouseX, y: mouseY });
    redraw(); // Trigger a redraw to update the canvas
}


