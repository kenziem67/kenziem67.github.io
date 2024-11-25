function setup() {
    createCanvas(windowWidth, windowHeight);
    backgroundR = random(0, 256);
    backgroundG = random(0, 256);
    backgroundB = random(0, 256);
    background(backgroundR, backgroundG, backgroundB);
    intVal = (int)(random(65, 91));
    letter = (char(intVal));
    randomNumber = (int)(random(1, 101));
    stepper=0;
}
  
function draw() {
    fill(backgroundB, backgroundR, backgroundG);
    stroke(backgroundB, backgroundR, backgroundG);
    textAlign(CENTER);
    textSize(100);
    text(letter + " " + randomNumber, 100, 100);
}

function mousePressed(){
    if(stepper<randomNumber){
        text(letter, mouseX, mouseY);
    }
    stepper++;
}
    