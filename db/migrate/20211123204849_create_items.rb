class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :item_name
      t.integer :aisle
      t.string :category

      t.timestamps
    end
  end
end
