class CreateFilms < ActiveRecord::Migration[5.2]
  def change
    create_table :films do |t|
      t.string :title, null: false
      t.integer :episode_id, null: false
      t.string :opening_crawl, null: false
      t.string :director, null: false
      t.string :producer, null: false
      t.date :release_date, null: false
      t.text :species, array: true, default: []
      t.text :starships, array: true, default: []
      t.text :vehicles, array: true, default: []
      t.text :characters, array: true, default: []
      t.text :planets, array: true, default: []
      t.string :url, null: false
      t.string :created, null: false
      t.string :edited, null: false


      t.timestamps
    end
  end
end
