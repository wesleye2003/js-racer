var updatePlayerTrack = function(player){
	var newPosition= (player.position*10 + 5).toString()+"%";
	$('#'+player.abbr).css('left', newPosition);
};

var resetPlayerTracks = function(game) {
	updatePlayerTrack(game.player1);
	updatePlayerTrack(game.player2);
}


		