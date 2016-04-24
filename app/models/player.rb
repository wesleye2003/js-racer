class Player < ActiveRecord::Base
  has_many: :games

  validates :name, uniqueness: true, presence: true
end
