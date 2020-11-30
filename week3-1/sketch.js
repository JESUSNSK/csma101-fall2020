var angle = 0;
var centerX = 0;
var centerY = 0;


function setup() {
  createCanvas(800, 800);
  background(0);
}

function draw() {



    var x1 = centerX + sin(angle) * 50 * 50 * 50;
  var y1 = centerY + cos(angle) * 75 * 75 / 10;

  angle = angle + radians(50 / 50);


  if (mouseIsPressed)
    line(mouseX, mouseY, random(600), random(600))
  stroke(100)

  var x = centerX + sin(angle) * 50 * 50;
  var y = centerY + cos(angle) * 75 * 50;

  for (var x = 0; x < 800; x = x + 10) {
    for (var y = 0; y < 800; y = y + 10) {
      ellipse(x, y, 2, 2);
    }
  }


  if (mouseX < 200) {
    fill(0, 0, 255);
  } else if (mouseX < 400) {
    fill(255, 55, 55);
  } else if (mouseX < 300) {
    fill(255, 0, 0);
  } else {
    fill(0, 255, 0);
  }

  ellipse(mouseX, mouseY, 100, 100);
  line(x, y, 400, 400)
  stroke(220)

}