Leeway::Application.routes.draw do

 get "addresses/:id/put" => 'addresses#update'
 get "user_details/:id/put" => 'user_details#update'

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
  get "delete_account" => 'sessions#delete_account'

  get "about" => 'statics#about'
  get "contact" => 'statics#contact'

  root to: 'sessions#new'

end
