// Ejercicio 1

let elemento = document.getElementById('tres');
elemento.innerHTML = 'Tres';

// Ejercicio 2

let elem = document.getElementsByTagName("footer")[0];
elem.insertAdjacentHTML(
        "beforeend", "<section><h4>article section h4</h4></section>"
);

elem.innerHTML += document.getElementsByTagName("footer")[0].getElementsByTagName("p")[0].innerHTML;

// Ejercicio 3

let largo = document.getElementsByTagName("footer").length
let footer = document.getElementsByTagName("footer")[largo-1];
footer.innerHTML = 'Este es el nuevo Footer';

// Ejercicio 4

let largo2 = document.getElementsByClassName("wrapper").length
let footer2 = document.getElementsByClassName("wrapper")[largo2-1];
footer2.innerHTML += "<p>Nueva actualización</p>";

// Ejercicio 5

let aside = document.getElementsByTagName("aside")[0];
aside.style.backgroundColor = "white";
aside.style.color = "black";

// Ejercicio 6

let imagen = document.createElement("img");
imagen.setAttribute("src", "https://i.blogs.es/83bdf1/loremeee/1366_2000.jpg");
imagen.style.width = "500px";
let art = document.getElementsByTagName("article")[0];
art.appendChild(imagen);

// Ejercicio 7

let div = document.getElementsByClassName("footer-container")[0];
let img = document.createElement("img");
img.setAttribute("src", "https://media.licdn.com/dms/image/C5612AQHGvA90ZUcNlA/article-cover_image-shrink_720_1280/0/1637846620838?e=2147483647&v=beta&t=KlMph8VyzO9__-bGLMl1XtW0mHnepjlxn_J74SBRqAk");
img.style.width = "500px";
img.style.display = "block";
img.style.margin = "0 auto";
div.insertAdjacentHTML("beforebegin", img.outerHTML);

// Ejercicio 8

let numbers = '';
for (let i = 1; i <= 99; i++) {
    numbers += i + ',';
}
numbers = numbers.slice(0, -1); // Remove the last comma
console.log(numbers);

// Ejercicio 9

let numDiv = document.getElementsByTagName("div").length;
alert(numDiv)

// Ejercicio 10

// Function to simulate dice roll
const rollDice = () => {
    const result = Math.floor(Math.random() * 6) + 1;
    console.warn(`Resultado del lanzamiento del dado: ${result}`);
};

// Call the rollDice function 10 times
for (let i = 0; i < 10; i++) {
    rollDice();
}

