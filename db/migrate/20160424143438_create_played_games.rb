class CreatePlayedGames < ActiveRecord::Migration
  def change
  	create_table :played_games do |t|
  		t.integer  :player_id, null: false
  		t.integer  :game_id, null: false
  		t.boolean  :won
  		t.string   :time

  		t.timestamps null: false
  	end
  end
end
