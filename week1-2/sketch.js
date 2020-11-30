function setup() {
  createCanvas(800, 800);
}

function draw() {
  ellipse(mouseX-random(1, 4), mouseY-random(2, 4), mouseX+random(2, 6), mouseY+random(2, 6));
  
  var size;
  size = random(0, 5) + 5;
  noStroke();
    fill(frameCount % 50 * 2, frameCount % 100 * 3, frameCount % 200 * 4);
}
