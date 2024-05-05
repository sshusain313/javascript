
const ref=document.querySelector('.refresh')
const dice1=document.querySelector('.img1')
const dice2=document.querySelector('.img2')

let randomNumber1=parseInt(Math.random()*6)+1 
let randomNumber2=parseInt(Math.random()*6)+1

ref.addEventListener('click',function(){
   dice1.src=`images/dice${randomNumber1}.png`
   dice2.src=`images/dice${randomNumber2}.png`
    validate()
})

function validate(){
if(randomNumber1>randomNumber2){
    document.querySelector('h1').innerHTML='Player 1 Wins'
}
else{
    document.querySelector('h1').innerHTML='player 2 wins'
}
}