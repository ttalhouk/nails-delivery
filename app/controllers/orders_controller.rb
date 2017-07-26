class OrdersController < ApplicationController
  before_action :authenticate_user!

  def create
    @user = current_user
    p params
    @product = Product.find(params[:product])
    @order = @user.orders.build({product: @product})

    respond_to do |format|
      if @order.save
        flash[:success] = "Item added to cart."
        format.html {redirect_to products_path}
        format.json {
           render json: {order: @order}, status: 201
        }
      else
        error_messages = @order.errors.messages.values.join('. ')
        flash[:error] = 'Could not process request. ' + error_messages + '.'
        format.html {redirect_to products_path}
        format.json {
           render json: {messages: flash[:error]}, status: 400
        }
      end
    end
  end

  private


end
