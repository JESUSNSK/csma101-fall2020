var x = [];
var y = [];
var colors = [];

function setup() {
  createCanvas(800, 800);
}

function draw() {
   //clear()
  

     strokeWeight(300);
    noFill();
    ellipse(400, 400, 1000, 1000, 1000);
  
  
  if (mouseIsPressed) {
    x.push(mouseX);
    y.push(mouseY);
    colors.push(255,255,0);
  }


  
  strokeWeight(1);
  
  for (var i=0; i < x.length; i=i+1) {
    // drawing to the screen
    stroke(255,255,0);
    point(x[i], y[i]);
    
    // change the point a little bit for next time
    x[i] = x[i] + random(-5, 5);
    y[i] = y[i] + random(-5, 5);
    
  }
}