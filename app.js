const inputs = document.querySelectorAll("input");
const winner = document.getElementById("win");
const pointOne = document.getElementById("p1Score");
const pointTwo = document.getElementById("p2Score");
const playerOne = document.querySelector(".player1");
const playerTwo = document.querySelector(".player2");
const resetButton = document.querySelector(".btnReset");
let player = true;
var oyunBasladi = true;
playerOne.classList.add("sira");


for (const cell of inputs) {
    cell.onclick = tiklama;
}


function tiklama() {
    if (oyunBasladi) {

        if (this.value == "") {
            if (player == true) {
                this.value = ("X");
                listeyeAtama(this.id, "X")
                KazanmaDurumu(player);
                playerOne.classList.remove("sira");
                playerTwo.classList.add("sira");
                player = false;
            }
            else {
                this.value = ("O");
                listeyeAtama(this.id, "O")
                KazanmaDurumu(player);
                playerOne.classList.add("sira");
                playerTwo.classList.remove("sira");
                player = true;
            }
        }
    }
}
var xoArray = [
    [, ,],
    [, ,],
    [, ,],
];

function listeyeAtama(gelen, isaret) {
    if (gelen == "cell1")
        xoArray[0][0] = isaret;
    else if (gelen == "cell2")
        xoArray[0][1] = isaret;
    else if (gelen == "cell3")
        xoArray[0][2] = isaret;
    else if (gelen == "cell4")
        xoArray[1][0] = isaret;
    else if (gelen == "cell5")
        xoArray[1][1] = isaret;
    else if (gelen == "cell6")
        xoArray[1][2] = isaret;
    else if (gelen == "cell7")
        xoArray[2][0] = isaret;
    else if (gelen == "cell8")
        xoArray[2][1] = isaret;
    else if (gelen == "cell9")
        xoArray[2][2] = isaret;
}


function KazanmaDurumu(player) {
    //row
    if ((xoArray[0][0] == "X" && xoArray[0][1] == "X" && xoArray[0][2] == "X") || (xoArray[0][0] == "O" && xoArray[0][1] == "O" && xoArray[0][2] == "O")) {
        PointNumerator(player);
    }
    else if ((xoArray[1][0] == "X" && xoArray[1][1] == "X" && xoArray[1][2] == "X") || (xoArray[1][0] == "O" && xoArray[1][1] == "O" && xoArray[1][2] == "O")) {
        PointNumerator(player);
    }
    else if ((xoArray[2][0] == "X" && xoArray[2][1] == "X" && xoArray[2][2] == "X") || (xoArray[2][0] == "O" && xoArray[2][1] == "O" && xoArray[2][2] == "O")) {
        PointNumerator(player);
    }
    //column
    else if ((xoArray[0][0] == "X" && xoArray[1][0] == "X" && xoArray[2][0] == "X") || (xoArray[0][0] == "O" && xoArray[1][0] == "O" && xoArray[2][0] == "O")) {
        PointNumerator(player);
    }
    else if ((xoArray[0][1] == "X" && xoArray[1][1] == "X" && xoArray[2][1] == "X") || (xoArray[0][1] == "O" && xoArray[1][1] == "O" && xoArray[2][1] == "O")) {
        PointNumerator(player);
    }
    else if ((xoArray[0][2] == "X" && xoArray[1][2] == "X" && xoArray[2][2] == "X") || (xoArray[0][2] == "O" && xoArray[1][2] == "O" && xoArray[2][2] == "O")) {
        PointNumerator(player);
    }
    //x1
    else if ((xoArray[0][0] == "X" && xoArray[1][1] == "X" && xoArray[2][2] == "X") || (xoArray[0][0] == "O" && xoArray[1][1] == "O" && xoArray[2][2] == "O")) {
        PointNumerator(player);
    }
    //x2
    else if ((xoArray[0][2] == "X" && xoArray[1][1] == "X" && xoArray[2][0] == "X") || (xoArray[0][2] == "O" && xoArray[1][1] == "O" && xoArray[2][0] == "O")) {
        PointNumerator(player);
    }

    else
        DrawDurumu();

}
let playerOnePoint = 0;
let playerTwoPoint = 0;

function PointNumerator(player) {
    if (player) {
        winner.innerHTML = "Winner PlayerOne";
        playerOnePoint++;
        pointOne.innerHTML = playerOnePoint;
        oyunBasladi = false;
    }
    else {
        winner.innerHTML = "Winner PlayerTwo";
        playerTwoPoint++;
        pointTwo.innerHTML = playerTwoPoint;
        oyunBasladi = false;
    }
}

function DrawDurumu() {
    if(
        (xoArray[0][0] == "X" || xoArray[0][0] == "O") &&
        (xoArray[0][1] == "X" || xoArray[0][1] == "O") &&
        (xoArray[0][2] == "X" || xoArray[0][2] == "O") &&
        (xoArray[1][0] == "X" || xoArray[1][0] == "O") &&
        (xoArray[1][1] == "X" || xoArray[1][1] == "O") &&
        (xoArray[1][2] == "X" || xoArray[1][2] == "O") &&
        (xoArray[2][0] == "X" || xoArray[2][0] == "O") &&
        (xoArray[2][1] == "X" || xoArray[2][1] == "O") &&
        (xoArray[2][2] == "X" || xoArray[2][2] == "O") 
    )
    {
        winner.innerHTML = "Draw";
        oyunBasladi = false;
    }

}


resetButton.onclick = reset;
function reset() {
    for (const cell of inputs) {
        cell.value = "";

    }

    for (let i = 0; i < xoArray.length; i++) {
        xoArray[i] = [];
    }
    playerTwo.classList.remove("sira");
    playerOne.classList.remove("sira");
    playerOne.classList.add("sira");
    player = true;
    oyunBasladi = true;
    winner.innerHTML = "Let's Start";
}