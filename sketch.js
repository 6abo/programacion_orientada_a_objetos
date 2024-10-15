
/*
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

*/

/*let bgColor;
let pelotas = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  bgColor = color(random(255), random(100), random(255));
  for (let i = 0; i < 100; i++) {
    let nuevaPelota = new Pelota();
    pelotas.push(nuevaPelota);
  }
}

function draw() {
  background(bgColor);
  for (let i = 0; i < 100; i++) {
    pelotas[i].update();
    pelotas[i].display();
  }
}

class Pelota {
  //Plano de instrucciones para crear una pelota
  constructor() {
    this.rad = ceil(random(5, 30));
    this.diam = this.rad * 2;
    this.posX = random(this.rad, width - this.rad);
    this.posY = random(this.rad, height - this.rad);
    this.velX = random(-10, 10);
    this.velY = random(-10, 10);
    console.log("estoy vivaaa!");
  }
  //método update
  update() {
    this.posX += this.velX;
    this.posY += this.velY;
    
    if (this.posX > width - this.rad || this.posX < this.rad) {
      this.velX *= -1;
    }

    if (this.posY > height - this.rad || this.posY < this.rad) {
      this.velY *= -1;
    }
  }

  display() {
    fill(255);
    noStroke();
    circle(this.posX, this.posY, this.diam);
  }
}*/

let particulas = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
 
}
      
function draw() {
  background(20);
  let nuevaParticula = new Particula(mouseX, mouseY);
  particulas.push(nuevaParticula);

  for(let i = 0; i < particulas.length; i++){
    particulas[i].update();
    particulas[i].display();
  }
  for(let i = 0; i < particulas.length; i++){
    if(!particulas[i].estaViva){
      particulas.splice(i , 1);

    }
  }
  console.log(particulas.length);
}