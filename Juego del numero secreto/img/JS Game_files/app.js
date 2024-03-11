//Variables
let numeroMaximo = 10;
let numeroSecreto = Math.floor(Math.random()*numeroMaximo)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = "vez";
let maximosIntentos = 3;

console.log(numeroSecreto);

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me Indicas tu numero entre 1 y ${numeroMaximo} por favor:`));
    /* Este codigo realiza la comparacion */
    console.log(typeof(numeroUsuario));

    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste el numero de usuario es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? "vez" : "veces"}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert("El numero secreto es menor");
        } else {
            alert("El numero secreto es mayor");
        }
        intentos++;
        // Incrementamos el contador cuando no hay acierto
        //intentos = intentos + 1;
        //palabraVeces = "veces";
        if (intentos > 3) {
            alert (`Llegaste al numero maximo de ${maximosIntentos} intentos.`);
            break;
        }

        //alert("Lo siento, no acertaste el numero");
    }
    }   