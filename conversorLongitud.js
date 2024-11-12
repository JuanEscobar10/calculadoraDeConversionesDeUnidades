//Función para convertir metros a kilometros
function metrosAKilometros(metros) {
    return metros / 1000;
}

//Función para comvertir kilometros a millas
function kilometrosAMillas(kilometros) {
    return kilometros * 0.621371;
}

//Función para convertir millas metros
function millasAMetros(millas) {
    return millas * 1609.34;
}


module.exports = { metrosAKilometros, kilometrosAMillas, millasAMetros };