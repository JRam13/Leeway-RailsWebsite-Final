class UserDetail < ActiveRecord::Base
  attr_accessible :email, :fname, :lname, :user_id, :admin

  belongs_to :user
end
