const quizDB=[
    {
        question: "Q1: What is the full form of HTML",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "HyperText Makeup Language",
        d: "HyperText Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2: What is the full form of CSS",
        a: "cascadeing style street",
        b: "chai coffee smoking",
        c: "cascading styel sheets",
        d: "HyperText Markup Language",
        ans: "ans3"
    },
    {
        question: "Q3: What is the full form of HTTP",
        a: "HyperText Transfer Protocol",
        b: "Hey Text there post",
        c: "Hyper test type packet",
        d: "Hue transparent ticket passenger",
        ans: "ans1"
    },
    {
        question: "Q4: What is the full form of JS",
        a: "just shut",
        b: "jogging street",
        c: "joking smart",
        d: "java script",
        ans: "ans4"
    }
];


const question=document.querySelector('.question');
const answers=document.querySelectorAll('.answer');

const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');

const submit=document.querySelector('#submit');

const showScore=document.querySelector('#showScore');

let questionCount=0;
let score=0;

const loadQuestion=async()=>{

  question.innerText=quizDB[questionCount].question;

  option1.innerText=quizDB[questionCount].a;
  option2.innerText=quizDB[questionCount].b;
  option3.innerText=quizDB[questionCount].c;
  option4.innerText=quizDB[questionCount].d;

}

loadQuestion();

const getCheckAnswer=()=>{
    let answer;
    answers.forEach((curAnsElem)=>{
        if(curAnsElem.checked){
            answer=curAnsElem.id;
        }
    })
    return answer;
}

submit.addEventListener('click', ()=>{
    const checkedAnswer=getCheckAnswer();
    console.log(checkedAnswer);
    
    if(checkedAnswer===quizDB[questionCount].ans){
        score++;
    }
    questionCount++;

    if(questionCount<quizDB.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML=`<h3> You Scored ${score}/${quizDB.length} </h3>
        <button class="btn" onclick="location.reload()">Play Again</button>`
        showScore.classList.remove('scoreArea');
    }
})













// const getCheckAnswer=()=>{
//     let answer;
//     answers.forEach((curAnsElem)=>{
//         if(curAnsElem.checked){
//             answer=curAnsElem.id;
//         }
//     })
//     return answer;
// }

// submit.addEventListener('click', ()=>{
//     const checkedAnswer=getCheckAnswer();
//     console.log(checkedAnswer);

//     if(checkedAnswer===quizDB[questionCount].ans){
//         score++;
//     }
//     questionCount++;

//     if(questionCount<quizDB.length){
//         loadQuestion();
//     }
//     else{
//         showScore.innerHTML=`
//         <h3> You scored ${score}/${quizDB.length}
//         <button class="btn" onclick="location.reload()">Play Again</button>`;
//         showScore.classList.remove('scoreArea');

//     }
// })
