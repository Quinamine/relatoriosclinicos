


window.addEventListener("load", () => {
    let celulas = document.querySelectorAll(".coluna-de-inputs input");
    
    for (const celula of celulas) {
        
        celula.addEventListener("input", () => {

            if(celula.dataset.subtotal) {
                celula.classList.add(`${celula.dataset.subtotal}`);

                let subtotal = document.querySelectorAll(`.${celula.dataset.subtotal}`);
                let subtotalOutput = document.querySelector(`.${celula.dataset.subtotaloutput}`);

                somarCelulas(subtotal, subtotalOutput);
            }

            if(celula.dataset.totaldeconsultaseixoy) {
                celula.classList.add(`${celula.dataset.totaldeconsultaseixoy}`);

                let totalDeConsultasEixoY = document.querySelectorAll(`.${celula.dataset.totaldeconsultaseixoy}`);
                let totalDeConsultasOutput = document.querySelector(`.${celula.dataset.totaldeconsultasoutput}`);

                somarCelulas(totalDeConsultasEixoY, totalDeConsultasOutput);
            }

            if(celula.dataset.subtotaldetotaldeconsultas) {
                celula.classList.add(`${celula.dataset.subtotaldetotaldeconsultas}`);

                let subtotalDeTotalDeConsultas = document.querySelectorAll(`.${celula.dataset.subtotaldetotaldeconsultas}`);
                let subtotalDeTotalDeConsultasOutput = document.querySelector(`.${celula.dataset.subtotaldetotaldeconsultasoutput}`);

                somarCelulas(subtotalDeTotalDeConsultas, subtotalDeTotalDeConsultasOutput);
            }

            if(celula.dataset.totalporsexo) {
                celula.classList.add(`${celula.dataset.totalporsexo}`);

                let totalPorSexo = document.querySelectorAll(`.${celula.dataset.totalporsexo}`);
                let totalPorSexoOutput = document.querySelector(`.${celula.dataset.totalporsexooutput}`);

                somarCelulas(totalPorSexo, totalPorSexoOutput);
            }

            if(celula.dataset.totalgeral) {
                celula.classList.add(`${celula.dataset.totalgeral}`);

                let totalGeral = document.querySelectorAll(`.${celula.dataset.totalgeral}`);
                let totalGeralOutput = document.querySelector(`.${celula.dataset.totalgeraloutput}`);

                somarCelulas(totalGeral, totalGeralOutput);
            }

            if(celula.dataset.totalporsexodetotaldeconsultas) {
                celula.classList.add(`${celula.dataset.totalporsexodetotaldeconsultas}`);

                let totalPorSexoDeTotalDeConsultas = document.querySelectorAll(`.${celula.dataset.totalporsexodetotaldeconsultas}`);
                let totalPorSexoDeTotalDeConsultasOutput = document.querySelector(`.${celula.dataset.totalporsexodetotaldeconsultasoutput}`);

                somarCelulas(totalPorSexoDeTotalDeConsultas, totalPorSexoDeTotalDeConsultasOutput);
            }

            if(celula.dataset.totalgeraldetotaldeconsultas) {
                celula.classList.add(`${celula.dataset.totalgeraldetotaldeconsultas}`);

                let totalGeralDeTotalDeConsultas = document.querySelectorAll(`.${celula.dataset.totalgeraldetotaldeconsultas}`);
                let totalGeralDeTotalDeConsultasOutput = document.querySelector(`.${celula.dataset.totalgeraldetotaldeconsultasoutput}`);

                somarCelulas(totalGeralDeTotalDeConsultas, totalGeralDeTotalDeConsultasOutput);
            }         
        })

        if (celula.value != "")  {
            if(celula.dataset.subtotal) {
                celula.classList.add(`${celula.dataset.subtotal}`);

                let subtotal = document.querySelectorAll(`.${celula.dataset.subtotal}`);
                let subtotalOutput = document.querySelector(`.${celula.dataset.subtotaloutput}`);

                somarCelulas(subtotal, subtotalOutput);
            }

            if(celula.dataset.totaldeconsultaseixoy) {
                celula.classList.add(`${celula.dataset.totaldeconsultaseixoy}`);

                let totalDeConsultasEixoY = document.querySelectorAll(`.${celula.dataset.totaldeconsultaseixoy}`);
                let totalDeConsultasOutput = document.querySelector(`.${celula.dataset.totaldeconsultasoutput}`);

                somarCelulas(totalDeConsultasEixoY, totalDeConsultasOutput);
            }

            if(celula.dataset.subtotaldetotaldeconsultas) {
                celula.classList.add(`${celula.dataset.subtotaldetotaldeconsultas}`);

                let subtotalDeTotalDeConsultas = document.querySelectorAll(`.${celula.dataset.subtotaldetotaldeconsultas}`);
                let subtotalDeTotalDeConsultasOutput = document.querySelector(`.${celula.dataset.subtotaldetotaldeconsultasoutput}`);

                somarCelulas(subtotalDeTotalDeConsultas, subtotalDeTotalDeConsultasOutput);
            }

            if(celula.dataset.totalporsexo) {
                celula.classList.add(`${celula.dataset.totalporsexo}`);

                let totalPorSexo = document.querySelectorAll(`.${celula.dataset.totalporsexo}`);
                let totalPorSexoOutput = document.querySelector(`.${celula.dataset.totalporsexooutput}`);

                somarCelulas(totalPorSexo, totalPorSexoOutput);
            }

            if(celula.dataset.totalgeral) {
                celula.classList.add(`${celula.dataset.totalgeral}`);

                let totalGeral = document.querySelectorAll(`.${celula.dataset.totalgeral}`);
                let totalGeralOutput = document.querySelector(`.${celula.dataset.totalgeraloutput}`);

                somarCelulas(totalGeral, totalGeralOutput);
            }

            if(celula.dataset.totalporsexodetotaldeconsultas) {
                celula.classList.add(`${celula.dataset.totalporsexodetotaldeconsultas}`);

                let totalPorSexoDeTotalDeConsultas = document.querySelectorAll(`.${celula.dataset.totalporsexodetotaldeconsultas}`);
                let totalPorSexoDeTotalDeConsultasOutput = document.querySelector(`.${celula.dataset.totalporsexodetotaldeconsultasoutput}`);

                somarCelulas(totalPorSexoDeTotalDeConsultas, totalPorSexoDeTotalDeConsultasOutput);
            }

            if(celula.dataset.totalgeraldetotaldeconsultas) {
                celula.classList.add(`${celula.dataset.totalgeraldetotaldeconsultas}`);
                
                let totalGeralDeTotalDeConsultas = document.querySelectorAll(`.${celula.dataset.totalgeraldetotaldeconsultas}`);
                let totalGeralDeTotalDeConsultasOutput = document.querySelector(`.${celula.dataset.totalgeraldetotaldeconsultasoutput}`);

                somarCelulas(totalGeralDeTotalDeConsultas, totalGeralDeTotalDeConsultasOutput);
            } 
        }     
    }
});













