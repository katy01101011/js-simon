// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta,
// i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri,
// il software dice quanti e quali dei numeri da indovinare
// sono stati individuati.

// GLOBAL STATE OF GAME
const arrayRandomNumbers = [];
const difficult = 5;
let showNumbers = document.querySelector('h1');



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
for (i = 0; i < difficult; i++) {
    let htmlNumber = arrayRandomNumbers[i];
    showNumbers.innerHTML += `<span> ${htmlNumber} </span>`
    showNumbers.classList.add('show');
}

// Creo un timer che parte da 10 secondi e arriva a 0
let timerContainer = document.getElementById('timer');
let timeLeft = 3;
timerContainer.innerHTML = timeLeft;
const userNumbers = [];

const timerCount = setInterval(function() {
        timeLeft--;
        timerContainer.innerHTML = timeLeft;
        if (timeLeft === 0) {
            document.querySelector('div').classList.add('hidden')
        }
        if (timeLeft < 0) {
            clearInterval(timerCount)
            for (let i = 0; i < difficult; i++) {
                const userNumber = parseInt(prompt('Quale numero c\'era nell\'elenco?'));

                if (!userNumbers.includes(userNumber)) {
                    userNumbers.push(userNumber);
                    console.log(userNumbers);
                } else {
                    alert('Hai già inserito questo numero!')
                }

            }
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




// // Lascio i numeri sullo schermo per 3 secondi, poi scompaiono
// setTimeout(()=> {
//     showNumbers.classList.add('hidden');

//     setTimeout(() => {
//         getUserNumbers();
//     }, 100);
// }, 3000)