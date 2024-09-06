let burger = document.querySelector('.burger')
let menu = document.querySelector('nav')

burger.addEventListener('click',()=>{
    burger.classList.toggle('out')
    menu.classList.toggle('active')
})


