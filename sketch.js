
function setup() {
  
  createCanvas(400, 400);
}

function draw() {
  // limpa a tela
  background('black');
if (keyIsDown(32)){
  background('white');
}
if(keyIsDown(49)){
  background('red');
}
}