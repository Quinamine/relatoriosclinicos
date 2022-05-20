
















window.addEventListener("load", () => {

    let headerCheckBoxes = document.querySelectorAll(".atalho");
    console.log(headerCheckBoxes);


    for (let pos = 0; pos<headerCheckBoxes.length; pos++) {
        
        headerCheckBoxes[pos].addEventListener("change", () => {
            if(headerCheckBoxes[pos].checked) {
                console.log("checked");
            }
        })
    }
})





/*function changeAutoCelsBg() {
    for (const col of colunasdosInputs) {
        if(inputAtalhodeBg.checked) {
            col.classList.add("readonly");
        }
        else {
            col.classList.remove("readonly");
        }
    }
}


let colunasdosInputs,
    inputAtalhodeBg;
window.addEventListener("load", () => {
    colunasdosInputs = document.querySelectorAll(".col-de-inputs");

    inputAtalhodeBg = document.querySelector("input.atalho-de-mudanca-de-fundo");

    //Eventos 
    inputAtalhodeBg.addEventListener("change", changeAutoCelsBg);
    
})*/