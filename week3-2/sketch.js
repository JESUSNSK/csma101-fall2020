var angle = 0;
var centerX = 0;
var centerY = 0;


function setup() {
  createCanvas(800, 800);
  background( 0);
}

function draw() {
   if (mouseIsPressed)
      if (mouseX < 400 ) {
    fill (255, 0, 0) ;
  } else if (mouseX < 400 ) {
    fill (0, 255, 0) ;
  } else if (mouseX < 500 ) {
    fill (255, 255, 255) ;
  } else {
    fill (0,0,255);
  }
  ellipse(mouseX, mouseY,50,50);

    if (mouseIsPressed)

  var x1= centerX+sin(angle)*50*50*50;
  var y1= centerY+cos(angle)*75*75/10;

  angle = angle + radians(50/50);
 

  if (mouseIsPressed)
  line(mouseX, mouseY, random(600), random(600)) 
   stroke(100)

   var x= centerX+sin(angle)*50*50;
  var y= centerY+cos(angle)*75*50;


   line(x,y,400,400) 
  stroke(220)


 
}