class CreateNotes < ActiveRecord::Migration[6.1]
  def change
    create_table :notes do |t|
      t.integer :user_id
      t.string :list_item_id
      t.text :note_text

      t.timestamps
    end
  end
end
