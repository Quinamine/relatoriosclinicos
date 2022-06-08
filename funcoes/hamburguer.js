


function abrirHamburguer() {
    const nav = document.querySelector(".linha-do-cabecalho nav");

    if(hamburguer.classList.contains("on")){
        hamburguer.classList.remove("on");
        nav.classList.remove("on");
        desfocarFundo(0);
    }
    else {
        hamburguer.classList.add("on");
        desfocarFundo(1);
        nav.classList.add("on");
    }
}


let hamburguer;
window.onload = () => {
    hamburguer = document.querySelector(".hamburguer");

    hamburguer.addEventListener("click", abrirHamburguer);
}