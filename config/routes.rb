Rails.application.routes.draw do
  root to: 'home#index'

  devise_for :users


  resources :appointments
  resources :brands, only: [:index, :show] do
    resources :products, only: [:index, :show]
  end
end
