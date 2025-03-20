
const button = document.querySelector('.btn-random');

button.addEventListener('click',changeColor);

function changeColor(){
    const background = document.querySelector('.background');
    const arrayColor = ['red','yellow','pink','gray','black','orange','blue','white'];
    let random = arrayColor[randomColor(arrayColor)];
    background.style.backgroundColor = random;
}
function randomColor(array){
    return Math.floor(Math.random()*array.length);
}


