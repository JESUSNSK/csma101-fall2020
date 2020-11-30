
function Questions() {
  this.spacing = 300;
  this.top = random(height / 6, (3 / 4) * height);
  this.bottom = height - (this.top + this.spacing);
  this.x = width;
  this.w = 60;
  this.speed =2.5;

  this.highlight = false;

  this.hits = function(trump) {
    if (trump.y < this.top || trump.y > height - this.bottom) {
      if (trump.x > this.x && trump.x < this.x + this.w) {
        this.highlight = true;
        return true;
      }
    }
    this.highlight = false;
    return false;
  };

  this.show = function() {
    fill(255);
     if (this.highlight) {
      fill(255, 0, 0);
    } 
    
    text("CLIMATE CHANGE",this.x*2, height - this.bottom, this.w, this.bottom);   
    text("GLOBAL WARMING",this.x*2, 150, this.w, this.top);
  
  noFill();
  rect(this.x*2, 0, this.w, this.top);
      noFill();
   rect(this.x*2, height - this.bottom, this.w, this.bottom);
  
  };

  this.update = function() {
    this.x -= this.speed;
  };

  this.offscreen = function() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  };
}