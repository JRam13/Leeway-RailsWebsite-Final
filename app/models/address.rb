class Address < ActiveRecord::Base
  attr_accessible :address1, :address2, :city, :country, :phone, :state, :user_id, :zip4, :zip5
  
  belongs_to :user
  has_many :credit_cards

  validate :zip_5_valid

  validates :address1, :presence => true

  def all
    validates :number, :presence => true
  end


  def zip_5_valid
    unless self.zip5.to_s.length == 5
      errors.add(:zip5, "Zip Code Must Be 5 Digits")
    end
  end


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

  end
end
