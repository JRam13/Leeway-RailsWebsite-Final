class Site < ActiveRecord::Base
  attr_accessible :icon, :script, :url
  has_many :user_sites
  has_many :users, :through => :user_sites
end
