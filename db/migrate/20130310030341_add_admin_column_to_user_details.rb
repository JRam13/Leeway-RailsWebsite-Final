class AddAdminColumnToUserDetails < ActiveRecord::Migration
  def change
    add_column :user_details, :admin, :boolean
  end
end
