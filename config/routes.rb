Rails.application.routes.draw do

  root 'static#index'

  namespace :v1, defaults: { format: 'json' } do
    get 'messages', to: 'messages#index'
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
