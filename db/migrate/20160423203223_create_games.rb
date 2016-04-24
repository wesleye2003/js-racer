class CreateGames < ActiveRecord::Migration
  def change
  	create_table :games do |t|
  		t.string   :unique_url, null: false

  		t.timestamps null: false
  end
end
