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


// Um reload Link zu sezten
var reloadLink = document.querySelector('.reload');
var reload = document.createElement('a');
reload.innerHTML = '<span class="material-symbols-outlined">arrow_left_alt</span>Back';
reload.setAttribute('href', 'javascript:location.reload()');
reloadLink.appendChild(reload);

// Level auswählen
askLevel();



function checkEnd(){
    var ergebnis = evaluation();
    console.log(ergebnis);
    if (ergebnis!= -1){
        setTimeout(function() {
            var allButtons = document.querySelector('.buttons');
            allButtons.style.visibility = 'hidden';
            var output = document.querySelector('.output');
            output.innerHTML = ("Das Spiel ist zu Ende")
            var output = document.querySelector('.output');
            var werGewinnt = document.createElement('p');
            if (ergebnis== 1){
                werGewinnt.innerHTML = ("<b>unentscheiden</b>")
                output.append(werGewinnt);
            } 
            if (ergebnis== 2){
                
                    werGewinnt.innerHTML = ("<b>Du hast gewonnen</b>");
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
                setTimeout(function() {
                    werGewinnt.innerHTML = ("<b>Du hast verloren</b>");
                    console.log(winCoordinates);
                    output.append(werGewinnt);
                    /* setTimeout only for yellow stone, due these have a timedelay of 1 second to appear. */
                    for (let element of winCoordinates) {
                        var id =element[0]+ "" + element[1]
                        console.log(id)
                        var winningStone = document.getElementById(id);
                        winningStone.classList.remove('yellow');
                        winningStone.classList.add('winnerYellow');  
                    }   
                }, 1000);
            } 
        }, 1000); 
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
    instruction.innerHTML = '<p id="headline">Spiele 4 gewinnt!</p> <p id="subline"> Wähle dein Level</p>';
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
    selectButtonEasy.remove();
    var selectButtonMiddle = document.querySelector('#selectButtonMiddle');
    selectButtonMiddle.remove();
    var selectButtonHard = document.querySelector('#selectButtonHard');
    selectButtonHard.remove();
    var instruction = document.querySelector('#instruction');
    var info = ''
    /* Ausgabe des Schwierigkeitsgrades*/
    deep===1 ? info = '<b>Level: </b>Leicht' : (deep===3 ? info = '<b>Level: </b>Mittel' : info = '<b>Level: </b>Schwer');
    instruction.innerHTML = info;
    reloadLink.style.display = 'block';
}