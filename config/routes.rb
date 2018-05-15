Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:new, :create]
    resource :session, only: [:new, :create, :destroy]
    resources :posts, only: [:create, :index, :show, :destroy] do
      resource :like, only: [:create, :destroy]
      resources :comments, only: [:index]
    end
    resources :comments, only: [:create, :index, :show, :update, :destroy]
  end

  root "static_pages#root"
end
