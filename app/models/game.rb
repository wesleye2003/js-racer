class Game < ActiveRecord::Base
  has_many: :played_games
  has_many: :players, through: :played_games

  validate :number_of_players, on: :create

  def number_of_players
  	if players.count != 2
  		errors.add(:players, "A game must have 2 players!")
  	end
  end
end
