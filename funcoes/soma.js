function somarCelulas(celulasPorSomar, celulaDeSaida) {
    let soma = 0;

    for (const cel of celulasPorSomar) {
        soma += Number(cel.value);
    }

    celulaDeSaida.value = soma; 
}