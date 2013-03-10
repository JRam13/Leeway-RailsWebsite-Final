class CreditCard < ActiveRecord::Base
  attr_accessible :address_id, :ccv, :month, :number, :user_id, :year
  belongs_to :user
  belongs_to :address

  before_validation :sanitize_card_number

  def sanitize_card_number
    self.number = self.number.to_s.gsub('-','')
  end

  validate :require_visa_card

  def require_visa_card
    unless self.number.to_s.starts_with?("4") && self.number.to_s.length == 16
      errors.add(:credit_card, "Card must be a Visa card")
    end
  end
end
