class UserSite < ActiveRecord::Base
  attr_accessible :password, :site_id, :user_id, :username
  belongs_to :user
  belongs_to :site
end
