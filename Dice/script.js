function myRefresh(){
  var random1=Math.random();
  player1=random1*6;
  player1=Math.ceil(player1);
  var random2=Math.random();
  player2=random2*6;
  player2=Math.ceil(player2);

var img1="images/dice"+player1+".png";
var img2="images/dice"+player2+".png";
if(player1>player2)
{
  document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if (player2>player1) {
  document.querySelector("h1").innerHTML="Player 2 Wins";
}

else
document.querySelector("h1").innerHTML="Draw";

document.querySelectorAll("img")[0].setAttribute("src",img1);
document.querySelectorAll("img")[1].setAttribute("src",img2);


}
