class HomeController < ApplicationController
  def index
    p user_signed_in?
    p current_user
  end
end
