class Particula {
    //este metodo se ejecuta automaticamente
    constructor(_x, _y) {
        this.posx = _x;
        this.posy = _y;
        this.estaViva = true;
        //tVida es el tiempo de vida
        this.tVida = round(random(0, 200));
        this.diam = 50;
    }

    update(){
        this.tVida --;
        if(this.tVida <= 0){ //cuando la particula llegue a 0 muere
            this.estaViva = false;
            return;
        } 
        
        this.posy += 2; // se acutualiza la particula
        this.posx += random(-10, 10);
        this.tamano -= 0.5;
    }
    display(){
        fill(255);
        noStroke();
        circle(this.posx, this.posy, this.tVida);
    }
}