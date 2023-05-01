const section1 = document.querySelector('.section1');
const imgSection1 = document.querySelector('#fortune-cookie');
const section2 = document.querySelector('.section2');
const imgSection2 = document.querySelector('#open-fortune-cookie');
let paragraphPhrase = document.querySelector('p');

let phrases = ['Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.', 'Procure acender uma vela em vez de amaldiçoar a escuridão.']

//Eventos
imgSection1.addEventListener('click', openFortuneCookie);
document.addEventListener('keydown', openFortuneCookie)

//Funções
function openFortuneCookie(e) {
    if(e.key === 'Enter' && section2.classList.contains('hide')) {
        toggleCheck();
        generateRandomPhrase();
    }
    if(e.type === 'click' && section2.classList.contains('hide')) {
        generateRandomPhrase();
        toggleCheck();
    }
}

function toggleCheck() {
    section1.classList.toggle('hide')
    section2.classList.toggle('hide')
}

function generateRandomPhrase() {
    let randomNumber = Math.round(Math.random());
    paragraphPhrase.innerText = phrases[randomNumber];
}