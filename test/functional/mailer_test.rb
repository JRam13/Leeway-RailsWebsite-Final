require 'test_helper'

class MailerTest < ActionMailer::TestCase
  test "confirm" do
    mail = Mailer.confirm
    assert_equal "Confirm", mail.subject
    assert_equal ["to@example.org"], mail.to
    assert_equal ["from@example.com"], mail.from
    assert_match "Hi", mail.body.encoded
  end

  test "canceled" do
    mail = Mailer.canceled
    assert_equal "Canceled", mail.subject
    assert_equal ["to@example.org"], mail.to
    assert_equal ["from@example.com"], mail.from
    assert_match "Hi", mail.body.encoded
  end

end
