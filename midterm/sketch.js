var angle = 0;

function setup() {
  createCanvas(1000, 1000);

  background(0,100,255,255);
  frameRate(35);
  rectMode(CENTER);
 
}

function draw() {
  let cos_a = cos(angle);
  let sin_a = sin(angle);
  translate(500, 500);

  applyMatrix(cos_a, sin_a, -sin_a, cos_a, 0, 0);

  angle = angle + radians(50 / 50);
  strokeWeight(0.008);
  noFill()

  stroke('white')

  pattern(0);
  pattern(frameCount / 2);
}

function pattern(angle) {
  push();
 
  translate(100, 100);
  rotate(radians(angle));
  for (var x = -300; x < 500; x = x + 100) {
    for (var y = -300; y < 500; y = y + 100) {
      triangle(x,y,250,250,20,20)
       triangle(x,y,20,20,200,200)
     // rect(x, y, 100, 100);
    }
  }
  pop();

}