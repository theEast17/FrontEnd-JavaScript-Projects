let menu=document.querySelector('#menu');
let bg=document.querySelector('#bg')

menu.addEventListener('click',()=>{
    bg.style.transform='scale(.8)'
    bg.style.borderRadius="10px"
    bg.style.boxShadow="0 150px 45px -100px rgba(0,0,0,0.2)"
})


let tl=gsap.timeline();
tl.from('.navigation',{
    stagger: .3,
    duration: 2,
    y: 20,
    delay:6,
    ease: 'Expo.easeInOut',
    opacity: 0
})
.from('#smline',{
    width:0,
    duration: 1,
    ease:'Expo.easeInOut',
},'-=2')
.from('.leftitem',{
    stagger: .3,
    duration: 2,
    y: 20,
    ease: 'Expo.easeInOut',
    opacity: 0
},'-=2')
.from('#right img',{
    duration: 2,
    scale:1.05,
    ease: 'Expo.easeInOut',
    opacity: 0
},'-=2')
