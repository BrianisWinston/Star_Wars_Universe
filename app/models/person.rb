class Person < ApplicationRecord
  validates :name, :birth_year, :eye_color, :gender,
  :hair_color, :height, :mass, :skin_color, :homeworld,
  :films, :species, :starships, :vehicles, :url, :created,
  :edited, :created_at, :updated_at, presence: true
end
