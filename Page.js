var controls;

function preload() {
  controls = loadImage('SpaFighter.png')
}


function setup() {
button = createButton('CONTINUE');
  button.position(420, 400);
  button.mousePressed(nextPage);
  button.size(200, 100);
  button.style('font-size', '30px');
    createCanvas(1024, 600);
}

function draw() {
  image(controls, 0, 0, 1024, 600);
}



function nextPage() {
  window.location = 'Page2.html';
}
