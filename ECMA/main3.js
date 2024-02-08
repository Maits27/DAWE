//Ejercicio 3
function Punto (x, y){
    this.x = x;
    this.y = y;
}
Punto.prototype.suma = function(p){
    var newx = this.x + p.x;
    var newy = this.y + p.y;
    return new Punto(newx, newy);
}

console.log(new Punto(1, 2).suma(new Punto(2, 1))); // Punto { x: 3, y: 3 }
