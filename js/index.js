// ********************************************************************
//                              FUNZIONI                             //
// ********************************************************************

/**
 * Funzione uguale a document.querySelector() ma riassunta in meno caratteri
 * @param {string} querySelector Indica un selettore css valido
 * @returns 
 */
function el(querySelector) {
    let domElement;
    if (querySelector === ':root' || querySelector === 'root') {
        domElement = document.documentElement;
    } else {
        domElement = document.querySelector(querySelector);
    };
    return domElement;
};

/**
 * Funzione che analizza una singola parola (sottoforma di stringa) e 
 * ne cancella tutti i simboli specificati nel validator
 * @param {string} word parola da analizzare
 * @returns {string}
 */
function deleteSimbolsWord(word) {
    let check = word.split('');
    let validator = ['!', '"', '£', '€', '$', '%', '&', '/', '(', ')', '=', '?', "'", '^', '[', ']', '@', '#', '°', 'ç', '§', '_', '-', '.', ':', ',', ';', '|'];
    let result = [];

    for (let i = 0; i < check.length; i++) {
        if (!validator.includes(check[i])) {
            result.push(check[i]);
        };
    };

    return result.join('');
};

/**
 * funzione che permette di analizzare un intera frase e rimuovere tutti 
 * i simboli, abbiamo anche la possibilità di inserire un qualsiasi carattere
 * al posto delle spaziature, se questo non viene specificato di default 
 * viene lasciata la spaziatura
 * @param {string} sentence Frase da analizzare
 * @param {string} join carattere o spaziatura da inserire tra le parole
 * @returns {string} 
 */
function deleteSimbolsSentece(sentence, join) {
    let words = sentence.split(' ');
    let result = [];

    for (let j = 0; j < words.length; j++) {
        let cleanWord = deleteSimbolsWord(words[j]);
        if (cleanWord !== "") {
            result.push(cleanWord);
        }
    };

    if (join === undefined) {
        return result.join(' ');
    } else {
        return result.join(join);
    };
};

/**
 * Funzione che crea automaticamente un div. Questo elemento
 * HTML ha di default la classe bootstrap 'col'.
 * Possiamo anche specificare il numero di colonne per riga
 * che desideriamo, in atomatico sarà assegnata la classe
 * bootstrap corretta
 * @param {number} numOfCol numero di colonne per riga
 * @returns 
 */
function colGenerator(numOfCol) {
    let newCol = document.createElement('div');

    if (numOfCol === undefined) {
        newCol.classList.add(`col`);
    } else {
        newCol.classList.add(`col-${12 / numOfCol}`);
    };

    return newCol;
};

/**
 * Funzione che crea automaticamente un div. Questo elemento
 * HTML ha di default la classe bootstrap 'card'.
 * Possiamo anche specificare 1 o 2 classi aggiuntive di 
 * qualsiasi genere
 * @param {string} class1 classe aggiuntiva
 * @param {string} class2 classe aggiuntiva
 * @returns 
 */
function cardGenerator(class1, class2) {
    let newCard = document.createElement('div');
    newCard.classList.add('card');

    if (class2 !== undefined) {
        newCard.classList.add(class2);
    };

    if (class1 !== undefined) {
        newCard.classList.add(class1);
    };

    return newCard;
};

/**
 * Funzione che crea automaticamente un elemento HTML img al quale
 * dovremo assegnare un percorso 'src' per caricare l'immagine.
 * Possiamo anche specificare 1 o 2 classi aggiuntive di 
 * qualsiasi genere
 * @param {string} src percorso dell' immagine
 * @param {string} class1 classe aggiuntiva
 * @param {string} class2 classe aggiuntiva
 * @returns 
 */
function imgGenerator(src, class1, class2) {
    let newImg = document.createElement('img');
    newImg.src = src;

    if (class2 !== undefined) {
        newImg.classList.add(class2);
    };

    if (class1 !== undefined) {
        newImg.classList.add(class1);
    };

    return newImg;
};

/**
 * Funzione che crea automaticamente un elemento HTML specificandolo
 * tramite l'argomento 'type'.
 * Possiamo anche specificare da 1 a 3 classi aggiuntive di 
 * qualsiasi genere
 * @param {string} type tipo di tag da creare
 * @param {string} class1 classe aggiuntiva
 * @param {string} class2 classe aggiuntiva
 * @param {string} class3 classe aggiuntiva
 * @returns 
 */
function elGenerator(type, class1, class2, class3) {
    let newElement = document.createElement(type);

    if (class3 !== undefined) {
        newElement.classList.add(class3);
    };

    if (class2 !== undefined) {
        newElement.classList.add(class2);
    };

    if (class1 !== undefined) {
        newElement.classList.add(class1);
    };

    return newElement;
};

// ********************************************************************
//                              VARIABILI                            //
// ********************************************************************

const teamList = [
    {
        nome: 'wayne',
        cognome: 'barnett',
        ruolo: 'founder & ceo',
        img: ''
    },
    {
        nome: 'angela',
        cognome: 'caroll',
        ruolo: 'chief editor',
        img: ''
    },
    {
        nome: 'walter',
        cognome: 'gordon',
        ruolo: 'office manager',
        img: ''
    },
    {
        nome: 'angela',
        cognome: 'lopez',
        ruolo: 'social media manager',
        img: ''
    },
    {
        nome: 'scott',
        cognome: 'estrada',
        ruolo: 'developer',
        img: ''
    },
    {
        nome: 'barbara',
        cognome: 'ramos',
        ruolo: 'graphic designer',
        img: ''
    },
];

// ********************************************************************
//                              EVENTI                               //
// ********************************************************************

for (let x = 0; x < teamList.length; x++) {

    let teamMember = teamList[x];
    teamMember.img = `img/${teamMember.nome}-${teamMember.cognome}-${deleteSimbolsSentece(teamMember.ruolo, '-')}.jpg`;

    let colEl = colGenerator(3);
    let cardEl = cardGenerator('bg-light', 'p-3');
    let imgEl = imgGenerator(teamMember.img);
    let txtEl = elGenerator('div', 'p-3', 'text-center', 'text-capitalize');
    let nameEl = elGenerator('h2');
    nameEl.innerHTML = `${teamMember.nome} ${teamMember.cognome}`;
    let roleEl = elGenerator('h3');
    roleEl.innerHTML = teamMember.ruolo;

    txtEl.append(nameEl);
    txtEl.append(roleEl);

    cardEl.append(imgEl);
    cardEl.append(txtEl);

    colEl.append(cardEl);

    el('#cards-container').append(colEl);

    cardEl.addEventListener('click', function(){
        alert(`${teamMember.nome} ${teamMember.cognome}, il nostro fantastico ${teamMember.ruolo}`);
    });
};

for (let t = 1; t<= 6; t++){
    setTimeout(function(){
        el(`.col-4:nth-child(${t}) .card`).classList.add('active');
    }, (t * 1000));
}
