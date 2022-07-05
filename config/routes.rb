Rails.application.routes.draw do
  namespace :api do
    namespace :v1, defaults: { format: :json } do
      get 'messages', to: 'messages#index'
      get 'greeting', to: 'messages#random_greeting'
    end
  end

  root to: 'static#index'

  get '*page', to: 'static#index', constraints: lambda { |req|
                                                  !req.xhr? && req.format.html?
                                                }
end
