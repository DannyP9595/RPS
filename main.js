function getComputerChoice{
    //Generar un numero aleatorio entre 0 y 2
    const numeroAleatorio = Math.floor(Math.random() * 3);

    //Definir opciones con un Array
    const options = ["Rock", "Paper", "Scissors"];

    //Obtener la opcion al azar basada en el numero generado
    const jugadaAlAzar = options[numeroAleatorio];

    return jugadaAlAzar;

}

const jugada = getComputerChoice();
console.log("La jugada es: ", jugada)