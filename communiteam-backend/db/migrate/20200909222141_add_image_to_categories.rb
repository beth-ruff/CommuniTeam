class AddImageToCategories < ActiveRecord::Migration[6.0]
  def change
    add_column :categories, :image, :binary
  end
end
