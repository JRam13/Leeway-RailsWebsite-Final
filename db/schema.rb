# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20130316222539) do

  create_table "addresses", :force => true do |t|
    t.integer  "user_id"
    t.string   "address1"
    t.string   "address2"
    t.string   "city"
    t.string   "state"
    t.string   "country"
    t.integer  "zip5"
    t.integer  "zip4"
    t.integer  "phone"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "credit_cards", :force => true do |t|
    t.integer  "user_id"
    t.integer  "number"
    t.integer  "month"
    t.integer  "year"
    t.integer  "ccv"
    t.integer  "address_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "sites", :force => true do |t|
    t.string   "url"
    t.string   "icon"
    t.integer  "script"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
    t.string   "kind"
  end

  create_table "user_details", :force => true do |t|
    t.integer  "user_id"
    t.string   "fname"
    t.string   "lname"
    t.string   "email"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
    t.boolean  "admin"
  end

  create_table "user_sites", :force => true do |t|
    t.integer  "user_id"
    t.integer  "site_id"
    t.string   "username"
    t.string   "password"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "users", :force => true do |t|
    t.string   "name"
    t.string   "password_digest"
    t.datetime "created_at",      :null => false
    t.datetime "updated_at",      :null => false
  end

end
