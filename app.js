        //palabras
        const palabras = ["canto", "bosque", "internet", "silla", "profesor"];
        //palabras al azar
        const palabraIncognita = palabras[Math.floor(Math.random() * palabras.length)];
        //letras incognitas
        const letrasIncognitas = [];
        //ciclo para recorrer la palabra
        for (let i = 0; i < palabraIncognita.length; i++) {
            letrasIncognitas[i] = "_";
        }
        //mostrar la palabra
        let numeroDeLetras = palabraIncognita.length;
        //ciclo del juego
        while (numeroDeLetras > 0) {
            //mostrar progreso del juego
            alert(letrasIncognitas.join(" "));
            //pedir letra
            let letraIngresada = prompt("Ingresa una letra o cancela para salir").toLowerCase();
            if (letraIngresada === null) {
                //salir del juego
                break;
            } else if (letraIngresada.length !== 1) {
                alert("Por favor, introduce una sola letra.");
            } else {
                //actualizar el juego
                for (let j = 0; j < palabraIncognita.length; j++) {
                    if (palabraIncognita[j] === letraIngresada  && letrasIncognitas[j] === "_") {
                        letrasIncognitas[j] = letraIngresada;
                        numeroDeLetras--;
                    }
                }
            }
            //fin del juego
        }
        //mostrar la respuesta y felicita al jugador
        alert(letrasIncognitas.join(" "));
        alert(`¡Buen trabajo! La palabra era  ${palabraIncognita}`);