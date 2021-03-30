var canva;
var contestantCount, database, quiz, question, contestant;
var form;
var gameState = 0;
function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  game = new Quiz();
  game.getState();
  game.start();
}


function draw(){
  background("pink");

  //game.display();
}
