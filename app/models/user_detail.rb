class UserDetail < ActiveRecord::Base
  attr_accessible :email, :fname, :lname, :user_id, :admin

  belongs_to :user

after_create :cleanup

  def cleanup

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

end
