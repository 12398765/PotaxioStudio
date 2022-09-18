document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".serviciosTitle").classList.add("animacion");
    setTimeout(function(){
        document.querySelector(".serviciosTitle").classList.remove("animacion");
    }, 2000);
})

var cont = 0;
const verMenu = () => {
    if (cont == 0) {
        document.querySelector(".iconMenu").classList.add("show");
        document.querySelector(".iconMenu").classList.remove("hide");
        document.querySelector(".content-all").setAttribute("style", "margin-top: 30px");
        cont = 1;
    } else {
        document.querySelector(".iconMenu").classList.remove("show");
        document.querySelector(".iconMenu").classList.add("hide");
        document.querySelector(".content-all").setAttribute("style", "margin-top: -50px");
        cont = 0;
    }
}

//src = nombre de la imagen del juego. Ejemplo: MENJA.PNG
//alt = descripción breve de la imagen.
//nombre = Nombre dle juego.
//href = enlace de dónde se encuentra el juego. Ejemplo: https://www.juego.com

const createCard = (src, alt, nombre, href) => {
    const contenedor = document.querySelector(".contenidoJuegos");
    const card = document.createElement("div");
    card.classList.add("card");
    const cardTitle = document.createElement("div");
    cardTitle.classList.add("card-title");
    const img = document.createElement("img");
    img.setAttribute("src", `../imgJuegos/${src}`);
    img.setAttribute("alt", alt);
    const p = document.createElement("p");
    p.textContent = nombre;
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    const cardText = document.createElement("div");
    cardText.classList.add("card-text");
    const enlace = document.createElement("a");
    enlace.setAttribute("class", "btn btn-danger btn-sm");
    //enlace.classList.add("btn btn-danger btn-sm");
    enlace.setAttribute("href", href);
    enlace.setAttribute("target", "_blank");
    enlace.textContent = "PLAY GAME";

    contenedor.appendChild(card);
    card.appendChild(cardTitle);
    cardTitle.appendChild(img);
    cardTitle.appendChild(p);
    card.appendChild(cardBody);
    cardBody.appendChild(cardText);
    cardText.appendChild(enlace);

}

createCard("LOSTCITY.PNG", "VideoJuego LOSTCITY Potaxio Studio", "LOSTCITY", "https://potaxio-studios.itch.io/lostcity");
createCard("TPS.PNG", "VideoJuego TPS desarrollado por Potaxio Studios.", "TPS", "https://potaxio-studios.itch.io/tps-html");
