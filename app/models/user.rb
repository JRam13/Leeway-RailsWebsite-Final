class User < ActiveRecord::Base
  attr_accessible :name, :password

  has_secure_password
  validates_uniqueness_of :name
  #validates :name, :uniqueness => true

  has_many :user_sites
  has_many :sites, :through => :user_sites
  has_many :user_details
  has_many :credit_cards
  has_many :addresses

  #validate :blah
 
  def blah
    if !User.find_by_name("jeff").blank?
      errors.add(:name, "Must be Unique!")
    end
  end

  # def create_full_user
  # 	@u = UserDetail.new
  # 	@u.user_id = self.id
  # 	@u.save

  #   @a = Address.new
  #   @a.user_id = self.id
  #   @a.address1 = " "
  #   @a.address2 = " "
  #   @a.city = " "
  #   @a.state = " "
  #   @a.zip5 = 00000
  #   @a.zip4 = 0000
  #   @a.phone = 0000000000
  #   @a.save    
  # end

end
