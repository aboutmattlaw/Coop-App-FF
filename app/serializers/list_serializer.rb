class ListSerializer < ActiveModel::Serializer
  attributes :id, :list_name, :user_id
  has_many :list_items
  has_many :items, through: :list_items
end
