Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  root to: 'home#index'

  devise_for :users
  resources :users, only: [:show] do
    resources :orders, except: [:create, :new]
  end
  resources :orders, only: [:create]
  resources :products, only: [:index, :show] do
    resources :reviews, only: [:index, :create]
  end

end
