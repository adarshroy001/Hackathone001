let boxes = document.querySelectorAll(".box");
let rematchbtn = document.querySelector('.rematch');
let resetbtn = document.querySelector('.reset');
let msgcontainer = document.querySelector('.stdheading');
let mainmsgcontainer = document.querySelector('.standing');
let firstwinner = document.querySelector('#result1');
let secondwinner = document.querySelector('#result2');
let thirdwinner = document.querySelector('#result3');
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
    [12, 16, 20]
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
rematchbtn.addEventListener('click', reset);
resetbtn.addEventListener('click', reset);
