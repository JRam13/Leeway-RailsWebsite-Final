class CreateUserDetails < ActiveRecord::Migration
  def change
    create_table :user_details do |t|
      t.integer :user_id
      t.string :fname
      t.string :lname
      t.string :email

      t.timestamps
    end
  end
end
