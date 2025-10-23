const slidesContainer = document.querySelector('#slides');
const slidesImage = document.querySelector('#slides-img');
const backButton = document.querySelector('#back-button');
const nextButton = document.querySelector('#next-button');

let path = '../img/projects/shades/ppt/';
let count = 1;
let total = 15;
window.onload = () =>{
    console.log('hello');
    if(nextButton == null)
        console.log("empty image");
}
function nextImage(){
    console.log(path+count+'.png');
    if(count < total)
        count++;
    slidesImage.setAttribute('src', path+count+'.png');
}

function previousImage(){
    if(count > 1)
        count--;
    slidesImage.setAttribute('src', path+count+'.png');
}

backButton.onclick = previousImage;
nextButton.onclick = nextImage;