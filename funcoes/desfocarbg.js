
function desfocarFundo (accao) {
    if(accao == 1) {
        desfoque.classList.add("on");
    }
    else {
        desfoque.classList.remove("on");
    }
}

let desfoque;
window.addEventListener("load", () => {
    desfoque = document.querySelector(".desfoque-do-fundo");
})