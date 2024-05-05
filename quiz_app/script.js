const questions=[
    {
        "question": "Which of the following is a markup language?",
        "a": "HTML",
        "b": "CSS",
        "c": "JavaScript",
        "d": "PHP",
        "correct": "a"
    },
    {
        "question": "What year was JavaScript launched?",
        "a": "all of them",
        "b": "2004",
        "c": "1993",
        "d": "1987",
        "correct": "c"
    },
    {
        "question": "What does CSS stands for?",
        "a": "HyperText Markup Language",
        "b": "Cascading Style Sheet",
        "c": "Jason Object Notation",
        "d": "PHP",
        "correct": "b"
    }
]

let i=0;
let total=questions.length;
let correct=0, right=0, wrong=0;
const quesBox=document.getElementById('quesBox')
const optionInputs=document.querySelectorAll('.option')

const loadQuestion=()=>{
    if(i===total){
       return end();
    }
    reset()
    const data=questions[i]
    quesBox.innerHTML=`${i+1}. ${data.question}`;
    optionInputs[0].nextElementSibling.innerHTML=data.a
    optionInputs[1].nextElementSibling.innerHTML=data.b
    optionInputs[2].nextElementSibling.innerHTML=data.c
    optionInputs[3].nextElementSibling.innerHTML=data.d
}


const submitQuiz=()=>{
    
    const ans=getAnswer()
    if(ans===data.correct){
      right++;
    }
    else{
      wrong++;
    }
    i++;
    loadQuestion()
    return
}

const getAnswer=()=>{
    let answer;
    optionInputs.forEach(
        (input)=>{
            if(input.checked){
               answer=input.value;
            }
        }
    )
    return answer;
}

const reset=()=>{
    optionInputs.forEach(
        (input)=>{
            input.checked=false;
        }
    )
}

const end=()=>{
     document.querySelector('.box').innerHTML=`
     <div style="text-align: center">
     <h3>Thank You for playing</h3>
     <h3>${right}/${total} are correct </h3>
     </div>`
    document.body.style.background='green';
}

loadQuestion();