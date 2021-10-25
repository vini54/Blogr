let menu = document.querySelector('#menu')
let nav = document.querySelector('.nav')
let dropIcon = document.querySelectorAll('.drop-icon')

menu.addEventListener('click', () =>{
   menu.classList.toggle('active')
   nav.classList.toggle('active')
   for (let i = 0; i < dropIcon.length; i++){
      if(menu.classList.contains('active') === true){
         dropIcon[i].src = "./images/icon-arrow-dark.svg"
      }else{
         dropIcon[i].scr = "./images/icon-arrow-light.svg"
      }
   }
})