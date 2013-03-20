class User < ActiveRecord::Base
  attr_accessible :name, :password

  has_secure_password
  validates_uniqueness_of :name
  validates :password, :presence => true

  has_many :user_sites
  has_many :sites, :through => :user_sites
  has_many :user_details
  has_many :credit_cards
  has_many :addresses

end
