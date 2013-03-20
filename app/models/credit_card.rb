class CreditCard < ActiveRecord::Base
  attr_accessible :address_id, :ccv, :month, :number, :user_id, :year
  belongs_to :user
  belongs_to :address

  after_create :cleanup

  def cleanup

    if CreditCard.last.number.nil?
      @ud = CreditCard.last
      @ud.number = " "
      @ud.save 
    end

    if CreditCard.last.ccv.nil?
      @ud = CreditCard.last
      @ud.ccv = 000
      @ud.save 
    end

    if CreditCard.last.year.nil?
      @ud = CreditCard.last
      @ud.year = 2000
      @ud.save 
    end
    
  end

end
