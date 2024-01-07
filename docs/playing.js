for (i = 0; i<7; i++){
    var button = document.createElement('button');
    button.innerHTML = '<span class="material-symbols-outlined"> arrow_downward</span>';
    button.setAttribute("onclick", "insert("+i+")");
    button.setAttribute("id", (i));

    var buttons = document.querySelector('.buttons');
    buttons.appendChild(button);
}

for (x = 0; x<6; x++){
    for (y = 0; y<7; y++){
        var square = document.createElement('div');
        stringId = x + "" + y
        square.setAttribute("id", (stringId));
        square.setAttribute("class", "square");
        //square.innerHTML = stringId;
        var board = document.querySelector('.board');
        board.appendChild(square);
    }
}

for (y = 0; y<7; y++){
    if (square = document.createElement('div'));
}

function insert(y){
    console.log("hello spalte: " + y);
    playStep(y)
    return y;
}


askLevel();



function checkEnd(){
    var ergebnis = evaluation();
    console.log(ergebnis);
    if (ergebnis!= -1){
        var allButtons = document.querySelector('.buttons');
        allButtons.style.visibility = 'hidden';
        var output = document.querySelector('.output');
        output.innerHTML = ("SPIEL zu ENDE!!!!")
        var output = document.querySelector('.output');
        var werGewinnt = document.createElement('p');
        if (ergebnis== 1){
            werGewinnt.innerHTML = ("unentscheiden")
            output.append(werGewinnt);
        } 
        if (ergebnis== 2){
            werGewinnt.innerHTML = ("gewonnen");
            console.log(winCoordinates);
            output.append(werGewinnt);
            for (let element of winCoordinates) {
                var id =element[0]+ "" + element[1]
                console.log(id)
                var winningStone = document.getElementById(id);
                winningStone.classList.remove('red');
                winningStone.classList.add('winnerRed');  
            }
        } 
        if (ergebnis== 0){
            werGewinnt.innerHTML = ("verloren");
            console.log(winCoordinates);
            output.append(werGewinnt);
            /* setTimeout only for yellow stone, due these have a timedelay of 1 second to appear. */
            setTimeout(function() {
                for (let element of winCoordinates) {
                    var id =element[0]+ "" + element[1]
                    console.log(id)
                    var winningStone = document.getElementById(id);
                    winningStone.classList.remove('yellow');
                    winningStone.classList.add('winnerYellow');  
                }   
            }, 2000);
        } 

    }

}

var buttons = document.querySelector('.buttons');
var board = document.querySelector('.board');



function askLevel(){
    var level = document.querySelector('.level');
    var selectButtonEasy = document.createElement('button');
    selectButtonEasy.id = 'selectButtonEasy';
    var selectButtonMiddle = document.createElement('button');
    selectButtonMiddle.id = 'selectButtonMiddle';
    var selectButtonHard = document.createElement('button');
    selectButtonHard.id = 'selectButtonHard';
    var instruction = document.createElement('div');  
    instruction.id = 'instruction';
    instruction.textContent = 'Wähle dein Level';
    selectButtonEasy.innerHTML = 'leicht';
    selectButtonEasy.addEventListener('click', function() { onButtonClick(1); });   
    selectButtonMiddle.innerHTML = 'mittel';
    selectButtonMiddle.addEventListener('click', function() { onButtonClick(3); });
    selectButtonHard.innerHTML = 'schwer';
    selectButtonHard.addEventListener('click', function() { onButtonClick(5); });
    level.appendChild(instruction);
    level.appendChild(selectButtonEasy);
    level.appendChild(selectButtonMiddle);
    level.appendChild(selectButtonHard);


}


function onButtonClick(deep) {
    console.log("Button Wert:", deep);
    maximaleTiefe = deep;
    console.log("maximaleTiefe:", maximaleTiefe);
    buttons.style.visibility = 'visible';
    board.style.visibility = 'visible'; 
    /* make all buttons invisible     */
    var selectButtonEasy = document.querySelector('#selectButtonEasy');
    selectButtonEasy.style.visibility = 'hidden';
    var selectButtonMiddle = document.querySelector('#selectButtonMiddle');
    selectButtonMiddle.style.visibility = 'hidden';
    var selectButtonHard = document.querySelector('#selectButtonHard');
    selectButtonHard.style.visibility = 'hidden';
    var instruction = document.querySelector('#instruction');
    var info = ''
    /* Ausgabe des Schwierigkeitsgrades*/
    deep===1 ? info = 'Leicht' : (deep===3 ? info = 'Mittel' : info = 'Schwer');
    instruction.textContent = info;
}