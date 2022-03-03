let x;
let y;
let ip = 'NO VPN?'
let xspeed;
let yspeed;
function preload() {
  img = loadImage('noBitchesSmall.jpg');
}
function setup() {
  createCanvas(400, 300);
  x=200;
  y=150;
  xspeed = 2;
  yspeed = 2;
}

function draw() {
  background(0);
  image(img,x,y)
  //rect(x,y,80,60)
  x = x+ xspeed;
  y = y+ yspeed;

    
  if (x + 50 == width || x==0){
 
    xspeed = xspeed * -1;
  }  
    if (y+ 50 == height||  y==0) {
    yspeed = yspeed * -1;
  }
      textSize(90);
    textFont('Impact');
    fill(220)
    text(ip, 70,100)
    
 
}