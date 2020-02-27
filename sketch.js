let mic;
let micLevel;
let purpleandgreen = 0;
let angleEars = 1.5;
let bamYes = false;
let mouse1;
let mouse2;
let mouse3;
let mouse4;


function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  mic = new p5.AudioIn();
  mic.start();

  mouse1 = new Mouse(90, 246, purpleandgreen, 0.5);
  mouse2 = new Mouse(160, 260, purpleandgreen, 1.5);
  mouse3 = new Mouse(180, 246, purpleandgreen, 0.1);
  mouse4 = new Mouse(80, 260, purpleandgreen, 0.7);

  console.log(mouse1);

}

function draw() {
  //console.log("mic level " + mic.getLevel());

  purpleandgreen = map(mic.getLevel(), 0, 0.5, 345, 369);
  purpleandgreen = map(mic.getLevel(), 0, 0.5, 345, 369);
  micLevel = mic.getLevel();

  background(255, 253, 247);
  drawCurtain();
  drawMickeyhead();
  drawMickeyears(5, 5, angleEars);
  drawNumbers();
  drawMickeyeyes()
  // drawEyes(90, 246, purpleandgreen);
  // drawEyes(160, 260, purpleandgreen);



  mouse1.display();
  mouse2.display();
  mouse3.display();
  mouse4.display();


  mouse1.move();
  mouse2.move();
  mouse3.move();
  mouse4.move();

  drawOther(110, 363, -19);

  if (bamYes === true) {
    fill(46, 42, 108);
    rect(width / 2.7, height / 2.1, 45, 18);
    rect(width / 1.8, height / 2.2, 45, 18);
  } //else {
  //circle(width / 4, height / 2, 10);
  //}
}

function mousePressed() {


  if (mouseX < 300 && mouseX > 160 && mouseY < 50) {
    console.log("mouse beep here");
    angleEars = -angleEars;
  } else if (mouseX < width * 0.2 || mouseX > width * 0.8) {
    bamYes = !bamYes;
    //console.log("mouse beep now");
  }
}


function drawCurtain() {

  textSize(24);
  //curtain

  fill(255, 204, 0);
    noStroke();
 triangle(0, 5, 0, 200, 50, 5);

    fill(255, 204, 0);
    noStroke();
 triangle(400, 200, 350, 0, 400, 0);

  fill(99, 90, 161);
  noStroke();
  ellipse(40, 20, 80, 80);
  ellipse(120, 20, 80, 80);
  ellipse(200, 20, 80, 80);
  ellipse(280, 20, 80, 80);
  ellipse(360, 20, 80, 80);

fill(255, 204, 0);
    noStroke();
  rect(0, 0, 400, 20);



  fill(255, 204, 0);
  rect(0, 380, 400, 30);

}


function drawMickeyhead() {
  fill(255, 204, 0);
  noStroke();
  ellipse(200, 260, 200, 200);

}

function drawMickeyears(xPos, yPos, rotation) {
  fill(255, 204, 0);
  noStroke();
  rotate(rotation)
  ellipse(300, 160, 90, 130);
  ellipse(100, 160, 90, 130);


}

function drawOther(xPos, yPos, rotation) {
  push();
  rotate(rotation);
  ellipse(width / 4, constrain(height - micLevel * height+2, 12, height-2), 20, 28);
  pop();
}

function drawNumbers() {
  fill(99, 90, 161);
  text('24', 290, 168);

  fill(99, 90, 161);
  text('8', 94, 168);

  micLevel = mic.getLevel();
}



function drawMickeyeyes (){
  fill(20, 40, 0);
  stroke(20)
  ellipse(160, 220, 35, 30);
  ellipse(230, 220, 35, 30);


}
