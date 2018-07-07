class Film < ApplicationRecord
  validates :title, :episode_id, :opening_crawl, :director,
  :producer, :release_date, :species, :starships, :vehicles,
  :characters, :planets, :url, :created, :edited, :created_at,
  :updated_at, presence: true
end
