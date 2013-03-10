class Address < ActiveRecord::Base
  attr_accessible :address1, :address2, :city, :country, :phone, :state, :user_id, :zip4, :zip5
  
  belongs_to :user
  has_many :credit_cards


  validate :zip_5_valid

  def zip_5_valid
    unless self.zip5.to_s.length == 5
      errors.add(:zip5, "Zip Code Must Be 5 Digits")
    end
  end
end
