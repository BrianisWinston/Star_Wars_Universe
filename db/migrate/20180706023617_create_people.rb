class CreatePeople < ActiveRecord::Migration[5.2]
  def change
    create_table :people do |t|
      t.string :name, null: false
      t.string :birth_year, null: false
      t.string :eye_color, null: false
      t.string :gender, null: false
      t.string :hair_color, null: false
      t.string :height, null: false
      t.string :mass, null: false
      t.string :skin_color, null: false
      t.string :homeworld, null: false
      t.text :films, array: true, default: []
      t.text :species, array: true, default: []
      t.text :starships, array: true, default: []
      t.text :vehicles, array: true, default: []
      t.string :url, null: false
      t.string :created, null: false
      t.string :edited, null: false

      t.timestamps
    end
  end
end
