let divDesfocante;
window.addEventListener("load", () => divDesfocante = document.querySelector(".desfoque-do-fundo"));

const desfocarFundo = () => divDesfocante.classList.add("on");

const focarFundo = () => {
    const janelasDesfocantes = document.querySelectorAll(".caixa-de-confirmacao, .atalhos-do-teclado, .hamburguer");
    
    let janelasAbertas = 0;

    for (const janela of janelasDesfocantes) {
        if(janela.classList.contains("on")) janelasAbertas++;
    }
    if(janelasAbertas > 0) return false;

    divDesfocante.classList.remove("on");
}


