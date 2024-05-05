
const score0El=document.getElementById('score--0')
const score1El=document.getElementById('score--1')
const die=document.querySelector('.dice')
const curr_0=document.querySelector('#current--0')

score0El.innerHTML=0;
score1El.innerHTML=0;

const rollDice=document.addEventListener('click',function(){
    let randomNumber=parseInt(Math.random()*6)+1
    die.src=`dice-${randomNumber}.png`
    
    if(randomNumber===1){
        curr_0.innerHTML=0
    }
    else{
        curr_0=curr_0+randomNumber
        curr_0.innerHTML=curr_0
    }
})

