const colors =["orange","red","blue","green","brown"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

const main = document.querySelector(".hero");

btn.addEventListener('click',function(){
    const getrandom = getRandomNumber();
    main.style.backgroundColor = colors[getrandom];
    color.textContent = colors[getrandom];
});

btn.addEventListener('mouseover',function(){
    btn.style.backgroundColor = 'white';
    btn.style.color = 'black';
});

btn.addEventListener('mouseout',function(){
    btn.style.backgroundColor = '';
    btn.style.color = 'white';
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length)
}