let menu =document.querySelector('#meu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

}

window.onscroll  = () =>{
    menu.classList.remove('fas-times');
    navbar.classList.remove('active');
}