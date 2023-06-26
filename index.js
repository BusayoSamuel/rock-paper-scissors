var paper = "./assets/images/paper.png";
var rock = "./assets/images/rock.png";
var scissors = "./assets/images/scissors.png";

choices = [paper, rock, scissors];

var player1 = choices[Math.floor(Math.random() * 3)];
var player2 = choices[Math.floor(Math.random() * 3)];

document.querySelector(".player-1").setAttribute("src", player1);
document.querySelector(".player-2").setAttribute("src", player2);

if(player2 === whoWon(player1, player2)){
    document.querySelector("h2").textContent = "Player 2 won!"; 
}else if(player1 === whoWon(player1, player2)){
    document.querySelector("h2").innerHTML = "Player 1 won!"; 
}else{
    document.querySelector("h2").innerHTML = "Draw!"; 
}



function whoWon(player1, player2){
    if((player1 === scissors && player2 === rock) || 
    (player1 === paper && player2 === scissors) || 
    (player1 === rock && player2 === paper)){
        return player2;
    }else if((player2 === scissors && player1 === rock) || 
    (player2 === paper && player1 === scissors) || 
    (player2 === rock && player1 === paper)){
        return player1;
    }
}

