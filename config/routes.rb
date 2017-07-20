Rails.application.routes.draw do
  devise_for :users


  resources :appointments
  resources :brands, only: [:index, :show] do
    resources :products, only: [:index, :show]
  end
end
