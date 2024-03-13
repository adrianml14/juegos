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
            Quedarse: 21,
            IntentarWRC2: 20,
        },
    },
    11: {
        mensaje: 'Vuelves a intentar el WRC2 pero esta vez obteniendo mejores resultados, sabes que por tu edad es tu ultima oportunidad de destacar,\nCitroën te da la opcion de seguir a intentar ganar el WRC2 pero te llega la oferta de Hyundai para ser piloto probador de la maxima categoria mundial, ¿Que haces?',
        opciones: {
            SeguirCitroën: 20,
            IrseHyundai: 22,
        },
    },
    12: {
        mensaje: 'Desobedeces a tu jefe y te quedas con tu amigo de toda la vida y cuajas un gran año junto a él, con buenos resultados y al jefe ya no le parece mal tu copiloto.',
        opciones: {
            Continuar: 10,

        },
    },
    13: {
        mensaje: 'Tu nuevo copiloto es Borja Rozada, con mucha experiencia pero nuevo para ti, haceis un buen año peleando por el campeonato, \n por lo tanto decides pelear el año siguiente el SCER',
        opciones: {
            Continuar:19
        },
    },
    14: {
        mensaje: 'Haces un grandisimo papel en los pocos rallyes del WRC2 que corres, y aunque no ganes el campeonato de España, Toyota te da la opotunidad de correr en WRC2, \n ¿que quieres hacer?',
        opciones: {
            WRC2: 20,
            PelearSCER: 21,
        },
    },
    15: {
        mensaje: 'Intentas luchar el camponato de España con Toyota, y haces un año espectacular y te proclamas Campeón de España de Rallyes, \n Toyota te da a elegir si quieres seguir corriendo en España para revalidar el titulo o das al salto al WRC2, ¿que quieres hacer?',
        opciones: {
            SCER: 21,
            IntentarWRC2: 23,
        },
    },
    16: {
        mensaje: 'Pides ser titular y tu jefe se enfada por tu impaciencia, aunque te da una oportunidad en el proximo rally, \n si no obtienes un top 3 te echará, ¿Quieres intentarlo en ese rally o vuelves a tus inicios?',
        opciones: {
            IntentarElRally: 24,
            Irse: 9,
        },
    },
    17: {
        mensaje: 'Eres paciente y esperas tu oportunidad, Citroën te recompensa con la oportunidad de correr el WRC2 o el Campeonato de España(SCER)',
        opciones: {
            SCER: 10,
            WRC2: 23,
        },
    },
    18: {
        mensaje: 'Te conviertes en la persona con mas titulos regionales de Asturias y te retiras oficialmente como un heroe y creas una escuela de conduccion',
        opciones: {
            Fin: 1
        },
    },
    19: {
        mensaje: 'Comienzas bien el año aunque en uno de los rallyes de fin de año , te quedas sin frenos y tienes un accidente grave que te aparta de los rallyes para siempre...',
        opciones: {
            Fin: 1
        },
    },
    20: {
        mensaje: 'Corres en el WRC2, sabes que es tu ultimo intento debido a tu edad y das lo mejor de ti. Llegas al ultimo rally con opciones de ganar el WRC2, lo cual lo haces \n y te conviertes en el primer campeon español desde Dani Sordo en 2005, \ndecides retirarte como una leyenda...',
        opciones: {
            Fin: 1
        },
    },
    21: {
        mensaje: 'Te conviertes en una leyenda del automovilismo español, con varios campeonatos nacionales a tus espaldas te retiras como tal...',
        opciones: {
            Fin: 1
        },
    },
    22: {
        mensaje: 'Llegas a la maxima categoria mundial, un sueño hecho realidad, en tu primer año te adaptas al nuevo Hyundai y a la maxima categoria,\npero en el segundo año das una leccion de conduccion extraordinaria y te conviertes en campeon del mundo de rallyes,\nes el cierre perfecto para tu carrera ',
        opciones: {
            Fin: 1
        },
    },

    23: {
        mensaje: 'Corres en el WRC2, sabes que es tu ultimo intento debido a tu edad y das lo mejor de ti. Debido a tus nervios no consigues ser campeon, \npero te retiras como una persona muy respetada dentro del mundillo',
        opciones: {
            Fin: 1
        },
    },
    24: {
        mensaje: 'Consigues el objetivo y tu jefe ya confia lo suficiente en ti para correr el Campeonato de España de rallyes',
        opciones: {
            Continuar: 10
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


let historiaFinés = {
    1: {
        viesti: 'Olet nuori lupaava kuljettaja, ja Citroën antaa sinulle mahdollisuuden valita, mitä teet ensi vuonna:\nHaluatko tehdä suuren loikan WRC2:een (2. maailmanluokka) vai jäädä kilpailemaan SCERiin (Espanjan mestaruuskilpailu)?',
        vaihtoehdot: {
            WRC2: 2,
            SCER: 3,
        },
    },
    2: {
        viesti: 'Testaat maailmanmestaruudessa, olet hyvin nuori ja näytät kykysi, mutta teet paljon virheitä etkä saavuta mitään merkittävää.\nHaluatko yrittää vielä vuoden vai palata Espanjaan Citroëniin?',
        vaihtoehdot: {
            Jatkaa: 4,
            SCER: 5,
        },
    },
    3: {
        viesti: 'Pysyt Espanjassa ja sinulla on loistava vuosi, erottuen, mutta voittamatta mitään.\nEnsi vuodeksi Toyota haluaa palkata sinut, uusi mutta mestaruuteen tähtäävä tiimi.\nLuotatko heihin vai jäätkö Citroëniin?',
        vaihtoehdot: {
            Pysyä: 6,
            Lähteä: 7,
        },
    },
    4: {
        viesti: 'Toinen epätasainen vuosi sinulle Citroënin kanssa, joten he päättävät korvata sinut säännöllisemmällä kuljettajalla.\nHaluatko jäädä koeajajaksi (et osallistu mihinkään ralliin) vai päätätkö lähteä tiimistä ja palata Espanjaan kilpailemaan alueelliseen Asturian mestaruuteen (sinulla ei ole tarpeeksi rahaa SCERiin)?',
        vaihtoehdot: {
            JatkaaCitroënissa: 8,
            Palata: 9,
        },
    },
    5: {
        viesti: 'Palaat Espanjaan ja menestyt hyvin, voitat kotirallisi, Rally Princesa de Asturiasin, ja saavutat hyvän sijoituksen vuoden lopussa. Citroën luottaa edelleen sinuun.\nHaluatko yrittää tehdä loikan WRC2:een uudelleen vai jäädä taistelemaan mestaruudesta ensi vuonna?',
        vaihtoehdot: {
            Jatkaa: 10,
            YritäWRC2: 11,
        },
    },
    6: {
        viesti: 'Pysyt Citroënissa yrittääksesi voittaa mestaruuden, mutta pomosi sanoo, että kartanlukijasi, paras ystäväsi, ei ole tarpeeksi hyvä.\nKuunteletko pomoasi etsien kokeneempaa kartanlukijaa vai jäättekö ystäväsi kanssa?',
        vaihtoehdot: {
            Ystävä: 12,
            UusiKartanlukija: 13,
        },
    },
    7: {
        viesti: 'Allekirjoitat Toyotan kanssa, ja ensimmäinen vuosi on vaikea sopeutua autoon, vaikka se on hyvä vuosi sinulle.\nHaluatko yrittää kilpailla joissakin WRC2-rallissa, vaikka se tarkoittaisi, ettet osallistu joihinkin Espanjan rallikilpailuihin, vai keskitytkö täysin SCERiin?',
        vaihtoehdot: {
            WRC2: 14,
            KeskittyäSCERiin: 15,
        },
    },
    8: {
        viesti: 'Jäät koeajajaksi, ajaen paljon kilometrejä auton kehittämiseksi ja hallitset sitä täydellisesti, vaikka et kilpaile missään rallissa.\nHalutko pyytää säännöllistä kuljettajan paikkaa ottaen riskin, että sinut erotetaan, vai oletko kärsivällinen ja odotatko mahdollisuuttasi?',
        vaihtoehdot: {
            PyytääSäännölliseksi: 16,
            Odota: 17,
        },
    },
    9: {
        viesti: 'Palaat Asturian rallimestaruuskilpailuihin, missä aloit, ja ensimmäisen vuoden kohtuullisen hyvällä autolla nappaat mestaruuden.\nSitten Skoda tarjoaa sinulle mahdollisuuden kilpailla SCERissä. Jäättekö Asturiaan keräämään alueellisia titteleitä vai palaatteko kansalliseen mestaruuteen?',
        vaihtoehdot: {
            Pysyä: 18,
            KilpaillaKansallisesti: 19,
        },
    },
    10: {
        viesti: 'Yrität taistella Espanjan mestaruudesta Citroënin kanssa ja sinulla on näyttävä vuosi, tullen Espanjan rallimestariksi.\nCitroën antaa sinulle mahdollisuuden valita, haluatko jatkaa kilpailemista Espanjassa puolustaaksesi titteliä vai tehdä loikan WRC2:een. Mitä haluat tehdä?',
        vaihtoehdot: {
            Pysyä: 21,
            YritäWRC2: 20,
        },
    },
    11: {
        viesti: 'Yrität uudelleen WRC2:ta, tällä kertaa saavuttaen parempia tuloksia. Tiedät, että iästäsi johtuen tämä on viimeinen mahdollisuutesi erottua.\nCitroën antaa sinulle mahdollisuuden jatkaa WRC2:een yrittämistä, mutta Hyundai tarjoaa mahdollisuuden olla kokeilukuljettaja maailman korkeimmalla tasolla. Mitä teet?',
        vaihtoehdot: {
            JatkaaCitroënissa: 20,
            MennäHyundaihin: 22,
        },
    },
    12: {
        viesti: 'Et tottele pomoasi ja jäät ystäväsi kanssa, ja sinulla on loistava vuosi hyvin tuloksin. Pomo ei enää näe pahana kartanlukijaasi.',
        vaihtoehdot: {
            Jatkaa: 10,
        },
    },
    13: {
        viesti: 'Uusi kartanlukijasi on Borja Rozada, paljon kokemusta mutta uusi sinulle. Teillä on hyvä vuosi taistellessanne mestaruudesta.\nPäätät siis taistella SCERistä seuraavana vuonna.',
        vaihtoehdot: {
            Jatkaa: 19,
        },
    },
    14: {
        viesti: 'Pärjäät erinomaisesti harvoissa WRC2-rallissa, joihin osallistut, ja vaikka et voita Espanjan mestaruutta, Toyota antaa sinulle mahdollisuuden kilpailla WRC2:ssa. Mitä haluat tehdä?',
        vaihtoehdot: {
            WRC2: 20,
            TaistellaSCERissä: 21,
        },
    },
    15: {
        viesti: 'Yrität taistella Espanjan mestaruudesta Toyotan kanssa, ja sinulla on näyttävä vuosi, tullessasi Espanjan rallimestariksi.\nToyota antaa sinulle mahdollisuuden valita, haluatko jatkaa kilpailemista Espanjassa puolustaaksesi titteliä vai tehdä loikan WRC2:een. Mitä haluat tehdä?',
        vaihtoehdot: {
            SCER: 21,
            YritäWRC2: 23,
        },
    },
    16: {
        viesti: 'Pyydät säännöllistä kuljettajan paikkaa, ja pomosi suuttuu kärsimättömyydestäsi. Hän antaa sinulle mahdollisuuden seuraavassa rallissa.\nJos et saavuta top 3 -sijoitusta, sinut erotetaan. Haluatko yrittää tätä rallia vai palata juurillesi?',
        vaihtoehdot: {
            YritäRallia: 24,
            Palata: 9,
        },
    },
    17: {
        viesti: 'Olet kärsivällinen ja odotat mahdollisuuttasi. Citroën palkitsee sinut mahdollisuudella kilpailla joko WRC2:ssa tai Espanjan mestaruuskilpailussa (SCER).',
        vaihtoehdot: {
            SCER: 10,
            WRC2: 23,
        },
    },
    18: {
        viesti: 'Tulet alueen mestarien kanssa eniten titteleitä omaavaksi henkilöksi ja jäät eläkkeelle virallisesti sankarina, perustaen ajokoulun.',
        vaihtoehdot: {
            Loppu: 1,
        },
    },
    19: {
        viesti: 'Aloit hyvin vuoden, mutta yhdessä vuoden loppurallissa menetät jarrusi ja saat vakavan onnettomuuden, mikä vie sinut pois rallikilpailuista ikuisesti...',
        vaihtoehdot: {
            Loppu: 1,
        },
    },
    20: {
        viesti: 'Osallistut WRC2:een, tietäen että tämä on viimeinen mahdollisuutesi iän vuoksi, ja annat kaikkesi. Saavutat viimeisen rallin mahdollisuudella voittaa WRC2:n, ja sinusta tulee ensimmäinen espanjalainen mestari Dani Sordon jälkeen vuonna 2005.\nPäätät jäädä eläkkeelle legendaarisena hahmona...',
        vaihtoehdot: {
            Loppu: 1,
        },
    },
    21: {
        viesti: 'Sinusta tulee Espanjan autourheilun legenda, useilla kansallisilla mestaruuksilla. Jäät eläkkeelle sellaisenaan...',
        vaihtoehdot: {
            Loppu: 1,
        },
    },
    22: {
        viesti: 'Saavutat huipulle maailman suurimmassa luokassa, unelmasi toteutuu. Ensimmäisenä vuonna sopeudut uuteen Hyundaiin ja ylimpään luokkaan, mutta toisena vuonna annat erinomaisen ajo-opetuksen ja tulet rallin maailmanmestariksi.\nSe on täydellinen päätös urallasi.',
        vaihtoehdot: {
            Loppu: 1,
        },
    },
    23: {
        viesti: 'Osallistut WRC2:een, tietäen että tämä on viimeinen mahdollisuutesi iän vuoksi, ja annat kaikkesi. Hermostuneisuutesi vuoksi et voita mestaruutta, mutta jäät eläkkeelle erittäin kunnioitetuna henkilönä autourheilumaailmassa.',
        vaihtoehdot: {
            Loppu: 1,
        },
    },
    24: {
        viesti: 'Saavutat tavoitteesi, ja pomosi luottaa nyt tarpeeksi sinuun kilpailla Espanjan rallimestaruuskilpailuissa.',
        vaihtoehdot: {
            Jatkaa: 10,
        },
    },
};
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
let historiaFrancés = {
    1: {
        message: 'Vous êtes un jeune pilote très prometteur. Citroën vous donne l\'opportunité de choisir ce que vous ferez l\'année prochaine :\nVoulez-vous faire le grand saut vers le WRC2 (2e Catégorie Mondiale) ou préférez-vous rester et concourir dans le SCER (Championnat d\'Espagne)?',
        options: {
            WRC2: 2,
            SCER: 3,
        },
    },
    2: {
        message: 'Vous testez dans le championnat du monde. Vous êtes très jeune et montrez votre talent, mais vous faites beaucoup d\'erreurs et n\'accomplissez rien de significatif.\nVoulez-vous essayer une autre année ou retourner en Espagne avec Citroën?',
        options: {
            Continuer: 4,
            SCER: 5,
        },
    },
    3: {
        message: 'Vous restez en Espagne et passez une excellente année, vous démarquez sans toutefois remporter de victoires.\nPour l\'année prochaine, Toyota, une nouvelle équipe mais visant le championnat, souhaite vous recruter.\nFaites-vous confiance à eux ou restez-vous chez Citroën?',
        options: {
            Rester: 6,
            Partir: 7,
        },
    },
    4: {
        message: 'Une autre année irrégulière pour vous chez Citroën, ils décident donc de vous remplacer par un pilote plus régulier.\nVoulez-vous rester en tant que pilote d\'essai (aucune participation à un rallye), ou décidez-vous de quitter l\'équipe et de retourner en Espagne pour participer au championnat asturien régional (vous n\'avez pas assez d\'argent pour le SCER)?',
        options: {
            ContinuerChezCitroën: 8,
            Retourner: 9,
        },
    },
    5: {
        message: 'Vous retournez en Espagne et performez bien, remportant le rallye à domicile, le Rallye Princesa de Asturias, et obtenant une bonne position globale. Citroën continue d\'avoir confiance en vous.\nVoulez-vous essayer de monter en WRC2 à nouveau, ou restez-vous pour lutter pour le championnat l\'année prochaine?',
        options: {
            Rester: 10,
            EssayerWRC2: 11,
        },
    },
    6: {
        message: 'Vous restez chez Citroën pour tenter de remporter le championnat, mais votre patron dit que votre copilote, votre meilleur ami, n\'est pas à la hauteur.\nÉcoutez-vous votre patron et cherchez-vous un copilote plus expérimenté, ou restez-vous avec votre ami?',
        options: {
            Ami: 12,
            NouveauCoPilote: 13,
        },
    },
    7: {
        message: 'Vous signez avec Toyota, et la première année, vous avez du mal à vous adapter à la voiture, bien que ce soit une bonne année pour vous.\nVoulez-vous essayer de courir un rallye en WRC2 même si cela signifie manquer quelques rallyes en Espagne, ou vous concentrez-vous entièrement sur le SCER?',
        options: {
            WRC2: 14,
            ConcentrerSurSCER: 15,
        },
    },
    8: {
        message: 'Vous restez en tant que pilote d\'essai, enregistrant de nombreux kilomètres pour développer la voiture, et la maîtrisez parfaitement, bien que vous ne participiez à aucun rallye.\nDemandez-vous à être pilote régulier, en prenant le risque d\'être renvoyé, ou êtes-vous patient et attendez-vous votre opportunité?',
        options: {
            DemanderPositionRégulière: 16,
            Attendre: 17,
        },
    },
    9: {
        message: 'Vous retournez au Championnat des rallyes des Asturies, où vous avez commencé, et lors de votre première année avec une voiture modérément bonne, vous dominez et remportez le championnat.\nEnsuite, Skoda vous propose de courir en SCER. Resteriez-vous en Asturies en accumulant des titres régionaux, ou retourneriez-vous au championnat national?',
        options: {
            Rester: 18,
            CourirNational: 19,
        },
    },
    10: {
        message: 'Vous essayez de vous battre pour le championnat espagnol avec Citroën, et vous avez une année spectaculaire, devenant le champion espagnol des rallyes.\nCitroën vous laisse choisir si vous voulez continuer à courir en Espagne pour défendre le titre ou faire le saut en WRC2. Que voulez-vous faire?',
        options: {
            Rester: 21,
            EssayerWRC2: 20,
        },
    },
    11: {
        message: 'Vous essayez à nouveau WRC2, cette fois en obtenant de meilleurs résultats. Vous savez que compte tenu de votre âge, c\'est votre dernière chance de vous démarquer.\nCitroën vous donne la possibilité de continuer à essayer de remporter WRC2, mais vous recevez une offre de Hyundai pour être pilote d\'essai dans la catégorie mondiale supérieure. Que faites-vous?',
        options: {
            ContinuerChezCitroën: 20,
            AllerChezHyundai: 22,
        },
    },
    12: {
        message: 'Vous désobéissez à votre patron et restez avec votre ami de toute une vie. Vous avez une excellente année ensemble, avec de bons résultats, et le patron ne se soucie plus de votre copilote.',
        options: {
            Continuer: 10,
        },
    },
    13: {
        message: 'Votre nouveau copilote est Borja Rozada, avec beaucoup d\'expérience mais nouveau pour vous. Vous avez une bonne année en luttant pour le championnat.\nPar conséquent, vous décidez de vous battre pour le SCER l\'année suivante.',
        options: {
            Continuer: 19,
        },
    },
    14: {
        message: 'Vous vous en sortez exceptionnellement bien dans les rares rallyes WRC2 auxquels vous participez, et bien que vous ne remportiez pas le championnat espagnol, Toyota vous offre la possibilité de courir en WRC2. Que voulez-vous faire?',
        options: {
            WRC2: 20,
            LutterSCER: 21,
        },
    },
    15: {
        message: 'Vous essayez de vous battre pour le championnat espagnol avec Toyota, et vous avez une année spectaculaire, devenant le champion espagnol des rallyes.\nToyota vous laisse choisir si vous voulez continuer à courir en Espagne pour défendre le titre ou faire le saut en WRC2. Que voulez-vous faire?',
        options: {
            SCER: 21,
            EssayerWRC2: 23,
        },
    },
    16: {
        message: 'Vous demandez à être pilote régulier, et votre patron se fâche pour votre impatience. Cependant, il vous donne une chance lors du prochain rallye.\nSi vous n\'obtenez pas un top 3, vous serez renvoyé. Voulez-vous essayer à ce rallye ou retourner à vos débuts?',
        options: {
            EssayerRallye: 24,
            Retourner: 9,
        },
    },
    17: {
        message: 'Vous êtes patient et attendez votre opportunité. Citroën vous récompense en vous offrant la possibilité de courir en WRC2 ou au Championnat espagnol (SCER).',
        options: {
            SCER: 10,
            WRC2: 23,
        },
    },
    18: {
        message: 'Vous devenez la personne avec le plus de titres régionaux aux Asturies et prenez votre retraite officiellement en tant que héros, créant une école de conduite.',
        options: {
            Fin: 1,
        },
    },
    19: {
        message: 'Vous commencez bien l\'année, mais lors d\'un des rallyes de fin d\'année, vous perdez vos freins et avez un grave accident qui vous éloigne définitivement des rallyes...',
        options: {
            Fin: 1,
        },
    },
    20: {
        message: 'Vous courez en WRC2, sachant que c\'est votre dernière tentative en raison de votre âge, et vous donnez le meilleur de vous-même. Vous atteignez le dernier rallye avec une chance de remporter WRC2, ce que vous faites, devenant le premier champion espagnol depuis Dani Sordo en 2005.\nVous décidez de prendre votre retraite en tant que légende...',
        options: {
            Fin: 1,
        },
    },
    21: {
        message: 'Vous devenez une légende du sport automobile espagnol, avec plusieurs championnats nationaux à votre actif. Vous prenez votre retraite en tant que tel...',
        options: {
            Fin: 1,
        },
    },
    22: {
        message: 'Vous atteignez la catégorie mondiale supérieure, un rêve devenu réalité. Lors de votre première année, vous vous adaptez à la nouvelle Hyundai et à la catégorie supérieure.\nLors de la deuxième année, vous donnez une leçon de conduite extraordinaire et devenez champion du monde des rallyes.\nC\'est la fin parfaite de votre carrière.',
        options: {
            Fin: 1,
        },
    },
    23: {
        message: 'Vous courez en WRC2, sachant que c\'est votre dernière tentative en raison de votre âge, et vous donnez le meilleur de vous-même. En raison de votre nervosité, vous ne devenez pas champion, mais vous prenez votre retraite en tant que personne très respectée dans le milieu du sport automobile.',
        options: {
            Fin: 1,
        },
    },
    24: {
        message: 'Vous atteignez l\'objectif, et votre patron a maintenant suffisamment confiance en vous pour courir au Championnat espagnol des rallyes.',
        options: {
            Continuer: 10,
        },
    },
};

//-------------------------------------------------------------------------------------------------------------------------------------------------

let historiaInglés = {
    1: {
        message: 'You are a young and promising driver. Citroën gives you the opportunity to choose what to do next year:\nDo you want to make the big leap to WRC2 (2nd World Category) or do you prefer to stay and compete in SCER (Spanish Championship)?',
        options: {
            WRC2: 2,
            SCER: 3,
        },
    },
    2: {
        message: 'You test in the world championship. You are very young and show how good you are, but you make many mistakes and don\'t achieve anything significant.\nDo you want to try another year or go back to Spain with Citroën?',
        options: {
            Continue: 4,
            SCER: 5,
        },
    },
    3: {
        message: 'You stay in Spain and have a great year, standing out but without achieving any victories.\nFor next year, Toyota, a new but championship-winning team, wants to sign you.\nDo you trust them or stay with Citroën?',
        options: {
            Stay: 6,
            Leave: 7,
        },
    },
    4: {
        message: 'Another inconsistent year for you at Citroën, so they decide to replace you with a more consistent driver.\nDo you want to stay as a test driver (no rally participation), or do you decide to leave the team and return to Spain to compete in the regional Asturian championship (you don\'t have enough money for SCER)?',
        options: {
            ContinueAtCitroën: 8,
            Return: 9,
        },
    },
    5: {
        message: 'You return to Spain and perform well, winning the home rally, the Rally Princesa de Asturias, and achieving a good overall position. Citroën continues to have confidence in you.\nDo you want to try moving up to WRC2 again, or do you stay to fight for the championship next year?',
        options: {
            Stay: 10,
            TryWRC2: 11,
        },
    },
    6: {
        message: 'You stay at Citroën to try to win the championship, but your boss says that your co-driver, your best friend, is not up to the level.\nDo you listen to your boss and look for a more experienced co-driver, or do you stay with your friend?',
        options: {
            Friend: 12,
            NewCoDriver: 13,
        },
    },
    7: {
        message: 'You sign with Toyota, and in the first year, you struggle to adapt to the car, although it is a good year for you.\nDo you want to try running a rally in WRC2 even if it means missing some rallies in Spain, or do you focus entirely on SCER?',
        options: {
            WRC2: 14,
            FocusOnSCER: 15,
        },
    },
    8: {
        message: 'You stay as a test driver, logging many kilometers developing the car, and master it perfectly, although you don\'t participate in any rally.\nDo you request to be a regular driver, risking being fired, or are you patient and wait for your opportunity?',
        options: {
            RequestRegularPosition: 16,
            Wait: 17,
        },
    },
    9: {
        message: 'You return to the Asturian Rally Championship, where you started, and in your first year with a moderately good car, you dominate and win the championship.\nThen, Skoda offers you to run in SCER. Do you stay in Asturias accumulating regional titles, or do you return to the national championship?',
        options: {
            Stay: 18,
            RunNational: 19,
        },
    },
    10: {
        message: 'You try to fight for the Spanish championship with Citroën, and you have a spectacular year, becoming the Spanish Rally Champion.\nCitroën lets you choose if you want to continue racing in Spain to defend the title or make the leap to WRC2. What do you want to do?',
        options: {
            Stay: 21,
            TryWRC2: 20,
        },
    },
    11: {
        message: 'You try WRC2 again, this time achieving better results. You know that due to your age, it is your last chance to stand out.\nCitroën gives you the option to continue trying to win WRC2, but you receive an offer from Hyundai to be a test driver in the top world category. What do you do?',
        options: {
            ContinueCitroën: 20,
            GoHyundai: 22,
        },
    },
    12: {
        message: 'You disobey your boss and stay with your lifelong friend. You have a great year together, with good results, and the boss no longer minds your co-driver.',
        options: {
            Continue: 10,
        },
    },
    13: {
        message: 'Your new co-driver is Borja Rozada, with a lot of experience but new to you. You have a good year competing for the championship.\nTherefore, you decide to fight for the SCER the following year.',
        options: {
            Continue: 19,
        },
    },
    14: {
        message: 'You perform exceptionally well in the few WRC2 rallies you participate in, and although you don\'t win the Spanish championship, Toyota gives you the opportunity to run in WRC2. What do you want to do?',
        options: {
            WRC2: 20,
            FightSCER: 21,
        },
    },
    15: {
        message: 'You try to fight for the Spanish championship with Toyota, and you have a spectacular year, becoming the Spanish Rally Champion.\nToyota lets you choose if you want to continue racing in Spain to defend the title or make the leap to WRC2. What do you want to do?',
        options: {
            SCER: 21,
            TryWRC2: 23,
        },
    },
    16: {
        message: 'You request to be a regular driver, and your boss gets angry for your impatience. However, he gives you a chance in the next rally.\nIf you don\'t get a top 3, you will be fired. Do you want to try it in that rally or go back to your roots?',
        options: {
            TryRally: 24,
            GoBack: 9,
        },
    },
    17: {
        message: 'You are patient and wait for your opportunity. Citroën rewards you with the chance to run in WRC2 or the Spanish Championship (SCER).',
        options: {
            SCER: 10,
            WRC2: 23,
        },
    },
    18: {
        message: 'You become the person with the most regional titles in Asturias and retire officially as a hero, creating a driving school.',
        options: {
            End: 1,
        },
    },
    19: {
        message: 'You start the year well, but in one of the end-of-year rallies, you lose your brakes and have a serious accident that keeps you away from rallies forever...',
        options: {
            End: 1,
        },
    },
    20: {
        message: 'You race in WRC2, knowing it\'s your last attempt due to your age, and you give it your all. You reach the last rally with a chance to win WRC2, which you do, becoming the first Spanish champion since Dani Sordo in 2005.\nYou decide to retire as a legend...',
        options: {
            End: 1,
        },
    },
    21: {
        message: 'You become a legend in Spanish motorsport, with several national championships behind you. You retire as such...',
        options: {
            End: 1,
        },
    },
    22: {
        message: 'You reach the top world category, a dream come true. In your first year, you adapt to the new Hyundai and the top category.\nIn the second year, you give an extraordinary driving lesson and become the world rally champion.\nIts the perfect end to your career.',
        options: {
            End: 1,
        },
    },
    23: {
        message: 'You race in WRC2, knowing it\'s your last attempt due to your age, and you give it your all. Due to your nerves, you don\'t become the champion, but you retire as a highly respected person in the motorsport community.',
        options: {
            End: 1,
        },
    },
    24: {
        message: 'You achieve the goal, and your boss now trusts you enough to run in the Spanish Rally Championship.',
        options: {
            Continue: 10,
        },
    },
};

