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