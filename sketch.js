// sketch.js

var cnv;
let moverX = 50;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(windowWidth,windowHeight);
  centerCanvas();
  background(255, 0, 200);
}

function mousePressed() {
  moverX = 100;
}

function draw() {
  fill(random(255),random(255),random(255));//RGB
  rect(mouseY, moverX, 20,20);
  moverX = moverX + 1;
}
