class ReviewsController < ApplicationController
  before_action :authenticate_user!
  before_action :get_product

  def index
    @reviews = @product.reviews
  end

  def create
    p review_params
    @review = @product.review.build(review_params, user: current_user)
    p @review
  end

  private

  def get_product
    @product = Product.find(params[:product_id])
  end

  def review_params
    params.require(:review).permit(:rating, :body)
  end
end
