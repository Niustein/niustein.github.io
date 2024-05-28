const winValues = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
const getButtons = document.getElementsByClassName("btnBoard");

let playerTrack = 'x';
let xValues = [];
let oValues = [];
let turnCount = 1;

function startGame() {
    //console.log(getButtons);
    playerTrack = 'x';
    xValues = [];
    oValues = [];
    turnCount = 1;

    for (let i = 0; i < getButtons.length; i++) {
        document.getElementsByClassName("btnBoard")[i].disabled = false;
        document.getElementsByClassName("btnBoard")[i].innerHTML = "";
    }

    document.getElementById("turnTracker").innerHTML = `It is ${playerTrack.toUpperCase()}'s turn to play`
    document.getElementById("startGame").disabled = true;
}

function btnClick(btnElement) {
    /* Add the clicked square id to the corresponding players move tracker. 
    Change button to display X or O depending on whose turn it was
    Disabled clicked button
    Check for win.
        If win, disable all buttons and change paragraph to announce winner
        If all squares filled, announce draw
     */
    // console.log(btnElement);
    // console.log(playerTrack);

    document.getElementById(btnElement.id).disabled = true;

    if (playerTrack === 'x') {
        xValues.push(parseInt(btnElement.id));
        console.log('x:' + xValues);
        document.getElementById(btnElement.id).innerHTML = "X";
        turnCount++;
    } else {
        oValues.push(parseInt(btnElement.id));
        console.log('o:' + oValues);
        document.getElementById(btnElement.id).innerHTML = "O";
        turnCount++;
    }

    if (checkWin(playerTrack)) {
        document.getElementById("startGame").disabled = false;
        document.getElementById("turnTracker").innerHTML = `${playerTrack.toUpperCase()} has won the game!`;
        // console.log(`${playerTrack} has won!`);

        for (let i = 0; i < getButtons.length; i++) {
            document.getElementsByClassName("btnBoard")[i].disabled = true;
        }

    } else if (turnCount === 10) {
        document.getElementById("startGame").disabled = false;
        document.getElementById("turnTracker").innerHTML = `The game ended in a Draw!`;

        for (let i = 0; i < getButtons.length; i++) {
            document.getElementsByClassName("btnBoard")[i].disabled = true;
        }
    } else {
        playerTrack === "x" ? playerTrack = "o" : playerTrack = "x";
    }
}

function checkWin(player) {
    /* 
    Check if the values in xvalues/ovalues make up one of the lists in winValues 
    Winning boards is a 2D array with the 8 possible winning boards
    If a match is found, that player wins and return true.
    */
    player === 'x' ? playerValue = xValues : playerValue = oValues;


    for (let i = 0; i < winValues.length; i++) {
        let winLine = winValues[i];
        // console.log(winLine);
        // console.log(playerValue);
        let doesItMatch = winLine.every(square => playerValue.includes(square));
        // console.log("does it match?:" + doesItMatch);
        if (doesItMatch) {
            return true;
        }
    }
    return false;
}

function resetBoard() {

}