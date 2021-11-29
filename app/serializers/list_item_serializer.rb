class ListItemSerializer < ActiveModel::Serializer
  attributes :id, :list_id, :item_id, :quantity, :acquired
  belongs_to :item
  belongs_to :list
  has_many :notes
end
