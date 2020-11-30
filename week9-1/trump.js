let img;
function preload() {
  img = loadImage('potus.png');
}
function Trump() {
  this.y = height / 2;
  this.x = 64;

  this.gravity = 0.2;
  this.lift = -8;
  this.velocity = -5;

  this.show = function() {
    
     image(img, this.x, this.y,200,200);
    
   // fill(255);
    
    
  //  ellipse(this.x, this.y, 32, 32);
  };

  this.up = function() {
    this.velocity += this.lift;
  };

  this.update = function() {
    this.velocity += this.gravity;
    // this.velocity *= 0.9;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  };
}
