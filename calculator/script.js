const display=document.getElementById('display');

function clearDisplay(){
display.value='';
}

function appendToDisplay(data){
display.value+=data;
}

function calculate(){
display.value=eval(display.value);
}

function backspace(){
    display.value=display.value.slice(0, - 1);
}