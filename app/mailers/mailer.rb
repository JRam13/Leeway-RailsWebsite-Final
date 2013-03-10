class Mailer < ActionMailer::Base
  default from: "paul@paulroales.com"

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.mailer.confirm.subject
  #
  def confirm
    @greeting = "Hi"

    mail to: "proales@proales.com"
  end

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.mailer.canceled.subject
  #
  def canceled
    @greeting = "Hi"

    mail to: "proales@proales.com"
  end
end
