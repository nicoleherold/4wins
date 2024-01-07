var maximaleTiefe = 1;

var winCoordinates = [[],[],[],[]];

var u = '-';

var gameBoard = [[u, u, u, u, u, u, u],
        [u, u, u, u, u, u, u],
        [u, u, u, u, u, u, u],
        [u, u, u, u, u, u, u],
        [u, u, u, u, u, u, u],
        [u, u, u, u, u, u, u]];

var values= [[0.03, 0.04, 0.05, 0.07, 0.05, 0.04, 0.03],
        [0.04, 0.06, 0.08, 0.10, 0.08, 0.06, 0.04],
        [0.05, 0.08, 0.11, 0.13, 0.11, 0.08, 0.05],
        [0.05, 0.08, 0.11, 0.13, 0.11, 0.08, 0.05],
        [0.04, 0.06, 0.08, 0.10, 0.08, 0.06, 0.04],
        [0.03, 0.04, 0.05, 0.07, 0.05, 0.04, 0.03]];



var minimumY = 0;

function output() {
    for (var x = 0; x < 6; x++) {
        for (var y = 0; y < 7; y++) {
            //process.stdout.write(board[x][y]);

        }
    }
    console.log("");
}

function bewertung(){
    value = 1
    for (var x = 0; x < 6; x++) {
        for (var y = 0; y < 7; y++) {
            if (gameBoard[x][y] == 0){
                value = value - values[x][y]
            }
            if (gameBoard[x][y] == 2){
                value = value + values[x][y]
            }
        }
    }
    return value
}
    
function evaluation(){
   //check ob die senkrechten gleich sind
    for (var x = 0; x < 3; x++) {
        for (var y = 0; y < 7; y++) {
            if (gameBoard[x+0][y]==0 && gameBoard[x+1][y]==0 && gameBoard[x+2][y]==0 && gameBoard[x+3][y]==0){
                winCoordinates = [[x,y],[x+1,y],[x+2,y],[x+3,y]];
                return 0
            }
            if (gameBoard[x+0][y]==2 && gameBoard[x+1][y]==2 && gameBoard[x+2][y]==2 && gameBoard[x+3][y]==2){
                winCoordinates =[[x,y],[x+1,y],[x+2,y],[x+3,y]];
                return 2
            }
        }
    }
    //check ob die waagrechten gleich sind
    for (var x = 0; x < 6; x++) {
        for (var y = 0; y < 4; y++) {
            if (gameBoard[x][y+0]==0 && gameBoard[x][y+1]==0 && gameBoard[x][y+2]==0 && gameBoard[x][y+3]==0){
                winCoordinates =[[x,y],[x,y+1],[x,y+2],[x,y+3]];
                return 0
            }
            if (gameBoard[x][y+0]==2 && gameBoard[x][y+1]==2 && gameBoard[x][y+2]==2 && gameBoard[x][y+3]==2){
                winCoordinates =[[x,y],[x,y+1],[x,y+2],[x,y+3]];
                return 2
            }
        }
    }
    //check nur nach rechts unten gehenden 4er möglichkeiten. kann nur in y=0, 1, 2, 3 sein
    for (var x = 0; x < 3; x++) {
        for (var y = 0; y < 4; y++) {
            if (gameBoard[x+0][y+0]==0 && gameBoard[x+1][y+1]==0 && gameBoard[x+2][y+2]==0 && gameBoard[x+3][y+3]==0){
                winCoordinates =[[x,y],[x+1,y+1],[x+2,y+2],[x+3,y+3]];
                return 0
            }
            if (gameBoard[x+0][y+0]==2 && gameBoard[x+1][y+1]==2 && gameBoard[x+2][y+2]==2 && gameBoard[x+3][y+3]==2){
                winCoordinates =[[x,y],[x+1,y+1],[x+2,y+2],[x+3,y+3]];
                return 2
            }
        }
    }
    //check nur nach rechts oben gehenden 4er möglichkeiten. kann nur in y=0, 1, 2, 3 sein
    for (var x = 3; x < 6; x++) {
        for (var y = 0; y < 4; y++) {
            if (gameBoard[x-0][y+0]==0 && gameBoard[x-1][y+1]==0 && gameBoard[x-2][y+2]==0 && gameBoard[x-3][y+3]==0){
                winCoordinates =[[x,y],[x-1,y+1],[x-2,y+2],[x-3,y+3]];
                return 0
            }
            if (gameBoard[x-0][y+0]==2 && gameBoard[x-1][y+1]==2 && gameBoard[x-2][y+2]==2 && gameBoard[x-3][y+3]==2){
                winCoordinates =[[x,y],[x-1,y+1],[x-2,y+2],[x-3,y+3]];
                return 2
            }
        }
    }  
    
   // check, ob schon alle felder ausgefüllt sind. Man braucht nur obere zeile anschauen. Wenn nein, dann return -1

   for (var y = 0; y < 7; y++) {
        if (gameBoard[0][y]==u){
        return -1 
   }
}
return 1        
}



//setzten des steines auf eine spalte, spalte y, spieler s
function zug(y, s){
    for (var x = 5; x >=0; x--) {
        if (gameBoard[x][y]== u){
            gameBoard[x][y] = s
            break;

        }
    }
}

// stein an der obersten stelle in der vorgegebenen Spalte wieder rausnehmen
function zugRueckgaengig(y){
    for (var x = 0; x < 6; x++) {
        if (gameBoard[x][y] != u){
            gameBoard[x][y] = u;
            break;

        }
    }
}

function max(restTiefe, alpha, beta){
    if (evaluation() != -1){
        return evaluation();
    }
    if (restTiefe == 0){
        return bewertung();
    }
    for (var y = 0; y < 7; y++) { 
        if (gameBoard[0][y] == u){
            zug(y, 2);
            value = min(restTiefe - 1, alpha, beta)
            if (value > alpha){
                alpha = value;
            }
            zugRueckgaengig(y);
            if (alpha >= beta){
                return beta;
            }
        }

    }
    return alpha;
}


function min(restTiefe, alpha, beta){
    if (evaluation() != -1){
        return evaluation();
    }
    if (restTiefe == 0){
        return bewertung();
    }
    for (var y = 0; y < 7; y++) { 
        if (gameBoard[0][y] == u){
            zug(y, 0);
            value = max(restTiefe - 1, alpha, beta)
            if (value < beta){
                beta = value;
            }
            zugRueckgaengig(y);
            if (beta <= alpha){
                return alpha;
            }
        }

    }
    return beta;
}


function minWo(){
    console.log("evaluation", evaluation())
    if (evaluation() != -1){
        return evaluation();
    }
    alpha = -999;
    beta = 999;
    for (var y = 0; y < 7; y++) { 
        if (gameBoard[0][y] == u){
            zug(y, 0);
            value = max(maximaleTiefe, alpha, beta);
            if (value < beta){
                beta = value
                minimumY = y
                console.log(minimumY)
                
            }
            zugRueckgaengig(y);
        }
    }
    return beta;
}

function play(){
    while(evaluation() == -1){
        //output();
        //CHANGE!!!!!!
        //y = prompt("Dein y: ");

        //var y = document.querySelector("#spalte").value;
        console.log(y)
        if (gameBoard[0][y] != u){
            continue;
        }
        zug(y, 2);
        output();
        if (evaluation() != -1){
            break;
        }
        minWo();
        console.log("Mein y: " + minimumY);
        zug(window.minimumY, 0);
        if (evaluation() != -1){
            output();
            break;
        }
        console.log("Spiel beendet");
        if (evaluation() == 2){
            console.log("Du hast gewonnen");
            console.log("winCor: ", winCoordinates);
        }
        if (evaluation() == 0){
            console.log("Du hast verloren");
            console.log("winCor: ", winCoordinates);
        }
        if (evaluation() == 1){
            console.log("unentschieden");
        }
    }

}

//play()


function zugColor(y, s){
    for (var x = 5; x >=0; x--) {
        if (gameBoard[x][y]== u){
            gameBoard[x][y] = s
            console.log(x, y)
            var targetSquare = document.getElementById(x + '' + y);
            console.log(targetSquare)
            targetSquare.setAttribute("class", "red");
            break;
        }
    }
}

function zugCompi(y, s){
    for (var x = 5; x >=0; x--) {
        if (gameBoard[x][y]== u){
            gameBoard[x][y] = s
            console.log(x, y)
            var targetSquareCompi = document.getElementById(x + '' + y);
            console.log(targetSquareCompi)

            /* 1 seconds for computerplayer to set stone */
            setTimeout(function() {
            targetSquareCompi.setAttribute("class", "yellow");
            }, 1000); 
            
            break;

        }
    }
}


function playStep(spalte) {
  
    //if (evaluation() == -1){
    var y= spalte;
   // }
   console.log(gameBoard)
    if (gameBoard[0][y] == u){
        zugColor(spalte, 2)
        //zug(y, 2)
        console.log(gameBoard);
        checkEnd();
        
        if (evaluation()==-1){
            minWo();
            console.log("Mein y: " + minimumY);
            console.log(gameBoard);
            console.log(minimumY)
            zugCompi(minimumY, 0); 

        }

       
       

    }
    hideButtons();
    checkEnd();
    


}
function hideButtons(){
for (let y = 0; y < 7; y++) {
    if (gameBoard[0][y] != u){
        const buttonToHide = document.getElementById('' + y).style.visibility = 'hidden';
        buttonToHide.visibility = 'hidden';
        console.log(buttonToHide)
    }
}
}

/*
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
*/

