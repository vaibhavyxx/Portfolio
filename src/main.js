const header = document.querySelector('header');
const intro = document.querySelector('#intro');
const nav = document.querySelector('#nav');
const article = document.querySelector('#story');
let navVisible = false;
const headerHeight = header.getBoundingClientRect().height;

//displays navigation bar and positions it to be below the header 
//at all times and is fixed 
window.onload= (event) =>{
    console.log(headerHeight);
    article.style.position= 'relative';
    article.style.top = headerHeight +'px';
}

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