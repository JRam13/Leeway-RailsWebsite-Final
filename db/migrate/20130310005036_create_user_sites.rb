class CreateUserSites < ActiveRecord::Migration
  def change
    create_table :user_sites do |t|
      t.integer :user_id
      t.integer :site_id
      t.string :username
      t.string :password

      t.timestamps
    end
  end
end
