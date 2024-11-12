//Función para convertir gramos a kilogramos
function gramosAKilogramos(gramos){
    return gramos/1000
}
//Función para convertir kilogramos a libras
function kilogramosALibras(kilogramos){
    return kilogramos * 2.20462
}
//Función para onvertir libras a gramos 
function librasAGramos(libras){
    return libras * 453.592
}

module.export = {gramosAKilogramos, kilogramosALibras, librasAGramos}