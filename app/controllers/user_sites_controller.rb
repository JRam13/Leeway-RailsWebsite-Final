class UserSitesController < ApplicationController

  before_filter :authorize_user

  def authorize_user
    if nil == session[:user_id]
      redirect_to sign_in_url, notice: "Please Login!"
    end
  end
  
  # GET /user_sites
  # GET /user_sites.json
  def index
    @user_sites = UserSite.where :user_id => session[:user_id]

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @user_sites }
    end
  end

  # GET /user_sites/1
  # GET /user_sites/1.json
  def show
    @user_site = UserSite.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @user_site }
    end
  end

  # GET /user_sites/new
  # GET /user_sites/new.json
  def new
    @user_site = UserSite.new
    @number = params[:id]
    session[:number] = params[:id]
    @number = params[:id]

    @url = UserSite.find_by_id @number

    @url = Site.find_by_id params[:id]


    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @user_site }
    end
  end

  # GET /user_sites/1/edit
  def edit
    @user_site = UserSite.find(params[:id])
  end

  # POST /user_sites
  # POST /user_sites.json
  def create
    @user_site = UserSite.new(params[:user_site])
    @user_site.user_id = session[:user_id]
    @user_site.site_id = session[:number] 
    @number = session[:number] 

    @user_site.save
    

    session[:number] = nil
    redirect_to user_sites_path
  end

  # PUT /user_sites/1
  # PUT /user_sites/1.json
  def update
    @user_site = UserSite.find(params[:id])
    @user_site.user_id = session[:user_id]

    respond_to do |format|
      if @user_site.update_attributes(params[:user_site])
        format.html { redirect_to @user_site, notice: 'User site was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @user_site.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /user_sites/1
  # DELETE /user_sites/1.json
  def destroy
    @user_site = UserSite.find(params[:id])
    @user_site.destroy

    respond_to do |format|
      format.html { redirect_to user_sites_url }
      format.json { head :no_content }
    end
  end
end
