class ChangeAcquiredToBeFals < ActiveRecord::Migration[6.1]
  def change
    change_column :list_items, :acquired, :boolean, :default => false
  end
end
