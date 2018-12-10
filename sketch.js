var start;
var sound;

function preload() {
  start = loadImage('START.jpg')
}


function setup() {
button = createButton('START');
  button.position(415, 300);
  button.mousePressed(nextPage);
  button.size(200, 100);
  button.style('font-size', '50px');
  createCanvas(1024, 411);

}


function draw() {
  image(start, 0,0,1024,411);
}


function nextPage() {
  window.location = 'Page.html';

}
