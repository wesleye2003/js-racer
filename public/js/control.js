$(document).ready(function(){
	$('.game-start').on('submit', function(e){
		e.preventDefault();
		$('.game-start').toggleClass('hidden');
		$('.game-players').toggleClass('hidden');
	});

	var game;

	$('.game-players').on('submit', function(e){
		e.preventDefault();
		data = $(this).serialize();
		var link = $(this).attr('action');
		var $request = $.post(link, data);
		$request.done(function(response_data){
			var player1 = new Player(response_data["player_1"], "p1");
			var player2 = new Player(response_data["player_2"], "p2");
			game = new Game(player1, player2);
			$('.game-players').toggleClass('hidden');
			game.bindPlayers();
		});
		$request.fail(function(error_data){
			$('.errors').remove();
			$('.game-players').prepend(error_data.responseText);
		});
	});
});






