let gameSeq=[];
let userSeq=[];

let btns=["red","yellow","green","purple"];

let started = false;
let level = 0;

let h3=document.querySelector("h3")

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game is Started");
        started = true;
        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("gameFlash");
    setTimeout(function(){
        btn.classList.remove("gameFlash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 250);
}

function levelUp(){
    userSeq = [];
    level++;
    h3.innerText=`Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);

    gameSeq.push(randColor);
    console.log(gameSeq);

    gameFlash(randBtn);
}

function checkAns(idx){
    // let idx = level - 1;

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }
    else{
        h3.innerHTML=`Game Over :Your Score was <b>${level}</b> <br>Press any Key To Restart`;
        let bgColor = document.querySelector("body");
        bgColor.style.backgroundColor = "red";
        setTimeout(function(){
           bgColor.style.backgroundColor = "white"
        }, 150);
        gameReset();
    }
}

function btnPress(){
    // console.log(this);
    let btn = this;
    userFlash(this);

    let userColor = this.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn")
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}

function gameReset() {
    started = 0;
    gameSeq = [];
    userSeq = [];
    level = 0;
}