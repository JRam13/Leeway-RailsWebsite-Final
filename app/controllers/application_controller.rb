class ApplicationController < ActionController::Base
  	protect_from_forgery

	def do_for_all
	  @userdetail = UserDetail.find(params[:id])
	end

end
