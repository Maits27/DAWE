//Ejercicio 1
class Punto{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    suma(p){
        var newx = this.x + p.x;
        var newy = this.y + p.y;
        return new Punto(newx, newy);
    }
}

console.log(new Punto(1, 2).suma(new Punto(2, 1))); // Punto { x: 3, y: 3 }


//Ejercicio 2
class Locutor{
    constructor(nombre, verbo){
        this.nombre = nombre;
        this.verbo = verbo || "dice";
    }
    dice(text){
        console.log(this.nombre + " " + this.verbo + " '" + text + "'");
    }
}

class Feriante extends Locutor{
    constructor(nombre){
        super(nombre, "grita");
    }
    dice(text){
        super.dice(text.toUpperCase());
    }
}

new Feriante("Mr. Crecepelo").dice("Me lo quitan de las manos"); 

let keitel = new Feriante("Sr. Lobo");
console.log(keitel.constructor.name); // Sr. Lobo
