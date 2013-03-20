class CreditCard < ActiveRecord::Base
  attr_accessible :address_id, :ccv, :month, :number, :user_id, :year
  belongs_to :user
  belongs_to :address
  
end
