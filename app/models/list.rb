class List < ApplicationRecord
    has_many :household_lists
    has_many :list_items
end
