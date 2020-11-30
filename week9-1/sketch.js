var trump;
var questions = [];


function setup() {
  createCanvas(900, 600);

  trump = new Trump();
  questions.push(new Questions());
}

function draw() {
  background(155);






for (var i = questions.length - 1; i >= 0; i--) {
  questions[i].show();
  questions[i].update();

  if (questions[i].hits(trump)) {
    console.log('HIT');
  }

  if (questions[i].offscreen()) {
    questions.splice(i, 1);
  }
}

trump.update();
trump.show();

if (frameCount % 75 == 0) {
  questions.push(new Questions());
}
}
function keyPressed() {
  if (key == ' ') {
    trump.up();
    //console.log("SPACE");
  }
}