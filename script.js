let menumicone = document.querySelector('.fa-bars');
let menumobile = document.querySelector('.menu-mobile');
let close = document.querySelector('.fa-xmark');







menumicone.addEventListener('click', ()=>{
    document.querySelector(".menu-mobile").classList.add("xx");
    menumobile.style.width = "100%";
    menumobile.style.padding = "10px";
    
});
close.addEventListener('click', ()=>{
    document.querySelector(".menu-mobile").classList.add("xx");
    menumobile.style.width = "0%";
    menumobile.style.padding = "0px";
    
});





