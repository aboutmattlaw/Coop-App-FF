class Note < ApplicationRecord
    belongs_to :user
    belongs_to :list_item_id
end
