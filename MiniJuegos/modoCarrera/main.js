let capituloActual = 1;
let historia = {
    1: {
        mensaje: 'Eres un piloto joven muy prometedor, Citroën te da la oportunidad de elegir que hacer el año que viene:\n¿Quieres dar el gran salto al WRC2 (2ª Categoria Mundial) o prefieres quedarte a dispurtar el SCER(Campeonato de España)?',
        opciones: {
            WRC2: 2,
            SCER: 3,
        },
    },
    2: {
        mensaje: 'Pruebas en el mundial, eres muy joven y demuestras lo bueno que eres, pero cometes muchos errores y no haces nada importante,\n¿Quieres intentarlo un año mas o vuelves a España al SCER con Citroën?',
        opciones: {
            Continuar: 4,
            SCER: 5,
        },
    },
    3: {
        mensaje: 'Te quedas en España y cuajas un gran año, destacando pero sin conseguir ninguna victoria.\nPara el año que viene te quiere fichar Toyota, un equipo nuevo pero que apunta a campeon,\n¿Confías en ellos o te quedas en Citroën?',
        opciones: {
            Quedarse: 6,
            Marcharse: 7,
        },
    },
    4: {
        mensaje: 'Otro año irregular para ti en Citroën, por lo que deciden sustituirte por un piloto mas regular,\n¿Te quieres quedar como piloto probador (No corres ningun rally),\no decides dejar el equipo y volver a España a correr por tu cuenta al regional asturiano (no tienes suficiente dinero para el SCER)?',
        opciones: {
            ContinuarEnCitroën: 8,
            Volver: 9,
        },
    },
    5: {
        mensaje: 'Vuelves a España y te va muy bien, ganas el rally de casa, el Rally Princesa de Asturias, y consigues un buen puesto a final de año Citroën sigue confiando en ti,\n ¿Quieres intentar dar el salto al WRC2 otra vez o te quedas a luchar el campeonato el año que viene?',
        opciones: {
            Seguir: 10,
            IntentarWRC2: 11,
        },
    },
    6: {
        mensaje: 'Te quedas en Citroën a intentar ganar el campeonato pero tu jefe dice que tu copiloto, tu mejor amigo, no da el nivel, \n ¿Haces caso a tu jefe y buscas otro copiloto más experimentado o te quedas con tu amigo?',
        opciones: {
            Amigo: 12,
            NuevoCopiloto: 13,
        },
    },
    7: {
        mensaje: 'Fichas por Toyota y el primer año te cuesta adaptarte al coche, aunque es un buen año para ti, \n ¿Quieres intentar correr algun rally del WRC2 aunque signifique perderte algun rally de España o te centras totalmente en el SCER?',
        opciones: {
            WRC2: 14,
            CentrarseEnSCER: 15,
        },
    },
    8: {
        mensaje: 'Te quedas como piloto probador, ruedas muchos kilometros desarrolando el coche y lo dominas a la perfeccion, aunque no corriste ningun rally, \n¿Pides ser piloto titular arriesgandote a que te echen o eres paciente y esperas tu oportunidad? ',
        opciones: {
            PedirSerTitular: 16,
            Esperar: 17,
        },
    },
    9: {
        mensaje: 'Vuelves al Campeonato de Asturias de Rallyes, donde empezaste, y en tu primer año con un coche medianamente bueno arrasas y te llevas el campeonato,\n entonces Skoda te ofrece correr el SCER , ¿Te quedas en Asturias acumulando titulos regionales o vuelves al campeonato nacional?',
        opciones: {
            Quedarse: 18,
            CorrerNacional: 19,
        },
    },
    10: {
        mensaje: '',
        opciones: {
            explorarValle: 20,
            explorarCima: 21,
        },
    },
    11: {
        mensaje: '',
        opciones: {
            beberAgua: 22,
            seguirExplorandoLlanura: 23,
        },
    },

};

function ElegirCamino(path) {
    if (historia[capituloActual].opciones[path]) {
        capituloActual = historia[capituloActual].opciones[path];
        actualizarHistoria();
    } else {

        console.error('Opción no válida');
    }
}

function actualizarHistoria() {
    const chapterData = historia[capituloActual];
    document.getElementById('chapter').innerText = `Capítulo ${capituloActual}`;
    document.getElementById('mensaje').innerText = chapterData.mensaje;

    const buttonsDiv = document.getElementById('buttons');
    buttonsDiv.innerHTML = '';

    for (const option in chapterData.opciones) {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => ElegirCamino(option);
        buttonsDiv.appendChild(button);
    }
}

actualizarHistoria();
