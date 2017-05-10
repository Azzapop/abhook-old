Rails.application.routes.draw do
  root to: 'portfolio#index'

  get 'contact', to: 'portfolio#contact'
  get 'blog', to: 'portfolio#blog'

  post 'enquiry', to: 'enquiry#create'
end
