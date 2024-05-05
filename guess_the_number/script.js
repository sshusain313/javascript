let randomNumber=parseInt(Math.random()*100+1)

const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const loworhigh=document.querySelector('.LowOrHigh')
const startOver=document.querySelector('.resultParas')

const p=document.createElement('p')

let prevGuess=[]
let numGuesses=1

let playGame=true

if(playGame){
    submit.addEventListener('click', function(e){
       e.preventDefault()
       const guess=parseInt(userInput.value)
       console.log(guess)
       validateGuess(guess)
    });
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('please enter a valid number')
  }
  else if(guess<1){
    alert('please enter a number more than 1')
  }
  else if(guess>200){
    alert('please enter a number less than 100')
  }
  else{
    prevGuess.push(guess)
    if(numGuesses===11){
     displayGuess(guess)
     displayMessage(`game over. Random number was ${randomNumber}`)
     endGame()
    }
    else{
        displayGuess(guess)
        checkGuess(guess)  
    }
  }
}

function checkGuess(guess){
  if(guess===randomNumber){
    displayMessage(`you guessed it right`)
    document.body.style.background="green"
    endGame()
  }
  else if(guess<randomNumber){
    displayMessage(`number is too low`)
  }
  else if(guess>randomNumber){
    displayMessage(`number is too high`)
  }
}

function displayGuess(guess){
   userInput.value=''
   guessSlot.innerHTML+=`${guess} `
   numGuesses++;
   remaining.innerHTML=`${11-numGuesses}`
}

function displayMessage(guess){
   loworhigh.innerHTML=`<h2>${guess}</h2>`
}

function endGame(guess){
   userInput.value=''
   userInput.setAttribute('disabled', '')
   p.classList.add('button')
   p.innerHTML=`<h2 id="newGame">Start New Game</h2>`
   startOver.appendChild(p)
   playGame=false
   newGame()
}

function newGame(guess){
  const newGameButton=document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(e){
   randomNumber=parseInt(Math.random()*100+1) 
   prevGuess=[];
   numGuesses=1;
   guessSlot.innerHTML=''
   remaining.innerHTML=`${11-newGuess}`
   userInput.removeAttribute('disabled')
   startOver.removeChild(p)   
   playGame=true;
  })
}
