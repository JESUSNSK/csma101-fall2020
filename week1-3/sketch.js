var angle = 0;
var centerX = 400;
var centerY = 400;


function setup() {
  createCanvas(800, 800);
  colorMode(HSB, 220);
}

function draw() {
  
  angle = angle + radians(40/40);
 
  centerX = mouseX ;     
  centerY = mouseY ;


  var x= centerX+sin(angle)*200;
  var y= centerY+cos(angle)*200;

  fill( frameCount % 155,155,255, );
  ellipse(x, y,100,100) 
  strokeWeight(0.005)
  stroke(20, 155, 255)
  fill(  frameCount % 155, 100,155,);
  
 
}