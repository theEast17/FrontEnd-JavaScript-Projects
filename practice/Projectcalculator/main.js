let buttonAll=document.querySelectorAll('button')
let input=document.getElementById('InputHere')
let toggle=document.querySelector('.toggleBtn')
let body=document.querySelector('body')

for(let i=0;i<buttonAll.length;i++){
   buttonAll[i].addEventListener('click',function(e){
        if(e.target.innerHTML==='='){
            input.innerHTML=eval(input.innerHTML);
        }else{
            if(e.target.innerHTML==="Clear"){
                input.innerHTML=""
            }
            else{
                input.innerHTML=input.innerHTML+e.target.innerHTML;
            }
        }
   })
}

toggle.onclick=function(){
    body.classList.toggle('dark')
}

