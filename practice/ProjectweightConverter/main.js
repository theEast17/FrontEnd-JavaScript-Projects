const input=document.querySelector('#input');
const kg=document.querySelector('#kilograms')
const grams=document.querySelector('#grams')
const ounce=document.querySelector('#ounce')

document.querySelector('main').style.visibility='hidden'
input.addEventListener('input',weightConverter);

function weightConverter(e){
    e.preventDefault();
    let value=input.value;
    kg.innerHTML=value/2.2046
    grams.innerHTML=value/0.0022046
    ounce.innerHTML=value*16
    document.querySelector('main').style.visibility='visible'
}