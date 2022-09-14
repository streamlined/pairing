Rails.application.routes.draw do

  scope :plaid, controller: :plaid do
    post :create_link_token
    post :exchange_token
    # GET
    get :identity_get
    get :auth_get
    get :accounts_get
    get :transactions_get
  end

end
