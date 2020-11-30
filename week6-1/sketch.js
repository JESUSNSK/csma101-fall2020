var img1;
//var img2;
var size;
var startRow;
var whichImage;

function preload() {
  img1 = loadImage("image1.jpg");
 // img2 = loadImage("image2.jpg");
}

function setup() {
  createCanvas(900,900);
  size = 5;
  startRow = -5;
  whichImage = 1;


//createLoop({duration:3, gif: {download: false}});
}

function draw() {
 // background(0);
  frameRate(3);
    image(img1, 0, 0);
  
   if (mouseIsPressed)
    
  for (var x=size+startRow*size*1; x < height; x = x + size * 1) {
    for (var y=size+startRow*size*1; y < height; y = y + size * 1) {
     var c;
     if (whichImage == 1) {
       c = img1.get(x, y);
       
  
  
       
     //} else {
       
     //  c = img2.get(x, y);
     }
     fill(c);
     rect(x, y, size, size);
    }
  }
         
  //startRow = startRow + 2;
  if (startRow > height / (size * 2)) {
    startRow = 0;
    whichImage = whichImage * -1;
   size = (1);
  }
  size = size+2
}

