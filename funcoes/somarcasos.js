
function somarCasos(celulasporSomar, celuladeSaida) {      
    let soma = 0;

    for (const cel of celulasporSomar) {
        soma+= Number(cel.value);
    }
    celuladeSaida.value = soma;
}