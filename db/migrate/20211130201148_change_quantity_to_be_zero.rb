class ChangeQuantityToBeZero < ActiveRecord::Migration[6.1]
  def change
    change_column :list_items, :quantity, :integer, :default => 0
  end
end
