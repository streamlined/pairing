class CreatePlaidCredentials < ActiveRecord::Migration[6.1]
  def change
    create_table :plaid_credentials do |t|
      t.string :access_token

      t.timestamps
    end
  end
end
