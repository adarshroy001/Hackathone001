let boxes = document.querySelectorAll(".box");
let rematchbtn = document.querySelector('.rematch');
let resetbtn = document.querySelector('.reset');
let msgcontainer = document.querySelector('.stdheading');
let mainmsgcontainer = document.querySelector('.standing');
let firstwinner = document.querySelector('#result1');
let secondwinner = document.querySelector('#result2');
let thirdwinner = document.querySelector('#result3');
let darkbutton = document.querySelector('#dark-mode');
let lightbutton = document.querySelector('#light-mode');
let rulebutton = document.querySelector('.rules');
let wrapper = document.querySelector('.wrapper');
let iconsbg = document.querySelectorAll('.iconbg'); 
let ruletext = document.querySelector('.ruletext');
let close = document.querySelector('.close');
let homepage = document.querySelector('.home-page');
let enterpage = document.querySelector('.Enterpage');
let letsplay = document.querySelector('.letsplay');
let namm = document.querySelector('.name')

setTimeout (()=>{
homepage.style.transform = 'scale(1)';
},1500);
let secondpageloader = ()=>{
enterpage.style.display='none';
wrapper.style.display = 'block';
}
const wincondition = [
    [0, 1, 2],
    [1, 2, 3],
    [2, 3, 4],
    [5, 6, 7],
    [6, 7, 8],
    [7, 8, 9],
    [10, 11, 12],
    [11, 12, 13],
    [12, 13, 14],
    [15, 16, 17],
    [16, 17, 18],
    [17, 18, 19],
    [20, 21, 22],
    [21, 22, 23],
    [22, 23, 24],
    [0, 5, 10],
    [5, 10, 15],
    [10, 15, 20],
    [1, 6, 11],
    [6, 11, 16],
    [11, 16, 21],
    [2, 7, 12],
    [7, 12, 17],
    [12, 17, 22],
    [3, 8, 13],
    [8, 13, 18],
    [13, 18, 23],
    [4, 9, 14],
    [9, 14, 19],
    [14, 19, 24],
    [0, 6, 12],
    [6, 12, 18],
    [12, 18, 24],
    [4, 8, 12],
    [8, 12, 16],
    [12, 16, 20],
    [1,7,13],
    [7,13,19],
    [2,8,14],
    [5,11,17],
    [11,17,23],
    [10,16,22],
    [10,6,2],
    [15,11,7],
    [11,7,3],
    [22,18,14],
    [21,17,13],
    [17,13,9]

];

let player1 = false;
let player2 = false;
let player3 = false;
let player4 = false;
let player5 = false;
let player6 = false;
let turn1 = true;
let turn2 = false;
let turn3 = false;
let count = 0;
let a = false;
let b = false;
let val1 = '';
let val2 = '';
let val3 = '';
let p = false;
let q = false;

const disablebox = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const enablebox = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
    }
};

const checkwinner = () => {
    for (conditn of wincondition) {
        val1 = boxes[conditn[0]].innerHTML;
        val2 = boxes[conditn[1]].innerHTML;
        val3 = boxes[conditn[2]].innerHTML;

        if (val1 != "" && val2 != "" && val3 != "") {
            if (val1 === val2 && val2 === val3) {
                stopwinner(val1);
                return true;
            }
        }
    }
    return false;
}
const checkrunnerup = () => {
    for (conditn of wincondition) {
        let newval1 = boxes[conditn[0]].innerHTML;
        let newval2 = boxes[conditn[1]].innerHTML;
        let newval3 = boxes[conditn[2]].innerHTML;

        if (newval1 != "" && newval2 != "" && newval3 != "" && newval1 != val1 && newval2 != val2 && newval3 != val3) {
            if (newval1 === newval2 && newval2 === newval3) {
                stoprunnerup(newval1);
            }
        }
    }
}

const gameDraw = () => {
    secondwinner.innerText = 'DRAW';
    thirdwinner.innerText = 'DRAW';
    disablebox();
};
const gameDraw2 = () => {
    msgcontainer.innerText = 'Standing';
    firstwinner.innerText = 'DRAW';
    secondwinner.innerText = 'DRAW';
    thirdwinner.innerText = 'DRAW';
    disablebox();
};
boxes.forEach(function (box) {
    box.addEventListener('click', () => {
        if (turn1) {
            box.innerHTML = "X";
            turn1 = false;
            turn2 = true;
            box.disabled = true;
            count++;
            checkwinner();
        }
        else if (turn2) {
            box.innerHTML = "O";
            turn2 = false;
            turn3 = true;
            box.disabled = true;
            count++;
            checkwinner();
        }
        else if (turn3) {
            box.innerHTML = "#";
            turn3 = false;
            turn1 = true;
            box.disabled = true;
            count++;
            checkwinner();
        }


        else if (player1) {
            player1 = false;
            player2 = true;
            box.innerHTML = "O";
            box.disabled = true;
            count++;
            checkrunnerup();
        }
        else if (player2) {
            player2 = false;
            player1 = true;
            box.innerHTML = "#";
            box.disabled = true;
            count++;
            checkrunnerup();

        }
        else if (player3) {
            player3 = false;
            player4 = true;
            box.innerHTML = "#";
            box.disabled = true;
            count++;
            checkrunnerup();

        }
        else if (player4) {
            player4 = false;
            player3 = true;
            box.innerHTML = "X";
            box.disabled = true;
            count++;
            checkrunnerup();

        }
        else if (player5) {
            player5 = false;
            player6 = true;
            box.innerHTML = "X";
            box.disabled = true;
            count++;
            checkrunnerup();


        }
        else if (player6) {
            player6 = false;
            player5 = true;
            box.innerHTML = "O";
            box.disabled = true;
            count++;
            checkrunnerup();

        }
        if (p && q) {
            disablebox();
        }
        if (count === 25 && p && !q) {
            gameDraw();
        }
        if (count === 25 && !p && !q) {
            gameDraw2();
        }

    })
})
const stopwinner = (val1) => {
    if (val1 === "X") {
        msgcontainer.innerText = 'Standing';
        firstwinner.innerText = 'Winner : Player-X';
        turn1 = false;
        turn2 = false;
        turn3 = false;
        player1 = true;
        p = true;

    }
    else if (val1 === "O") {
        msgcontainer.innerText = 'Standing';
        firstwinner.innerText = 'Winner : Player-O';
        turn1 = false;
        turn2 = false;
        turn3 = false;
        player3 = true;
        p = true;


    }
    else {
        msgcontainer.innerText = 'Standing';
        firstwinner.innerText = 'Winner : Player-#';
        turn1 = false;
        turn2 = false;
        turn3 = false;
        player5 = true;
        p = true;

    }

}
const stoprunnerup = (newval1) => {
    if (newval1 === "X") {
        secondwinner.innerText = 'Runner-up : Player-X';
        q = true;

        if (val1 === "X") {
            thirdwinner.innerText = 'Looser : Player-#'
        }
        else {
            thirdwinner.innerText = 'Looser : Player-O'
        }
    }

    else if (newval1 === "O") {
        secondwinner.innerText = 'Runner-up : Player-O';
        q = true;

        if (val1 === "X") {
            thirdwinner.innerText = 'Looser : Player-#'
        }
        else {
            thirdwinner.innerText = 'Looser : Player-X'
        }
    }
    else if (newval1 === "#") {
        secondwinner.innerText = 'Runner-up : Player-#';
        q = true;
        if (val1 === "X") {
            thirdwinner.innerText = 'Looser : Player-O'
        }
        else {
            thirdwinner.innerText = 'Looser : Player-X'
        }
    }
}

const reset = () => {
    turn1 = true;
    turn2 = false;
    turn3 = false;
    count = 0;
    player1 = false;
    player2 = false;
    player3 = false;
    player4 = false;
    player5 = false;
    player6 = false;
    a = false;
    b = false;
    val1 = '';
    val2 = '';
    val3 = '';
    p = false;
    q = false;
    msgcontainer.innerHTML = '';
    firstwinner.innerHTML = '';
    secondwinner.innerHTML = ''
    thirdwinner.innerHTML = '';

    enablebox();

}
let darkmode = ()=>{
wrapper.style.backgroundColor = '#18191A';
wrapper.style.backgroundImage = 'none';
ruletext.style.backgroundImage = 'none';
iconsbg[0].style.backgroundColor = '#18191A';
iconsbg[1].style.backgroundColor = '#18191A';
rulebutton.style.backgroundColor = '#18191A';
ruletext.style.backgroundColor = 'grey';
namm.style.color = '#ffff';
namm.style.textShadow  = 'none';
ruletext.style.color = '#ffff';
close.style.backgroundColor = '#82B1FF';
resetbtn.style.backgroundColor = '#82B1FF';
rematchbtn.style.backgroundColor = '#82B1FF';
for (box of boxes) {
    box.style.backgroundColor = '#82B1FF';
    box.style.color = '#ffff';
   }
}

let lightmode = ()=>{
    wrapper.style.backgroundColor = 'none';
ruletext.style.backgroundImage = 'linear-gradient(#70D6FF,#FF70A6)';
wrapper.style.backgroundImage = 'linear-gradient(#70D6FF,#FF70A6)';
    iconsbg[0].style.backgroundColor = '#7ecfff';
    iconsbg[1].style.backgroundColor = '#7ecfff';
    rulebutton.style.backgroundColor = '#7ecfff'; 
close.style.backgroundColor = '#E9FF70';
    resetbtn.style.backgroundColor = '#E9FF70';
rematchbtn.style.backgroundColor = '#E9FF70';
    namm.style.color = '#e27396';
    namm.style.textShadow  = '#E9FF70 6px 1px 6px';
    for (box of boxes) {
        box.style.backgroundColor = '#E9FF70';
        box.style.color = '#FF9770';
       }
   
}
let ruletextvisible = ()=>{
    ruletext.style.transform = 'scale(1)';
}
let ruletextinvisible = ()=>{
    ruletext.style.transform = 'scale(0)';
}

rematchbtn.addEventListener('click', reset);
resetbtn.addEventListener('click', reset);
darkbutton.addEventListener('click',darkmode);
lightbutton.addEventListener('click',lightmode);
rulebutton.addEventListener('click',ruletextvisible);
close.addEventListener('click', ruletextinvisible);
letsplay.addEventListener('click',secondpageloader);