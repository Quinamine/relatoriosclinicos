



window.addEventListener("load", () => {
    const checkbox = document.querySelector("#dark-readonlycels");
    const readonlyCels = document.querySelectorAll(".ficha input[readonly]");


    checkbox.addEventListener("change", () => {

        for (const cel of readonlyCels) {
            
            if(checkbox.checked) {

                cel.classList.add("gray");
                cel.parentElement.classList.add("gray");
            }
            else {
                cel.classList.remove("gray");
                cel.parentElement.classList.remove("gray");
            }
        }
        
    })
})