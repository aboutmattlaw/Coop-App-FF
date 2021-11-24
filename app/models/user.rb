class User < ApplicationRecord
    has_many :household_lists
    has_many :lists, through: :household_lists
    has_many :notes
    has_secure_password
end
