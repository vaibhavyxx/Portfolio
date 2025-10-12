/*const header = document.querySelector('header');
const intro = document.querySelector('#intro');
const nav = document.querySelector('#nav');
const article = document.querySelector('#story');
let navVisible = false;
const headerHeight = header.getBoundingClientRect().height;
*/

const menuButton = document.querySelector('#menu-button');
const menuItems = document.querySelector('#menu-items');
let menuButtonClicked = false;

window.onload = function(){
    menuItems.style.display = 'none';
}

menuButton.onclick = function (){
    if(!menuButtonClicked){
        menuItems.style.display = 'block';
        menuButtonClicked = true;
    }else{
        menuItems.style.display = 'none';
        menuButtonClicked = false;
    }
    console.log('hello world');
}




//displays navigation bar and positions it to be below the header 
//at all times and is fixed 
/*window.onload= (event) =>{
    console.log(headerHeight);
    article.style.position= 'relative';
    article.style.top = headerHeight +'px';
}

//no scroll does not work?
header.addEventListener('click', ()=> {
    if(!navVisible){
        nav.style.position = "fixed";
        nav.style.top = headerHeight+ 'px';
        nav.style.display = 'block';
        navVisible = true;
        document.body.classList.add('no-scroll');
    }
    else{
        nav.style.display = 'none';
        navVisible = false;
        document.body.classList.remove('no-scroll');
    }
    
})*/