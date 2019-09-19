class Board < ApplicationRecord
  belongs_to :user
  has_many :boardmembers
  has_many :lists
  scope :title, -> (title) { where title: title }

end
