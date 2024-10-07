let posX, posY;
let velX, velY;
let diam;
let rad;
let bgColor;



function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);

  rad = ceil(random(20, 50));
  diam = rad*2
  posX = random(rad, width - rad);
  posY = random(rad, height - rad);

  velX = random(-10, 10);
  velY = random(-10, 10);
  bgColor = color(random(255), random(100), random(255));
}

function draw() {
  background(bgColor);
  fill(255);
  noStroke();
  posX += velX;
  posY += velY;
  
  if(posX > width - rad || posX < rad ){
    velX *= -1;
    changeBackgroundColor();
    
} else if(posY > height - rad || posY < rad){
    velY *= -1;
    changeBackgroundColor();
}



  circle(posX, posY, diam)
}

function changeBackgroundColor() {
    bgColor = color(random(255), random(100), random(255)); // Cambiar a un color aleatorio
}