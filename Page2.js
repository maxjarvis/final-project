var map;
var fighter1;
var kick1;
var fighter2;
var duck2;
var punch1;
var duck1;
var rat;
var player1wins;
var player2wins;
var music;
var x = 100
var q = 800
var original = 1;
var og = 1;
var hit1 = 0;
var hit2 = 0;
var score1 = 0;
var score2 = 0;



function preload() {
  map = loadImage('background.jpg');
  fighter1 = loadImage('fighter1.png');
  kick1 = loadImage('kick1.png');
  fighter2 = loadImage('fighter2.png');
  punch1 = loadImage('punch1.png');
  duck2 = loadImage('duck2.png');
  duck1 = loadImage('duck1.png')
  rat = loadImage('rat.png');
  player1wins = loadImage('player1wins.jpeg')
  player2wins = loadImage('player2wins.jpeg')
  music = loadSound('streetfightergame.mp3')
  music.setloop(true);

}

function setup() {
  createCanvas(1024, 411);
  stroke(255, 0, 0);
  strokeWeight(4);
  a = width;
  b = 350;
  music.play();
}

function draw() {
  image(map,0,0,1024,411);


  image(rat, a, b, 25, 25);
  b = b + random(-1, 1);
  a = a - 2.5;
  if (a < 0) {
    a = width;
  }

og = 1;
original = 1;
hit1 = 0;
hit2 = 0;

if(keyIsPressed) {
  if(key == "a") {
    x = x - 5;
  } else if(key == "d"){
    x = x + 5;
  }
  else if(keyCode == LEFT_ARROW) {
    q = q - 5;
  } else if(keyCode == RIGHT_ARROW){
    q = q + 5;
  }
}

if(keyIsPressed) {
  if(keyCode == UP_ARROW) {
    image(punch1, q, 211, 180, 200);
    original = 0;
    if((q-x) > -20 && (q-x) < 140) {
      hit1 = 1;
    } else{
      hit1 = 0;
    }
  }

   if(keyCode == DOWN_ARROW) {
    image(duck2, q, 151, 130, 260);
    original = 0;
  }
}
if(original == 1) {
image(fighter2, q, 211, 180, 200);
}


if(keyIsPressed) {
  if(key == "w") {
    image(kick1, x, 211, 250, 200);
    og = 0;
    if((x-q) > -160 && (x-q) < 20) {
      hit2 = 1;
    } else{
      hit2 = 0;
    }
  }

  if(key == "s") {
    image(duck1, x, 171, 290, 240);
    og = 0;
}
}

if(og == 1) {
  image(fighter1, x, 211, 250, 200);
}

if(hit1 == 1) {
  score1 += 2;
}

if(hit2 == 1) {
  score2 += 2;
}

stroke(0);
fill(255, 0, 0)
textSize(20);
text("HEALTH", 475, 20)

fill(255, 0, 0);
noStroke();
rect(0, 30, width, 30);

stroke(0);
line(width/2, 30, width/2, 60);

noStroke();
fill(255, 255, 0);
rect(score1, 30, ((width/2)-2)-score1, 30);
rect((width/2)+2, 30, 512-score2, 30);

fill(255, 0, 0);
stroke(0);
text("PLAYER 1", 30, 80);
text("PLAYER 2", 900, 80);

if(score1 >= 512) {
  image(player2wins, 0, 0, 1024, 411);
}

if(score2 >= 512) {
  image(player1wins, 0, 0, 1024, 411);
}

}
