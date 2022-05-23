

let observacao;
function observar() {
    // Declaracao das Variáveis necessárias
    observacao = document.querySelector("p.obs");
    let trechodeObs = document.querySelector("p.obs span"),
        readonlyCelsDarker = document.getElementById("readonly-cels-darker"),
        tempodeObs = 1500;

    // Mostrar Obseervação
    observacao.classList.add("on");

    // Recomendar "Dark readonly Cels"
    if(!readonlyCelsDarker.checked) {
        trechodeObs.classList.add("show");

        tempodeObs = 5000;
    }
    else {
        trechodeObs.classList.remove("show");
    }

    

    setTimeout(() => {
        observacao.classList.remove("on");
    }, tempodeObs);
}



function scrollWindow() {
    let setaEsq = document.querySelector(".ancestral-da-seta.lt span"),
        setaDir = document.querySelector(".ancestral-da-seta.gt span");

        setaEsq.addEventListener("click", () => {
            
        })
}
window.addEventListener("load", () => {
    
    let readonlyCels = document.querySelectorAll(".col-de-inputs input[readonly]");

    for (const cel of readonlyCels) {
        cel.addEventListener("click", observar); 
    }
})