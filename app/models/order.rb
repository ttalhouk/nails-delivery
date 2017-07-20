class Order < ApplicationRecord
  belongs_to :appointment
  belongs_to :product
end
