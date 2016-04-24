
	var update_player_position = function(player_object, spaces){
		if(player_object.abbr == 'p1'){
			player_object.move(spaces);
		}else if(player_object.abbr == 'p2'){
			player_object.move(spaces);
		};
	};

	var reset_player_position = function(player_object){
		player_object.reset();
	};
