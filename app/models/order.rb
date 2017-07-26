class Order < ApplicationRecord
  belongs_to :product
  belongs_to :user

  validates :user_id, :product_id, presence: true
  validates :product_id, uniqueness: { scope: [:user_id, :fulfilled],
    message: "This item is already in your cart.  Go to cart to edit" }
end
