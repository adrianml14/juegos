let capituloActual = 1;
let historia = {
    1: {
        mensaje: 'Eres un piloto joven muy prometedor, Citroën te da la oportunidad de elegir que hacer el año que viene:\n¿Quieres dar el gran salto al WRC2 (2ª Categoria Mundial) o prefieres quedarte a disputar el SCER(Campeonato de España)?',
        opciones: {
            WRC2: 2,
            SCER: 3,
        },
    },
    2: {
        mensaje: 'Pruebas en el mundial, eres muy joven y demuestras lo bueno que eres, pero cometes muchos errores y no haces nada importante,\n¿Quieres intentarlo un año más o vuelves a España al SCER con Citroën?',
        opciones: {
            Continuar: 4,
            SCER: 5,
        },
    },
    3: {
        mensaje: 'Te quedas en España y cuajas un gran año, destacando pero sin conseguir ninguna victoria.\nPara el año que viene te quiere fichar Toyota, un equipo nuevo pero que apunta a campeón,\n¿Confías en ellos o te quedas en Citroën?',
        opciones: {
            Quedarse: 6,
            Marcharse: 7,
        },
    },
    4: {
        mensaje: 'Otro año irregular para ti en Citroën, por lo que deciden sustituirte por un piloto más regular,\n¿Te quieres quedar como piloto probador (No corres ningún rally),\no decides dejar el equipo y volver a España a correr por tu cuenta al regional asturiano (no tienes suficiente dinero para el SCER)?',
        opciones: {
            ContinuarEnCitroën: 8,
            Volver: 9,
        },
    },
    5: {
        mensaje: 'Vuelves a España y te va muy bien, ganas el rally de casa, el Rally Princesa de Asturias, y consigues un buen puesto a final de año. Citroën sigue confiando en ti,\n ¿Quieres intentar dar el salto al WRC2 otra vez o te quedas a luchar el campeonato el año que viene?',
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
        mensaje: 'Fichas por Toyota y el primer año te cuesta adaptarte al coche, aunque es un buen año para ti, \n ¿Quieres intentar correr algún rally del WRC2 aunque signifique perderte algún rally de España o te centras totalmente en el SCER?',
        opciones: {
            WRC2: 14,
            CentrarseEnSCER: 15,
        },
    },
    8: {
        mensaje: 'Te quedas como piloto probador, ruedas muchos kilómetros desarrollando el coche y lo dominas a la perfección, aunque no corres ningún rally, \n¿Pides ser piloto titular arriesgándote a que te echen o eres paciente y esperas tu oportunidad? ',
        opciones: {
            PedirSerTitular: 16,
            Esperar: 17,
        },
    },
    9: {
        mensaje: 'Vuelves al Campeonato de Asturias de Rallyes, donde empezaste, y en tu primer año con un coche medianamente bueno arrasas y te llevas el campeonato,\n entonces Skoda te ofrece correr el SCER , ¿Te quedas en Asturias acumulando títulos regionales o vuelves al campeonato nacional?',
        opciones: {
            Quedarse: 18,
            CorrerNacional: 19,
        },
    },
    10: {
        mensaje: 'Intentas luchar el camponato de España con Citroën, y haces un año espectacular y te proclamas Campeón de España de Rallyes, \n Citroën te da a elegir si quieres seguir corriendo en España para revalidar el titulo o das al salto al WRC2, ¿que quieres hacer?',
        opciones: {
            Quedarse: 20,
            IntentarWRC2: 21,
        },
    },
    11: {
        mensaje: 'Vuelves a intentar el WRC2 pero esta vez obteniendo mejores resultados, sabes que por tu edad es tu ultima oportunidad de destacar,\nCitroën te da la opcion de seguir a intentar ganar el WRC2 pero te llega la oferta de Hyundai para ser piloto probador de la maxima categoria mundial, ¿Que haces?',
        opciones: {
            SeguirCitroën: 22,
            IrseHyundai: 23,
        },
    },
    12: {
        mensaje: 'Desobedeces a tu jefe y te quedas con tu amigo de toda la vida y cuajas un gran año junto a él, con buenos resultados y al jefe ya no le parece mal tu copiloto.',
        opciones: {
            Continuar: 10,

        },
    },
    13: {
        mensaje: '',
        opciones: {
            beberAgua: 22,
            seguirExplorandoLlanura: 23,
        },
    },
    14: {
        mensaje: '',
        opciones: {
            explorarValle: 20,
            explorarCima: 21,
        },
    },
    15: {
        mensaje: '',
        opciones: {
            beberAgua: 22,
            seguirExplorandoLlanura: 23,
        },
    },
    16: {
        mensaje: 'Pides ser titular y tu jefe se enfada por tu impaciencia, aunque te da una oportunidad en el proximo rally, \n si no obtienes un top 3 te echará, ¿Quieres intentarlo en ese rally o te vas del equipo?',
        opciones: {
            IntentarElRally: 22,
            Irse: 9,
        },
    },
    17: {
        mensaje: '',
        opciones: {
            explorarValle: 20,
            explorarCima: 21,
        },
    },
    18: {
        mensaje: '',
        opciones: {
            beberAgua: 22,
            seguirExplorandoLlanura: 23,
        },
    },
    19: {
        mensaje: '',
        opciones: {
            beberAgua: 22,
            seguirExplorandoLlanura: 23,
        },
    },
    20: {
        mensaje: '',
        opciones: {
            explorarValle: 20,
            explorarCima: 21,
        },
    },
    21: {
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
