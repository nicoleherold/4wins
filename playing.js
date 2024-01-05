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
            werGewinnt.innerHTML = ("gewonnen")
            output.append(werGewinnt);
        } 
        if (ergebnis== 0){
            werGewinnt.innerHTML = ("verloren")
            output.append(werGewinnt);
        } 

    }

}



/*
function getInput(){
    var input = document.querySelector('.input');
    var form = document.createElement('form');
    var label = document.createElement('label');
    var inputfield = document.createElement('input');
    inputfield.innerHTML = "welche spalte: ";
    inputfield.setAttribute("type", "number");
    input.appendChild(inputfield);



}
*/