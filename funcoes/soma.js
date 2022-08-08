function somarCelulas(celulasPorSomar, celulaDeSaida) {
    let soma = 0;

    for (const celula of celulasPorSomar) {
        soma += Number(celula.value);
    }

    celulaDeSaida.value = soma; 
}