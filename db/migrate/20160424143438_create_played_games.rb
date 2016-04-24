class CreatePlayedGames < ActiveRecord::Migration
  def change
  	create_table :played_games do |t|
  		t.integer  :player_id, null: false
  		t.ingeger  :game_id, null: false
  		t.string   :winner

  		t.timestamps null: false
  	end
  end
end
