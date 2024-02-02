//Escreve um numero aleatório a abaixo do numero digitado para ser descoberto.

//Prompt para numero máximo de referencia para o numero aleatório.
const maxNum = prompt(`Welcome! Enter your max number:`);
//Fórmula estabelecendo o limite maximo de numero aleatório.
const rngNum = Math.floor(Math.random() * (maxNum - 1) + 1);
//Prompt para palpite de numero.
let guess = prompt("Enter your first guess:");
let guessNum = parseInt(guess);
//Declaração Condicional para loop de descoberta do numero e fim de jogo
let gameOver = 0;
let guessCount = 0;
while (gameOver === 0) {
    if (guessNum > rngNum) {
        guessNum = prompt("Too high. Guess again:");
        guessCount++;
    } else if (guessNum < rngNum) {
        guessNum = prompt("Too low. Guess again");
        guessCount++;
    } else {
        gameOver = 1;
    }
}
gameOver = alert(`It took you ${guessCount} guesses`);