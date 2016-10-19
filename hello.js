// this (400, 400) controls the game's height and width
var game = new Phaser.Game(600, 600, Phaser.AUTO, 'gameDiv');
var game_state = {};

// Creates a new 'main' state that wil contain the game
game_state.main = function() {};
game_state.main.prototype = {

  preload: function() {
    
  },
  create: function() {
    
  },
  update: function() {
    
  },
};

// Add and start the 'main' state to start the game
game.state.add('main', game_state.main);
game.state.start('main');
