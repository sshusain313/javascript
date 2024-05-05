const form=document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

   const height=parseInt(document.querySelector('#height').value)
   const weight=parseInt(document.querySelector('#weight').value)
   const results=document.querySelector('#results');
   
   if(height===''||height<0 ||NaN(height)){
    results.innerHTML="please give a valid height"
   }
   if(weight===''||weight<0 ||NaN(weight)){
    results.innerHTML="please give a valid weight"
   }
   else{
    const bmi=(weight/(height*height)/10000).toFixed(2)
    //show the result
    results.innerHTML=`<span>${bmi}</span>`;
   }
})