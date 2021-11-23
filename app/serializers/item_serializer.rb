class ItemSerializer < ActiveModel::Serializer
  attributes :id, :item_name, :aisle, :category
end
