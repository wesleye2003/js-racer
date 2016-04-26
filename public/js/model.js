function Player(name, abbr) {
  this.name = name;
  this.abbr = abbr;
	this.position = 0;
};
Player.prototype.move = function(){this.position += 1};
Player.prototype.reset = function(){this.position = 0};
Player.prototype.won = function(){
	if(this.position >= 10){
		return true;
	}else if(this.position < 10){
		return false;
	};
};

function Game(player1, player2){
	this.player1 = player1;
	this.player2 = player2;
};

Game.prototype.restart = function() {
	this.player1.reset();
	this.player2.reset();
};

Game.prototype.advancePlayer = function(player) {
	// this is equivalent to Game.protoype
	// this.player equivalent to Game.protype.player
	//player.move(), or updatePlayerTrack(player)
	player.move();
	updatePlayerTrack(player);
};

Game.prototype.bindPlayers = function() {
	var game = this;
	$(document).keyup(function(e) {
		e.preventDefault();
		console.log("Keyup Event", e)
		if (e.which === 81) {
			game.advancePlayer(game.player1);
			game.play(game.player1);
		}else if (e.which === 80){
			game.advancePlayer(game.player2);
			game.play(game.player2)
		};
	});
};
Game.prototype.play = function(player){
	if(player.won()) {
		alert(player.name + " wins!!!!!");
		this.restart();
		resetPlayerTracks(this);
	};
};
