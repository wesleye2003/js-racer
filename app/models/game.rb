class Game < ActiveRecord::Base
  has_many :played_games
  has_many :players, through: :played_games

  # validate :number_of_players
  validates :players, length: { is: 2 }
  validate :unique_players

  def unique_players
    unless self.players.uniq.length == 2
      errors.add(:players, "You cannot play with yourself!!!")
    end
  end

  # def number_of_players
  # 	if self.players.length != 2
  # 		errors.add(:players, "A game must have 2 players!")
  # 	end
  # end
end
