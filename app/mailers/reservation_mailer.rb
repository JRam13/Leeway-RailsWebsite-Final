class ReservationMailer < ActionMailer::Base
  default from: "proales@proales.com"

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.reservation_mailer.confirm.subject
  #
  def confirm(reservation)
    @the_reservation = reservation

    mail to: "paul@paulroales.com"
  end
end
