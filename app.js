const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];

const section = document.querySelector('#section');
const h2 = document.querySelector('h2');
const selectedColor = document.querySelector('#selectedColor');


for(let color of colors){
    const box = document.createElement('div');
    box.classList.add('box');

    section.appendChild(box);
    box.style.backgroundColor = color ;

    box.addEventListener('click', function(){
        h2.innerText = 'Your selected color: '
        selectedColor.innerText = box.style.backgroundColor;
        selectedColor.style.backgroundColor = box.style.backgroundColor;
    })
}