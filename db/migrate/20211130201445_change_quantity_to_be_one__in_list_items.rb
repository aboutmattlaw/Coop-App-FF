class ChangeQuantityToBeOneInListItems < ActiveRecord::Migration[6.1]
  def change
    change_column :list_items, :quantity, :integer, :default => 1
  end
end
