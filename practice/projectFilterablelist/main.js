let input=document.querySelector('#filterInput');
let p=document.querySelectorAll(".collection-item");

input.addEventListener('keyup',filter)


function filter(e){
    e.preventDefault();
    let value=input.value.toUpperCase();    //ABC
   
    for(let i=0;i<p.length;i++){           //10 P IS HERE
        let value2=p[i].getElementsByTagName('span')[0];
        //  let value2=p[i];   // both are suiltable
        if(value2.innerHTML.toUpperCase().indexOf(value)>-1){     //-1 means not found 
            p[i].style.display=''
        }else{
            p[i].style.display='none'
        }
    }

 

}