OneWayAir::Application.routes.draw do

  resources :addresses
  resources :credit_cards
  resources :user_details
  resources :user_sites
  resources :sites
  resources :reservations
  resources :users

  get "sign_in" => 'sessions#new', :as => :sign_in
  post "sessions/create"
  get "sessions/destroy" => 'sessions#destroy', :as => :sign_out

  get "user_sites/new/:id" => 'user_sites#new'

  root to: 'sessions#new'

end
