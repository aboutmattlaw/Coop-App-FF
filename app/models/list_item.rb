class ListItem < ApplicationRecord
  belongs_to :list
  belongs_to :item
  has_many :notes, dependent: :destroy
end
