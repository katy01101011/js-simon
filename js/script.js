// GLOBAL STATE OF GAME
const difficult = 5;
const arrayRandomNumbers = [];
console.log(arrayRandomNumbers);
let timeLeft = 10;
const userNumbers = [];
const gotNumbers = [];
console.log(gotNumbers);
console.log(userNumbers.length);
let gotNumber;

// Creo un array con i numeri da visualizzare
let i = 0;
while (i < difficult) {
    let randomNumber = randomIntNumber();
    if (!arrayRandomNumbers.includes(randomNumber)) {
        arrayRandomNumbers.push(randomNumber);
        i++;
    }
}

// Stampo i numeri in HTML
let showNumbers = document.querySelector('h1');
for (i = 0; i < difficult; i++) {
    let htmlNumber = arrayRandomNumbers[i];
    showNumbers.innerHTML += `<span> ${htmlNumber} </span>`
    showNumbers.classList.add('show');
}

// Creo un timer che parte da 10 secondi e arriva a 0
let timerContainer = document.getElementById('timer');
timerContainer.innerHTML = timeLeft;
console.log(userNumbers);

// Chiedo all'utente i 5 numeri che si ricorda
const timerCount = setInterval(function() {
        timeLeft--;
        timerContainer.innerHTML = timeLeft;
        if (timeLeft <= 0) {
            document.getElementById('start-game').classList.add('hidden')
        }
        
        // Confronto i numeri che ha fornito l'utente con i numeri generati dal computer
        let sum = 0
        if (timeLeft < 0) {
            clearInterval(timerCount)
            for (i = 0; i < difficult; i++) {

                
                const userNumber = parseInt(prompt('Quale numero c\'era nell\'elenco?'));
                userNumbers.push(userNumber);
                if (arrayRandomNumbers.includes(userNumber)) {
                    gotNumbers.push(userNumber)
                    // Inserisco il risultato in HTML
                    document.getElementById('got-numbers').innerHTML += `<span>${userNumber}  </span>`;
                    sum += 1;
                    document.getElementById('game-result').innerHTML = sum;
                }
            }
        }

        // Stampo il risultato
        if (userNumbers.length === 5) {    
            document.getElementById('end-game').classList.replace('hidden', 'show')
        }
    }, 1000
)

// FUNCTIONS

/**
 * Description // Generate a random number
 * @returns {Number}
 */
function randomIntNumber() {
    const number = Math.floor(Math.random() * 100) + 1;
    return number;
}