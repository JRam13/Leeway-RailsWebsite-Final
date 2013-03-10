require 'test_helper'

class ReservationMailerTest < ActionMailer::TestCase
  test "confirm" do
    mail = ReservationMailer.confirm
    assert_equal "Confirm", mail.subject
    assert_equal ["to@example.org"], mail.to
    assert_equal ["from@example.com"], mail.from
    assert_match "Hi", mail.body.encoded
  end

end
