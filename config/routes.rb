Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :films, only: [:new, :create, :index, :show]
    resources :people, only: [:new, :create, :index, :show]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
