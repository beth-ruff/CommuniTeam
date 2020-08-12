class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.string :name
      t.string :description
      t.date :date
      t.time :time
      t.integer :category_id

      t.timestamps
    end
  end
end
