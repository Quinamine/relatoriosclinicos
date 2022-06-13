
window.addEventListener("load", () => {
    let cels = document.querySelectorAll(".col-de-inputs input");
    
    for (const cel of cels) {
        
        cel.addEventListener("input", () => {

            if(cel.dataset.subtotal) {
                cel.classList.add(`${cel.dataset.subtotal}`);

                let subtotal = document.querySelectorAll(`.${cel.dataset.subtotal}`);
                let subtotalOutput = document.querySelector(`.${cel.dataset.subtotaloutput}`);

                somarCasos(subtotal, subtotalOutput);
            }

            if(cel.dataset.totaldeconsultaseixoy) {
                cel.classList.add(`${cel.dataset.totaldeconsultaseixoy}`);

                let totalDeConsultasEixoY = document.querySelectorAll(`.${cel.dataset.totaldeconsultaseixoy}`);
                let totalDeConsultasOutput = document.querySelector(`.${cel.dataset.totaldeconsultasoutput}`);

                somarCasos(totalDeConsultasEixoY, totalDeConsultasOutput);
            }

            if(cel.dataset.subtotaldetotaldeconsultas) {
                cel.classList.add(`${cel.dataset.subtotaldetotaldeconsultas}`);

                let subtotalDeTotalDeConsultas = document.querySelectorAll(`.${cel.dataset.subtotaldetotaldeconsultas}`);
                let subtotalDeTotalDeConsultasOutput = document.querySelector(`.${cel.dataset.subtotaldetotaldeconsultasoutput}`);

                somarCasos(subtotalDeTotalDeConsultas, subtotalDeTotalDeConsultasOutput);
            }

            if(cel.dataset.totalporsexo) {
                cel.classList.add(`${cel.dataset.totalporsexo}`);

                let totalPorSexo = document.querySelectorAll(`.${cel.dataset.totalporsexo}`);
                let totalPorSexoOutput = document.querySelector(`.${cel.dataset.totalporsexooutput}`);

                somarCasos(totalPorSexo, totalPorSexoOutput);
            }

            if(cel.dataset.totalgeral) {
                cel.classList.add(`${cel.dataset.totalgeral}`);

                let totalGeral = document.querySelectorAll(`.${cel.dataset.totalgeral}`);
                let totalGeralOutput = document.querySelector(`.${cel.dataset.totalgeraloutput}`);

                somarCasos(totalGeral, totalGeralOutput);
            }

            if(cel.dataset.totalporsexodetotaldeconsultas) {
                cel.classList.add(`${cel.dataset.totalporsexodetotaldeconsultas}`);

                let totalPorSexoDeTotalDeConsultas = document.querySelectorAll(`.${cel.dataset.totalporsexodetotaldeconsultas}`);
                let totalPorSexoDeTotalDeConsultasOutput = document.querySelector(`.${cel.dataset.totalporsexodetotaldeconsultasoutput}`);

                somarCasos(totalPorSexoDeTotalDeConsultas, totalPorSexoDeTotalDeConsultasOutput);
            }

            if(cel.dataset.totalgeraldetotaldeconsultas) {
                cel.classList.add(`${cel.dataset.totalgeraldetotaldeconsultas}`);

                let totalGeralDeTotalDeConsultas = document.querySelectorAll(`.${cel.dataset.totalgeraldetotaldeconsultas}`);
                let totalGeralDeTotalDeConsultasOutput = document.querySelector(`.${cel.dataset.totalgeraldetotaldeconsultasoutput}`);

                somarCasos(totalGeralDeTotalDeConsultas, totalGeralDeTotalDeConsultasOutput);
            }         
        })


        if (cel.value != "")  {
            if(cel.dataset.subtotal) {
                cel.classList.add(`${cel.dataset.subtotal}`);

                let subtotal = document.querySelectorAll(`.${cel.dataset.subtotal}`);
                let subtotalOutput = document.querySelector(`.${cel.dataset.subtotaloutput}`);

                somarCasos(subtotal, subtotalOutput);
            }

            if(cel.dataset.totaldeconsultaseixoy) {
                cel.classList.add(`${cel.dataset.totaldeconsultaseixoy}`);

                let totalDeConsultasEixoY = document.querySelectorAll(`.${cel.dataset.totaldeconsultaseixoy}`);
                let totalDeConsultasOutput = document.querySelector(`.${cel.dataset.totaldeconsultasoutput}`);

                somarCasos(totalDeConsultasEixoY, totalDeConsultasOutput);
            }

            if(cel.dataset.subtotaldetotaldeconsultas) {
                cel.classList.add(`${cel.dataset.subtotaldetotaldeconsultas}`);

                let subtotalDeTotalDeConsultas = document.querySelectorAll(`.${cel.dataset.subtotaldetotaldeconsultas}`);
                let subtotalDeTotalDeConsultasOutput = document.querySelector(`.${cel.dataset.subtotaldetotaldeconsultasoutput}`);

                somarCasos(subtotalDeTotalDeConsultas, subtotalDeTotalDeConsultasOutput);
            }

            if(cel.dataset.totalporsexo) {
                cel.classList.add(`${cel.dataset.totalporsexo}`);

                let totalPorSexo = document.querySelectorAll(`.${cel.dataset.totalporsexo}`);
                let totalPorSexoOutput = document.querySelector(`.${cel.dataset.totalporsexooutput}`);

                somarCasos(totalPorSexo, totalPorSexoOutput);
            }

            if(cel.dataset.totalgeral) {
                cel.classList.add(`${cel.dataset.totalgeral}`);

                let totalGeral = document.querySelectorAll(`.${cel.dataset.totalgeral}`);
                let totalGeralOutput = document.querySelector(`.${cel.dataset.totalgeraloutput}`);

                somarCasos(totalGeral, totalGeralOutput);
            }

            if(cel.dataset.totalporsexodetotaldeconsultas) {
                cel.classList.add(`${cel.dataset.totalporsexodetotaldeconsultas}`);

                let totalPorSexoDeTotalDeConsultas = document.querySelectorAll(`.${cel.dataset.totalporsexodetotaldeconsultas}`);
                let totalPorSexoDeTotalDeConsultasOutput = document.querySelector(`.${cel.dataset.totalporsexodetotaldeconsultasoutput}`);

                somarCasos(totalPorSexoDeTotalDeConsultas, totalPorSexoDeTotalDeConsultasOutput);
            }

            if(cel.dataset.totalgeraldetotaldeconsultas) {
                cel.classList.add(`${cel.dataset.totalgeraldetotaldeconsultas}`);
                
                let totalGeralDeTotalDeConsultas = document.querySelectorAll(`.${cel.dataset.totalgeraldetotaldeconsultas}`);
                let totalGeralDeTotalDeConsultasOutput = document.querySelector(`.${cel.dataset.totalgeraldetotaldeconsultasoutput}`);

                somarCasos(totalGeralDeTotalDeConsultas, totalGeralDeTotalDeConsultasOutput);
            } 
        }     
    }
});













