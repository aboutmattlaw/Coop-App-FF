class List < ApplicationRecord
    has_many :household_lists
    has_many :users, through: :household_lists
    has_many :list_items
    has_many :items, through: :list_items
end
