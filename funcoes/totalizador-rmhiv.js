

function calcularLinhaB13() {
    // Variables
    const b4 = document.querySelectorAll(".b4 input"),
          b9 = document.querySelectorAll(".b9 input"),
          b12 = document.querySelectorAll(".b12 input"),
          b13 = document.querySelectorAll(".b13 input");

    for ( let i = 0; i < b4.length; i++) {
        if( (b4[i].value != "") || (b9[i].value != "") ) {
            b13[i].value = Number(b4[i].value) + Number(b12[i].value) - b9[i].value;
        }
    }
}

window.addEventListener("load", () => {
    const celulas = document.querySelectorAll(".linha input[type=number]");

    for (const celula of celulas) { 
        celula.addEventListener("input", () => {

            if(celula.dataset.total0a14eixox) {    
                celula.classList.add(`${celula.dataset.total0a14eixox}`);
                const total0a14EixoX = document.querySelectorAll(`.${celula.dataset.total0a14eixox}`);
                const total0a14EixoXOutput = document.querySelector(`.${celula.dataset.total0a14eixoxoutput}`);
                somarCelulas(total0a14EixoX, total0a14EixoXOutput);
            }

            if(celula.dataset.total15oumaiseixox) {    
                celula.classList.add(`${celula.dataset.total15oumaiseixox}`);
                const total15ouMaisEixoX = document.querySelectorAll(`.${celula.dataset.total15oumaiseixox}`);
                const total15ouMaisEixoXOutput = document.querySelector(`.${celula.dataset.total15oumaiseixoxoutput}`);
                somarCelulas(total15ouMaisEixoX, total15ouMaisEixoXOutput);
            }

            if(celula.dataset.totalgeraleixox) {    
                celula.classList.add(`${celula.dataset.totalgeraleixox}`);
                const totalGeralEixoX = document.querySelectorAll(`.${celula.dataset.totalgeraleixox}`);
                const totalGeralEixoXOutput = document.querySelector(`.${celula.dataset.totalgeraleixoxoutput}`);
                somarCelulas(totalGeralEixoX, totalGeralEixoXOutput);
            }

            if(celula.dataset.total10a19eixox) {    
                celula.classList.add(`${celula.dataset.total10a19eixox}`);
                const total10a19EixoX = document.querySelectorAll(`.${celula.dataset.total10a19eixox}`);
                const total10a19EixoXOutput = document.querySelector(`.${celula.dataset.total10a19eixoxoutput}`);
                somarCelulas(total10a19EixoX, total10a19EixoXOutput);
            }

            if(celula.dataset.totaleixoy) {    
                celula.classList.add(`${celula.dataset.totaleixoy}`);
                const totalEixoy = document.querySelectorAll(`.${celula.dataset.totaleixoy}`);
                const totalEixoyOutput = document.querySelector(`.${celula.dataset.totaleixoyoutput}`);
                somarCelulas(totalEixoy, totalEixoyOutput);
            }

            if(celula.dataset.total0a14eixoy) {
                celula.classList.add(`${celula.dataset.total0a14eixoy}`);
                const total0a14EixoY = document.querySelectorAll(`.${celula.dataset.total0a14eixoy}`);
                const total0a14EixoYOutput = document.querySelector(`.${celula.dataset.total0a14eixoyoutput}`);
                somarCelulas(total0a14EixoY, total0a14EixoYOutput);
            }

            if(celula.dataset.totalgeraleixoy) {
                celula.classList.add(`${celula.dataset.totalgeraleixoy}`);
                const totalGeralEixoY = document.querySelectorAll(`.${celula.dataset.totalgeraleixoy}`);
                const totalGeralEixoYOutput = document.querySelector(`.${celula.dataset.totalgeraleixoyoutput}`);
                somarCelulas(totalGeralEixoY, totalGeralEixoYOutput);
            }

            if(celula.dataset.total15oumaiseixoy) {
                celula.classList.add(`${celula.dataset.total15oumaiseixoy}`);
                const total15ouMaisEixoY = document.querySelectorAll(`.${celula.dataset.total15oumaiseixoy}`);
                const total15ouMaisEixoYOutput = document.querySelector(`.${celula.dataset.total15oumaiseixoyoutput}`);
                somarCelulas(total15ouMaisEixoY, total15ouMaisEixoYOutput);
            }

            if(celula.dataset.total10a19eixoy) {
                celula.classList.add(`${celula.dataset.total10a19eixoy}`);
                const total10a19EixoY = document.querySelectorAll(`.${celula.dataset.total10a19eixoy}`);
                const total10a19EixoYOutput = document.querySelector(`.${celula.dataset.total10a19eixoyoutput}`);
                somarCelulas(total10a19EixoY , total10a19EixoYOutput);
            }

            if(celula.dataset.totalb11) {
                celula.classList.add(`${celula.dataset.totalb11}`);
                const totalB11 = document.querySelectorAll(`.${celula.dataset.totalb11}`);
                const totalB11Output = document.querySelector(`.${celula.dataset.totalb11output}`);
                somarCelulas(totalB11 , totalB11Output);
            }

            if(celula.dataset.totalb11c0a14) {
                celula.classList.add(`${celula.dataset.totalb11c0a14}`);
                const totalB11C0a14 = document.querySelectorAll(`.${celula.dataset.totalb11c0a14}`);
                const totalB11C0a14Output = document.querySelector(`.${celula.dataset.totalb11c0a14output}`);
                somarCelulas(totalB11C0a14, totalB11C0a14Output);
            }

            if(celula.dataset.totalb11c15oumais) {
                celula.classList.add(`${celula.dataset.totalb11c15oumais}`);
                const totalB11C15ouMais = document.querySelectorAll(`.${celula.dataset.totalb11c15oumais}`);
                const totalB11C15ouMaisOutput = document.querySelector(`.${celula.dataset.totalb11c15oumaisoutput}`);
                somarCelulas(totalB11C15ouMais, totalB11C15ouMaisOutput);
            }

            if(celula.dataset.totalgeralb11) {
                celula.classList.add(`${celula.dataset.totalgeralb11}`);
                const totalGeralB11 = document.querySelectorAll(`.${celula.dataset.totalgeralb11}`);
                const totalGeralB11Output = document.querySelector(`.${celula.dataset.totalgeralb11output}`);
                somarCelulas(totalGeralB11, totalGeralB11Output);
            }

            if(celula.dataset.totalb11c10a19) {
                celula.classList.add(`${celula.dataset.totalb11c10a19}`);
                const totalB11C10a19 = document.querySelectorAll(`.${celula.dataset.totalb11c10a19}`);
                const totalB11C10a19Output = document.querySelector(`.${celula.dataset.totalb11c10a19output}`);
                somarCelulas(totalB11C10a19, totalB11C10a19Output);
            }
        })

        if(celula.value != "") {
            if(celula.dataset.total0a14eixox) {    
                celula.classList.add(`${celula.dataset.total0a14eixox}`);
                const total0a14EixoX = document.querySelectorAll(`.${celula.dataset.total0a14eixox}`);
                const total0a14EixoXOutput = document.querySelector(`.${celula.dataset.total0a14eixoxoutput}`);
                somarCelulas(total0a14EixoX, total0a14EixoXOutput);
            }

            if(celula.dataset.total15oumaiseixox) {    
                celula.classList.add(`${celula.dataset.total15oumaiseixox}`);
                const total15ouMaisEixoX = document.querySelectorAll(`.${celula.dataset.total15oumaiseixox}`);
                const total15ouMaisEixoXOutput = document.querySelector(`.${celula.dataset.total15oumaiseixoxoutput}`);
                somarCelulas(total15ouMaisEixoX, total15ouMaisEixoXOutput);
            }

            if(celula.dataset.totalgeraleixox) {    
                celula.classList.add(`${celula.dataset.totalgeraleixox}`);
                const totalGeralEixoX = document.querySelectorAll(`.${celula.dataset.totalgeraleixox}`);
                const totalGeralEixoXOutput = document.querySelector(`.${celula.dataset.totalgeraleixoxoutput}`);
                somarCelulas(totalGeralEixoX, totalGeralEixoXOutput);
            }

            if(celula.dataset.total10a19eixox) {    
                celula.classList.add(`${celula.dataset.total10a19eixox}`);
                const total10a19EixoX = document.querySelectorAll(`.${celula.dataset.total10a19eixox}`);
                const total10a19EixoXOutput = document.querySelector(`.${celula.dataset.total10a19eixoxoutput}`);
                somarCelulas(total10a19EixoX, total10a19EixoXOutput);
            }

            if(celula.dataset.totaleixoy) {    
                celula.classList.add(`${celula.dataset.totaleixoy}`);
                const totalEixoy = document.querySelectorAll(`.${celula.dataset.totaleixoy}`);
                const totalEixoyOutput = document.querySelector(`.${celula.dataset.totaleixoyoutput}`);
                somarCelulas(totalEixoy, totalEixoyOutput);
            }

            if(celula.dataset.total0a14eixoy) {
                celula.classList.add(`${celula.dataset.total0a14eixoy}`);
                const total0a14EixoY = document.querySelectorAll(`.${celula.dataset.total0a14eixoy}`);
                const total0a14EixoYOutput = document.querySelector(`.${celula.dataset.total0a14eixoyoutput}`);
                somarCelulas(total0a14EixoY, total0a14EixoYOutput);
            }

            if(celula.dataset.totalgeraleixoy) {
                celula.classList.add(`${celula.dataset.totalgeraleixoy}`);
                const totalGeralEixoY = document.querySelectorAll(`.${celula.dataset.totalgeraleixoy}`);
                const totalGeralEixoYOutput = document.querySelector(`.${celula.dataset.totalgeraleixoyoutput}`);
                somarCelulas(totalGeralEixoY, totalGeralEixoYOutput);
            }

            if(celula.dataset.total15oumaiseixoy) {
                celula.classList.add(`${celula.dataset.total15oumaiseixoy}`);
                const total15ouMaisEixoY = document.querySelectorAll(`.${celula.dataset.total15oumaiseixoy}`);
                const total15ouMaisEixoYOutput = document.querySelector(`.${celula.dataset.total15oumaiseixoyoutput}`);
                somarCelulas(total15ouMaisEixoY, total15ouMaisEixoYOutput);
            }

            if(celula.dataset.total10a19eixoy) {
                celula.classList.add(`${celula.dataset.total10a19eixoy}`);
                const total10a19EixoY = document.querySelectorAll(`.${celula.dataset.total10a19eixoy}`);
                const total10a19EixoYOutput = document.querySelector(`.${celula.dataset.total10a19eixoyoutput}`);
                somarCelulas(total10a19EixoY , total10a19EixoYOutput);
            }

            if(celula.dataset.totalb11) {
                celula.classList.add(`${celula.dataset.totalb11}`);
                const totalB11 = document.querySelectorAll(`.${celula.dataset.totalb11}`);
                const totalB11Output = document.querySelector(`.${celula.dataset.totalb11output}`);
                somarCelulas(totalB11 , totalB11Output);
            }

            if(celula.dataset.totalb11c0a14) {
                celula.classList.add(`${celula.dataset.totalb11c0a14}`);
                const totalB11C0a14 = document.querySelectorAll(`.${celula.dataset.totalb11c0a14}`);
                const totalB11C0a14Output = document.querySelector(`.${celula.dataset.totalb11c0a14output}`);
                somarCelulas(totalB11C0a14, totalB11C0a14Output);
            }

            if(celula.dataset.totalb11c15oumais) {
                celula.classList.add(`${celula.dataset.totalb11c15oumais}`);
                const totalB11C15ouMais = document.querySelectorAll(`.${celula.dataset.totalb11c15oumais}`);
                const totalB11C15ouMaisOutput = document.querySelector(`.${celula.dataset.totalb11c15oumaisoutput}`);
                somarCelulas(totalB11C15ouMais, totalB11C15ouMaisOutput);
            }

            if(celula.dataset.totalgeralb11) {
                celula.classList.add(`${celula.dataset.totalgeralb11}`);
                const totalGeralB11 = document.querySelectorAll(`.${celula.dataset.totalgeralb11}`);
                const totalGeralB11Output = document.querySelector(`.${celula.dataset.totalgeralb11output}`);
                somarCelulas(totalGeralB11, totalGeralB11Output);
            }

            if(celula.dataset.totalb11c10a19) {
                celula.classList.add(`${celula.dataset.totalb11c10a19}`);
                const totalB11C10a19 = document.querySelectorAll(`.${celula.dataset.totalb11c10a19}`);
                const totalB11C10a19Output = document.querySelector(`.${celula.dataset.totalb11c10a19output}`);
                somarCelulas(totalB11C10a19, totalB11C10a19Output);
            }
        }
    }

    // LINHA B13

    /** Event Targets */
    const eventTargets = document.querySelectorAll(".b1 input, .b2 input, .b3 input, .b5 input, .b6 input, .b7 input, .b8 input, .b12 input");

    eventTargets.forEach ( inputElement =>  inputElement.addEventListener("input", calcularLinhaB13));
})