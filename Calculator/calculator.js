let word= JSON.parse(localStorage.getItem('word')) || '';
let inputElement=document.querySelector('.js-input');
inputElement.value=word;

function addLetter(letter){
    word+=letter;
    console.log(word);
    inputElement.value=word;
    localStorage.setItem('word',JSON.stringify(word));
}

function calculate(){
    let calculation=eval(word);
    word=calculation;
    console.log(word);
    inputElement.value=calculation;
    localStorage.setItem('word',JSON.stringify(word));
}

function clearLetter(){
    word=word.slice(0,-1);
    localStorage.setItem('word',JSON.stringify(word));
    inputElement.value=word;
}

function clearAll(){
    word='';
    localStorage.setItem('word',JSON.stringify(word));
    inputElement.value='';
}

let buttonElement=document.querySelectorAll('.js-btn');
buttonElement.forEach((ele)=>{
    ele.addEventListener('click',(event)=>{
        if(event.target.textContent==='=') calculate();
        else if(event.target.textContent==='clear') clearAll();
        else if(event.target.textContent==='backspace') clearLetter();
        else addLetter(event.target.textContent);
    })
})


document.addEventListener('keydown',(event)=>{
    let allowedKeys='1234567890+-=*/EnterBackspace';
    if(allowedKeys.includes(event.key)){
        if(event.key==='Enter' || event.key==='=')
            calculate();
        else if(event.key==='Backspace')
            clearLetter();
        else addLetter(event.key);
    }
});