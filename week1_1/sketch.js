function setup() {
  createCanvas(800, 800);
}

function draw() {
  var size;
  size = random(0, 50) + 10;
  
  print(frameCount% 255 * 2);
  
  fill(40, 140, frameCount % 255 * 2);
  
  rect(mouseX, mouseY, random(0, 50), random(0, 50));
  
  var temp = 99.5;
  
  var lotto  = round(random(0, 50));
  
  var name = 'jesus'
  var lastname = 'montes'
  
  var lastname = 'montes'
  var isitRainy = true;
  
  var isrepublican = null;
  
}