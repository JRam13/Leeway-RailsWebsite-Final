class User < ActiveRecord::Base
  attr_accessible :name, :password

  has_secure_password
  #validates_uniqueness_of :name

  has_many :user_sites
  has_many :sites, :through => :user_sites
  has_many :user_details
  has_many :credit_cards
  has_many :addresses

  after_create :cleanup

  def cleanup

    if Address.last.address1.nil?
      @ud = Address.last
      @ud.address1 = " "
      @ud.save 
    end

    if Address.last.address2.nil?
      @ud = Address.last
      @ud.address2 = " "
      @ud.save 
    end

    if Address.last.city.nil?
      @ud = Address.last
      @ud.city = " "
      @ud.save 
    end

    if Address.last.state.nil?
      @ud = Address.last
      @ud.state = " "
      @ud.save 
    end

    if Address.last.zip5.nil?
      @ud = Address.last
      @ud.zip5 = " "
      @ud.save 
    end

    if Address.last.address2.nil?
      @ud = Address.last
      @ud.address2 = " "
      @ud.save 
    end

    if UserDetail.last.fname.nil?
      @ud = UserDetail.last
      @ud.fname = " "
      @ud.save 
    end

    if UserDetail.last.lname.nil?
      @ud = UserDetail.last
      @ud.lname = " "
      @ud.save 
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
