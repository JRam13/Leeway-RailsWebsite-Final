class AddressesController < ApplicationController
  
  before_filter :authorize_user

  def authorize_user
    if nil == session[:user_id]
      redirect_to sign_in_url, notice: "Please Login!"
    end
  end

  # GET /addresses
  # GET /addresses.json
  def index
    @addresses = Address.where :user_id => session[:user_id]

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @addresses }
    end
  end

  # GET /addresses/1
  # GET /addresses/1.json
  def show
    @address = Address.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @address }
    end
  end

  # GET /addresses/new
  # GET /addresses/new.json
  def new
    @address = Address.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @address }
    end
  end

  # GET /addresses/1/edit
  def edit
    @address = Address.find(params[:id])
  end

  # POST /addresses
  # POST /addresses.json
  def create
    @address = Address.new(params[:address])
    @address.user_id = session[:user_id]

    respond_to do |format|
      if @address.save
        format.html { redirect_to @address, notice: 'Address was successfully created.' }
        format.json { render json: @address, status: :created, location: @address }
      else
        format.html { render action: "new" }
        format.json { render json: @address.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /addresses/1
  # PUT /addresses/1.json
  def update
    @address = Address.find(params[:id])
    #@address.user_id = session[:user_id]

    #@address.phone = params[:phone]
    #@address.save

    Address.update(params[:id], :phone => params[:phone], :address1 => params[:address1],:address2 => params[:address2], :city => params[:city], :state => params[:state], :zip5 => params[:zip5])

    respond_to do |format|
      if @address.update_attributes(params[:address])
        format.html { redirect_to user_path(session[:user_id ]), notice: 'Address was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @address.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /addresses/1
  # DELETE /addresses/1.json
  def destroy
    @address = Address.find(params[:id])
    @address.destroy

    respond_to do |format|
      format.html { redirect_to addresses_url }
      format.json { head :no_content }
    end
  end
end
