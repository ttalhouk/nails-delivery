class User < ApplicationRecord
  has_many :products, through: :orders
  has_many :reviews, dependent: :destroy
  has_many :orders, dependent: :destroy
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
