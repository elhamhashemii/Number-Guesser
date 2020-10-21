let min = 1,
    max = 10,
    winnigNum =  getRandomNum(min , max),
    guessesLeft = 3;

// GAME elements
const game = document.querySelector('.game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// assign minNum and maxNum to UI
minNum.textContent = min;
maxNum.textContent = max;

// play again event listeners
game.addEventListener('mousedown',function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
})

// listen for guess
guessBtn.addEventListener('click',function(){
    let guess = parseInt(guessInput.value);
    // validate
    if(isNaN(guess) || guess < min || guess > max ){
        setMessage(`Please Enter a number between ${min} and ${max} !`,'red');
        // change border color
        guessInput.style.borderColor = 'red';
    }else{

    }

    // Check if won
    // GAME OVER - WIN
    if(guess === winnigNum){
        gameOver(true,`${winnigNum} is Correct. You win`);
    }else{
        // wrong number
        guessesLeft -= 1;

        // GAME OVER - LOST
        if(guessesLeft === 0){
            gameOver(false, `Game Over. You lost. The correct answer was ${winnigNum}`);
        }else{
            // game continues
            // change border color
            guessInput.style.borderColor = 'red';
            // clear input
            guessInput.value = '';
            // tell player number was wrong
            setMessage(`${guess} was wrong! ${guessesLeft} guesses left ... ` , 'red');
            }

    }


});

// game over
function gameOver(won , msg){
    let color;
    won === true ? color = 'green' : color = 'red';
    // disable input
    guessInput.disabled = true;
    // change border color
    guessInput.style.borderColor = color;
    // change text color
    message.style.color = color;
    setMessage(msg);

    // play again
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';

}

// get random number
function getRandomNum(min , max){
    return Math.floor(Math.random()*(max-min+1)+min);

}


// set message
function setMessage(msg, color){
    message.textContent = msg;
    message.style.color = color;
}


      
      