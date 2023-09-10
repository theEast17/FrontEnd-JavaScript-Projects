// add hovered class in selected items

let list = document.querySelectorAll(".navigation li");
let toggle=document.querySelector(".toggle")
let nevigation=document.querySelector('.navigation')
let topbar=document.querySelector('.topbar');
let main=document.querySelector("main");

list.forEach((item) => {
  item.addEventListener("mouseover", activeLink);
});
function activeLink() {
 list.forEach((item)=>{
    item.classList.remove('hovered')
    this.classList.add('hovered')
 })
}

// MenuToggle
toggle.onclick=function(){
    nevigation.classList.toggle('active');
    main.classList.toggle('active');
    topbar.classList.toggle('active')
}





