var updatePlayerTrack = function(player){
	var newPosition= (player.position*10 + 5).toString()+"%";
	$('#'+player.abbr).animate({left: newPosition},100);
};

var resetPlayerTracks = function(game) {
	updatePlayerTrack(game.player1);
	updatePlayerTrack(game.player2);
}



