const header = document.querySelector('header');
const nav = document.querySelector('#nav');
let navVisible = false;

header.addEventListener('click', ()=> {
    if(!navVisible){
        nav.style.display = 'block';
        navVisible = true;
    }
    else{
        nav.style.display = 'none';
        navVisible = false;
    }
    
})