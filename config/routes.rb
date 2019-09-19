Rails.application.routes.draw do
  resources :boards do
  resources :boardmembers
  resources :lists do
  resources :cards
  end
end
  devise_for :users
  root to: "home#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
