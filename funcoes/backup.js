
const saveOnStorage = {

    salvarFicha: () => {
        const celulas = document.querySelectorAll(".col-de-inputs input");

        for (let p = 0; p < celulas.length; p++) {
            
            celulas[p].addEventListener("input", () => { 
                // BACKUP - SALVAR NO LOCALSTORAGE
                let valor = (`${celulas[p].value}`);
                localStorage.setItem(`cel${p}`, valor);
            });

            // SAIDA - RETORNO DO BACKUP
            let storageReturn = localStorage.getItem(`cel${p}`);
            celulas[p].value = storageReturn;
        }
    },

    salvarMes: () => {
        const mes = document.querySelector(".contentor-da-grade #mes");
        mes.addEventListener("input", () => {
            localStorage.setItem("mes", `${mes.value}`);
        })
        mes.value = localStorage.getItem("mes"); // Autoput
    },

    salvarUS: () => {
        const us = document.querySelector("#nome-da-us");
        us.addEventListener("input", () => {
            localStorage.setItem("us", `${us.value}`);
        })
        us.value = localStorage.getItem("us")
    },

    salvarNome: () => {
        const ps = document.querySelector("#nome-do-ps");
        ps.addEventListener("input", () => {
            localStorage.setItem("ps", `${ps.value}`);
        })
        ps.value = localStorage.getItem("ps");
    }, 

    salvarCategoria: () => {
        const categoria = document.querySelector("#categoria");
        categoria.addEventListener("input", () => {
            localStorage.setItem("categoria", `${categoria.value}`);
        })
        categoria.value = localStorage.getItem("categoria");
    }, 
    
    salvarData: () => {
        const datadeRealizacao = document.querySelector("#data-de-realizacao");
        datadeRealizacao.addEventListener("change", () => {
            localStorage.setItem("data", `${datadeRealizacao.value}`);
        })
        datadeRealizacao.value = localStorage.getItem("data");
    },

    salvarReadonlyCelsBg: () => {
        const checkboxDarker = document.querySelector("#readonly-cels-darker");

        checkboxDarker.addEventListener("change", () => {
            localStorage.setItem("darkmode", checkboxDarker.checked);
        });

        if(localStorage.getItem("darkmode") == "true") {
            checkboxDarker.setAttribute("checked", "");
        }
        else {
            checkboxDarker.removeAttribute("checked");
        }
    }
}




window.addEventListener("load", () => {
    saveOnStorage.salvarFicha();
    saveOnStorage.salvarMes();
    saveOnStorage.salvarUS();
    saveOnStorage.salvarNome();
    saveOnStorage.salvarCategoria();
    saveOnStorage.salvarData();
    saveOnStorage.salvarReadonlyCelsBg();
});