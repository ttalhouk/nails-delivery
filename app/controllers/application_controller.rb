class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  protected
  def authenticate_user!
    if user_signed_in?
      super
    else
      respond_to do |format|
        format.html {redirect_to new_user_session_path, notice: 'Must be logged in'}
        format.json {

          render json: {messages:'Must be logged.', redirect: "#{new_user_session_path}"}, status: 400
        }
      end
       ## if you want render 404 page
       ## render :file => File.join(Rails.root, 'public/404'), :formats => [:html], :status => 404, :layout => false
    end
  end
end
