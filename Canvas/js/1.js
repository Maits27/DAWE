
let x = 10; 
let y = 190; 
let direction = 1; 
let x2 = 80; 
let y2 = 90;



window.onload = function() {
    ejercicio1();
    ejercicio2();
}

function ejercicio2(){
    let canvas = document.getElementById("canvas2");
    canvas.setAttribute("style", "border: 1px solid black;");
    var ctx = canvas.getContext("2d");
    flechaDerecha(ctx, x2, y2);

    document.addEventListener('keydown', function(event) {
        switch (event.key) {
            case 'ArrowLeft':
                if(x2-60>=0){
                    x2 -= 10;
                    flechaIzquierda(ctx, x2, y2);
                }
                break;
            case 'ArrowRight':
                if(x2+60<=canvas.width){
                    x2 += 10;
                    flechaDerecha(ctx, x2, y2);
                }
                break;
            default:
                break;
        }
        
    });
}

function flechaDerecha(ctx, x, y){
    ctx.clearRect(0, 0, 600, 200);
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x+30, y);
    ctx.lineTo(x+30, y-10);
    ctx.lineTo(x+50, 100);
    ctx.lineTo(x+30, y+30);
    ctx.lineTo(x+30, y+20);
    ctx.lineTo(x, y+20);
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.fillStyle ="red";
    ctx.fill();
}
function flechaIzquierda(ctx, x, y){
    ctx.clearRect(0, 0, 600, 200);
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x-30, y);
    ctx.lineTo(x-30, y-10);
    ctx.lineTo(x-50, 100);
    ctx.lineTo(x-30, y+30);
    ctx.lineTo(x-30, y+20);
    ctx.lineTo(x, y+20);
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.fillStyle ="cyan";
    ctx.fill();
}


function ejercicio1(){
    let canvas = document.getElementById("canvas");
    canvas.setAttribute("style", "border: 1px solid black;");
    const ctx = canvas.getContext("2d");
    
    dibujar(x, y, ctx);

    setInterval(function(){rodar(ctx)}, 10);
}


function rodar(ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    dibujar(x, y, ctx);

    x += direction;
    if (x > canvas.width-10){
        direction = -1;
    }
    if (x < 10){
        direction = 1;
    }

}

function dibujar(x, y, ctx){
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.stroke();
}
