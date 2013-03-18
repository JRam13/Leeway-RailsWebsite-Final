class StaticsController < ApplicationController

  def about
    respond_to do |format|
      format.html # about.html.erb
      format.json { render json: @sites }
    end
  end

  def contact
    respond_to do |format|
      format.html # contact.html.erb
      format.json { render json: @sites }
    end
  end

end
