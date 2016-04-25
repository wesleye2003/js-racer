function Player(name, abbr) {
  this.name = name;
  this.abbr = abbr;
	this.position = 0;
};
Player.prototype.move = function(){this.position += 1};
Player.prototype.reset = function(){this.position = 0};
Player.prototype.won = function(){
	if(this.position >= 9){
		return true;
	}else if(this.position > 9){
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
	this.player.move();
	updatePlayerTrack(this.player);
};

Game.prototype.bindPlayers = function() {
	$(document).keyup(function(e) {
		e.preventDefault();
		if (e.which === 113) {
			this.advancePlayer(this.player1);
		}else if (e.which === 112){
			this.advancePlayer(this.player2);
		};
	});
};
Game.prototype.play = function(){
	var winner;
	if(this.player1.won() == true) {
		winner = this.player1;
	} else if (this.player2.won() === true) {
		winner = this.player2;
	};

	if(winner) {
		this.restart();
		resetPlayerTracks(this);
		alert(winner.name + " wins!!!!!");
	};
};