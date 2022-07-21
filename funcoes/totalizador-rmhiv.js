

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

    for (const cel of celulas) { 
        cel.addEventListener("input", () => {

            if(cel.dataset.total0a14eixox) {    
                cel.classList.add(`${cel.dataset.total0a14eixox}`);
                const total0a14EixoX = document.querySelectorAll(`.${cel.dataset.total0a14eixox}`);
                const total0a14EixoXOutput = document.querySelector(`.${cel.dataset.total0a14eixoxoutput}`);
                somarCelulas(total0a14EixoX, total0a14EixoXOutput);
            }

            if(cel.dataset.total15oumaiseixox) {    
                cel.classList.add(`${cel.dataset.total15oumaiseixox}`);
                const total15ouMaisEixoX = document.querySelectorAll(`.${cel.dataset.total15oumaiseixox}`);
                const total15ouMaisEixoXOutput = document.querySelector(`.${cel.dataset.total15oumaiseixoxoutput}`);
                somarCelulas(total15ouMaisEixoX, total15ouMaisEixoXOutput);
            }

            if(cel.dataset.totalgeraleixox) {    
                cel.classList.add(`${cel.dataset.totalgeraleixox}`);
                const totalGeralEixoX = document.querySelectorAll(`.${cel.dataset.totalgeraleixox}`);
                const totalGeralEixoXOutput = document.querySelector(`.${cel.dataset.totalgeraleixoxoutput}`);
                somarCelulas(totalGeralEixoX, totalGeralEixoXOutput);
            }

            if(cel.dataset.total10a19eixox) {    
                cel.classList.add(`${cel.dataset.total10a19eixox}`);
                const total10a19EixoX = document.querySelectorAll(`.${cel.dataset.total10a19eixox}`);
                const total10a19EixoXOutput = document.querySelector(`.${cel.dataset.total10a19eixoxoutput}`);
                somarCelulas(total10a19EixoX, total10a19EixoXOutput);
            }

            if(cel.dataset.totaleixoy) {    
                cel.classList.add(`${cel.dataset.totaleixoy}`);
                const totalEixoy = document.querySelectorAll(`.${cel.dataset.totaleixoy}`);
                const totalEixoyOutput = document.querySelector(`.${cel.dataset.totaleixoyoutput}`);
                somarCelulas(totalEixoy, totalEixoyOutput);
            }

            if(cel.dataset.total0a14eixoy) {
                cel.classList.add(`${cel.dataset.total0a14eixoy}`);
                const total0a14EixoY = document.querySelectorAll(`.${cel.dataset.total0a14eixoy}`);
                const total0a14EixoYOutput = document.querySelector(`.${cel.dataset.total0a14eixoyoutput}`);
                somarCelulas(total0a14EixoY, total0a14EixoYOutput);
            }

            if(cel.dataset.totalgeraleixoy) {
                cel.classList.add(`${cel.dataset.totalgeraleixoy}`);
                const totalGeralEixoY = document.querySelectorAll(`.${cel.dataset.totalgeraleixoy}`);
                const totalGeralEixoYOutput = document.querySelector(`.${cel.dataset.totalgeraleixoyoutput}`);
                somarCelulas(totalGeralEixoY, totalGeralEixoYOutput);
            }

            if(cel.dataset.total15oumaiseixoy) {
                cel.classList.add(`${cel.dataset.total15oumaiseixoy}`);
                const total15ouMaisEixoY = document.querySelectorAll(`.${cel.dataset.total15oumaiseixoy}`);
                const total15ouMaisEixoYOutput = document.querySelector(`.${cel.dataset.total15oumaiseixoyoutput}`);
                somarCelulas(total15ouMaisEixoY, total15ouMaisEixoYOutput);
            }

            if(cel.dataset.total10a19eixoy) {
                cel.classList.add(`${cel.dataset.total10a19eixoy}`);
                const total10a19EixoY = document.querySelectorAll(`.${cel.dataset.total10a19eixoy}`);
                const total10a19EixoYOutput = document.querySelector(`.${cel.dataset.total10a19eixoyoutput}`);
                somarCelulas(total10a19EixoY , total10a19EixoYOutput);
            }

            if(cel.dataset.totalb11) {
                cel.classList.add(`${cel.dataset.totalb11}`);
                const totalB11 = document.querySelectorAll(`.${cel.dataset.totalb11}`);
                const totalB11Output = document.querySelector(`.${cel.dataset.totalb11output}`);
                somarCelulas(totalB11 , totalB11Output);
            }

            if(cel.dataset.totalb11c0a14) {
                cel.classList.add(`${cel.dataset.totalb11c0a14}`);
                const totalB11C0a14 = document.querySelectorAll(`.${cel.dataset.totalb11c0a14}`);
                const totalB11C0a14Output = document.querySelector(`.${cel.dataset.totalb11c0a14output}`);
                somarCelulas(totalB11C0a14, totalB11C0a14Output);
            }

            if(cel.dataset.totalb11c15oumais) {
                cel.classList.add(`${cel.dataset.totalb11c15oumais}`);
                const totalB11C15ouMais = document.querySelectorAll(`.${cel.dataset.totalb11c15oumais}`);
                const totalB11C15ouMaisOutput = document.querySelector(`.${cel.dataset.totalb11c15oumaisoutput}`);
                somarCelulas(totalB11C15ouMais, totalB11C15ouMaisOutput);
            }

            if(cel.dataset.totalgeralb11) {
                cel.classList.add(`${cel.dataset.totalgeralb11}`);
                const totalGeralB11 = document.querySelectorAll(`.${cel.dataset.totalgeralb11}`);
                const totalGeralB11Output = document.querySelector(`.${cel.dataset.totalgeralb11output}`);
                somarCelulas(totalGeralB11, totalGeralB11Output);
            }

            if(cel.dataset.totalb11c10a19) {
                cel.classList.add(`${cel.dataset.totalb11c10a19}`);
                const totalB11C10a19 = document.querySelectorAll(`.${cel.dataset.totalb11c10a19}`);
                const totalB11C10a19Output = document.querySelector(`.${cel.dataset.totalb11c10a19output}`);
                somarCelulas(totalB11C10a19, totalB11C10a19Output);
            }
        })

        if(cel.value != "") {
            if(cel.dataset.total0a14eixox) {    
                cel.classList.add(`${cel.dataset.total0a14eixox}`);
                const total0a14EixoX = document.querySelectorAll(`.${cel.dataset.total0a14eixox}`);
                const total0a14EixoXOutput = document.querySelector(`.${cel.dataset.total0a14eixoxoutput}`);
                somarCelulas(total0a14EixoX, total0a14EixoXOutput);
            }

            if(cel.dataset.total15oumaiseixox) {    
                cel.classList.add(`${cel.dataset.total15oumaiseixox}`);
                const total15ouMaisEixoX = document.querySelectorAll(`.${cel.dataset.total15oumaiseixox}`);
                const total15ouMaisEixoXOutput = document.querySelector(`.${cel.dataset.total15oumaiseixoxoutput}`);
                somarCelulas(total15ouMaisEixoX, total15ouMaisEixoXOutput);
            }

            if(cel.dataset.totalgeraleixox) {    
                cel.classList.add(`${cel.dataset.totalgeraleixox}`);
                const totalGeralEixoX = document.querySelectorAll(`.${cel.dataset.totalgeraleixox}`);
                const totalGeralEixoXOutput = document.querySelector(`.${cel.dataset.totalgeraleixoxoutput}`);
                somarCelulas(totalGeralEixoX, totalGeralEixoXOutput);
            }

            if(cel.dataset.total10a19eixox) {    
                cel.classList.add(`${cel.dataset.total10a19eixox}`);
                const total10a19EixoX = document.querySelectorAll(`.${cel.dataset.total10a19eixox}`);
                const total10a19EixoXOutput = document.querySelector(`.${cel.dataset.total10a19eixoxoutput}`);
                somarCelulas(total10a19EixoX, total10a19EixoXOutput);
            }

            if(cel.dataset.totaleixoy) {    
                cel.classList.add(`${cel.dataset.totaleixoy}`);
                const totalEixoy = document.querySelectorAll(`.${cel.dataset.totaleixoy}`);
                const totalEixoyOutput = document.querySelector(`.${cel.dataset.totaleixoyoutput}`);
                somarCelulas(totalEixoy, totalEixoyOutput);
            }

            if(cel.dataset.total0a14eixoy) {
                cel.classList.add(`${cel.dataset.total0a14eixoy}`);
                const total0a14EixoY = document.querySelectorAll(`.${cel.dataset.total0a14eixoy}`);
                const total0a14EixoYOutput = document.querySelector(`.${cel.dataset.total0a14eixoyoutput}`);
                somarCelulas(total0a14EixoY, total0a14EixoYOutput);
            }

            if(cel.dataset.totalgeraleixoy) {
                cel.classList.add(`${cel.dataset.totalgeraleixoy}`);
                const totalGeralEixoY = document.querySelectorAll(`.${cel.dataset.totalgeraleixoy}`);
                const totalGeralEixoYOutput = document.querySelector(`.${cel.dataset.totalgeraleixoyoutput}`);
                somarCelulas(totalGeralEixoY, totalGeralEixoYOutput);
            }

            if(cel.dataset.total15oumaiseixoy) {
                cel.classList.add(`${cel.dataset.total15oumaiseixoy}`);
                const total15ouMaisEixoY = document.querySelectorAll(`.${cel.dataset.total15oumaiseixoy}`);
                const total15ouMaisEixoYOutput = document.querySelector(`.${cel.dataset.total15oumaiseixoyoutput}`);
                somarCelulas(total15ouMaisEixoY, total15ouMaisEixoYOutput);
            }

            if(cel.dataset.total10a19eixoy) {
                cel.classList.add(`${cel.dataset.total10a19eixoy}`);
                const total10a19EixoY = document.querySelectorAll(`.${cel.dataset.total10a19eixoy}`);
                const total10a19EixoYOutput = document.querySelector(`.${cel.dataset.total10a19eixoyoutput}`);
                somarCelulas(total10a19EixoY , total10a19EixoYOutput);
            }

            if(cel.dataset.totalb11) {
                cel.classList.add(`${cel.dataset.totalb11}`);
                const totalB11 = document.querySelectorAll(`.${cel.dataset.totalb11}`);
                const totalB11Output = document.querySelector(`.${cel.dataset.totalb11output}`);
                somarCelulas(totalB11 , totalB11Output);
            }

            if(cel.dataset.totalb11c0a14) {
                cel.classList.add(`${cel.dataset.totalb11c0a14}`);
                const totalB11C0a14 = document.querySelectorAll(`.${cel.dataset.totalb11c0a14}`);
                const totalB11C0a14Output = document.querySelector(`.${cel.dataset.totalb11c0a14output}`);
                somarCelulas(totalB11C0a14, totalB11C0a14Output);
            }

            if(cel.dataset.totalb11c15oumais) {
                cel.classList.add(`${cel.dataset.totalb11c15oumais}`);
                const totalB11C15ouMais = document.querySelectorAll(`.${cel.dataset.totalb11c15oumais}`);
                const totalB11C15ouMaisOutput = document.querySelector(`.${cel.dataset.totalb11c15oumaisoutput}`);
                somarCelulas(totalB11C15ouMais, totalB11C15ouMaisOutput);
            }

            if(cel.dataset.totalgeralb11) {
                cel.classList.add(`${cel.dataset.totalgeralb11}`);
                const totalGeralB11 = document.querySelectorAll(`.${cel.dataset.totalgeralb11}`);
                const totalGeralB11Output = document.querySelector(`.${cel.dataset.totalgeralb11output}`);
                somarCelulas(totalGeralB11, totalGeralB11Output);
            }

            if(cel.dataset.totalb11c10a19) {
                cel.classList.add(`${cel.dataset.totalb11c10a19}`);
                const totalB11C10a19 = document.querySelectorAll(`.${cel.dataset.totalb11c10a19}`);
                const totalB11C10a19Output = document.querySelector(`.${cel.dataset.totalb11c10a19output}`);
                somarCelulas(totalB11C10a19, totalB11C10a19Output);
            }
        }
    }

    // LINHA B13

    /** Event Targets */
    const eventTargets = document.querySelectorAll(".b1 input, .b2 input, .b3 input, .b5 input, .b6 input, .b7 input, .b8 input, .b12 input");

    eventTargets.forEach ( inputElement =>  inputElement.addEventListener("input", calcularLinhaB13));
})