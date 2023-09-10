let submit=document.querySelector('.submit');
let inputValue=document.querySelector('.input');
let ul=document.querySelector('#list-main');
let filter=document.querySelector('#searchBox');

submit.addEventListener('click',additems);
ul.addEventListener('click',deleteItems);
filter.addEventListener('keyup',filterItems);

function additems(e){
    e.preventDefault();
    let mainvalue=inputValue.value;
    let deleteValue='Delete';

    let li=document.createElement('li');
    let button=document.createElement('button');
    button.className="deletButton";
    li.className="list-items";

    // add text node with input value

    li.appendChild(document.createTextNode(mainvalue));
    button.appendChild(document.createTextNode(deleteValue));
    
    ul.appendChild(li)
    li.appendChild(button)
}

function deleteItems(e)
{
    if(e.target.classList.contains('deletButton'))
    {
        let li=e.target.parentElement;
        ul.removeChild(li)
    }
}

function filterItems(e){
    let text=e.target.value.toLowerCase();    //item
    let items=ul.getElementsByTagName('li');  //all li will come here as an array
    let mainItems=Array.from(items)           //convert to an array 4 li will be there 
    mainItems.forEach(function(item){ 
    let itemName=item.firstChild.textContent;    //item1,item2,item3,item4
    if(itemName.toLowerCase().indexOf(text) != -1){     //text=it    items1.it != -1
        item.style.display='flex';
    }
    else{
        item.style.display='none';
    }
   })
}