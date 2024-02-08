class ArrayOrdenado {
    constructor(comparador) {  
        this.contenido = [];
        this.comparador = comparador;
    }
    findPos(elt) {
        return this.contenido.findIndex(item => this.comparador(elt, item) < 0);
    }
    insert(elt) {
        this.contenido.splice(this.findPos(elt), 0, elt)
    }
}


var ordenado = new ArrayOrdenado(function(a, b) { return a - b });
ordenado.insert(5);
ordenado.insert(1);
ordenado.insert(2);
ordenado.insert(4);
console.log(ordenado.contenido); // → [1, 2, 4, 5]