const h1 = document.querySelector('h1');
const img1= document.querySelector('.img1');
const img2= document.querySelector('.img2');
let a = Math.floor(Math.random()*6) + 1, b = Math.floor(Math.random()*6) + 1;

changeImg(a, b);

if(a===b) h1.innerText = 'Draw!';
else h1.innerText = a>b ? "🚩 Player 1 Wins!":"Player 2 Wins! 🚩";

function changeImg(a, b){
    img1.setAttribute('src', `images/dice${a}.png`);
    img2.setAttribute('src', `images/dice${b}.png`);
}
