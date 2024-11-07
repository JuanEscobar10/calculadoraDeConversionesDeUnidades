//Función para convertir metros a kilometros
function metrosAKilometros(metros) {
    return metros / 1000;
}

//Función para comvertir kilometros a millas
function kilometrosAMillas(kilometros) {
    return kilometros * 0.621371;
}

//Función para convertir millas a kilometros
function millasAKilometros(millas) {
    return millas * 1609.34;
}


//Función principal para que pida los datos al usuario y los convierta

function convertirUnidades() {
    const opcion = Number(prompt('Elije una de las unidades de conversión:\n1. Metros a Kilometros\n2. Kilometros a Millas\n3. millas a ' +
        'Kilometros'));

    let valor;
    let resultado;

    switch(opcion){
        case 1:
            valor = parseFloat(prompt('Ingresa el valor en metros: '));
            resultado = metrosAKilometros(valor);
            
            break;
        case 2:
            break;
        case 3:
            break;
    }
}