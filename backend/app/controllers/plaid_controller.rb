require 'plaid'

class PlaidController < ApplicationController
  def create_link_token
    client = PlaidConfiguration.client
    link_token_create_request = Plaid::LinkTokenCreateRequest.new(
      {
        user: { client_user_id: "1" },
        client_name: 'sandbox',
        products: %w[auth transactions],
        country_codes: ['US'],
        language: 'en'
      }
    )
    link_response = client.link_token_create(link_token_create_request)

    render json: {
      link_token: link_response.link_token},
      status: :ok
  rescue Plaid::ApiError => e
    byebug
    # log error
  end

  def exchange_token
    client = PlaidConfiguration.client
    public_token = link_params[:public_token]
    request = Plaid::ItemPublicTokenExchangeRequest.new
    request.public_token = public_token
    response = client.item_public_token_exchange(request)
    access_token = response.access_token

    token = PlaidCredential.first
    PlaidCredential.create!(access_token: access_token) if token.nil?

    render json: {
      message: "access_token is stored in backend."},
      status: :ok
  rescue Plaid::ApiError => e
    byebug
    # log error
  end

  def identity_get
    identity_get_request = Plaid::IdentityGetRequest.new
    identity_get_request.access_token = PlaidCredential.first.access_token
    client = PlaidConfiguration.client
    response = client.identity_get(identity_get_request)

    render json: {
      data: response.accounts},
      status: :ok
  rescue Plaid::ApiError => e
    byebug
    # log error
  end

  def auth_get
    auth_get_request = Plaid::AuthGetRequest.new
    auth_get_request.access_token = PlaidCredential.first.access_token
    client = PlaidConfiguration.client
    response = client.auth_get(auth_get_request)

    render json: {
      data: response.numbers},
      status: :ok
  rescue Plaid::ApiError => e
    byebug
    # log error
  end

  def accounts_get
    accounts_get_request = Plaid::AccountsGetRequest.new
    accounts_get_request.access_token = PlaidCredential.first.access_token
    client = PlaidConfiguration.client
    response = client.accounts_get(accounts_get_request)

    render json: {
      data: response.accounts},
      status: :ok
  rescue Plaid::ApiError => e
    byebug
    # log error
  end

  def transactions_get
    transactions_get_request = Plaid::TransactionsGetRequest.new
    transactions_get_request.access_token = PlaidCredential.first.access_token
    client = PlaidConfiguration.client
    response = client.transactions_get(transactions_get_request)

    render json: {
      data: response.transactions},
      status: :ok
  rescue Plaid::ApiError => e
    byebug
    # log error
  end

  private

  def link_params
    params.require(:plaid).permit(:public_token)
  end
end
