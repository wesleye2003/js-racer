$(document).ready(function(){
	$('.game-start').on('submit', function(e){
		e.preventDefault();
		var link = $(this).attr('action');
		var $request = $.get(link);
		$request.done(function(){
			$('.game-start').toggleClass('hidden');
			$('.game-players').toggleClass('hidden');
		});
	});

	var player1
	var player2
	$('.game-players').on('submit', function(e){
		e.preventDefault();
		data = $(this).serialize();
		var link = $(this).attr('action');
		var $request = $.post(link, data);
		$request.done(function(response_data){
			player1 = new Player(response_data["player_1"], "p1");
			player2 = new Player(response_data["player_2"], "p2");
			$('.game-start').toggleClass('hidden');
			$('.game-players').toggleClass('hidden');
		})
	});
		
	$(this).keypress(function(e) {
		if (e.which == 113) {
			e.preventDefault();
			update_player_position(player1,1);
			var newPosition = (player1.position*10).toString()+"%";
			$('#p1').css('left', newPosition);
			if(player1.won() == true){
				reset_player_position(player1);
				$('#p1').css('left', '5%');
				reset_player_position(player2);
				$('#p2').css('left', '5%');
				alert(player1.name+" wins!!!!!!");
			};
		}else if (e.which == 112){
			e.preventDefault();
			update_player_position(player2,1);
			var newPosition = (player2.position*10).toString()+"%";
			$('#p2').css('left', newPosition);
			if(player2.won() == true){
				reset_player_position(player1);
				$('#p1').css('left', '5%');
				reset_player_position(player2);
				$('#p2').css('left', '5%');
				alert(player2.name+" wins!!!!!!");
			};
		};
	});

});