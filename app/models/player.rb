class Player < ActiveRecord::Base
  has_many: :played_games
  has_many: :games, through: :played_games

  validates :name, uniqueness: true, presence: true
end
