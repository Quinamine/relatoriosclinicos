const Cookies = {
    verDisponiilidade: (sessionKey) => sessionStorage.getItem(`${sessionKey}`) ? "definido" : "indefinido",

    mostrarAviso: () => aviso.classList.add("on"),

    omitirAviso: () => aviso.classList.remove("on"),

    criarSessao: (sessionKey) => sessionStorage.setItem(`${sessionKey}`, "consentidos")
}

let aviso;
window.addEventListener("load", () => {

    aviso = document.querySelector(".aviso-de-uso-de-cookies");
    const btnAceitar = document.querySelector(".aceitar-cookies");
    const sessionKey = btnAceitar.dataset.sessionkey;

    if(Cookies.verDisponiilidade(sessionKey) == "indefinido") {
        setTimeout(Cookies.mostrarAviso, 2000);

        btnAceitar.addEventListener("click", () => {
            Cookies.criarSessao(sessionKey);
            Cookies.omitirAviso();
        })
    }
})