class HouseholdListSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :list_id
end
