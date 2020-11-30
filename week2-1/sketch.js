var angle = 0;
var centerX = 400;
var centerY = 400;


function setup() {
  createCanvas(800, 800);
  background(255)
}
 function draw() {  
  // rotate(PI / 6.0)
  angle = angle + radians(50/50);
     var x= centerX+sin(angle)*50*50*50;
     var y= centerY+cos(angle)*75*75/10;
       
   
 ellipse(mouseX, mouseY, random(300,300), random(300,300),random (300,300), 1); 
 
  // angle = angle + radians(100/100);

   noFill(0)
 
 
  if (mouseIsPressed)  
 line(mouseX, mouseY, random(0,600), random(0,600)) 
   strokeWeight(0.1)
  stroke(0,0,255)
   rotate(PI / 10.0) 
  /// angle = angle + radians(500/500);
 
   noFill(0)
}