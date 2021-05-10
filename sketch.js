var database;
var form;
var game;
var player;

var gameState = 0;
var playerCount;


function setup() {
  database = firebase.database();
  createCanvas(500, 500);

  game = new Game()
  game.start()
  game.readState()

}

function draw() {
  background("white");


  drawSprites();

}


