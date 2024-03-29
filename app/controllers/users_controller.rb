class UsersController < ApplicationController

  #before_filter :authorize_user, :only => [:show, :edit, :update, :destroy]
  
  def authorize_user
    @user = User.find(params[:id])
    if @user.id != session[:user_id]
      redirect_to root_url, notice: "Nice Try"
    end
  end

  # GET /users
  # GET /users.json
  def index
    @users = User.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @users }
    end
  end

  # GET /users/1
  # GET /users/1.json
  def show
    @user = User.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @user }
    end
  end

  # GET /users/new
  # GET /users/new.json
  def new
    @user = User.new
    # respond_to do |format|
    #   format.html # new.html.erb
    #   format.json { render json: @user }
    # end
    render :users => "signup"
  end

  # GET /users/1/edit
  def edit
    @user = User.find(params[:id])
  end

  # POST /users
  # POST /users.json
  def create
    @user = User.new()
    @user.name = params[:name]
    @user.password = params[:password]
    @user.save

    @address = Address.new()
    @address.address1 = params[:address1]
    @address.address2 = params[:address2]
    @address.city = params[:city]
    @address.state = params[:state]
    @address.zip5 = params[:zip5]
    @address.phone = params[:phone]
    @address.user_id = @user.id
    @address.save

    @userdetail = UserDetail.new()
    @userdetail.fname = params[:fname]
    @userdetail.lname = params[:lname]
    @userdetail.email = params[:email]
    @userdetail.user_id = @user.id
    @userdetail.save
    
    Mailer.confirm().deliver

    respond_to do |format|
      if @user.save
        format.html { redirect_to user_sites_url, notice: "User created" }
        format.json { render json: @user, status: :created, location: @user }
      else
        format.html { render action: "new" }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end

    user = User.last
    session[:user_id] = user.id
    session[:id] = user.id

    @userdes = UserDetail.find_by_user_id(user.id)
    session[:admin] = @userdes.admin
  end

  # PUT /users/1
  # PUT /users/1.json
  def update
    @user = User.find(params[:id])

    respond_to do |format|
      if @user.update_attributes(params[:user])
        format.html { redirect_to @user, notice: 'User was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    @user = User.find(params[:id])
    @user.destroy

    respond_to do |format|
      format.html { redirect_to users_url }
      format.json { head :no_content }
    end
  end
end
