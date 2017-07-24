Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  root to: 'home#index'

  devise_for :users
  resources :users, only: [:show] do
    resources :orders
  end

  resources :products, only: [:index, :show]

end
