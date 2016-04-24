
	function Player(name, abbr) {
	  this.name = name;
	  this.abbr = abbr;
		this.position = 1;
	};
	Player.prototype.move = function(amount){return this.position += amount};
	Player.prototype.reset = function(){this.position = 1};
	Player.prototype.won = function(){
		if(this.position >= 10){
			return true;
		}else if(this.position > 10){
			return false;
		};
	};
