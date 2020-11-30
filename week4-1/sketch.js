
function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(255);
  


  pattern(0);
  pattern(frameCount/5);
}

function pattern(angle) {
  //frameRate(4);
  push();                   // make a copy of the current drawing "settings" (transformations etc)
  fill(0);
  translate(100, 100);      // step 1: move the coordinate origin
  rotate(radians(angle));   // step 2: rotate the coordinate grid
  for (var x=-800; x < 300; x=x+10) {
    for (var y=-800; y < 300; y=y+10) {
      strokeWeight(0.5);
      rect(x, y, 30, 30);    // step 3: draw
      
        fill(0);
  translate(400, 400);      
  rotate(radians(angle));   
   var size;
  size = random(0, 50) + 10;

      strokeWeight(0.05);
      ellipse(x, y, random(0, 50), random(0, 50));    
    }
  }
  pop();                  
}
  