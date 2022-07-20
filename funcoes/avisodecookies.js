
const Cookies = {

    mostrarAviso () {
        aviso.classList.add("on");
    },

    omitirAviso () {
        aviso.classList.remove("on");
    },

    criarSessao () {
        sessionStorage.setItem("cookiestrmc", "consentidos");
    },

    sessaoDisponivel () {
        if(sessionStorage.cookiestrmc) {
            return true;
        } else {
            return false;
        }
    }
}


let aviso;
window.addEventListener("load", () => {
    aviso = document.querySelector(".aviso-de-uso-de-cookies");
    

    if(!Cookies.sessaoDisponivel()) {
        setTimeout(Cookies.mostrarAviso(), 2000);

        document.querySelector("button.aceitar-cookies").addEventListener("click", () => {
            Cookies.omitirAviso();
            Cookies.criarSessao();
        });
    }

    else {
        return false;
    }
})