class Appointment < ApplicationRecord
  belongs_to :user
  has_many :products, through: :orders
end
