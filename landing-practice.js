const wordArray = ["lorem ipsum", "abcdefg", "2346", "diamond", "correct"];
let wordArrayBase = wordArray.length;
let maxClick = 0;

function sayHi() {
    maxClick++;
    let appendText = "<3"

    let newDiv = document.createElement('div');
    newDiv.innerHTML = wordArray[maxClick - 1];

    document.getElementsByClassName("testchange")[0].appendChild(newDiv);

    console.log("<3 here too");
    if (maxClick == wordArray.length) {
        document.getElementById("sayHi").disabled = true;
    }
}

function addWord() {
    /*let upperCaps = document.getElementById("upperSplit").value;
    upperCaps = upperCaps.replaceAll(" ", "").toUpperCase();
    document.getElementsByClassName("rage")[0].innerHTML = upperCaps; */

    let addWord = document.getElementById("addWord").value;

    if (addWord.trim().length > 0) {
        wordArray.push(addWord)
        document.getElementsByClassName("rage")[0].innerHTML = `${addWord} has been added to the list`;
        document.getElementById("sayHi").disabled = false;
    } else {
        document.getElementsByClassName("rage")[0].innerHTML = `Input Box is empty (or is only spaces), no words added`;
    }

}

function reset() {
    maxClick = 0;
    document.getElementsByClassName("testchange")[0].innerHTML = "";
    document.getElementById("sayHi").disabled = false;
    document.getElementsByClassName("rage")[0].innerHTML = "";
    document.getElementsByName("addText")[0].value = "";
    console.log(wordArrayBase);

    while (wordArray.length > 5) {
        wordArray.pop();
    }
}