'use strict';
const modal =document.querySelector('.modal');
const showModal=document.querySelectorAll('.show-modal');
const closeModal=document.querySelector('.close-modal');
const overlay=document.querySelector('.overlay');
// const show = function(){
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');}

for(let i=0 ;i<=showModal.length ;i++)
    showModal[i].addEventListener('click',function(){
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
});
closeModal.addEventListener('click',function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});
overlay.addEventListener('click',function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});
