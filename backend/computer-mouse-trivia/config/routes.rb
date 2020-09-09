Rails.application.routes.draw do
  resources :scores
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/trivia', to: 'trivia#index'
end
