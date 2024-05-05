let randomNumber=parseInt(Math.random()*100+1)

const message=document.querySelector('.message')
const btn=document.querySelector('.btn_check')
const guess=document.querySelector('.guess')
const number=document.querySelector('.number')
const again=document.querySelector('.btn_again')

let score=20;
let highscore=0;

message.innerHTML=randomNumber
btn.addEventListener('click', function(e){
  e.preventDefault()
  const guessing=parseInt(guess.value)
//   message.innerHTML=guessing;
  validateGuess(guessing)
})

function validateGuess(guessing){
    if(guessing>randomNumber){
        message.innerHTML="TOO HIGH"
        score--
        document.querySelector('.score').innerHTML=score
    }
    else if(guessing<randomNumber){
        message.innerHTML="TOO LOW"
        score--
        document.querySelector('.score').innerHTML=score
    }
    else{
        message.innerHTML="CORRECT"
        number.innerHTML=randomNumber
        document.body.style.background='green'

        if(score>highscore){
            highscore=score
            document.querySelector('.highscore').innerHTML=highscore
            
        }
    }    
}

again.addEventListener('click', function(e){
    score=20;
    randomNumber=parseInt(Math.random()*100+1)

    message.innerHTML="START GUESSING"
    document.querySelector('.score').innerHTML=score;
    document.querySelector('.highscore').innerHTML=highscore;
    document.querySelector('.guess').value='';
    number.innerHTML='?';
    document.body.style.background="#222";


})



