var game, form, player;
var gameState = 0;
var playerCount;
var database;
var position;

var allPlayers = [];

var car1, car1IMG;
var car2, car2IMG;
var car3, car3IMG;
var car4, car4IMG;

var track, trackIMG;

var ground;

var backgroundIMG;

var cars = [];

var abbc;


function preload() {
    car1IMG = loadImage("/images/car1.png");
    car2IMG = loadImage("/images/car2.png");
    car3IMG = loadImage("/images/car3.png");
    car4IMG = loadImage("/images/car4.png");

    ground = loadImage("/images/ground.png");

    backgroundIMG = loadImage("/images/bg.jpg");
    
    trackIMG = loadImage("/images/track.jpg");
}


function setup(){
    database = firebase.database();
    createCanvas(displayWidth - 10, displayHeight - 90);
    game = new Game();
    game.getState();
    game.start();

};


function draw(){
    if(playerCount === 4) {
        game.update(1);
    }

    if(gameState === 1) {
        clear();
        game.play();
    }
}

