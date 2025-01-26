
const grid = document.querySelector('.grid')


const characters = [
    'aang',
    'appa',
    'katara',
    'korra',
    'korraAr',
    'kyoshi',
    'nacaoAr',
    'sokka-1',
    'toph',
    'zuko',
]



const createElement = (tag, className) => {

    // const back = document.createElement('div');
    // const front = document.createElement('div');

    // card.className = 'carta';
    // back.className = 'face atras';
    // front.className = 'face frente';


    const element = document.createElement(tag);
    element.className = className;
    return element
}

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {

    const cartasReveladas = document.querySelectorAll('.cartaRevelada');

    if(cartasReveladas.length === 20){
        alert('Parabéns você ganhou o jogo!')
    }

}




const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if (firstCharacter === secondCharacter) {

        firstCard.firstChild.classList.add('cartaRevelada');
        secondCard.firstChild.classList.add('cartaRevelada');

        firstCard = '';
        secondCard = '';

        checkEndGame();


    } else {
        setTimeout(() => {
            firstCard.classList.remove('revelarCarta');
            secondCard.classList.remove('revelarCarta');

            firstCard = '';
            secondCard = '';
        }, 1100);

    }

}


const revelarCarta = ({ target }) => {

    if (target.parentNode.className.includes('revelarCarta')) {
        return;
    }

    if (firstCard == '') {
        target.parentNode.classList.add('revelarCarta');
        firstCard = target.parentNode;
    } else if (secondCard == '') {
        target.parentNode.classList.add('revelarCarta');
        secondCard = target.parentNode;

        checkCards();
    }


    // target.parentNode.classList.add('revelarCarta')
}





const createCard = (character) => {
    const card = createElement('div', 'carta');
    const back = createElement('div', 'face atras');
    const front = createElement('div', 'face frente');

    front.style.backgroundImage = `url('../imagens/${character}.jpg')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revelarCarta)
    card.setAttribute('data-character', character)

    return card;

}

const loadGame = () => {

    const duplicateCharacters = [...characters, ...characters]
    const sortDuplicateCharacters = duplicateCharacters.sort(() => Math.random() - 0.5); //positivo ou negativo aleatorio

    Math.random();

    duplicateCharacters.forEach((character) => {

        const card = createCard(character);
        grid.appendChild(card);
        console.log('a')
    });
}

loadGame();
