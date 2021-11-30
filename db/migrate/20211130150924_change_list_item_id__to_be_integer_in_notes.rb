class ChangeListItemIdToBeIntegerInNotes < ActiveRecord::Migration[6.1]
  def change
    change_column :notes, :list_item_id, 'integer USING list_item_id::integer'
  end
end


