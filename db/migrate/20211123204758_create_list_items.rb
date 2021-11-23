class CreateListItems < ActiveRecord::Migration[6.1]
  def change
    create_table :list_items do |t|
      t.integer :list_id
      t.integer :item_id
      t.integer :quantity
      t.boolean :acquired

      t.timestamps
    end
  end
end
