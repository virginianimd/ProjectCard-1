class Card < ApplicationRecord
  belongs_to :list
  belongs_to :user

  validates :position, presence: true
end

