require 'test_helper'

class UserSitesControllerTest < ActionController::TestCase
  setup do
    @user_site = user_sites(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:user_sites)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create user_site" do
    assert_difference('UserSite.count') do
      post :create, user_site: { password: @user_site.password, site_id: @user_site.site_id, user_id: @user_site.user_id, username: @user_site.username }
    end

    assert_redirected_to user_site_path(assigns(:user_site))
  end

  test "should show user_site" do
    get :show, id: @user_site
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @user_site
    assert_response :success
  end

  test "should update user_site" do
    put :update, id: @user_site, user_site: { password: @user_site.password, site_id: @user_site.site_id, user_id: @user_site.user_id, username: @user_site.username }
    assert_redirected_to user_site_path(assigns(:user_site))
  end

  test "should destroy user_site" do
    assert_difference('UserSite.count', -1) do
      delete :destroy, id: @user_site
    end

    assert_redirected_to user_sites_path
  end
end
