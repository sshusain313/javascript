function changeColor(color){
    document.body.style.background=color;
}

const buttons=document.querySelectorAll('.button');
// const body=document.querySelector('body');

buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click', function(e){
        if(e.target.id==='green'){
            document.body.style.background='green';
            document.getElementById('green').style.border='green';
        }
        if(e.target.id==='red'){
            document.body.style.background='red';
            document.getElementById('red').style.border='green';
        }
        if(e.target.id==='blue'){
            document.body.style.background='blue';
            document.getElementById('blue').style.border='green';
        }
        if(e.target.id==='yellow'){
            document.body.style.background='yellow';
            document.getElementById('yellow').style.border='green';
        }
    })
})