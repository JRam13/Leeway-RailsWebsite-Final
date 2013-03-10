class User < ActiveRecord::Base
  attr_accessible :name, :password

  has_secure_password
  validates_uniqueness_of :name

  has_many :user_sites
  has_many :sites, :through => :user_sites
  has_many :user_details
  has_many :credit_cards
  has_many :addresses

  after_create :create_user_details

  def create_user_details
  	@u = UserDetail.new
  	@u.user_id = self.id
  	@u.save
  end

end
