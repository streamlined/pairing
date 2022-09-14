require 'plaid'

class PlaidConfiguration
  # the class variable @@instance holds
  # a reference to the singleton object.
  @@instance = PlaidConfiguration.new

  # the class #instance method returns the
  # single reference to the object instance.
  def self.client
    configuration = Plaid::Configuration.new
    configuration.server_index = Plaid::Configuration::Environment["sandbox"]
    configuration.api_key["PLAID-CLIENT-ID"] = "5f6d22fc166e6d001244a2ea"
    configuration.api_key["PLAID-SECRET"] = "945e088970d081343b3223ba4cf162"
    api_client = Plaid::ApiClient.new(configuration)

    @@instance = Plaid::PlaidApi.new(api_client)
    @@instance
  end

  private_class_method :new

  private
  def self.configure
    configuration = Plaid::Configuration.new
    configuration.server_index = Plaid::Configuration::Environment["sandbox"]
    configuration.api_key["PLAID-CLIENT-ID"] = "5f6d22fc166e6d001244a2ea"
    configuration.api_key["PLAID-SECRET"] = "945e088970d081343b3223ba4cf162"

    api_client = Plaid::ApiClient.new(
      configuration
    )

    @@instance = Plaid::PlaidApi.new(api_client)
  end
end
