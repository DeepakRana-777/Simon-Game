//  Simon Game  // 

let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let h2 = document.querySelector('h2');

let btns = ['red','yellow','green','purple'];

document.addEventListener("keypress", function () {
    if(started == false){
        console.log('game started');
        started = true;

        levelUp();
    }
});


function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function gameFlash(btn) {
    btn.classList.add('flash');
    setTimeout(function() {
     btn.classList.remove('flash');
    },250);
 }
 

let allBtns = document.querySelectorAll('.btn');
for(btn of allBtns) {
    btn.addEventListener('click',btnPress);
}

function btnPress() {
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute('id');
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

function userFlash(btn) {
    btn.classList.add('userflash');
    setTimeout(function() {
     btn.classList.remove('userflash');
    },250);
 }

function checkAns(idx) {

    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
           setTimeout(levelUp,1000);
        }
        console.log('same value');
    } else {
        h2.innerHTML = `Game Over!Your score was <b>${level}</b>  <br> Press any key to start.`;
        document.querySelector('body').style.backgroundColor = 'red';
        setTimeout(function () {
            document.querySelector('body').style.backgroundColor = 'white';
        },150);
        reset();
    }
}

function reset() {
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}

// function displayColor() { 
//     setTimeout(() => {
//         window.classList.add('body');
//     },500);
// }
