function addUser(){
player1_username = document.getElementById("player1_name_input").value;
player2_username = document.getElementById("player2_name_input").value;

localStorage.setItem = ("player1_name_input",player1_username);
localStorage.setItem = ("player2_name_input",player2_username);

window.location="quiz_game_page.html";
}
