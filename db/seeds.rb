
if Rails.env.development?
  User.destroy_all
  Site.destroy_all
  UserSite.destroy_all
end

User.create name: "user1", password: "user1"
User.create name: "user2", password: "user2"
User.create name: "user3", password: "user3"
User.create name: "user4", password: "user4"
User.create name: "user5", password: "user5"
Site.create url: "twitter.com", icon: "twitter.com/picture", script: 1
Site.create url: "youtube.com", icon: "youtube.com/picture", script: 1
Site.create url: "friendster.com", icon: "friendster.com/picture", script: 1
Site.create url: "dogster.com", icon: "dogster.com/picture", script: 1
Site.create url: "catfancy.com", icon: "catfancy.com/picture", script: 1
Site.create url: "uchicago.com", icon: "uchiago.com/picture", script: 1
UserSite.create user_id: 1, site_id: 1, username: "test1u", password: "test1p"
UserSite.create user_id: 2, site_id: 2, username: "test2u", password: "test2p"
UserSite.create user_id: 3, site_id: 3, username: "test3u", password: "test3p"
UserSite.create user_id: 4, site_id: 4, username: "test4u", password: "test4p"
UserSite.create user_id: 5, site_id: 5, username: "test5u", password: "test5p"
UserSite.create user_id: 1, site_id: 6, username: "test1u6", password: "test1p6"
UserSite.create user_id: 2, site_id: 6, username: "test2u6", password: "test2p6"
UserSite.create user_id: 3, site_id: 6, username: "test3u6", password: "test3p6"
UserSite.create user_id: 4, site_id: 6, username: "test4u6", password: "test4p6"
UserSite.create user_id: 5, site_id: 6, username: "test5u6", password: "test5p6"
Address.create user_id: 1, address1: "address1"
Address.create user_id: 2, address1: "address2"
Address.create user_id: 3, address1: "address3"
Address.create user_id: 4, address1: "address4"
Address.create user_id: 5, address1: "address5"
CreditCard.create user_id: 1, number: 0001, month: 1, year: 1970, ccv: 999
CreditCard.create user_id: 2, number: 0002, month: 1, year: 1970, ccv: 999
CreditCard.create user_id: 3, number: 0003, month: 1, year: 1970, ccv: 999
CreditCard.create user_id: 4, number: 0004, month: 1, year: 1970, ccv: 999
CreditCard.create user_id: 5, number: 0005, month: 1, year: 1970, ccv: 999
UserDetail.create user_id: 1, fname: "name1", admin: true
UserDetail.create user_id: 2, fname: "name2", admin: false
UserDetail.create user_id: 3, fname: "name3"
UserDetail.create user_id: 4, fname: "name4"
UserDetail.create user_id: 5, fname: "name5"











