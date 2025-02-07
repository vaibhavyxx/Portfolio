const header = document.querySelector('header');
const intro = document.querySelector('#intro');
const nav = document.querySelector('#nav');
let navVisible = false;
const headerHeight = header.getBoundingClientRect().height;

//displays navigation bar and positions it to be below the header 
//at all times and is fixed 
header.addEventListener('click', ()=> {
    if(!navVisible){
        nav.style.position = "fixed";
        nav.style.top = headerHeight+ 'px';
        nav.style.display = 'block';
        navVisible = true;
    }
    else{
        nav.style.display = 'none';
        navVisible = false;
    }
    
})