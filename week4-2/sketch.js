function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(255,0,0);

  pattern(0);
  pattern(frameCount / 2);
}

function pattern(angle) {
  push();
  fill(0);
  translate(400, 400);
  rotate(radians(angle)); 
  for (var x = -800; x < 800; x = x + 40) {
    for (var y = -800; y < 800; y = y + 40) {
fill(0,0,255);
      ellipse(x, y, 10, 10,30); 

      rect(x,y,10);
    }
  }
    
  pop();
}
