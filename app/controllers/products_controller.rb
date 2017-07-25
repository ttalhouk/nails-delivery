class ProductsController < ApplicationController

  def index
    product_list = Product.all
    @products = []
    product_list.each do |product|
      item =  product.attributes
      item[:url] = product.image.url(:medium)
      @products.push(item)
    end

    # render component: "ProductList", props: {products: @products}
  end

  def show
    p 'params: ' + params[:id]
    @product = Product.find(params[:id])
  end
end
