class Product < ApplicationRecord
  has_many :orders
  has_many :reviews

  has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.svg"
  validates_attachment :image,
  content_type: { content_type: ["image/jpeg", "image/gif", "image/png"] }
  validates :stock, numericality: {only_integer: true, greater_than: 0}
  validates :price, numericality: {greater_than: 0.0}
  validates :name, :description, presence: true
  validates :name, uniqueness: true

end
