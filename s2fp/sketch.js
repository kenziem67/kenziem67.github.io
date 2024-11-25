function setup() {
    createCanvas(400, 400);
    currentH = hour();
    currentS = second();
    currentM = minute();
    angleMode(DEGREES);
    let circleButton = createButton("let's be blunt");
    circleButton.position(10, 350)
    let barButton = createButton("obsure a little");
    barButton.position(150, 350);
    let lineButton = createButton("obscure some more");
    lineButton.position(270, 350);
    let resetButton = createButton("reset");
    resetButton.position(175, 370);
    circleButton.mousePressed(drawCircles);
    barButton.mousePressed(drawBars);
    lineButton.mousePressed(drawLines);
    resetButton.mousePressed(reset);
    state = 0;
  }
  
  function draw() {
    noStroke();
    background(220);
    if(state == 1){
      drawCircles();
    }
    if(state == 2){
      drawBars();
    }
    if(state == 3){
      drawLines();
    }
    if(state ==4){
      noStroke();
      background(220);
    }
    // drawBars();
    // drawLines();
  }
  
  function drawSeconds() {
    s = second();
    fill(242, 131, 165);
    secondMap = map(s, 0, 60, 0, 360);
    arc(width/2, width/2, 100, 100, 3*90, 3*90 + secondMap)
  }
  
  function drawMinutes() {
    m = minute();
    fill(168, 50, 86);
    minuteMap = map(m, 0, 60, 0, 360);
    arc(width/2, width/2, 200, 200, 3*90, 3*90 + minuteMap);
  }
  
  function drawHours() {
    h = hour();
    fill(84, 6, 30);
    hourMap = map(h, 0, 24, 0, 720);
    arc(width/2, width/2, 300, 300, 3*90, 3*90 + hourMap);
  }
  
  
  function drawHourSquare() {
    push();
      if(hour() <= 12) {
        hourMap = map(hour(), 0, 24, 0, 800);
      } else{
          hourMap = map(hour()%12, 0, 24, 0, 800);
      }
      fill(hour(),2 * hour(),4*hour());
      if(currentH != hour()){
        fill(4*hour(), hour(),2 *hour());
        currentH = hour();
      }
      quad(36, 400-hourMap, 181, 400-hourMap, 181, 400, 36, 400);
    pop();
  }
  
  function drawMinuteSquare() {
    push();
      minuteMap = map(minute(), 0, 60, 0, 400);
      fill(minute(), 2*minute(), 4*minute());
      if(currentM != minute()){
        fill(4*minute(), minute(), 2*minute());
        currentM = minute();
      }
      quad(217, 400-minuteMap, 289, 400-minuteMap, 289, 400, 217, 400);
    pop();
  }
  
  function drawSecondSquare() {
    push();
      secondMap = map(second(), 0, 60, 0, 400)
      fill(second(), 2*second(), 4*second());
      if (currentS != second()) {
        fill(4*second(), second(), 2*second());
        currentS = second();
      }
      quad(325, 400-secondMap, 361, 400-secondMap, 361, 400, 325, 400);
    pop();
  }
  
  function drawHourLine(){
    push();
    stroke(56, 27, 82);
    strokeWeight(10);
    if(hour() <= 12) {
        hourLineMap = map(hour(), 0, 24, 0, 1131);
      } else{
          hourLineMap = map(hour()%12, 0, 24, 0, 1131);
      }
    // hourLineMap = map(hour()%12, 0, 24, 0, 1131);
    // line(0, 400, hourLineMap, 400-hourLineMap);
    line(0, 400, hourLineMap*sin(45), 400-hourLineMap*cos(45));
    pop();
  }
  
  function drawMinuteLine(){
    push();
    stroke(84, 46, 117);
    strokeWeight(6);
    minuteLineMap = map(minute(), 0, 60, 0, 400);
    line(400, 100, 400-minuteLineMap, 100);
    pop();
  }
  
  function drawSecondLine(){
    push();
    stroke(180, 123, 232);
    strokeWeight(3);
    secondLineMap= map(second(), 0, 60, 0, 141);
    // line(100, 0, 141-secondLineMap, secondLineMap);
    line(100, 0, 100-secondLineMap * cos(45), secondLineMap*sin(45));
    pop();
  }
  
  function drawCircles(){
    background(220);
    noStroke();
    drawHours();
    drawMinutes();
    drawSeconds();
    state = 1;
  }
  
  function drawLines(){
    background(220);
    noStroke();
    drawHourLine();
    drawMinuteLine();
    drawSecondLine();
    state = 3;
  }
  
  function drawBars(){
    background(220);
    noStroke();
    drawHourSquare();
    drawMinuteSquare();
    drawSecondSquare();
    state = 2;
  }
  
  function reset() {
    background(220);
    noStroke();
    state = 4;
  }
  