class PlayedGame < ActiveRecord::Base
  belongs_to :player
  belongs_to :game
end

# !(x && y)
