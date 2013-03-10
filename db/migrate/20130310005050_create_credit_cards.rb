class CreateCreditCards < ActiveRecord::Migration
  def change
    create_table :credit_cards do |t|
      t.integer :user_id
      t.integer :number
      t.integer :month
      t.integer :year
      t.integer :ccv
      t.integer :address_id

      t.timestamps
    end
  end
end
