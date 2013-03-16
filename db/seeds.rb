
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
User.create name: "jeff", password: "hockey" 
Site.create url: "amazon.com", icon: "amazon", script: 1
Site.create url: "americanexpress.com", icon: "americanexpress", script: 2
Site.create url: "catster.com", icon: "catster", script: 3
Site.create url: "chase.com", icon: "chase", script: 4
Site.create url: "comed.com", icon: "comed", script: 5
Site.create url: "conedison.com", icon: "conedison", script: 6
Site.create url: "dogster.com", icon: "dogster", script: 7
Site.create url: "facebook.com", icon: "facebook", script: 8
Site.create url: "grubhub.com", icon: "grubhub", script: 9
Site.create url: "intuit.com", icon: "intuit", script: 10
Site.create url: "netsuit.com", icon: "netsuite", script: 11
Site.create url: "office.com", icon: "office", script: 12
Site.create url: "salesforce.com", icon: "salesforce", script: 13
Site.create url: "seamless.com", icon: "seamless", script: 14
Site.create url: "staples.com", icon: "staples", script: 15
Site.create url: "sugarcrm.com", icon: "sugarcrm", script: 16
Site.create url: "twitter.com", icon: "twitter", script: 17
Site.create url: "uber.com", icon: "uber", script: 18
Site.create url: "vmware.com", icon: "vmware", script: 19
Site.create url: "workday.com", icon: "workday", script: 20
Site.create url: "workmarket.com", icon: "workmarket", script: 21
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
UserSite.create user_id: 6, site_id: 1, username: "site1username", password: "site1password"
Address.create user_id: 1, address1: "address1"
Address.create user_id: 2, address1: "address2"
Address.create user_id: 3, address1: "address3"
Address.create user_id: 4, address1: "address4"
Address.create user_id: 5, address1: "address5"
Address.create user_id: 6, address1: "Merchandise Mart", address2: "222 W Merchandise Mart Plaza", city: "Chicago", state: "IL", zip5: 60654, zip4: 0000, country: "USA", phone: 1234567890
CreditCard.create user_id: 1, number: 0001, month: 1, year: 1970, ccv: 999
CreditCard.create user_id: 2, number: 0002, month: 1, year: 1970, ccv: 999
CreditCard.create user_id: 3, number: 0003, month: 1, year: 1970, ccv: 999
CreditCard.create user_id: 4, number: 0004, month: 1, year: 1970, ccv: 999
CreditCard.create user_id: 5, number: 0005, month: 1, year: 1970, ccv: 999
CreditCard.create user_id: 6, number: 0006000600060006, month: 1, year: 1970, ccv: 999
UserDetail.create user_id: 1, fname: "name1", admin: true
UserDetail.create user_id: 2, fname: "name2", admin: false
UserDetail.create user_id: 3, fname: "name3"
UserDetail.create user_id: 4, fname: "name4"
UserDetail.create user_id: 5, fname: "name5"
UserDetail.create user_id: 6, fname: "Jeff", lname: "Cohen", email: "jeffcohen@cs.uchicago.edu"