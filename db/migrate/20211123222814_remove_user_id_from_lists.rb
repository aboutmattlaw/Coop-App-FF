class RemoveUserIdFromLists < ActiveRecord::Migration[6.1]
  def change
    remove_column :lists, :user_id, :integer
  end
end
