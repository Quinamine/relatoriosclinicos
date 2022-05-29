
window.addEventListener("load", () => {
    let inputs = document.querySelectorAll(".col-de-inputs input");
    
    for (const input of inputs) {
        
        input.addEventListener("input", () => {

            if(input.dataset.subtotal) {
                input.classList.add(`${input.dataset.subtotal}`);
                let subtotal = document.querySelectorAll(`.${input.dataset.subtotal}`);
                let subtotalOutput = document.querySelector(`.${input.dataset.subtotaloutput}`);

                somarCasos(subtotal, subtotalOutput);
            }

            if(input.dataset.totaldeconsultaseixoy) {
                input.classList.add(`${input.dataset.totaldeconsultaseixoy}`);
                let totaldeConsultasEixoY = document.querySelectorAll(`.${input.dataset.totaldeconsultaseixoy}`);
                let totaldeConsultasOutput = document.querySelector(`.${input.dataset.totaldeconsultasoutput}`);

                somarCasos(totaldeConsultasEixoY, totaldeConsultasOutput);
            }

            if(input.dataset.subtotaldetotaldeconsultas) {
                input.classList.add(`${input.dataset.subtotaldetotaldeconsultas}`);
                let subtotaldeTotaldeConsultas = document.querySelectorAll(`.${input.dataset.subtotaldetotaldeconsultas}`);
                let subtotaldeTotaldeConsultasOutput = document.querySelector(`.${input.dataset.subtotaldetotaldeconsultasoutput}`);

                somarCasos(subtotaldeTotaldeConsultas, subtotaldeTotaldeConsultasOutput);
            }

            if(input.dataset.totalporsexo) {
                input.classList.add(`${input.dataset.totalporsexo}`);

                let totalporSexo = document.querySelectorAll(`.${input.dataset.totalporsexo}`);
                let totalporSexoOutput = document.querySelector(`.${input.dataset.totalporsexooutput}`);

                somarCasos(totalporSexo, totalporSexoOutput);
            }

            if(input.dataset.totalgeral) {
                input.classList.add(`${input.dataset.totalgeral}`);
                let totalGeral = document.querySelectorAll(`.${input.dataset.totalgeral}`);
                let totalGeralOutput = document.querySelector(`.${input.dataset.totalgeraloutput}`);

                somarCasos(totalGeral, totalGeralOutput);
            }

            if(input.dataset.totalporsexodetotaldeconsultas) {
                input.classList.add(`${input.dataset.totalporsexodetotaldeconsultas}`);
                let totalporSexodeTotaldeConsultas = document.querySelectorAll(`.${input.dataset.totalporsexodetotaldeconsultas}`);
                let totalporSexodeTotaldeConsultasOutput = document.querySelector(`.${input.dataset.totalporsexodetotaldeconsultasoutput}`);

                somarCasos(totalporSexodeTotaldeConsultas, totalporSexodeTotaldeConsultasOutput);
            }

            if(input.dataset.totalgeraldetotaldeconsultas) {
                input.classList.add(`${input.dataset.totalgeraldetotaldeconsultas}`);
                let totalGeraldeTotaldeConsultas = document.querySelectorAll(`.${input.dataset.totalgeraldetotaldeconsultas}`);
                let totalGeraldeTotaldeConsultasOutput = document.querySelector(`.${input.dataset.totalgeraldetotaldeconsultasoutput}`);

                somarCasos(totalGeraldeTotaldeConsultas, totalGeraldeTotaldeConsultasOutput)
            }         
        })


        if (input.value != "")  {
            if(input.dataset.subtotal) {
                input.classList.add(`${input.dataset.subtotal}`);
                let subtotal = document.querySelectorAll(`.${input.dataset.subtotal}`);
                let subtotalOutput = document.querySelector(`.${input.dataset.subtotaloutput}`);

                somarCasos(subtotal, subtotalOutput);
            }

            if(input.dataset.totaldeconsultaseixoy) {
                input.classList.add(`${input.dataset.totaldeconsultaseixoy}`);
                let totaldeConsultasEixoY = document.querySelectorAll(`.${input.dataset.totaldeconsultaseixoy}`);
                let totaldeConsultasOutput = document.querySelector(`.${input.dataset.totaldeconsultasoutput}`);

                somarCasos(totaldeConsultasEixoY, totaldeConsultasOutput);
            }

            if(input.dataset.subtotaldetotaldeconsultas) {
                input.classList.add(`${input.dataset.subtotaldetotaldeconsultas}`);
                let subtotaldeTotaldeConsultas = document.querySelectorAll(`.${input.dataset.subtotaldetotaldeconsultas}`);
                let subtotaldeTotaldeConsultasOutput = document.querySelector(`.${input.dataset.subtotaldetotaldeconsultasoutput}`);

                somarCasos(subtotaldeTotaldeConsultas, subtotaldeTotaldeConsultasOutput);
            }

            if(input.dataset.totalporsexo) {
                input.classList.add(`${input.dataset.totalporsexo}`);

                let totalporSexo = document.querySelectorAll(`.${input.dataset.totalporsexo}`);
                let totalporSexoOutput = document.querySelector(`.${input.dataset.totalporsexooutput}`);

                somarCasos(totalporSexo, totalporSexoOutput);
            }

            if(input.dataset.totalgeral) {
                input.classList.add(`${input.dataset.totalgeral}`);
                let totalGeral = document.querySelectorAll(`.${input.dataset.totalgeral}`);
                let totalGeralOutput = document.querySelector(`.${input.dataset.totalgeraloutput}`);

                somarCasos(totalGeral, totalGeralOutput);
            }

            if(input.dataset.totalporsexodetotaldeconsultas) {
                input.classList.add(`${input.dataset.totalporsexodetotaldeconsultas}`);
                let totalporSexodeTotaldeConsultas = document.querySelectorAll(`.${input.dataset.totalporsexodetotaldeconsultas}`);
                let totalporSexodeTotaldeConsultasOutput = document.querySelector(`.${input.dataset.totalporsexodetotaldeconsultasoutput}`);

                somarCasos(totalporSexodeTotaldeConsultas, totalporSexodeTotaldeConsultasOutput);
            }

            if(input.dataset.totalgeraldetotaldeconsultas) {
                input.classList.add(`${input.dataset.totalgeraldetotaldeconsultas}`);
                let totalGeraldeTotaldeConsultas = document.querySelectorAll(`.${input.dataset.totalgeraldetotaldeconsultas}`);
                let totalGeraldeTotaldeConsultasOutput = document.querySelector(`.${input.dataset.totalgeraldetotaldeconsultasoutput}`);

                somarCasos(totalGeraldeTotaldeConsultas, totalGeraldeTotaldeConsultasOutput)
            } 
        }     
    }
});













