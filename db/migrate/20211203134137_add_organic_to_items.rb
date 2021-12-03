class AddOrganicToItems < ActiveRecord::Migration[6.1]
  def change
    add_column :items, :organic, :string
    add_column :items, :origin, :string
    add_column :items, :price, :string
    add_column :items, :cost, :integer
  end
end
